
const express = require('express');
const router = express.Router();
const { submitFeedback } = require('../controllers/feedbackcontroller');

// This line connects the POST request on '/api/feedback/submit' 
// to the submitFeedback function in your controller.
router.post('/submit', submitFeedback);

// This line is crucial - it makes the router available to your server.js file.
module.exports = router;