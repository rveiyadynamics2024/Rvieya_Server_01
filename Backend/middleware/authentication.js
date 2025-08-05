const User = require('../models/User');
const OTP = require('../models/otp');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Generate OTP
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// Register function that frontend expects
exports.register = async (req, res) => {
  console.log('Registration request received:', req.body);
  
  // Map frontend field names to backend field names
  const { userId, name, email, contact, password } = req.body;
  
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ 
        success: false,
        message: "User already exists with this email" 
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save user
    const user = new User({ 
      userid: userId,      // Map userId to userid
      username: name,      // Map name to username
      email, 
      contact, 
      password: hashedPassword 
    });
    
    await user.save();
    console.log('User saved successfully');

    // Generate OTPs for verification
    const emailOTP = generateOTP();
    const phoneOTP = generateOTP();

    // Save OTPs
    await OTP.create({ email, otp: emailOTP });
    await OTP.create({ phone: contact, otp: phoneOTP });

    console.log(`📧 Email OTP for ${email}: ${emailOTP}`);
    console.log(`📱 Phone OTP for ${contact}: ${phoneOTP}`);

    res.status(201).json({ 
      success: true,
      message: "Registration successful! Please verify your email and phone.",
      userId: user._id
    });

  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ 
      success: false,
      message: "Registration failed", 
      error: error.message 
    });
  }
};

// Verify OTP function that frontend expects
exports.verifyOTP = async (req, res) => {
  const { identifier, otp, type } = req.body;
  
  try {
    const query = type === 'email' ? { email: identifier } : { phone: identifier };
    
    const existingOtp = await OTP.findOne({ ...query, otp });
    
    if (!existingOtp) {
      return res.status(400).json({ 
        success: false,
        message: "Invalid or expired OTP" 
      });
    }

    // Mark OTP as used
    await OTP.deleteOne({ ...query, otp });

    // Update user verification status
    if (type === 'email') {
      await User.updateOne({ email: identifier }, { emailVerified: true });
    } else {
      await User.updateOne({ contact: identifier }, { phoneVerified: true });
    }

    res.status(200).json({ 
      success: true,
      message: `${type} verified successfully` 
    });
    
  } catch (error) {
    console.error('OTP verification error:', error);
    res.status(500).json({ 
      success: false,
      message: "OTP verification failed", 
      error: error.message 
    });
  }
};

// Login function
exports.login = async (req, res) => {
  const { userId, password } = req.body;
  
  try {
    // Find user by userid or email
    const user = await User.findOne({
      $or: [{ userid: userId }, { email: userId }]
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      { 
        userId: user._id,
        email: user.email 
      },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '7d' }
    );

    res.status(200).json({
      success: true,
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        userId: user.userid,
        name: user.username,
        email: user.email,
        contact: user.contact
      }
    });
    
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      message: 'Login failed',
      error: error.message
    });
  }
};

// Resend OTP function
exports.resendOTP = async (req, res) => {
  const { identifier, type } = req.body;
  
  try {
    const newOTP = generateOTP();
    
    if (type === 'email') {
      await OTP.create({ email: identifier, otp: newOTP });
      console.log(`📧 New Email OTP for ${identifier}: ${newOTP}`);
    } else {
      await OTP.create({ phone: identifier, otp: newOTP });
      console.log(`📱 New Phone OTP for ${identifier}: ${newOTP}`);
    }

    res.status(200).json({
      success: true,
      message: 'OTP sent successfully'
    });
    
  } catch (error) {
    console.error('Resend OTP error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to resend OTP',
      error: error.message
    });
  }
};

// Verify user exists (for course registration)
exports.verifyUser = async (req, res) => {
  try {
    const { email, phone, name } = req.body;

    const user = await User.findOne({
      email: email,
      contact: phone
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found. Please register first.'
      });
    }

    res.status(200).json({
      success: true,
      message: 'User verified successfully',
      user: {
        id: user._id,
        userId: user.userid,
        name: user.username,
        email: user.email,
        contact: user.contact
      }
    });
    
  } catch (error) {
    console.error('User verification error:', error);
    res.status(500).json({
      success: false,
      message: 'Verification failed',
      error: error.message
    });
  }
};
