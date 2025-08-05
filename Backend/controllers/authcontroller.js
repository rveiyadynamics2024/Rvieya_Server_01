const User = require('../models/User');
const OTP = require('../models/otp');
const transporter = require('../config/nodemailer');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const twilio = require('twilio');
const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
exports.sendPurchaseOtp = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: "Email is required." });
    }

    try {
        console.log(`Sending purchase OTP to: ${email}`);
        const otp = Math.floor(100000 + Math.random() * 900000).toString();

        // Use your existing OTP model
        await OTP.create({ email, otp });

        // Use your existing nodemailer transporter
        await transporter.sendMail({
            to: email,
            subject: "Your OTP for Course Registration",
            html: `<h3>Your One-Time Password is: ${otp}</h3><p>This OTP is valid for 5 minutes.</p>`
        });

        res.status(200).json({ message: "OTP sent to email. Please verify." });

    } catch (error) {
        console.error('Error sending purchase OTP:', error);
        res.status(500).json({ message: "Failed to send OTP", error: error.message });
    }
};

// --- NEW: Function to verify OTP for course purchase ---
exports.verifyPurchaseOtp = async (req, res) => {
    const { email, otp } = req.body;

    if (!email || !otp) {
        return res.status(400).json({ message: "Email and OTP are required." });
    }

    try {
        const existingOtp = await OTP.findOne({ email, otp });

        if (!existingOtp) {
            return res.status(400).json({ message: "Invalid or expired OTP." });
        }

        // OTP is correct. Clean up the used OTP.
        await OTP.deleteMany({ email });

        // Send success response. The frontend will now proceed with the purchase.
        res.status(200).json({ message: "OTP verified successfully." });

    } catch (error) {
        console.error('OTP verification failed:', error);
        res.status(500).json({ message: "OTP verification failed", error: error.message });
    }
};

exports.register = async (req, res) => {
  console.log('=== REGISTER ENDPOINT HIT ===');
  console.log('Request body:', req.body);
  
  const { userid, username, email, contact, password, verifyPassword } = req.body;

  try {
    console.log('Step 1: Checking password match');
    if (password !== verifyPassword) {
      console.log('Password mismatch error');
      return res.status(400).json({ message: "Passwords do not match" });
    }

    console.log('Step 2: Checking existing user');
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('User already exists error');
      return res.status(400).json({ message: "User already exists" });
    }

    console.log('Step 3: Generating OTP');
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    console.log('Step 4: Saving OTP to database');
    await OTP.create({ email, otp });

    console.log('Step 5: Sending email');
    await transporter.sendMail({
      to: email,
      subject: "Your OTP for Registration",
      html: `<h3>Your OTP is: ${otp}</h3>`
    });

    console.log('Step 6: Registration successful');
    res.status(200).json({ message: "OTP sent to email. Please verify." });
  } catch (error) {
    console.error('=== REGISTRATION ERROR ===');
    console.error('Error details:', error);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    res.status(500).json({ message: "Registration failed", error: error.message });
  }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    // 1. Basic validation
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required." });
    }

    try {
        // 2. Find the user by their email address in the database
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found. Please check your email or register." });
        }

        // 3. Compare the provided password with the hashed password stored in the database
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials. Please check your password." });
        }

        // 4. If password is correct, create a JSON Web Token (JWT)
        // This token is like a temporary, secure key that proves the user is logged in.
        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET, // Your secret key from the .env file
            { expiresIn: '1h' } // The token will be valid for 1 hour
        );

        // 5. Send a success response back to the frontend
        res.status(200).json({
            success: true,
            message: "Login successful!",
            token: token // Send the token to the frontend
        });

    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "An internal server error occurred." });
    }
};
exports.sendPhoneOtp = async (req, res) => {
    const { contact } = req.body; // 'contact' is the field name from your frontend form

    if (!contact) {
        return res.status(400).json({ message: "Phone number is required." });
    }

    try {
        const otp = Math.floor(100000 + Math.random() * 900000).toString();

        // Save the OTP. We'll reuse the same OTP model, but use the phone number instead of email.
        // The 'email' field in the OTP model will store the phone number for this case.
        await OTP.create({ email: contact, otp });

        // Send the SMS using Twilio
        await twilioClient.messages.create({
            body: `Your Rveiya Dynamics verification code is: ${otp}`,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: `+91${contact}` // Assuming Indian phone numbers
        });

        res.status(200).json({ message: "OTP sent to your phone number." });

    } catch (error) {
        console.error('Error sending phone OTP:', error);
        res.status(500).json({ message: "Failed to send SMS OTP", error: error.message });
    }
};
exports.verifyPhoneOtp = async (req, res) => {
    const { contact, otp } = req.body;

    if (!contact || !otp) {
        return res.status(400).json({ message: "Phone number and OTP are required." });
    }

    try {
        // Find the OTP using the phone number (stored in the 'email' field)
        const existingOtp = await OTP.findOne({ email: contact, otp });

        if (!existingOtp) {
            return res.status(400).json({ message: "Invalid or expired phone OTP." });
        }

        // OTP is correct. Clean up the used OTP.
        await OTP.deleteMany({ email: contact });

        res.status(200).json({ success: true, message: "Phone number verified successfully." });

    } catch (error) {
        console.error('Phone OTP verification failed:', error);
        res.status(500).json({ message: "Phone OTP verification failed", error: error.message });
    }
};


exports.verifyOTPAndSaveUser = async (req, res) => {
  const { email, otp, userid, username, contact, password } = req.body;

  try {
    const existingOtp = await OTP.findOne({ email, otp });
    if (!existingOtp)
      return res.status(400).json({ message: "Invalid or expired OTP" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ userid, username, email, contact, password: hashedPassword });
    await user.save();

    await OTP.deleteMany({ email });

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error('OTP verification error:', error);
    res.status(500).json({ message: "OTP verification failed", error: error.message });
  }
};
