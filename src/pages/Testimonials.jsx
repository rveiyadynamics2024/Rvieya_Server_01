import React from 'react';
import '../testomonial.css';

const Testimonials = () => {
  const testimonials = Array(4).fill({
    text: `I have invested considerable time researching various online platforms, its course offerings,
    learning programs, instructor quality, pricing structures, refund policies, as well as
    analyzing user feedback.`,
    author: 'By John Doe | 27th July 2025',
  });

  return (
    <div className="testomonial-container">
      <div className="testomonial-padding">
        <div className="testomonial-header">
          <p>
            <span className="testomonial-underline">Testom</span>onials
          </p>
        </div>

        {testimonials.map((t, index) => (
          <div className="testomonial-border" key={index}>
            <div className="testomonial-image-container">
              <div className="testomonial-image">
                <img src="/images/inverted.png" alt="Inverted" />
              </div>
              <div className="testomonial-image">
                <img src="/images/Ellipse 102.png" alt="User 1" />
                <img src="/images/Ellipse 103.png" alt="User 2" />
              </div>
            </div>
            <div className="testomonial-text">
              <div className="testomonial-text1">
                <p>{t.text}</p>
              </div>
              <div className="testomonial-text2">
                <p>{t.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="testomonial-form">
        <div className="testomonial-form-container">
          <div className="testomonial-padding-form">
            <div className="testomonial-form-title">
              <p>
                <span className="testomonial-underline">Feedb</span>ack
              </p>
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
    </div>
  );
};

export default Testimonials;
