// src/pages/FeedbackPage.jsx
import React from 'react';
import '../testomonial.css'; // Or a separate CSS if needed

function FeedbackPage() {
  return (
    <div className="testomonial-form">
      <div className="testomonial-form-container">
        <div className="testomonial-padding-form">
          <div className="testomonial-form-title">
            <p><span className="testomonial-underline">Feedb</span>ack</p>
          </div>

          <div className="testomonial-name">
            <p>Name</p>
            <input type="text" />
          </div>

          <div className="testomonial-feedback">
            <p>Feedback</p>
            <textarea cols="30" rows="5"></textarea>
          </div>

          <div className="testomonial-submit">
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedbackPage;
