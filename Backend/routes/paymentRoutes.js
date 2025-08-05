
const express = require('express');
const router = express.Router();
const {
    initiatePurchase,
    createOrder,
    verifyPayment,
    createPaymentLink,
    handleWebhook,      // <-- Import new function
    getPurchaseStatus   // <-- Import new function
} = require('../controllers/PaymentController');

// ... your existing routes ...
router.post('/purchase/initiate', initiatePurchase);
router.post('/payment/create-order', createOrder);
router.post('/payment/create-link', createPaymentLink);
router.post('/payment/verify', verifyPayment);

// --- NEW: Route for Razorpay to send webhook events to ---
router.post('/payment/webhook', handleWebhook);

// --- NEW: Route for the frontend to poll for payment status ---
router.get('/purchase/status/:purchaseId', getPurchaseStatus);

module.exports = router;
