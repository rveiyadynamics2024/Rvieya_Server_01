import React, { useState } from "react";
import "../setting.css";
import AddCourse from "./AddCourse";
import AddInternship from "./AddInternship";
import AddBlog from "./AddBlog";

function SettingPage() {
  const [activeTab, setActiveTab] = useState("blog");
  const [showAddForm, setShowAddForm] = useState(false);

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
            <img src="/images/plus.png" alt="" />
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
           <div className="setting-blog-category">
            <p className="ash">Place</p>
            <p> Banglore</p>
          </div> <div className="setting-blog-category">
            <p className="ash">Duration</p>
            <p>6 months</p>
          </div>
           <div className="setting-blog-category-price">
            <p className="ash">price</p>
            <p> 6000</p>
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
              <img src="/images/del.png" alt="" />
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
        <div className="setting-blog-card" key={index}>
          <div className="setting-blog-title">
            <img src="/images/plus.png" alt="" />
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
          <div className="setting-blog-category-price">
            <p className="ash">Price</p>
            <p> 6000</p>
          </div>
          <div className="setting-blog-category-trainer">
            <p className="ash">Experience</p>
            <p> 6yr</p>
          </div>
          <div className="setting-blog-category-typp">
            <p className="ash">Type</p>
            <p> Course</p>
          </div>
          <div className="setting-blog-category-trainer">
            <p className="ash">trainer Name</p>
            <p> xyz</p>
          </div>
           <div className="setting-blog-category-trainer">
            <p className="ash">Assitance</p>
            <p>With placment</p>
          </div>
            <div className="setting-blog-category-trainer">
            <p className="ash">About Trainer</p>
            <p>12 year of ....</p>
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
              <img src="/images/del.png" alt="" />
              <span>Delete</span>
            </button>
          </div>
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
            <img src="/images/plus.png" alt="" />
            <div>
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
              <img src="/images/del.png" alt="" />
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
