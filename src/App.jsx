import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Component imports
import Header from './header/header';
import Footer from './footer/footer';

// Page imports
import Home from './pages/home';
import Register from "./pages/register"; 
import Courses from './pages/courses';
import Internships from './pages/Internships';
import Blog from './pages/Blog';
import Testimonials from './pages/Testimonials';
import LMSLogin from './pages/Settingpage';
import Services from './pages/Services'; // ✅ Dynamic service page
import PaymentOptions from './pages/PaymentOptions';
import CourseView1 from './courseView1';
import CourseView2 from './courseView2';
import BlogDetail from './pages/BlogDetail';
import SettingPage from './pages/Settingpage';
import FeedbackPage from './pages/feedback'; // ✅ Feedback page

// CSS imports
import './header/header.css';
import './footer/footer.css';
import './RightContainer/rightcontainer.css';
import './pages/body.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="main-container">
          <Header />

          <Routes>
            {/* Default Home */}
            <Route path="/" element={<Home />} />

            {/* Main Pages */}
            <Route path="/courses" element={<Courses />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/register" element={<Register />} />
            <Route path="/payment" element={<PaymentOptions />} />

            {/* Blog */}
            <Route path="/blogdetail/:id" element={<BlogDetail />} />

            {/* Dynamic Services Page */}
            <Route path="/services/:type" element={<Services />} />

            {/* Dynamic Course Views */}
            <Route path="/courseview/:id" element={<CourseView1 />} />
            <Route path="/courseview2/:id" element={<CourseView2 />} />

            {/* Settings & Feedback */}
            <Route path="/settings" element={<SettingPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />

            {/* Login (LMS) - agar chahiye toh rakh lo */}
            <Route path="/login" element={<LMSLogin />} />
          </Routes>

          <div style={{ paddingTop: '20px' }}>
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
