import React from 'react';
import '../Blogdetail.css';

const BlogDetail = () => {
    return (
        <>
            <div className="bgdetail-image-container">
                <div className="bgdetail-back-img">
                    <div className="bgdetail-description-text">
                        <p>🚀 Join Our Exclusive Online Course Webinar!</p>
                    </div>
                    <div className="bgdetail-desc">
                        <p className='' >
                            Boost Your Career with Our Exclusive Webinar Register Now! Are you looking to super charge
                            your career and stand out in the competitive job market? Don’t miss our upcoming free
                            webinar on Career Guidance & Full Stacks Web Development. This is your chance to learn from
                            experts and gain insights that can transform your professional journey.
                        </p>
                    </div>
                    <div className="bgdetail-reg-btn">
                        <button>Register Now</button>
                    </div>
                </div>
            </div>

            <div className="bgdetail-image">
                <img src="/images/webinar.png" alt="Webinar" />
            </div>

            <div className="bgdetail-intro">
                <div className="bgdetail-intro-text">
                    <p>Presented By</p>
                </div>
                <div className="bgdetail-company-name">
                    <p>Rveiya Dynamics Private Limited</p>
                </div>
                <div className="bgdetail-intro-desc">
                    <p>
                        Are you ready to take the next big step in your career? Don’t miss our exclusive live webinar
                        focused on Career Guidance and Job Assistance. This session is packed with insights and expert
                        strategies to help you build a standout resume, sharpen your skills, and land your dream job.
                    </p>
                </div>

                <div className="bgdetail-learn">
                    <div className="bgdetail-learn-text">
                        <p>🔍 What You’ll Learn:</p>
                    </div>
                    <div className="bgdetail-learn-list">
                        <ul>
                            <li>Full Stack Development Using AI</li>
                            <li>Resume Building Using AI</li>
                            <li>50+ Cyber Security Tools</li>
                            <li>Career Guidance and Job Strategies</li>
                        </ul>

                        <div className="bgdetail-speakers">
                            <div className="bgdetail-learn-text">🎙️ Our Expert Speakers:</div>
                            <div>
                                <ul>
                                    <li>Yashwanth Reddy P – Full Stack Web Development Expert </li>
                                    <li>T Mahendra Sharaj – Career Guidance Specialist</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bgdetail-Event-detail">
                            <div className="bgdetail-learn-text">
                                <p>📅 Event Details:</p>
                            </div>
                            <div>
                                <ul>
                                    <li>27 July 2025</li>
                                    <li>Time: 10:00 AM to 12:00 PM</li>
                                    <li>Platform: Online (Link will be shared upon registration)</li>
                                    <li>Registration Fee: FREE</li>
                                </ul>
                            </div>

                            <div className="bgdetail-attend">
                                <div className="bgdetail-learn-text">
                                    <p>🔗 Why You Should Attend:</p>
                                </div>
                                <div>
                                    <ul>
                                        <li>Get hands-on insights into the latest industry tools and technologies</li>
                                        <li>Learn how to create a powerful AI-enhanced resume</li>
                                        <li>Receive personalized career guidance from experienced professionals</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bgdetail-register">
                                <p>🎫 Limited Seats Available – Register Now and Secure Your Spot!</p>
                            </div>

                            <div className="bgdetail-reg-btns">
                                <button>Register Now →</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogDetail;
