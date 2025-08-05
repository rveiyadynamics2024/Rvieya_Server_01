import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import QRCode from 'qrcode';
import SuccessPopup from "./Sucess"; 
import "../PaymentOptions.css";

const PaymentOptions = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const purchaseId = location.state?.purchaseId;
    const amount = location.state?.amount;
    const fullName = location.state?.fullName; 

    const [selectedOption, setSelectedOption] = useState("upi");
    const [upiId, setUpiId] = useState('');
    const [qrCodeDataUrl, setQrCodeDataUrl] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const razorpayKeyId = import.meta.env.VITE_RAZORPAY_KEY_ID;

    // --- Polling logic for QR Code ---
    useEffect(() => {
        let intervalId;
        // Start polling only when QR code is visible and payment is not yet successful
        if (selectedOption === 'razorpay' && qrCodeDataUrl && !showSuccess && purchaseId) {
            console.log("Starting to poll for payment status...");
            intervalId = setInterval(async () => {
                try {
                    const { data } = await axios.get(`/api/purchase/status/${purchaseId}`);
                    if (data.purchased === true) {
                        console.log("Payment confirmed via polling!");
                        setShowSuccess(true);
                        clearInterval(intervalId); // Stop polling
                    }
                } catch (err) {
                    console.error("Polling error:", err);
                    // Optional: stop polling on error to avoid spamming
                    // clearInterval(intervalId); 
                }
            }, 3000); // Check every 3 seconds
        }

        // Cleanup function to stop polling when the component unmounts or selection changes
        return () => {
            if (intervalId) {
                console.log("Stopping polling.");
                clearInterval(intervalId);
            }
        };
    }, [selectedOption, qrCodeDataUrl, purchaseId, showSuccess]); // Rerun effect if these change

    const generateQrCode = async () => {
        if (qrCodeDataUrl) return; 
        setLoading(true);
        setError('');
        try {
            const response = await axios.post('/api/payment/create-link', {
                amount, purchaseId, fullName, courseName: "Python Fullstack Development"
            });
            if (response.data.success) {
                const qrUrl = await QRCode.toDataURL(response.data.qr_code_url);
                setQrCodeDataUrl(qrUrl);
            } else {
                setError("Could not generate QR code.");
            }
        } catch (err) {
            setError("Error generating QR code.");
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
        if (e.target.value === 'razorpay') {
            generateQrCode();
        }
    };

    const handleUpiPayment = async () => {
        if (!upiId) { setError("Please enter a valid UPI ID."); return; }
        setLoading(true);
        setError('');
        if (!razorpayKeyId) { setError("Razorpay Key ID is not configured."); setLoading(false); return; }
        if (!window.Razorpay) { setError("Could not connect to payment gateway."); setLoading(false); return; }

        try {
            const orderResponse = await axios.post('/api/payment/create-order', { amount, purchaseId });
            const { order } = orderResponse.data;
            const options = {
                key: razorpayKeyId, amount: order.amount, currency: "INR", name: "Rveiya Dynamics",
                description: "Course Purchase Transaction", order_id: order.id, method: { upi: true },
                prefill: { vpa: upiId },
                handler: async (response) => {
                    try {
                        const verificationResponse = await axios.post('/api/payment/verify', {
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_signature: response.razorpay_signature,
                        });
                        if (verificationResponse.data.success) setShowSuccess(true);
                        else setError('Payment verification failed.');
                    } catch (err) { setError('An error occurred during payment verification.'); }
                },
                theme: { color: "#003366" },
            };
            const rzp = new window.Razorpay(options);
            rzp.on('payment.failed', (response) => setError(`Payment Failed: ${response.error.description}`));
            rzp.open();
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to process payment.');
        } finally {
            setLoading(false);
        }
    };

    if (!purchaseId || !amount) {
        return (<div className="body"><main className="main"><h2>Error: Missing payment details. Please go back.</h2></main></div>);
    }

    return (
        <div className="body">
            <main className="main">
                <h2 className="pay-select">Select Payment Option</h2>
                {error && <p style={{ color: 'red', textAlign: 'center', margin: '1rem' }}>{error}</p>}
                <div className="pay-options">
                    <div className={`pay-opt ${selectedOption === "upi" ? "pay-highlight" : ""}`}>
                        <div className="pay-div1">
                            <div className="pay-left">
                                <input type="radio" name="paymentOption" id="upi" value="upi" checked={selectedOption === "upi"} onChange={handleChange} />
                                <label htmlFor="upi"><p>UPI Payment</p></label>
                            </div>
                            <div className="pay-img-upi"><img src="/images/upi.png" alt="UPI" /></div>
                        </div>
                        {selectedOption === "upi" && (
                            <div className="pay-details" id="upiDetails">
                                <label htmlFor="upiId">Enter your UPI ID</label>
                                <input type="text" id="upiId" placeholder="yourname@bank" value={upiId} onChange={(e) => setUpiId(e.target.value)} />
                                <button className="pay-btn-small" onClick={handleUpiPayment} disabled={loading}>
                                    {loading ? 'Processing...' : 'Send Payment Request'}
                                </button>
                            </div>
                        )}
                    </div>
                    <div className={`pay-opt ${selectedOption === "razorpay" ? "pay-highlight" : ""}`}>
                        <div className="pay-div1">
                            <div className="pay-left">
                                <input type="radio" name="paymentOption" id="razorpay" value="razorpay" checked={selectedOption === "razorpay"} onChange={handleChange} />
                                <label htmlFor="razorpay"><p>QR Code Payment</p></label>
                            </div>
                            <div className="pay-img-razor"><img src="/images/razorupdated.png" alt="Razorpay" /></div>
                        </div>
                        {selectedOption === "razorpay" && (
                            <div className="pay-details" id="razorpayDetails">
                                {loading && <p>Generating QR Code...</p>}
                                {qrCodeDataUrl && (
                                    <>
                                        <img src={qrCodeDataUrl} alt="Dynamic QR Code" style={{width: '200px', height: '200px', margin: 'auto', display: 'block'}} />
                                        <p style={{ textAlign: "center", marginTop: '10px' }}>Scan with any UPI app to pay ₹{amount.toFixed(2)}</p>
                                        <p style={{ textAlign: "center", fontStyle: 'italic', fontSize: '0.9em' }}>Waiting for payment confirmation...</p>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </main>
            {showSuccess && <SuccessPopup onClose={() => navigate('/dashboard')} />}
        </div>
    );
};

export default PaymentOptions;
