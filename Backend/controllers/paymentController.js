//paymentController.js
const Razorpay = require('razorpay');
const crypto = require('crypto');
const PurchasedCourse = require('../models/purchasedcourse');

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// --- This function remains the same ---
exports.initiatePurchase = async (req, res) => {
    try {
        const { fullName, email, phone, courseName, amount } = req.body;
        const newPurchase = new PurchasedCourse({ fullName, email, phone, courseName, amount });
        await newPurchase.save();
        res.status(201).json({
            success: true,
            message: 'Purchase initiated successfully. Proceed to payment.',
            purchaseId: newPurchase._id
        });
    } catch (error) {
        console.error("Error initiating purchase:", error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

// --- This function remains the same ---
exports.createOrder = async (req, res) => {
    try {
        const { amount, purchaseId } = req.body;
        if (!amount || !purchaseId) {
            return res.status(400).json({ success: false, message: 'Amount and Purchase ID are required.' });
        }
        const options = {
            amount: Number(amount) * 100,
            currency: 'INR',
            receipt: `receipt_order_${purchaseId}`,
            notes: { purchaseId: purchaseId }
        };
        const order = await razorpay.orders.create(options);
        await PurchasedCourse.findByIdAndUpdate(purchaseId, { razorpayOrderId: order.id });
        res.status(200).json({ success: true, order });
    } catch (error) {
        console.error("Error creating Razorpay order:", error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

// --- This function remains the same ---
exports.createPaymentLink = async (req, res) => {
    try {
        const { amount, purchaseId, fullName, courseName } = req.body;
        if (!amount || !purchaseId) {
            return res.status(400).json({ success: false, message: 'Amount and Purchase ID are required.' });
        }
        const amountInPaise = Number(amount) * 100;
        const paymentLink = await razorpay.paymentLink.create({
            amount: amountInPaise,
            currency: "INR",
            description: `Payment for ${courseName}`,
            customer: { name: fullName },
            notify: { sms: false, email: false },
            reminder_enable: false,
            notes: { purchaseId: purchaseId },
            callback_url: `https://your-frontend-url.com/success`,
            callback_method: "get"
        });
        res.status(200).json({ success: true, qr_code_url: paymentLink.short_url });
    } catch (error) {
        console.error("Error creating Razorpay payment link:", error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

// --- This function remains the same ---
exports.verifyPayment = async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
        const body = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET).update(body.toString()).digest('hex');
        if (expectedSignature === razorpay_signature) {
            const purchase = await PurchasedCourse.findOne({ razorpayOrderId: razorpay_order_id });
            if (!purchase) {
                return res.status(404).json({ success: false, message: 'Purchase record not found.' });
            }
            purchase.purchased = true;
            await purchase.save();
            res.status(200).json({ success: true, message: 'Payment verified successfully.', purchaseId: purchase._id });
        } else {
            res.status(400).json({ success: false, message: 'Payment verification failed. Signature mismatch.' });
        }
    } catch (error) {
        console.error("Error verifying payment:", error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

// --- UPDATED Webhook handler with the fix ---
exports.handleWebhook = (req, res) => {
    const secret = process.env.RAZORPAY_KEY_SECRET;
    console.log("--- Webhook Received ---");
    console.log("Request Body:", JSON.stringify(req.body, null, 2)); // Log the entire payload

    try {
        const shasum = crypto.createHmac('sha256', secret);
        shasum.update(JSON.stringify(req.body));
        const digest = shasum.digest('hex');

        if (digest === req.headers['x-razorpay-signature']) {
            console.log('Webhook signature verified successfully.');
            
            const event = req.body.event;
            const payload = req.body.payload;

            // FIX: The path to 'notes' is inside payload.payment_link.entity
            if (event === 'payment_link.paid' && payload && payload.payment_link && payload.payment_link.entity && payload.payment_link.entity.notes) {
                
                const purchaseId = payload.payment_link.entity.notes.purchaseId;
                
                if (purchaseId) {
                    console.log(`Event: payment_link.paid. PurchaseId found: ${purchaseId}`);
                    
                    // Use an async function to handle the database update cleanly
                    (async () => {
                        try {
                            await PurchasedCourse.findByIdAndUpdate(purchaseId, { purchased: true });
                            console.log(`Database updated successfully for purchaseId: ${purchaseId}`);
                        } catch (dbError) {
                            console.error(`Database update failed for purchaseId: ${purchaseId}`, dbError);
                        }
                    })();

                } else {
                    console.log('Webhook received for payment_link.paid, but no purchaseId was found in the notes.');
                }
            } else {
                console.log(`Webhook received for event: ${event}, but it's not the one we are handling.`);
            }
            
            // Respond to Razorpay immediately to acknowledge receipt
            res.json({ status: 'ok' });

        } else {
            console.log('Webhook signature verification failed.');
            res.status(403).json({ status: 'error', message: 'Invalid signature' });
        }
    } catch (error) {
        console.error("An error occurred in the webhook handler:", error);
        res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
};

// --- This function remains the same ---
exports.getPurchaseStatus = async (req, res) => {
    try {
        const { purchaseId } = req.params;
        const purchase = await PurchasedCourse.findById(purchaseId);
        if (!purchase) {
            return res.status(404).json({ success: false, message: 'Purchase not found.' });
        }
        res.status(200).json({ success: true, purchased: purchase.purchased });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};
