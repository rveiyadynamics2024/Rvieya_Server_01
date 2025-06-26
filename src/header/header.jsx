import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLMSOpen, setIsLMSOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const toggleServicesDropdown = () => setIsServicesOpen(prev => !prev);
  const toggleLMSDropdown = () => setIsLMSOpen(prev => !prev);

  // ✅ Auto-close dropdowns and mobile menu on route change
  useEffect(() => {
    setIsServicesOpen(false);
    setIsLMSOpen(false);
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="header">
      <div className="logo">
        <img src="/images/logo.png" alt="Logo" />
      </div>

      {/* Desktop Navigation */}
      <div className="right-header">
        <div><NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}>Home</NavLink></div>

        <div className="dfng dropdown" onClick={toggleServicesDropdown}>
          <span className="nav-link">Services</span>
          <img src="/images/Polygon 44.png" alt="" />
          {isServicesOpen && (
            <ul className="dropdown-menu">
              <li><NavLink to="/services/edutech" className="dropdown-item">EduTech</NavLink></li>
              <li><NavLink to="/services/it-services" className="dropdown-item">IT Services</NavLink></li>
              <li><NavLink to="/services/digital-marketing" className="dropdown-item">Digital Marketing</NavLink></li>
            </ul>
          )}
        </div>

        <div><NavLink to="/courses" className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}>Courses</NavLink></div>
        <div><NavLink to="/internships" className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}>Internships</NavLink></div>
        <div><NavLink to="/blog" className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}>Blog</NavLink></div>
        <div><NavLink to="/testimonials" className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}>Testimonials</NavLink></div>

        <div className="dfng dropdown" onClick={toggleLMSDropdown}>
          <span className="nav-link">LMS Login</span>
          <img src="/images/Polygon 44.png" alt="" />
          {isLMSOpen && (
            <ul className="dropdown-menu">
              <li><NavLink to="/lms/student" className="dropdown-item">Student Portal</NavLink></li>
              <li><NavLink to="/lms/instructor" className="dropdown-item">Instructor Portal</NavLink></li>
            </ul>
          )}
        </div>
      </div>

      {/* Hamburger for Mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <img src="/images/hamburger.png" alt="Menu" />
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <NavLink to="/" className="nav-link">Home</NavLink>

          <div className="dfng dropdown" onClick={toggleServicesDropdown}>
            <span className="nav-link">Services</span>
            <img src="/images/Polygon 44.png" alt="" />
            {isServicesOpen && (
              <ul className="dropdown-menu">
                <li><NavLink to="/services/edutech" className="dropdown-item">EduTech</NavLink></li>
                <li><NavLink to="/services/it-services" className="dropdown-item">IT Services</NavLink></li>
                <li><NavLink to="/services/digital-marketing" className="dropdown-item">Digital Marketing</NavLink></li>
              </ul>
            )}
          </div>

          <NavLink to="/courses" className="nav-link">Courses</NavLink>
          <NavLink to="/internships" className="nav-link">Internships</NavLink>
          <NavLink to="/blog" className="nav-link">Blog</NavLink>
          <NavLink to="/testimonials" className="nav-link">Testimonials</NavLink>

          <div className="dfng dropdown" onClick={toggleLMSDropdown}>
            <span className="nav-link">LMS Login</span>
            <img src="/images/Polygon 44.png" alt="" />
            {isLMSOpen && (
              <ul className="dropdown-menu">
                <li><NavLink to="/lms/student" className="dropdown-item">Student Portal</NavLink></li>
                <li><NavLink to="/lms/instructor" className="dropdown-item">Instructor Portal</NavLink></li>
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
