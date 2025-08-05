const express = require('express');
const { 
    register, 
    verifyOTPAndSaveUser,
    sendPurchaseOtp,      // <-- Import new function
    verifyPurchaseOtp ,
    login  ,
    sendPhoneOtp,      // <-- Import new function
    verifyPhoneOtp   // <-- Import new function
} = require('../controllers/authcontroller');

const router = express.Router();

// --- Existing Routes for full user registration ---
router.post('/register', register);
router.post('/verify', verifyOTPAndSaveUser);
router.post('/login', login);

// --- NEW Routes for course purchase OTP verification ---
router.post('/send-purchase-otp', sendPurchaseOtp);
router.post('/verify-purchase-otp', verifyPurchaseOtp);
router.post('/send-phone-otp', sendPhoneOtp);
router.post('/verify-phone-otp', verifyPhoneOtp);

module.exports = router;