// CourseCard.jsx
import React from 'react';
import './CourseCard.css';
import { useNavigate } from 'react-router-dom';

function CourseCard({ course }) {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/courseview/${course.id}`);
        // ✅ Go to static CourseView page
    };

    return (
        <div className="course-card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
            {/* Image Section */}
            <div className="course-image-wrapper">
                <img src={course.image} alt="Course" className="course-image" />
            </div>

            {/* Text Section */}
            <div className="course-info">
                <h3 className="course-title">{course.title}</h3>

                <div className="course-rating">
                    <div className='star-rating'>
                        <img src="/images/Star 1.png" alt="Star" className="icon" />
                        <img src="/images/Star 1.png" alt="Star" className="icon" />
                        <img src="/images/Star 1.png" alt="Star" className="icon" />
                        <img src="/images/Star 1.png" alt="Star" className="icon" />
                        <img src="/images/Star 1.png" alt="Star" className="icon" />
                        <span>{course.rating}</span>
                        <span className="review-count">({course.reviews})</span>
                    </div>
                    <div>
                        <h3 className="course-price">₹{course.price}</h3>
                    </div>
                </div>

                <div className='course-description'>
                    <div className="course-meta">
                        <span className="course-tag"><p>Courses</p></span>
                        <a href="#" className="course-category">
                            <img src="/images/cap.png" alt="Category Icon" className="icon" />
                            {course.category}
                        </a>
                        <span className="course-duration">
                            <img src="/images/duration.png" alt="Clock" className="icon" />
                            {course.duration}
                        </span>
                    </div>

                    {/* Action Section */}
                    <div className="course-action">
                        <button className="register-button">Register Now →</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseCard;
