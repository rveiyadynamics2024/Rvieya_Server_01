// server/routes/testimonials.js
const express = require('express');
const router = express.Router();
const Testimonial = require('../models/Testimonial');

// GET all testimonials
router.get('/', async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ date: -1 });
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a testimonial
router.post('/', async (req, res) => {
  const { name, feedback } = req.body;
  if (!name || !feedback) return res.status(400).json({ message: 'All fields are required' });

  const newTestimonial = new Testimonial({ name, feedback });
  try {
    const saved = await newTestimonial.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
