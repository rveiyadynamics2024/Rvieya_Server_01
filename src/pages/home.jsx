import React from 'react';
import '../Home.css';

import heroImg from '../assets/2b3385cded9b07c99fab8b38d0a637871d1397ee.png';
import edutechImg from '../assets/Screenshot 2025-06-14 172337.png';
import itImg from '../assets/Screenshot 2025-06-14 172407.png';
import marketingImg from '../assets/Screenshot 2025-06-14 172419.png';

import pythonCourse from '../assets/a034c01a1acda2760665a07db3a2d9331dff2cca.png';
import javaCourse from '../assets/db6d3c55c5b5e1d85b27165d3c95b45035890d22.png';
import webCourse from '../assets/f63a51c02ca45faed99f4292225b201591f6a296.png';

import socialMediaImg from '../assets/18c7415f258bf7fe2313481c5bbd4ea6841e06d6.png';
import digitalMarketingImg from '../assets/f8b73ada831a8f7f0427b2414aa1ebd6d534c144.png';
import contentWritingImg from '../assets/88f338eca8ec5274eb370ae0d6e16d12fd036115.png';

import p1 from '../assets/a4e4a90609a5894ee3e5a5e074379bf52e3dfd0f.png';
import p2 from '../assets/fdfa21ff3e734ac4591169d45eeae7c42d1976f1.png';
import p3 from '../assets/dbd1bf0581113f85b43de05ea96db048ecea67bf.png';
import p4 from '../assets/54ee2aacecc03823d3b0706347e55eba604970d3.png';
import p5 from '../assets/9edb8055ca0d2f7cb4fa352d15b92abde984c741.png';
import p6 from '../assets/dd008b27362ee25e8cdf434eba5ac5967765e5ab.png';

function HomepageContent() {
  return (
    <>
      <div className="home-section1">
        <div className="home-sec-part1">
          <h1>Empowering Students Through<br />Innovative Learning</h1>
          <p>
            At <strong>"RVEIYA DYNAMICS"</strong>, we specialize in providing industry-relevant<br />
            courses and internships for students, taught by experienced professionals<br />
            from IIT and the industry.
          </p>
          <div className="home-btn">
            <button>Explore Courses</button>
            <button>Register</button>
          </div>
        </div>
        <div className="home-sec-part2">
          <img className="home-img3" src={heroImg} alt="hero" />
        </div>
      </div>

      <div className="home-section2">
        {[{
          img: edutechImg, title: 'Edutech',
          text: 'Innovating the Future of Learning. At EdTech, we are committed to revolutionizing education through cutting-edge technology.'
        }, {
          img: itImg, title: 'IT Services',
          text: 'Empowering businesses with innovative IT solutions that drive productivity and efficiency.'
        }, {
          img: marketingImg, title: 'Digital Marketing',
          text: 'Boost your brand\'s online presence with powerful strategies and digital campaigns.'
        }].map((item, i) => (
          <div className="home-box" key={i}>
            <img className="home-boximg" src={item.img} alt={item.title} />
            <div className="home-content">
              <div className="home-headline">{item.title}</div>
              <div className="home-explain">{item.text}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="home-section3">
        <h3 className="home-who-heading">Who We Are</h3>
        <p className="home-who-desc">
                                                         RVEIYA DYNAMICS PVT LTD is a Skill Development and EdTech company, established on 21st November 2024, and approved by Startup India and MSME. We specialize in providing affordable, flexible, and industry-relevant educational solutions through live online classes, internships, mentorship programs, and project based learning for students in BTech, MTech, BBA, BCA, and general degree programs. Our offerings include both software courses such as C-Language, Python, Full Stack Development, Machine Learning, and hardware courses like Embedded Systems and VLSI, all tailored to bridge the gap between academic education and real-world industry demands. With a mission to make high-quality education accessible, we focus on practical learning and job readiness, equipping students with the skills they need to succeed in today’s competitive job market.
        </p>

        <h4 className="home-service-heading home-color">We are offering the below services:</h4>
        <p className="home-who-desc">RVEIYA DYNAMICS PVT LTD is committed to empowering students...</p>
        <ul className="home-service-list">
          <li>Affordable Courses: Access high-quality, industry-aligned training at cost-effective prices.</li>
          <li>Flexible Payment Plans: Make education more accessible with convenient, term-wise installment options.</li>
          <li>Live Online Classes: Engage in interactive, real-time learning.</li>
          <li>Internship Opportunities: Apply classroom knowledge in real-world scenarios.</li>
          <li>Project-Based Learning: Build your portfolio with live, industry-grade projects.</li>
          <li>One-on-One Mentorship: Personalized career guidance and support.</li>
          <li>Industry-Recognized Certifications: Enhance employability with course-completion credentials.</li>
          <li>Comprehensive Course Offerings:
            <ul>
              <li>Software: C Programming, Python, Full Stack Development, Machine Learning</li>
              <li>Hardware: Embedded Systems, VLSI</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="home-section4">
        <div className="home-heading-row">
          <h3>Courses We Offer</h3>
          <a href="#" className="home-view-all">View All Courses</a>
        </div>

        <div className="home-card-grid">
          {[{
            img: pythonCourse,
            title: "Python Fullstack Development",
            price: "₹219"
          }, {
            img: javaCourse,
            title: "Java Fullstack Development",
            price: "₹699"
          }, {
            img: webCourse,
            title: "Web Development Fullstack",
            price: "₹119"
          }].map((course, index) => (
            <div className="home-card" key={index}>
              <img src={course.img} alt={course.title} />
              <div className="home-card-body">
                <h4 className="home-color">{course.title}</h4>
                <div className="home-ratings">
                  <p className="home-rating1">4.5</p>
                  <p className="home-rating2">★★★★★</p>
                  <p className="home-rating3">(1,235)</p>
                </div>
                <div className="home-time_money">
                  <p className="home-duration"><i className="fa-regular fa-clock"></i> &nbsp; 3 Months</p>
                  <p className="home-price">{course.price}</p>
                </div>
                <a href="#" className="home-register-btn">Register Now →</a>
              </div>
            </div>
          ))}
        </div>

        <div className="home-heading-row">
          <h3>Internships We Offer</h3>
          <a href="#" className="home-view-all">View All Internships</a>
        </div>

        <div className="home-card-grid">
          {[{
            img: socialMediaImg,
            title: "Social Media Marketing",
            price: "₹219"
          }, {
            img: digitalMarketingImg,
            title: "Digital Marketing",
            price: "₹699"
          }, {
            img: contentWritingImg,
            title: "Content Writing",
            price: "₹119"
          }].map((internship, index) => (
            <div className="home-card" key={index}>
              <img src={internship.img} alt={internship.title} />
              <div className="home-card-body">
                <h4 className="home-color">{internship.title}</h4>
                <div className="home-ratings">
                  <p className="home-rating1">4.5</p>
                  <p className="home-rating2">★★★★★</p>
                  <p className="home-rating3">(1,235)</p>
                </div>
                <div className="home-time_money">
                  <p className="home-duration"><i className="fa-regular fa-clock"></i> &nbsp; 3 Months</p>
                  <p className="home-price">{internship.price}</p>
                </div>
                <a href="#" className="home-register-btn">Register Now →</a>
              </div>
            </div>
          ))}
        </div>

        <div className="home-promoters-row">
          {[p1, p2, p3, p4, p5, p6].map((img, i) => (
            <img key={i} src={img} alt={`partner-${i}`} />
          ))}
        </div>
      </div>
    </>
  );
}

export default HomepageContent;
