// const dotenv = require('dotenv');
// // Load environment variables FIRST, before any other imports
// dotenv.config();

// const express = require('express');
// const cors = require('cors');
// const connectDB = require('./config/db');
// const authroutes = require('./routes/authroutes');
// // ... other imports
// const paymentRoutes = require('./routes/paymentRoutes'); // Import payment routes
// // Add this line with your other route imports
// const feedbackRoutes = require('./routes/feedbackroutess');
// connectDB();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/auth', authroutes);
// // ... other middleware
// app.use('/api', paymentRoutes); // Use the payment routes
// app.use('/api/feedback', feedbackRoutes);
// // Root route
// app.get('/', (req, res) => {
//   res.send('API is working!');
// });


// // Start server
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
const dotenv = require('dotenv');
// Load environment variables FIRST, before any other imports
dotenv.config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authroutes = require('./routes/authroutes');
const paymentRoutes = require('./routes/paymentRoutes');
// FIX: Corrected the typo in the filename from 'feedbackroutess' to 'feedbackRoutes'
const feedbackRoutes = require('./routes/FeedbackRoutes');

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authroutes);
app.use('/api', paymentRoutes);
app.use('/api/feedback', feedbackRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('API is working!');
});


// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
