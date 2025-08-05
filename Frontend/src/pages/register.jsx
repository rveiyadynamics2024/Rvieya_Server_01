// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';
// import "../register.css";

// function Register() {
//     const navigate = useNavigate();
//     const [fullName, setFullName] = useState('');
//     const [email, setEmail] = useState('');
//     const [phone, setPhone] = useState('');
//     const [emailOtp, setEmailOtp] = useState('');
//     const [termsAccepted, setTermsAccepted] = useState(false);
//     const [isEmailOtpSent, setIsEmailOtpSent] = useState(false);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');
//     const [successMessage, setSuccessMessage] = useState('');

//     const handleSendEmailOtp = async () => {
//         setError('');
//         setSuccessMessage('');
//         if (!email) {
//             setError("Please enter your email address first.");
//             return;
//         }
//         setSuccessMessage('Sending OTP...');
//         try {
//             await axios.post('/api/auth/send-purchase-otp', { email });
//             setIsEmailOtpSent(true);
//             setSuccessMessage(`OTP sent to ${email}. Please check your inbox.`);
//         } catch (err) {
//             setError(err.response?.data?.message || "Failed to send OTP.");
//             setSuccessMessage('');
//         }
//     };

//     const handleNextClick = async () => {
//         setLoading(true);
//         setError('');
//         setSuccessMessage('');
//         if (!fullName || !email || !phone || !emailOtp) {
//             setError('Please fill in all fields, including the OTP.');
//             setLoading(false);
//             return;
//         }
//         if (!termsAccepted) {
//             setError('You must agree to the Terms of use and Privacy Policy.');
//             setLoading(false);
//             return;
//         }
//         try {
//             await axios.post('/api/auth/verify-purchase-otp', {
//                 email: email,
//                 otp: emailOtp,
//             });
//             const courseName = "Python Fullstack Development";
//             // const amount = 6000.00;
//             const amount = 1.00;
//             const purchaseResponse = await axios.post('/api/purchase/initiate', {
//                 fullName, email, phone, courseName, amount,
//             });
//             if (purchaseResponse.data.success) {
//                 const { purchaseId } = purchaseResponse.data;
//                 // CHANGE: Pass fullName in the state object
//                 navigate('/payment', { state: { purchaseId, amount, fullName } });
//             } else {
//                 setError(purchaseResponse.data.message || 'Failed to create purchase order.');
//             }
//         } catch (err) {
//             setError(err.response?.data?.message || 'An error occurred. Please check your OTP and try again.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="register-container">
//             <div className="register-div1">
//                 <div className="register-title"> <span>Course</span> Registration</div>
//                 <div className="register-part1">
//                     <img className="register-img1" src="src/assets/python.png" alt="Course Banner" />
//                     <div className="register-part2">
//                         <div className="register-part2a">
//                             <div className="register-name">Python Fullstack Development</div>
//                             {/* <div className="register-amount">₹6000.00</div> */}
//                             <div className="register-amount">₹1.00</div>
//                         </div>
//                         <div className="register-part2b">
//                             <div className="register-ratings">
//                                 <p className="register-rating1">4.5</p>
//                                 <p className="register-rating2">★★★★★</p>
//                                 <p className="register-rating3">(1,235)</p>
//                             </div>
//                         </div>
//                         <div className="register-part2c">
//                             <div className="register-pill">Bangalore</div>
//                             <div className="register-name3">
//                                 <img src="../images/cap.png" alt="" />
//                                 <span className="register-txt">Fullstack Development</span>
//                             </div>
//                             <div className="register-df">
//                                 <img src="../images/timer.png" alt="" />
//                                 <span className="register-time"> 3 Months</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <form onSubmit={(e) => e.preventDefault()}>
//                     {error && <p style={{color: 'red', textAlign: 'center', paddingBottom: '10px'}}>{error}</p>}
//                     {successMessage && <p style={{color: 'green', textAlign: 'center', paddingBottom: '10px'}}>{successMessage}</p>}
//                     <div className="register-form-grid">
//                         <div className="register-form-field">
//                             <label htmlFor="category">Category</label>
//                             <select id="category"><option>Fullstack Development</option></select>
//                         </div>
//                         <div className="register-form-field">
//                             <label htmlFor="course">Course</label>
//                             <select id="course"><option>Python Fullstack Development</option></select>
//                         </div>
//                         <div className="register-form-field">
//                             <label htmlFor="duration">Duration</label>
//                             <input type="text" id="duration" className="input" value="3 Months" readOnly />
//                         </div>
//                         <div className="register-form-field">
//                             <label htmlFor="fullname">Full Name</label>
//                             <input type="text" id="fullname" className="input" placeholder="eg: John Doe" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
//                         </div>
//                         <div className="register-form-field">
//                             <label htmlFor="email">Email</label>
//                             <div className="register-input-group-verify">
//                                 <input type="email" id="email" className="input" placeholder="eg: john@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
//                                 <span className="register-verify-link" onClick={!isEmailOtpSent ? handleSendEmailOtp : null} style={{cursor: isEmailOtpSent ? 'default' : 'pointer', opacity: isEmailOtpSent ? 0.6 : 1}}>
//                                     {isEmailOtpSent ? 'OTP Sent' : 'Verify'}
//                                 </span>
//                             </div>
//                         </div>
//                         <div className="register-form-field">
//                             <label htmlFor="otp-email">One Time Password</label>
//                             <input type="text" id="otp-email" className="input" placeholder="Enter OTP" value={emailOtp} onChange={(e) => setEmailOtp(e.target.value)} />
//                         </div>
//                         <div className="register-form-field">
//                             <label htmlFor="phone">Phone Number</label>
//                             <div className="register-input-group-verify">
//                                 <input type="tel" id="phone" className="input" placeholder="+91 1234567890" value={phone} onChange={(e) => setPhone(e.target.value)} required />
//                                 <span className="register-verify-link">Verify</span>
//                             </div>
//                         </div>
//                         <div className="register-form-field">
//                             <label htmlFor="otp-phone">One Time Password</label>
//                             <input type="text" id="otp-phone" className="input" placeholder="Enter OTP" />
//                         </div>
//                         <div className="register-form-field">
//                             <label htmlFor="amount">Amount</label>
//                             <input type="text" id="amount" className="input" value="1.00" readOnly />
//                         </div>
//                     </div>
//                     <div className="register-form-check register-term">
//                         <div>
//                             <input type="checkbox" id="terms" checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)} />
//                         </div>
//                         <div>
//                             <label htmlFor="terms">I agree to the <a href="#">Terms of use</a> and our <a href="#">Privacy Policy</a>.</label>
//                         </div>
//                     </div>
//                     <div className="register-buttons">
//                         <button type="reset" className="register-btn-outline-secondary">Clear</button>
//                         <button type="button" className="register-btn-reg" onClick={handleNextClick} disabled={loading}>
//                             {loading ? 'Processing...' : 'Next'}
//                         </button>
//                     </div>
//                 </form>
//             </div>
//             <div className="register-div2">
//                 <img src="/src/assets/Frame.png" alt="" className="register-img5" />
//             </div>
//         </div>
//     );
// }

// export default Register;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "../register.css";

function Register() {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [emailOtp, setEmailOtp] = useState('');
    const [phoneOtp, setPhoneOtp] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [isEmailOtpSent, setIsEmailOtpSent] = useState(false);
    const [isPhoneOtpSent, setIsPhoneOtpSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSendEmailOtp = async () => {
        setError('');
        setSuccessMessage('');
        if (!email) {
            setError("Please enter your email address first.");
            return;
        }
        setSuccessMessage('Sending OTP...');
        try {
            await axios.post('/api/auth/send-purchase-otp', { email });
            setIsEmailOtpSent(true);
            setSuccessMessage(`OTP sent to ${email}. Please check your inbox.`);
        } catch (err) {
            setError(err.response?.data?.message || "Failed to send OTP.");
            setSuccessMessage('');
        }
    };

    const handleSendPhoneOtp = async () => {
        setError('');
        setSuccessMessage('');
        if (!phone) {
            setError("Please enter your phone number first.");
            return;
        }
        // Basic validation for Indian phone number
        const phoneRegex = /^(\+91)?[6-9]\d{9}$/;
        const cleanPhone = phone.replace(/\s+/g, '').replace(/^(\+91)/, '');
        if (!phoneRegex.test('+91' + cleanPhone)) {
            setError("Please enter a valid 10-digit Indian phone number.");
            return;
        }
        setSuccessMessage('Sending SMS OTP...');
        try {
            await axios.post('/api/auth/send-phone-otp', { contact: cleanPhone });
            setIsPhoneOtpSent(true);
            setSuccessMessage(`OTP sent to ${phone}. Please check your SMS.`);
        } catch (err) {
            setError(err.response?.data?.message || "Failed to send SMS OTP.");
            setSuccessMessage('');
        }
    };

    const handleNextClick = async () => {
        setLoading(true);
        setError('');
        setSuccessMessage('');
        if (!fullName || !email || !phone || !emailOtp || !phoneOtp) {
            setError('Please fill in all fields, including both OTPs.');
            setLoading(false);
            return;
        }
        if (!termsAccepted) {
            setError('You must agree to the Terms of use and Privacy Policy.');
            setLoading(false);
            return;
        }
        try {
            // Verify email OTP
            await axios.post('/api/auth/verify-purchase-otp', {
                email: email,
                otp: emailOtp,
            });

            // Verify phone OTP
            const cleanPhone = phone.replace(/\s+/g, '').replace(/^(\+91)/, '');
            await axios.post('/api/auth/verify-phone-otp', {
                contact: cleanPhone,
                otp: phoneOtp,
            });

            const courseName = "Python Fullstack Development";
            // const amount = 6000.00;
            const amount = 1.00;
            const purchaseResponse = await axios.post('/api/purchase/initiate', {
                fullName, email, phone, courseName, amount,
            });
            if (purchaseResponse.data.success) {
                const { purchaseId } = purchaseResponse.data;
                // CHANGE: Pass fullName in the state object
                navigate('/payment', { state: { purchaseId, amount, fullName } });
            } else {
                setError(purchaseResponse.data.message || 'Failed to create purchase order.');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred. Please check your OTPs and try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="register-container">
            <div className="register-div1">
                <div className="register-title"> <span>Course</span> Registration</div>
                <div className="register-part1">
                    <img className="register-img1" src="src/assets/python.png" alt="Course Banner" />
                    <div className="register-part2">
                        <div className="register-part2a">
                            <div className="register-name">Python Fullstack Development</div>
                            {/* <div className="register-amount">₹6000.00</div> */}
                            <div className="register-amount">₹1.00</div>
                        </div>
                        <div className="register-part2b">
                            <div className="register-ratings">
                                <p className="register-rating1">4.5</p>
                                <p className="register-rating2">★★★★★</p>
                                <p className="register-rating3">(1,235)</p>
                            </div>
                        </div>
                        <div className="register-part2c">
                            <div className="register-pill">Bangalore</div>
                            <div className="register-name3">
                                <img src="../images/cap.png" alt="" />
                                <span className="register-txt">Fullstack Development</span>
                            </div>
                            <div className="register-df">
                                <img src="../images/timer.png" alt="" />
                                <span className="register-time"> 3 Months</span>
                            </div>
                        </div>
                    </div>
                </div>
                <form onSubmit={(e) => e.preventDefault()}>
                    {error && <p style={{color: 'red', textAlign: 'center', paddingBottom: '10px'}}>{error}</p>}
                    {successMessage && <p style={{color: 'green', textAlign: 'center', paddingBottom: '10px'}}>{successMessage}</p>}
                    <div className="register-form-grid">
                        <div className="register-form-field">
                            <label htmlFor="category">Category</label>
                            <select id="category"><option>Fullstack Development</option></select>
                        </div>
                        <div className="register-form-field">
                            <label htmlFor="course">Course</label>
                            <select id="course"><option>Python Fullstack Development</option></select>
                        </div>
                        <div className="register-form-field">
                            <label htmlFor="duration">Duration</label>
                            <input type="text" id="duration" className="input" value="3 Months" readOnly />
                        </div>
                        <div className="register-form-field">
                            <label htmlFor="fullname">Full Name</label>
                            <input type="text" id="fullname" className="input" placeholder="eg: John Doe" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                        </div>
                        <div className="register-form-field">
                            <label htmlFor="email">Email</label>
                            <div className="register-input-group-verify">
                                <input type="email" id="email" className="input" placeholder="eg: john@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                <span className="register-verify-link" onClick={!isEmailOtpSent ? handleSendEmailOtp : null} style={{cursor: isEmailOtpSent ? 'default' : 'pointer', opacity: isEmailOtpSent ? 0.6 : 1}}>
                                    {isEmailOtpSent ? 'OTP Sent' : 'Verify'}
                                </span>
                            </div>
                        </div>
                        <div className="register-form-field">
                            <label htmlFor="otp-email">One Time Password</label>
                            <input type="text" id="otp-email" className="input" placeholder="Enter OTP" value={emailOtp} onChange={(e) => setEmailOtp(e.target.value)} />
                        </div>
                        <div className="register-form-field">
                            <label htmlFor="phone">Phone Number</label>
                            <div className="register-input-group-verify">
                                <input type="tel" id="phone" className="input" placeholder="+91 1234567890" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                                <span className="register-verify-link" onClick={!isPhoneOtpSent ? handleSendPhoneOtp : null} style={{cursor: isPhoneOtpSent ? 'default' : 'pointer', opacity: isPhoneOtpSent ? 0.6 : 1}}>
                                    {isPhoneOtpSent ? 'OTP Sent' : 'Verify'}
                                </span>
                            </div>
                        </div>
                        <div className="register-form-field">
                            <label htmlFor="otp-phone">One Time Password</label>
                            <input type="text" id="otp-phone" className="input" placeholder="Enter OTP" value={phoneOtp} onChange={(e) => setPhoneOtp(e.target.value)} />
                        </div>
                        <div className="register-form-field">
                            <label htmlFor="amount">Amount</label>
                            <input type="text" id="amount" className="input" value="1.00" readOnly />
                        </div>
                    </div>
                    <div className="register-form-check register-term">
                        <div>
                            <input type="checkbox" id="terms" checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)} />
                        </div>
                        <div>
                            <label htmlFor="terms">I agree to the <a href="#">Terms of use</a> and our <a href="#">Privacy Policy</a>.</label>
                        </div>
                    </div>
                    <div className="register-buttons">
                        <button type="reset" className="register-btn-outline-secondary">Clear</button>
                        <button type="button" className="register-btn-reg" onClick={handleNextClick} disabled={loading}>
                            {loading ? 'Processing...' : 'Next'}
                        </button>
                    </div>
                </form>
            </div>
            <div className="register-div2">
                <img src="/src/assets/Frame.png" alt="" className="register-img5" />
            </div>
        </div>
    );
}

export default Register;