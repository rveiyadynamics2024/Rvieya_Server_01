import React, { useState } from 'react';
import axios from 'axios';
import '../testomonial.css';

function FeedbackPage() {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/testimonials', { name, feedback });
      setMessage('Thank you for your feedback!');
      setName('');
      setFeedback('');
    } catch (err) {
      setMessage('Error submitting feedback');
    }
  };

  return (
    <div className="testomonial-form">
      <div className="testomonial-form-container">
        <div className="testomonial-padding-form">
          <div className="testomonial-form-title">
            <p><span className="testomonial-underline">Feedb</span>ack</p>
          </div>

          <div className="testomonial-name">
            <p>Name</p>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="testomonial-feedback">
            <p>Feedback</p>
            <textarea cols="30" rows="5" value={feedback} onChange={(e) => setFeedback(e.target.value)} />
          </div>

          <div className="testomonial-submit">
            <button onClick={handleSubmit}>Submit</button>
          </div>

          {message && <p>{message}</p>}
        </div>
      </div>
    </div>
  );
}

export default FeedbackPage;
