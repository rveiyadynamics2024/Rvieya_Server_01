// // pages/Register.jsx
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import '../register.css';

// function register() {
//   const navigate = useNavigate();
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     userId: '',
//     name: '',
//     email: '',
//     contact: '',
//     password: '',
//     confirmPassword: ''
//   });
//   const [otp, setOtp] = useState('');
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);
  

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//     setErrors({
//       ...errors,
//       [e.target.name]: ''
//     });
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.userId) newErrors.userId = 'User ID is required';
//     if (!formData.name) newErrors.name = 'Name is required';
//     if (!formData.email) newErrors.email = 'Email is required';
//     if (!formData.contact) newErrors.contact = 'Contact number is required';
//     if (!formData.password) newErrors.password = 'Password is required';
//     if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match';
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (formData.email && !emailRegex.test(formData.email)) {
//       newErrors.email = 'Invalid email format';
//     }

//     const phoneRegex = /^[6-9]\d{9}$/;
//     if (formData.contact && !phoneRegex.test(formData.contact)) {
//       newErrors.contact = 'Invalid phone number';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     setLoading(true);
//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/register', {
//         userid: formData.userId,
//         username: formData.name,
//         email: formData.email,
//         contact: formData.contact,
//         password: formData.password,
//         verifyPassword: formData.confirmPassword
//       });

//       alert(response.data.message);
//       setStep(2); // go to OTP input
//     } catch (error) {
//       alert(error.response?.data?.message || 'Registration failed');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleVerify = async () => {
//     if (!otp) return alert('Please enter the OTP');

//     setLoading(true);
//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/verify', {
//         email: formData.email,
//         otp,
//         userid: formData.userId,
//         username: formData.name,
//         contact: formData.contact,
//         password: formData.password
//       });

//       alert(response.data.message);
//       navigate('/userlogin'); // redirect after success
//     } catch (error) {
//       alert(error.response?.data?.message || 'OTP verification failed');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="register-container">
//       <div className="register-div1">
//         <div className="register-title">
//           {step === 1 ? 'User Registration' : 'Verify Your Email'}
//         </div>

//         {step === 1 ? (
//           <form onSubmit={handleRegister}>
//             <div className="register-form-grid">
//               <div className="register-form-field">
//                 <label>User ID</label>
//                 <input
//                   type="text"
//                   name="userId"
//                   value={formData.userId}
//                   onChange={handleChange}
//                   placeholder="Unique ID"
//                   className={`input ${errors.userId ? 'error' : ''}`}
//                 />
//                 {errors.userId && <span className="error-text">{errors.userId}</span>}
//               </div>

//               <div className="register-form-field">
//                 <label>Full Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Your name"
//                   className={`input ${errors.name ? 'error' : ''}`}
//                 />
//                 {errors.name && <span className="error-text">{errors.name}</span>}
//               </div>

//               <div className="register-form-field">
//                 <label>Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="you@example.com"
//                   className={`input ${errors.email ? 'error' : ''}`}
//                 />
//                 {errors.email && <span className="error-text">{errors.email}</span>}
//               </div>

//               <div className="register-form-field">
//                 <label>Phone Number</label>
//                 <input
//                   type="text"
//                   name="contact"
//                   value={formData.contact}
//                   onChange={handleChange}
//                   placeholder="9876543210"
//                   maxLength="10"
//                   className={`input ${errors.contact ? 'error' : ''}`}
//                 />
//                 {errors.contact && <span className="error-text">{errors.contact}</span>}
//               </div>

//               <div className="register-form-field">
//                 <label>Password</label>
//                 <input
//                   type="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   placeholder="Password"
//                   className={`input ${errors.password ? 'error' : ''}`}
//                 />
//                 {errors.password && <span className="error-text">{errors.password}</span>}
//               </div>

//               <div className="register-form-field">
//                 <label>Confirm Password</label>
//                 <input
//                   type="password"
//                   name="confirmPassword"
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                   placeholder="Re-enter password"
//                   className={`input ${errors.confirmPassword ? 'error' : ''}`}
//                 />
//                 {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
//               </div>
//             </div>

//             <div className="register-buttons">
//               <button
//                 type="button"
//                 className="register-btn-outline-secondary"
//                 onClick={() => navigate('/userlogin')}
//               >
//                 Already have an account?
//               </button>
//               <button type="submit" className="register-btn-reg" disabled={loading}>
//                 {loading ? 'Registering...' : 'Register'}
//               </button>
//             </div>
//           </form>
//         ) : (
//           // OTP Verification Step
//           <div className="otp-verification">
//             <p>An OTP has been sent to your email. Please enter it below:</p>
//             <input
//               type="text"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//               maxLength="6"
//               placeholder="Enter OTP"
//               className="otp-input"
//             />
//             <button className="verify-btn" onClick={handleVerify} disabled={loading}>
//               {loading ? 'Verifying...' : 'Verify OTP'}
//             </button>
//           </div>
//         )}
//       </div>

//       <div className="register-div2">
//         <img src="/src/assets/Frame.png" alt="" className="register-img5" />
//       </div>
//     </div>
//   );
// }

// export default register;


/// with resend 

// pages/Register.jsx
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import '../register.css';

// pages/Register.jsx
// FIX: Imported useState and useEffect from React
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../register.css';

function Register() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    userId: '',
    name: '',
    email: '',
    contact: '',
    password: '',
    confirmPassword: ''
  });
  const [otp, setOtp] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  
  // --- NEW: State for OTP Resend Timer ---
  const [countdown, setCountdown] = useState(60);
  const [canResend, setCanResend] = useState(false);

  // --- NEW: useEffect to handle the countdown timer ---
  useEffect(() => {
    let timer;
    // Start timer only when on the OTP step and countdown is active
    if (step === 2 && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else if (countdown === 0) {
      // When countdown finishes, enable the resend button
      setCanResend(true);
      clearInterval(timer);
    }
    // Cleanup the timer if the component unmounts or step changes
    return () => clearInterval(timer);
  }, [step, countdown]);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setErrors({
      ...errors,
      [e.target.name]: ''
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.userId) newErrors.userId = 'User ID is required';
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.contact) newErrors.contact = 'Contact number is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (formData.contact && !phoneRegex.test(formData.contact)) {
      newErrors.contact = 'Invalid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await axios.post('/api/auth/register', {
        userid: formData.userId,
        username: formData.name,
        email: formData.email,
        contact: formData.contact,
        password: formData.password,
        verifyPassword: formData.confirmPassword
      });

      alert(response.data.message);
      setStep(2); // go to OTP input
      setCountdown(60); // Start the timer
      setCanResend(false);
    } catch (error) {
      alert(error.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  // --- NEW: Function to handle resending the OTP ---
  const handleResendOtp = async () => {
    setLoading(true);
    try {
        // We call the same register endpoint, which will generate and send a new OTP
        const response = await axios.post('/api/auth/register', {
            userid: formData.userId,
            username: formData.name,
            email: formData.email,
            contact: formData.contact,
            password: formData.password,
            verifyPassword: formData.confirmPassword
        });
        alert("A new OTP has been sent to your email.");
        setCountdown(60); // Reset the timer
        setCanResend(false); // Disable the button again
    } catch (error) {
        alert(error.response?.data?.message || 'Failed to resend OTP');
    } finally {
        setLoading(false);
    }
  };

  const handleVerify = async () => {
    if (!otp) return alert('Please enter the OTP');

    setLoading(true);
    try {
      const response = await axios.post('/api/auth/verify', {
        email: formData.email,
        otp,
        userid: formData.userId,
        username: formData.name,
        contact: formData.contact,
        password: formData.password
      });

      alert(response.data.message);
      navigate('/userlogin'); // redirect after success
    } catch (error) {
      alert(error.response?.data?.message || 'OTP verification failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <div className="register-div1">
        <div className="register-title">
          {step === 1 ? 'User Registration' : 'Verify Your Email'}
        </div>

        {step === 1 ? (
          <form onSubmit={handleRegister}>
            <div className="register-form-grid">
              <div className="register-form-field">
                <label>User ID</label>
                <input
                  type="text"
                  name="userId"
                  value={formData.userId}
                  onChange={handleChange}
                  placeholder="Unique ID"
                  className={`input ${errors.userId ? 'error' : ''}`}
                />
                {errors.userId && <span className="error-text">{errors.userId}</span>}
              </div>

              <div className="register-form-field">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={`input ${errors.name ? 'error' : ''}`}
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>

              <div className="register-form-field">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`input ${errors.email ? 'error' : ''}`}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              <div className="register-form-field">
                <label>Phone Number</label>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="9876543210"
                  maxLength="10"
                  className={`input ${errors.contact ? 'error' : ''}`}
                />
                {errors.contact && <span className="error-text">{errors.contact}</span>}
              </div>

              <div className="register-form-field">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className={`input ${errors.password ? 'error' : ''}`}
                />
                {errors.password && <span className="error-text">{errors.password}</span>}
              </div>

              <div className="register-form-field">
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Re-enter password"
                  className={`input ${errors.confirmPassword ? 'error' : ''}`}
                />
                {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
              </div>
            </div>

            <div className="register-buttons">
              <button
                type="button"
                className="register-btn-outline-secondary"
                onClick={() => navigate('/userlogin')}
              >
                Already have an account?
              </button>
              <button type="submit" className="register-btn-reg" disabled={loading}>
                {loading ? 'Registering...' : 'Register'}
              </button>
            </div>
          </form>
        ) : (
          // OTP Verification Step
          <div className="otp-verification">
            <p>An OTP has been sent to your email. Please enter it below:</p>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength="6"
              placeholder="Enter OTP"
              className="otp-input"
            />
            {/* --- NEW: Resend OTP UI --- */}
            <div className="resend-container" style={{ margin: '15px 0', textAlign: 'center' }}>
                {canResend ? (
                    <button onClick={handleResendOtp} disabled={loading} className="resend-btn" style={{ background: 'none', border: 'none', color: '#007bff', cursor: 'pointer', textDecoration: 'underline' }}>
                        Resend OTP
                    </button>
                ) : (
                    <p>Resend OTP in {countdown}s</p>
                )}
            </div>

            <button className="verify-btn" onClick={handleVerify} disabled={loading}>
              {loading ? 'Verifying...' : 'Verify OTP'}
            </button>
          </div>
        )}
      </div>

      <div className="register-div2">
        <img src="/src/assets/Frame.png" alt="" className="register-img5" />
      </div>
    </div>
  );
}

export default Register;
