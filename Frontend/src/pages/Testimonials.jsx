import React from 'react';
import '../testomonial.css';
import { useNavigate } from 'react-router-dom';
const Testimonials = () => {
  const navigate = useNavigate();

  const testimonials = Array(4).fill({
    text: `I have invested considerable time researching various online platforms, its course offerings,
    learning programs, instructor quality, pricing structures, refund policies, as well as
    analyzing user feedback.`,
    author: 'By John Doe | 27/08/2025',
  });
    return (
      <div className="testomonial-container">
        <div className="testomonial-padding">
          <div className="testomonial-header">
            <div><p>
              <span className="testomonial-underline">Testom</span>onials
            </p></div>
            <div className="testomonial-feedback">
            <button onClick={() => navigate('/feedback')}>Give Feedback</button>
          </div>
          </div>

          {testimonials.map((t, index) => (
            <div className="testomonial-border" key={index}>
              <div className="testomonial-image-container">
                <div className="testomonial-image">
                  <img src="/images/inverted.png" alt="Inverted" />
                </div>
                <div className="testomonial-image">
                  <img src="../public/images/Group.png" alt="" className="home-circle big" />

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


      </div>
    );
  };

  export default Testimonials;
