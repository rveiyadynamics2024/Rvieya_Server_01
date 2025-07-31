import React from 'react';
import './footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-wrapper">
                <div className="dfx">
                    {/* Logo and Title */}
                    <div className="df">
                        <div className="logoimg">
                            <img src="/images/logo.png" alt="Logo" />
                        </div>
                        <div className="logo-title">
                            <p>RIVEYA DYNAMICS PRIVATE LIMITED</p>
                            <div className="copyright">
                                © Copyright @rveiyadynamicsprivatelimited
                            </div>
                        </div>
                    </div>

                    {/* Our Company Section */}
                    <div className='list'>
                        <div className="span-elem">
                            <div className="span">
                                <p><span>Our C</span>ompany</p>
                            </div>
                            <div><p>About</p></div>
                            <div><p>Blog</p></div>
                            <div><p>Courses</p></div>
                            <div><p>Internships</p></div>
                            <div><p>Contact</p></div>
                        </div>
                    </div>

                    {/* Reach Us Section */}
                    <div className="details">
                        <div className="details-title">
                            <p>Reach us</p>
                        </div>

                        <div className="df text">
                            <div><img src="/images/location.png" alt="Location" /></div>
                            <div><p>1st sector HSR Layout, Bangalore, Karnataka 560102</p></div>
                        </div>

                        <div className="df text">
                            <div><img src="/images/call.png" alt="Call" /></div>
                            <div><p>+91 6303251526</p></div>
                        </div>

                        <div className="df text">
                            <div><img src="/images/email.png" alt="Email" /></div>
                            <div><p>parvez.ceo@rveiya.tech</p></div>
                        </div>

                        {/* Social Icons */}
                        <div className="dfimg">
                            <img src="/images/facebook.png" alt="Facebook" />
                            <img src="/images/insta.png" alt="Instagram" />
                            <img src="/images/twitter.png" alt="Twitter" />
                            <img src="/images/linkedin.png" alt="LinkedIn" />
                            <img src="/images/youtube.png" alt="YouTube" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
