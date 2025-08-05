// import React from 'react';
// import '../testomonial.css';

// const Testimonials = () => {
//   const testimonials = Array(4).fill({
//     text: `I have invested considerable time researching various online platforms, its course offerings,
//     learning programs, instructor quality, pricing structures, refund policies, as well as
//     analyzing user feedback.`,
//     author: 'By John Doe | 27th July 2025',
//   });

//   return (
//     <div className="testomonial-container">
//       <div className="testomonial-padding">
//         <div className="testomonial-header">
//           <p>
//             <span className="testomonial-underline">Testom</span>onials
//           </p>
//         </div>

//         {testimonials.map((t, index) => (
//           <div className="testomonial-border" key={index}>
//             <div className="testomonial-image-container">
//               <div className="testomonial-image">
//                 <img src="/images/inverted.png" alt="Inverted" />
//               </div>
//               <div className="testomonial-image">
//                 <img src="/images/Ellipse 102.png" alt="User 1" />
//                 <img src="/images/Ellipse 103.png" alt="User 2" />
//               </div>
//             </div>
//             <div className="testomonial-text">
//               <div className="testomonial-text1">
//                 <p>{t.text}</p>
//               </div>
//               <div className="testomonial-text2">
//                 <p>{t.author}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="testomonial-form">
//         <div className="testomonial-form-container">
//           <div className="testomonial-padding-form">
//             <div className="testomonial-form-title">
//               <p>
//                 <span className="testomonial-underline">Feedb</span>ack
//               </p>
//             </div>

//             <div className="testomonial-name">
//               <p>Name</p>
//               <input type="text" />
//             </div>

//             <div className="testomonial-feedback">
//               <p>Feedback</p>
//               <textarea cols="30" rows="5"></textarea>
//             </div>

//             <div className="testomonial-submit">
//               <button>Submit</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;
import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import '../testomonial.css';

const Testimonials = () => {
  const testimonials = Array(4).fill({
    text: `I have invested considerable time researching various online platforms, its course offerings,
    learning programs, instructor quality, pricing structures, refund policies, as well as
    analyzing user feedback.`,
    author: 'By John Doe | 27th July 2025',
  });

  // --- NEW: State for the feedback form ---
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(''); // To show success or error messages

  // --- NEW: Function to handle form submission ---
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setLoading(true);
    setMessage('');

    if (!name || !feedback) {
        setMessage('Please fill in both your name and feedback.');
        setLoading(false);
        return;
    }

    try {
        const response = await axios.post('/api/feedback/submit', {
            name,
            feedback
        });

        setMessage(response.data.message);
        // Clear the form on success
        setName('');
        setFeedback('');
    } catch (error) {
        setMessage(error.response?.data?.message || 'There was an error submitting your feedback.');
    } finally {
        setLoading(false);
    }
  };

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
          {/* --- UPDATED: Form now uses state and handleSubmit --- */}
          <form onSubmit={handleSubmit}>
            <div className="testomonial-padding-form">
              <div className="testomonial-form-title">
                <p>
                  <span className="testomonial-underline">Feedb</span>ack
                </p>
              </div>

              <div className="testomonial-name">
                <p>Name</p>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                />
              </div>

              <div className="testomonial-feedback">
                <p>Feedback</p>
                <textarea 
                  cols="30" 
                  rows="5"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Share your thoughts..."
                ></textarea>
              </div>

              {/* --- NEW: Display success or error messages --- */}
              {message && <p style={{ textAlign: 'center', margin: '10px 0' }}>{message}</p>}

              <div className="testomonial-submit">
                <button type="submit" disabled={loading}>
                  {loading ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
