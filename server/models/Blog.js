const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String, // Full description
        required: true,
    },
    shortDescription: {
        type: String, // Optional: for blog card list preview
    },
    image: {
        type: String,
        default: '/images/default.png', // fallback image
    },
    date: {
        type: String, // e.g., "27/07/2025"
        required: true,
    },
    presentedBy: {
        type: String, // Company or person presenting
    },
    introDesc: {
        type: String, // Introduction text for blog detail
    },
    learnPoints: {
        type: [String], // Array of things user will learn
    },
    speakers: {
        type: [String], // Array of speaker names & roles
    },
    eventDetails: {
        type: [String], // Array of event details like time, platform, fee
    },
    attendPoints: {
        type: [String], // Why user should attend
    },
    registrationText: {
        type: String, // Optional registration message
    },
    buttonText: {
        type: String, // Optional button text
        default: 'Register Now →',
    },
}, { timestamps: true });

module.exports = mongoose.model('Blog', BlogSchema);
