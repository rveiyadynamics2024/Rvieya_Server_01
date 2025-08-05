const Feedback = require('../models/feedback');

// Controller to handle new feedback submissions
exports.submitFeedback = async (req, res) => {
    const { name, feedback } = req.body;

    // Basic validation
    if (!name || !feedback) {
        return res.status(400).json({ success: false, message: 'Name and feedback are required.' });
    }

    try {
        const newFeedback = new Feedback({
            name,
            feedback
        });

        await newFeedback.save();

        res.status(201).json({
            success: true,
            message: 'Thank you for your feedback!'
        });

    } catch (error) {
        console.error("Error submitting feedback:", error);
        res.status(500).json({ success: false, message: 'Server error, please try again later.' });
    }
};
