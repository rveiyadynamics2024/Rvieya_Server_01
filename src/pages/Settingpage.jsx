import React, { useState } from "react";
import "../setting.css";
import AddCourse from "./AddCourse";
import AddInternship from "./AddInternship";
import AddBlog from "./AddBlog";


function SettingPage() {
  const [activeTab, setActiveTab] = useState("blog");
  const [showAddForm, setShowAddForm] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleSaveForm = () => {
    setShowAddForm(false);
  };

  const handleCancelForm = () => {
    setShowAddForm(false);
  };

  const renderList = () => {
    if (activeTab === "internship") {
      return (
        <div className="setting-blog-list">
          {[1, 2, 3, 4].map((_, index) => (
            <div className="setting-blog-card" key={index}>
              <div className="setting-blog-title">
                <img src="/images/forwardArrow.png" alt="" />
                <div>
                  <p className="ash">Title</p>
                  <p>Join Our Exclusive Online Course Webinar!</p>
                </div>
              </div>
              <div className="setting-blog-image">
                <p className="ash">Image</p>
                <p className="imgg">image.png</p>
              </div>
              <div className="setting-blog-category">
                <p className="ash">Category</p>
                <p> FullStack Development</p>
              </div>
              <div className="setting-blog-category-place">
                <p className="ash">Place</p>
                <p> Banglore</p>
              </div>

              <div className="setting-blog-modified-internship">
                <p className="ash">Modified</p>
                <p>By John Doe | 02/08/2025 | 03:45 PM</p>
              </div>
              <div className="setting-blog-actions2">
                <button className="setting-action-btn">
                  <img src="/images/edit.png" alt="" />
                  <span>Edit</span>
                </button>
                <button className="setting-action-btn">
                  <img src="/images/finaldel.png" alt="" />
                  <span>Delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (activeTab === "courses") {
      return (
        <div className="setting-blog-list">
          {[1, 2, 3, 4].map((_, index) => (
            <div className="setting-main" key={index}>
              <div className="setting-blog-card-course">

                <div
                  className="setting-blog-title"
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                >
                  <img
                    className={`arrow-icon ${expandedIndex === index ? "rotated" : ""}`}
                    src="/images/forwardArrow.png"
                    alt=""
                  />
                  <div className="setting-blog-title-text">
                    <p className="ash">Title</p>
                    <p>Join Our Exclusive Online Course Webinar!</p>
                  </div>
                </div>

                <div className="setting-blog-image">
                  <p className="ash">Image</p>
                  <p className="imgg">image.png</p>
                </div>

                <div className="setting-blog-category">
                  <p className="ash">Category</p>
                  <p>FullStack Development</p>
                </div>

                <div className="setting-blog-modified-course">
                  <p className="ash">Modified</p>
                  <p>By John Doe | 02/08/2025 | 03:45 PM</p>
                </div>

                <div className="setting-blog-actions1">
                  <button className="setting-action-btn1">
                    <img src="/images/edit.png" alt="" />
                    <span>Edit</span>
                  </button>
                  <button className="setting-action-btn1">
                    <img src="/images/finaldel.png" alt="" />
                    <span>Delete</span>
                  </button>
                </div>

                {/* Dropdown section */}

              </div>
              {expandedIndex === index && (
                <div className="dropdown-container">
                  <div className="dropdown-item-parent">
                    <div className="dropdown-item">
                      <p className="ash">Category</p>
                      <p>Fullstack Development</p>
                    </div>
                    <div className="dropdown-item">
                      <p className="ash">Price</p>
                      <p>6000</p>
                    </div>
                    <div className="dropdown-item">
                      <p className="ash">Duration</p>
                      <p>6 months</p>
                    </div>
                    <div className="dropdown-item">
                      <p className="ash">Trainer</p>
                      <p>Fullstack Development</p>
                    </div>
                    <div className="dropdown-item">
                      <p className="ash">experience</p>
                      <p>6 yrs</p>
                    </div>
                    <div className="dropdown-item">
                      <p className="ash">Trainer Name</p>
                      <p>xyz</p>
                    </div>
                    <div className="dropdown-item">
                      <p className="ash">Without Placement</p>
                      <p>6000</p>
                    </div>

                  </div>

                  <div className="dropdown-item-desc">
                    <p className="ash">Description</p>
                    <p>
                      Boost Your Career with Our Exclusive Webinar Register Now! Don’t miss
                      our upcoming free webinar on Career Guidance & Full Stacks Web
                      Development.
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      );
    }

    if (activeTab === "blog") {
      return (
        <div className="setting-blog-list">
          {[1, 2, 3, 4].map((_, index) => (
            <div className="setting-blog-card" key={index}>
              <div className="setting-blog-title">
                <img src="/images/forwardArrow.png" alt="" />
                <div className="setting-blog-title-text">
                  <p className="ash">Title</p>
                  <p>Join Our Exclusive Online Course Webinar!</p>
                </div>
              </div>
              <div className="setting-blog-image">
                <p className="ash">Image</p>
                <p className="imgg">image.png</p>
              </div>
              <div className="setting-blog-category-cat">
                <p className="ash">Category</p>
                <p> FullStack Development</p>
              </div>
              <div className="setting-blog-modified">
                <p className="ash">Modified</p>
                <p>By John Doe | 02/08/2025 | 03:45 PM</p>
              </div>
              <div className="setting-blog-actions">
                <button className="setting-action-btn">
                  <img src="/images/edit.png" alt="" />
                  <span>Edit</span>
                </button>
                <button className="setting-action-btn">
                  <img src="/images/finaldel.png" alt="delete" className="delete-icon" />
                  <span>Delete</span>
                </button>

              </div>
            </div>
          ))}
        </div>
      );
    }

    return null;
  };


  const renderForm = () => {
    if (activeTab === "courses") {
      return <AddCourse onSave={handleSaveForm} onCancel={handleCancelForm} />;
    }
    if (activeTab === "internship") {
      return <AddInternship onSave={handleSaveForm} onCancel={handleCancelForm} />;
    }
    if (activeTab === "blog") {
      return <AddBlog onSave={handleSaveForm} onCancel={handleCancelForm} />;
    }
    return null;
  };

  return (
    <div className="setting-container">
      {/* Tabs */}
      <div className="setting-tab-nav">
        {["courses", "internship", "blog"].map((tab) => (
          <div
            key={tab}
            className={`setting-tab ${activeTab === tab ? "active-tab" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)} Management
          </div>
        ))}
      </div>

      {/* Sections */}
      {["courses", "internship", "blog"].map(
        (tab) =>
          activeTab === tab && (
            <div className="setting-section" key={tab}>
              <div className="setting-section-header">
                <p>
                  <span>{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>{" "}
                  Management
                </p>
                <button
                  className="setting-add-button"
                  onClick={() => setShowAddForm(true)}
                >
                  <img src="/images/addsign.png" alt="" />
                  <span>ADD</span>
                </button>
              </div>

              {/* Show form above list */}
              {showAddForm && renderForm()}

              {renderList()}
            </div>
          )
      )}
    </div>
  );
}

export default SettingPage;
