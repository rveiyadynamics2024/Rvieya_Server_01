
const nodemailer = require('nodemailer');

console.log('Nodemailer config loading...');
console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '***hidden***' : 'NOT SET');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  debug: true, // Enable debug output
  logger: true // Log to console
});

// Verify transporter configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Email configuration error:', error.message);
    if (error.message.includes('Missing credentials')) {
      console.error('Please check your EMAIL_USER and EMAIL_PASS in .env file');
    }
  } else {
    console.log('✅ Email server is ready to send messages');
  }
});

module.exports = transporter;