const mongoose = require('mongoose');
require('dotenv').config(); // Ensures your .env variables are loaded

const connectDB = async () => {
  try {
    // This line reads the connection string from your .env file
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB Atlas connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;