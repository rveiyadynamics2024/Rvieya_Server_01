import React from 'react';
import '../setting.css'; // Make sure this path is correct relative to this file

function SettingPage() {
  return (
    <div className="setting-container">
      <div className="setting-tab-nav">
        <div className="setting-tab">Courses Management</div>
        <div className="setting-tab">Internship Management</div>
        <div className="setting-tab active-tab">Blog Management</div>
      </div>

      <div className="setting-section-header">
        <p>Blog Management</p>
        <button className="setting-add-button">
          <img src="../public/images/addsign.png" alt="" />
          <span>Add</span>
        </button>
      </div>

      <div className="setting-blog-list">
        {[1, 2, 3, 4].map((_, index) => (
          <div className="setting-blog-card" key={index}>
            <div className="setting-blog-title">
              <img src="../public/images/plus.png" alt="" />
              <div>
                <p className='ash'>Title</p>
                <p>Join Our Exclusive Online Course Webinar!</p>
              </div>
            </div>

            <div className="setting-blog-image">
              <p className='ash'>Image</p>
              <p className="imgg">image.png</p>
            </div>

            <div className="setting-blog-modified">
              <p className='ash'>Modified</p>
              <p>By John Doe | 02/08/2025 | 03:45 PM</p>
            </div>

            <div className="setting-blog-actions">
              <button className="setting-action-btn">
                <img src="../public/images/edit.png" alt="" />
                <span>Edit</span>
              </button>
              <button className="setting-action-btn">
                <img src="../public/images/del.png" alt="" />
                <span>Delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SettingPage;
