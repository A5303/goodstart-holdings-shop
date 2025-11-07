const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// In-memory storage (replace with database in production)
let orders = {};
let payments = {};

// M-Pesa credentials (use environment variables in production)
const MPESA_CONSUMER_KEY = 'your_consumer_key';
const MPESA_CONSUMER_SECRET = 'your_consumer_secret';
const MPESA_SHORTCODE = '174379';
const MPESA_PASSKEY = 'your_passkey';

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        service: 'GoodStart Backend API'
    });
});

// Get M-Pesa access token
async function getMpesaAccessToken() {
    try {
        const auth = Buffer.from(`${MPESA_CONSUMER_KEY}:${MPESA_CONSUMER_SECRET}`).toString('base64');
        
        const response = await axios.get(
            'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
            {
                headers: {
                    'Authorization': `Basic ${auth}`
                }
            }
        );
        
        return response.data.access_token;
    } catch (error) {
        console.error('Error getting access token:', error.response?.data || error.message);
        throw error;
    }
}

// Create order endpoint
app.post('/api/orders', (req, res) => {
    try {
        const { orderData } = req.body;
        const orderId = 'GS-' + Date.now().toString().slice(-6);
        
        // Create order
        orders[orderId] = {
            ...orderData,
            id: orderId,
            status: 'pending',
            paymentStatus: 'pending',
            createdAt: new Date().toISOString(),
            checkoutRequestID: null
        };
        
        console.log('💾 Order stored:', orderId);
        
        res.json({
            success: true,
            orderId: orderId,
            message: 'Order created successfully'
        });
        
    } catch (error) {
        console.error('Order creation error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to create order'
        });
    }
});

// M-Pesa STK Push endpoint
app.post('/api/mpesa/stkpush', async (req, res) => {
    try {
        const { phone, amount, orderId } = req.body;
        
        console.log('Initiating M-Pesa payment:', { phone, amount, orderId });
        
        // Validate input
        if (!phone || !amount || !orderId) {
            return res.status(400).json({
                success: false,
                error: 'Missing required fields: phone, amount, orderId'
            });
        }

        // Format phone number
        let formattedPhone = phone.replace(/\s+/g, '');
        if (formattedPhone.startsWith('0')) {
            formattedPhone = '254' + formattedPhone.substring(1);
        } else if (formattedPhone.startsWith('+254')) {
            formattedPhone = formattedPhone.substring(1);
        }

        if (formattedPhone.length !== 12) {
            return res.status(400).json({
                success: false,
                error: 'Invalid phone number format'
            });
        }

        const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, -3);
        const password = Buffer.from(MPESA_SHORTCODE + MPESA_PASSKEY + timestamp).toString('base64');

        const stkPushPayload = {
            BusinessShortCode: MPESA_SHORTCODE,
            Password: password,
            Timestamp: timestamp,
            TransactionType: 'CustomerPayBillOnline',
            Amount: Math.round(amount),
            PartyA: formattedPhone,
            PartyB: MPESA_SHORTCODE,
            PhoneNumber: formattedPhone,
            CallBackURL: `https://your-domain.com/api/mpesa/callback`, // Update with your domain
            AccountReference: orderId,
            TransactionDesc: 'GoodStart Holdings Purchase'
        };

        console.log('STK Push payload:', stkPushPayload);

        const accessToken = await getMpesaAccessToken();
        
        const response = await axios.post(
            'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
            stkPushPayload,
            {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        console.log('M-Pesa response:', response.data);

        // Store checkout request ID
        if (orders[orderId]) {
            orders[orderId].checkoutRequestID = response.data.CheckoutRequestID;
            orders[orderId].paymentStatus = 'initiated';
        }

        res.json({
            success: true,
            ...response.data
        });

    } catch (error) {
        console.error('STK Push error:', error.response?.data || error.message);
        
        res.status(500).json({
            success: false,
            error: 'Failed to initiate M-Pesa payment',
            details: error.response?.data || error.message
        });
    }
});

// M-Pesa callback endpoint
app.post('/api/mpesa/callback', (req, res) => {
    try {
        const callbackData = req.body;
        console.log('📱 M-Pesa Callback Received:', JSON.stringify(callbackData, null, 2));

        const stkCallback = callbackData.Body.stkCallback;
        const resultCode = stkCallback.ResultCode;
        const checkoutRequestID = stkCallback.CheckoutRequestID;
        
        // Find order by checkoutRequestID
        const orderId = Object.keys(orders).find(id => 
            orders[id]?.checkoutRequestID === checkoutRequestID
        );

        if (orderId) {
            if (resultCode === 0) {
                // Payment successful
                orders[orderId].paymentStatus = 'completed';
                orders[orderId].status = 'confirmed';
                orders[orderId].mpesaReceipt = stkCallback.CallbackMetadata?.Item?.find(
                    item => item.Name === 'MpesaReceiptNumber'
                )?.Value;
                
                console.log(`✅ Payment Successful for order ${orderId}! Receipt: ${orders[orderId].mpesaReceipt}`);
            } else {
                // Payment failed
                orders[orderId].paymentStatus = 'failed';
                orders[orderId].errorMessage = stkCallback.ResultDesc;
                
                console.log(`❌ Payment Failed for order ${orderId}: ${stkCallback.ResultDesc}`);
            }
        }

        res.status(200).json({ ResultCode: 0, ResultDesc: "Success" });
    } catch (error) {
        console.error('Callback processing error:', error);
        res.status(200).json({ ResultCode: 1, ResultDesc: "Failed" });
    }
});

// Order status endpoint
app.get('/api/orders/:orderId/status', (req, res) => {
    const { orderId } = req.params;
    const order = orders[orderId];
    
    if (!order) {
        return res.status(404).json({ error: 'Order not found' });
    }
    
    res.json({
        orderId,
        status: order.status,
        paymentStatus: order.paymentStatus,
        mpesaReceipt: order.mpesaReceipt,
        total: order.total,
        customer: order.customer
    });
});

// Get all orders (for admin)
app.get('/api/orders', (req, res) => {
    res.json(orders);
});

// Test endpoint for simulation
app.post('/api/mpesa/simulate-payment', (req, res) => {
    const { orderId, success = true } = req.body;
    
    if (orders[orderId]) {
        if (success) {
            orders[orderId].paymentStatus = 'completed';
            orders[orderId].status = 'confirmed';
            orders[orderId].mpesaReceipt = 'MPE' + Date.now().toString().slice(-6);
            console.log(`✅ Simulated Payment Success for order ${orderId}`);
        } else {
            orders[orderId].paymentStatus = 'failed';
            console.log(`❌ Simulated Payment Failed for order ${orderId}`);
        }
        
        res.json({ success: true, order: orders[orderId] });
    } else {
        res.status(404).json({ success: false, error: 'Order not found' });
    }
});

app.listen(PORT, () => {
    console.log(` GoodStart Backend Server running on http://localhost:${PORT}`);
    console.log(` M-Pesa API: Ready`);
    console.log(` Order System: Ready`);
});