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

  // ✅ Show list

  // ✅ Show form based on activeTab
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

                {/* Add button only if you want optional toggle */}
                <button
                  className="setting-add-button"
                  onClick={() => setShowAddForm((prev) => !prev)}
                >
                  <img src="/images/addsign.png" alt="" />
                  <span>{showAddForm ? "CLOSE" : "ADD"}</span>
                </button>
              </div>

              {/* ✅ Always show the form for the active tab if needed */}
              {showAddForm && renderForm()}

              {/* ✅ Show list below form */}
              {renderList()}
            </div>
          )
      )}
    </div>
  );
}

export default SettingPage;
