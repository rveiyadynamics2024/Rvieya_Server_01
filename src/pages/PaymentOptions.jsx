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
                <label htmlFor="upi">UPI Payment</label>
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

          {/* Debit Card */}
          <div className={`pay-opt ${selectedOption === "debit" ? "pay-highlight" : ""}`}>
            <div className="pay-div1">
              <div className="pay-left">
                <input type="radio" name="paymentOption" id="debit" value="debit" onChange={handleChange} />
                <label htmlFor="debit">Debit Card</label>
              </div>
              <div className="pay-img-debit">
                <img src="/images/rupay.png" alt="Debit Card" />
              </div>
            </div>
          </div>

          {/* Credit Card */}
          <div className={`pay-opt ${selectedOption === "credit" ? "pay-highlight" : ""}`}>
            <div className="pay-div1">
              <div className="pay-left">
                <input type="radio" name="paymentOption" id="credit" value="credit" onChange={handleChange} />
                <label htmlFor="credit">Credit Card</label>
              </div>
              <div className="pay-img-credit">
                <div className="pay-visa">
                  <img src="/images/visa.png" alt="Visa" />
                </div>
                <div className="pay-card">
                  <img src="/images/vi.png" alt="MasterCard" />
                </div>
              </div>
            </div>
            {selectedOption === "credit" && (
              <div className="pay-details" id="creditDetails">
                <label htmlFor="cardNumber">Card Number</label>
                <input type="text" id="cardNumber" placeholder="1234 1234 1234 1234" />
                <div className="pay-df">
                  <div className="pay-detail" style={{ flex: 1, marginRight: "10px" }}>
                    <label htmlFor="cardName">Name on Card</label>
                    <input type="text" id="cardName" placeholder="Card name" />
                  </div>
                  <div className="pay-detail" style={{ flex: 1, marginRight: "10px" }}>
                    <label htmlFor="expiry">Expiry</label>
                    <input type="text" id="expiry" placeholder="MM/YY" />
                  </div>
                  <div className="pay-detail" style={{ flex: 1 }}>
                    <label htmlFor="cvv">CVV</label>
                    <input type="password" id="cvv" placeholder="CVV" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Razorpay */}
          <div className={`pay-opt ${selectedOption === "razorpay" ? "pay-highlight" : ""}`}>
            <div className="pay-div1">
              <div className="pay-left">
                <input type="radio" name="paymentOption" id="razorpay" value="razorpay" onChange={handleChange} />
                <label htmlFor="razorpay">Razorpay</label>
              </div>
              <div className="pay-img-razor">
                <img src="/images/razor.png" alt="Razorpay" />
              </div>
            </div>
            {selectedOption === "razorpay" && (
              <div className="pay-details" id="razorpayDetails">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/375px-QR_code_for_mobile_English_Wikipedia.svg.png"
                  alt="QR Code"
                />
                <p style={{ paddingLeft: "30%" }}>Scan the QR code and pay via Razorpay</p>
              </div>
            )}
          </div>

          {/* PhonePe */}
          <div className={`pay-opt ${selectedOption === "phonepe" ? "pay-highlight" : ""}`}>
            <div className="pay-div1">
              <div className="pay-left">
                <input type="radio" name="paymentOption" id="phonepe" value="phonepe" onChange={handleChange} />
                <label htmlFor="phonepe">PhonePe</label>
              </div>
              <div className="pay-img-phone">
                <img src="/images/phone.png" alt="PhonePe" />
              </div>
            </div>
          </div>

          {/* Other */}
          <div className={`pay-opt ${selectedOption === "other" ? "pay-highlight" : ""}`}>
            <div className="pay-div1">
              <div className="pay-left">
                <input type="radio" name="paymentOption" id="other" value="other" onChange={handleChange} />
                <label htmlFor="other">Other</label>
              </div>
              <div className="pay-df">
                <div className="pay-paytm">
                  <img src="/images/cred.png" alt="Paytm" />
                </div>
                <div className="pay-other">
                  <img src="/images/gpay.png" alt="Other Payment" />
                </div>
              </div>
            </div>
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
