const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderId: {
        type: String,
        required: true,
        unique: true
    },
    checkoutRequestID: {
        type: String,
        required: true,
        unique: true
    },
    customer: {
        name: { type: String, required: true },
        phone: { type: String, required: true },
        email: { type: String },
        address: { type: String, required: true },
        notes: { type: String }
    },
    items: [{
        productId: { type: String, required: true },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
        image: { type: String }
    }],
    payment: {
        method: { type: String, default: 'mpesa' },
        amount: { type: Number, required: true },
        status: { 
            type: String, 
            enum: ['pending', 'paid', 'failed', 'cancelled'],
            default: 'pending'
        },
        mpesaReceiptNumber: { type: String },
        transactionDate: { type: Date },
        phoneNumber: { type: String },
        errorMessage: { type: String }
    },
    delivery: {
        fee: { type: Number, default: 200 },
        address: { type: String, required: true },
        status: {
            type: String,
            enum: ['pending', 'dispatched', 'delivered', 'cancelled'],
            default: 'pending'
        },
        estimatedDate: { type: Date }
    },
    status: {
        type: String,
        enum: ['pending_payment', 'paid', 'processing', 'shipped', 'delivered', 'cancelled'],
        default: 'pending_payment'
    }
}, {
    timestamps: true
});

// Index for faster queries
orderSchema.index({ checkoutRequestID: 1 });
orderSchema.index({ 'customer.phone': 1 });
orderSchema.index({ createdAt: -1 });

module.exports = mongoose.model('Order', orderSchema);