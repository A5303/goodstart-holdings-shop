// mpesa-api.js - Real M-Pesa STK Push Integration
class MpesaAPI {
    constructor() {
        this.consumerKey = 'YOUR_CONSUMER_KEY'; // Get from Safaricom
        this.consumerSecret = 'YOUR_CONSUMER_SECRET'; // Get from Safaricom
        this.businessShortCode = '9164467'; // Your Till Number
        this.passkey = 'YOUR_PASSKEY'; // Get from Safaricom
        this.callbackURL = 'https://yourdomain.com/callback'; // Your server endpoint
        
        this.accessToken = null;
        this.tokenExpiry = null;
    }

    // Generate Access Token
    async generateAccessToken() {
        try {
            const auth = btoa(`${this.consumerKey}:${this.consumerSecret}`);
            const response = await fetch('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
                method: 'GET',
                headers: {
                    'Authorization': `Basic ${auth}`
                }
            });

            const data = await response.json();
            this.accessToken = data.access_token;
            this.tokenExpiry = Date.now() + (data.expires_in * 1000);
            
            return this.accessToken;
        } catch (error) {
            console.error('Error generating access token:', error);
            throw error;
        }
    }

    // Get valid access token (renew if expired)
    async getValidAccessToken() {
        if (!this.accessToken || Date.now() >= this.tokenExpiry) {
            await this.generateAccessToken();
        }
        return this.accessToken;
    }

    // Generate Password for STK Push
    generatePassword(timestamp) {
        const data = this.businessShortCode + this.passkey + timestamp;
        return btoa(data);
    }

    // Generate Timestamp
    generateTimestamp() {
        return new Date().toISOString().replace(/[^0-9]/g, '').slice(0, -3);
    }

    // STK Push Request - This sends the actual prompt to user's phone
    async initiateSTKPush(phoneNumber, amount, orderId) {
        try {
            const accessToken = await this.getValidAccessToken();
            const timestamp = this.generateTimestamp();
            const password = this.generatePassword(timestamp);

            // Format phone number (2547...)
            const formattedPhone = this.formatPhoneNumber(phoneNumber);

            const stkPayload = {
                BusinessShortCode: this.businessShortCode,
                Password: password,
                Timestamp: timestamp,
                TransactionType: "CustomerPayBillOnline",
                Amount: amount,
                PartyA: formattedPhone,
                PartyB: this.businessShortCode,
                PhoneNumber: formattedPhone,
                CallBackURL: this.callbackURL,
                AccountReference: "GoodStart",
                TransactionDesc: `Order ${orderId}`,
            };

            const response = await fetch('https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(stkPayload)
            });

            const result = await response.json();
            
            if (result.ResponseCode === "0") {
                return {
                    success: true,
                    checkoutRequestID: result.CheckoutRequestID,
                    customerMessage: result.CustomerMessage
                };
            } else {
                return {
                    success: false,
                    error: result.errorMessage || 'Payment initiation failed'
                };
            }
        } catch (error) {
            console.error('STK Push Error:', error);
            return {
                success: false,
                error: 'Network error. Please try again.'
            };
        }
    }

    // Check Payment Status
    async checkPaymentStatus(checkoutRequestID) {
        try {
            const accessToken = await this.getValidAccessToken();
            const timestamp = this.generateTimestamp();
            const password = this.generatePassword(timestamp);

            const payload = {
                BusinessShortCode: this.businessShortCode,
                Password: password,
                Timestamp: timestamp,
                CheckoutRequestID: checkoutRequestID
            };

            const response = await fetch('https://sandbox.safaricom.co.ke/mpesa/stkpushquery/v1/query', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            const result = await response.json();
            return result;
        } catch (error) {
            console.error('Payment status check error:', error);
            throw error;
        }
    }

    // Format phone number to 254 format
    formatPhoneNumber(phone) {
        // Remove any non-digit characters
        let cleaned = phone.replace(/\D/g, '');
        
        // Convert to 254 format
        if (cleaned.startsWith('0')) {
            return '254' + cleaned.substring(1);
        } else if (cleaned.startsWith('+254')) {
            return cleaned.substring(1);
        } else if (cleaned.startsWith('254')) {
            return cleaned;
        } else if (cleaned.length === 9) {
            return '254' + cleaned;
        }
        
        return cleaned;
    }
}

// Create global M-Pesa instance
const mpesa = new MpesaAPI();