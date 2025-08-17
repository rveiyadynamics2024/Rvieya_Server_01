import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../testomonial.css';
import { useNavigate } from 'react-router-dom';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/testimonials');
        setTestimonials(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTestimonials();
  }, []);

  return (
    <div className="testomonial-container">
      <div className="testomonial-padding">
        <div className="testomonial-header">
          <div><p><span className="testomonial-underline">Testom</span>onials</p></div>
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
            </div>
            <div className="testomonial-text">
              <div className="testomonial-text1"><p>{t.feedback}</p></div>
              <div className="testomonial-text2"><p>By {t.name} | {new Date(t.date).toLocaleDateString()}</p></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
