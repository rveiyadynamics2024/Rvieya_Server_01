import React from "react";
import "../register.css";
import { useNavigate } from "react-router-dom";

function Register() {
      const navigate = useNavigate();

    return (
        <div className="register-container">
            <div className="register-div1">
                <div className="register-title">Course Registration</div>

                <div className="register-part1">
                    <img
                        className="register-img1"
                        src="src/assets/python.png"
                        alt="Course Banner"
                    />
                    <div className="register-part2">
                        <div className="register-part2a">
                            <div className="register-name">Python Fullstack Development</div>
                            <div className="register-amount">₹6000.00</div>
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

                <form>
                    <div className="register-form-grid">
                        <div className="register-form-field">
                            <label htmlFor="category">Category</label>
                            <select id="category">
                                <option selected>Fullstack Development</option>
                                <option>Data Science</option>
                                <option>UI/UX</option>
                            </select>
                        </div>

                        <div className="register-form-field">
                            <label htmlFor="course">Course</label>
                            <select id="course">
                                <option selected>Python Fullstack Development</option>
                                <option>MERN Stack</option>
                                <option>Java Fullstack</option>
                            </select>
                        </div>

                        <div className="register-form-field">
                            <label htmlFor="duration">Duration</label>
                            <input type="text" id="duration" className="input" value="3 Months" readOnly />
                        </div>

                        <div className="register-form-field">
                            <label htmlFor="fullname">Full Name</label>
                            <input type="text" id="fullname" className="input" placeholder="eg: John Doe" />
                        </div>

                        <div className="register-form-field">
                            <label htmlFor="email">Email</label>
                            <div className="register-input-group-verify">
                                <input type="email" id="email" className="input" placeholder="eg: john@email.com" />
                                <span className="register-verify-link">Verify</span>
                            </div>
                        </div>

                        <div className="register-form-field">
                            <label htmlFor="otp-email">One Time Password</label>
                            <input type="text" id="otp-email" className="input" placeholder="Enter OTP" />
                        </div>

                        <div className="register-form-field">
                            <label htmlFor="phone">Phone Number</label>
                            <div className="register-input-group-verify">
                                <input type="tel" id="phone" className="input" placeholder="+91 1234567890" />
                                <span className="register-verify-link">Verify</span>
                            </div>
                        </div>

                        <div className="register-form-field">
                            <label htmlFor="otp-phone">One Time Password</label>
                            <input type="text" id="otp-phone" className="input" placeholder="Enter OTP" />
                        </div>

                        <div className="register-form-field">
                            <label htmlFor="amount">Amount</label>
                            <input type="text" id="amount" className="input" value="6000.00" readOnly />
                        </div>
                    </div>

                    <div className="register-form-check register-term">
                        <div>
                            <input type="checkbox" id="terms" />
                        </div>
                        <div>
                            <label htmlFor="terms">
                                I agree to the <a href="#">Terms of use</a> and our <a href="#">Privacy Policy</a>.
                            </label>
                        </div>

                    </div>

                    <div className="register-buttons">
                        <button type="reset" className="register-btn-outline-secondary">Clear</button>
                        <button
                            type="button"
                            className="register-btn-reg"
                            onClick={() => navigate("/payment")}
                        >
                            Next
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
