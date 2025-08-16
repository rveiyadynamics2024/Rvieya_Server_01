import React, { useState } from "react";
import "../PaymentOptions.css";
import SuccessPopup from "./Sucess"; // ✅ Ensure the file is Sucess.jsx

const PaymentOptions = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="body">
      <main className="main">
        <h2 className="pay-select">Select Payment Option</h2>

        <div className="pay-options">
          {/* UPI */}
          <div className={`pay-opt ${selectedOption === "upi" ? "pay-highlight" : ""}`}>
            <div className="pay-div1">
              <div className="pay-left">
                <input type="radio" name="paymentOption" id="upi" value="upi" onChange={handleChange} />
                <label htmlFor="upi"><p>UPI Payment</p></label>
              </div>
              <div className="pay-img-upi">
                <img src="/images/upi.png" alt="UPI" />
              </div>
            </div>
            {selectedOption === "upi" && (
              <div className="pay-details" id="upiDetails">
                <label htmlFor="upiId">UPI ID</label>
                <input type="text" id="upiId" placeholder="abc@upi" />
                <small>Note: UPI ID format is mobile@bank or name@bank</small>
              </div>
            )}
          </div>


          {/* Razorpay */}
          <div className={`pay-opt ${selectedOption === "razorpay" ? "pay-highlight" : ""}`}>
            <div className="pay-div1">
              <div className="pay-left">
                <input type="radio" name="paymentOption" id="razorpay" value="razorpay" onChange={handleChange} />
                <label htmlFor="razorpay"><p>QR Payment</p></label>
              </div>
              <div className="pay-img-razor">
                <img src="/images/razorupdated.png" alt="Razorpay" />
              </div>
            </div>
            {selectedOption === "razorpay" && (
              <div className="pay-details" id="razorpayDetails">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/375px-QR_code_for_mobile_English_Wikipedia.svg.png"
                  alt="QR Code"
                />
                <p className="razor-text">Scan the QR code and pay via Razorpay</p>
              </div>
            )}
          </div>

        </div>

        {/* Pay Button */}
        <button id="payBtn" onClick={() => setShowSuccess(true)}>
          Pay | ₹6090.83
        </button>
      </main>

      {/* Success Popup Overlay */}
      {showSuccess && <SuccessPopup onClose={() => setShowSuccess(false)} />}
    </div>
  );
};

export default PaymentOptions;
