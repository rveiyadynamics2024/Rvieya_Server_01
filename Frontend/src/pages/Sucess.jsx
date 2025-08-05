// // SuccessPopup.jsx
// import React from "react";
// import "../Sucess.css";

// const SuccessPopup = ({ onClose }) => {
//     return (
//         <div className="success-overlay">
//             <div className="success-container">
//                 <div className="full-container">
//                     <div className="sucess-img">  <img src="/images/success.png" className="success-second-img" alt="Success" /></div>
//                     <div className="sucess-text">  <h1 >You have successfully registered</h1></div>
//                     <div className="sucess-para"><p>You have enrolled for Python Full Stack Development Course successfully.</p></div>

//                     <div className="sucess-df">
//                         <div className="success-btn-group">
//                             <button className="success-button-one">
//                                 <img src="/images/internet.png" alt="LMS" />
//                                 <span>Login to LMS</span>
//                             </button>
//                         </div>
//                         <div className="success-btn-group">
//                             <button className="success-button-two">
//                                 <img src="/images/whatsapp.png" alt="WhatsApp" />
//                                 <span>Join in Whatsapp</span>
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 <button onClick={onClose} className="success-close-btn">×</button>
//             </div>
//         </div>
//     );
// };

// export default SuccessPopup;

// SuccessPopup.jsx
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../Sucess.css";

const SuccessPopup = ({ onClose }) => {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleLoginClick = () => {
        navigate('/userlogin'); // Navigate to the user login page
    };

    const handleWhatsappClick = () => {
        // Replace this with your actual WhatsApp group link
        const whatsappLink = " https://chat.whatsapp.com/Kg5MZRaIzYLL9fp5YJtWqF?mode=ac_t ";
        window.open(whatsappLink, "_blank"); // Opens the link in a new tab
    };

    return (
        <div className="success-overlay">
            <div className="success-container">
                <div className="full-container">
                    <div className="sucess-img"> <img src="/images/success.png" className="success-second-img" alt="Success" /></div>
                    <div className="sucess-text"> <h1 >You have successfully registered</h1></div>
                    <div className="sucess-para"><p>You have enrolled for Python Full Stack Development Course successfully.</p></div>

                    <div className="sucess-df">
                        <div className="success-btn-group">
                            <button className="success-button-one" onClick={handleLoginClick}>
                                <img src="/images/internet.png" alt="LMS" />
                                <span>Login to LMS</span>
                            </button>
                        </div>
                        <div className="success-btn-group">
                            <button className="success-button-two" onClick={handleWhatsappClick}>
                                <img src="/images/whatsapp.png" alt="WhatsApp" />
                                <span>Join in Whatsapp</span>
                            </button>
                        </div>
                    </div>
                </div>

                <button onClick={onClose} className="success-close-btn">×</button>
            </div>
        </div>
    );
};

export default SuccessPopup;
