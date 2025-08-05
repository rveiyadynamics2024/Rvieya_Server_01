//purchasedcourse.js
const mongoose = require('mongoose');

const purchasedCourseSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    courseName: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    purchased: {
        type: Boolean,
        default: false, // Default to false until payment is successful
    },
    purchaseDate: {
        type: Date,
        default: Date.now,
    },
    // We will store the Razorpay order ID to link the purchase to the payment
    razorpayOrderId: {
        type: String,
    }
});

const PurchasedCourse = mongoose.model('PurchasedCourse', purchasedCourseSchema);

module.exports = PurchasedCourse;
