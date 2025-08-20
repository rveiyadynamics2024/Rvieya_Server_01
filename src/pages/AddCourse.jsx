import React, { useState } from "react";
import "../AddCourse.css";


function AddCourse({ onSave, onCancel }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    contentTitle: "",
    contentDesc: "",
    speakerName: "",
    speakerRole: "",
    speakerExp: "",
    eventDate: "",
    eventTime: "",
    eventMode: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (onSave) {
      onSave(formData);
    }
  };

  return (
    <div className="settcour-container">
      <div className="settcour-padding">
        <div className="settcour-add-course">
          <p>Add Blog</p>
        </div>

        <div className="settcour-hedd">
          {/* Title */}
          <div className="settcour-inputss">
            <div className="settcour-title">
              <div className="settcour-p">
                <p>Title</p>
              </div>
              <div>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter Title"
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="settcour-desc" style={{ paddingTop: "10px" }}>
            <div className="settcour-p">
              <p>Description</p>
            </div>
            <div>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter The Description"
              />
            </div>
          </div>

          {/* Image Upload */}
          <div className="settcour-image">
            <div className="settcour-p">
              <p>Upload Image</p>
            </div>
            <label className="settcour-upload-box" htmlFor="fileUpload">
              <img src="../public/images/upload.png" alt="Upload Icon" />
              <p>{formData.image ? formData.image.name : "Upload Image"}</p>
            </label>
            <input
              type="file"
              id="fileUpload"
              name="image"
              accept="image/*"
              onChange={handleChange}
            />
          </div>

          {/* Content Section */}
          <div className="settcour-heading-content">
            <p>
              <span>Conten</span>t
            </p>
          </div>

          <div className="settcour-inputss">
            <div className="settcour-title">
              <div className="settcour-p">
                <p>Title</p>
              </div>
              <div>
                <input
                  type="text"
                  name="contentTitle"
                  value={formData.contentTitle}
                  onChange={handleChange}
                  placeholder="Enter Title"
                />
              </div>
            </div>
            <div className="settcour-desc" style={{ paddingTop: "20px" }}>
              <div className="settcour-p">
                <p>Description</p>
              </div>
              <div>
                <textarea
                  name="contentDesc"
                  value={formData.contentDesc}
                  onChange={handleChange}
                  placeholder="Enter The Description"
                />
              </div>
            </div>
          </div>

          {/* Speaker Details */}
          <div className="settcour-border-detail">
            <div className="settcour-heading-content">
              <p>
                <span>Speaker Details</span>
              </p>
            </div>

            <div className="settcour-speaker-detail">
              <div className="settcour-details">
                <div className="settcour-p">
                  <p>Name</p>
                </div>
                <div>
                  <input
                    type="text"
                    name="speakerName"
                    value={formData.speakerName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="settcour-details">
                <div className="settcour-p">
                  <p>Role</p>
                </div>
                <div>
                  <input
                    type="text"
                    name="speakerRole"
                    value={formData.speakerRole}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="settcour-details">
                <div className="settcour-p">
                  <p>Years of Experience</p>
                </div>
                <div>
                  <input
                    type="text"
                    name="speakerExp"
                    value={formData.speakerExp}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* Event Details */}
            <div className="settcour-heading-content">
              <p>
                <span>Event Details</span>
              </p>
            </div>

            <div className="settcour-speaker-detail">
              <div className="settcour-details">
                <div className="settcour-p">
                  <p>Date</p>
                </div>
                <div>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="settcour-details">
                <div className="settcour-p">
                  <p>Time</p>
                </div>
                <div>
                  <input
                    type="time"
                    name="eventTime"
                    value={formData.eventTime}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="settcour-details">
                <div className="settcour-p">
                  <p>Mode</p>
                </div>
                <div className="settcour-mode-select">
                  <select
                    name="eventMode"
                    value={formData.eventMode}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="online">Online</option>
                    <option value="offline">Offline</option>
                    <option value="hybrid">Hybrid</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Final Action Buttons (at bottom only) */}
          <div className="settcour-buttons">
            <div className="settcour-cancel">
              <button type="button" onClick={onCancel}>
                Cancel
              </button>
            </div>
            <div className="settcour-save">
              <button type="submit" onClick={handleSave}>
                SAVE
              </button>
            </div>
          </div>
          {/* End */}
        </div>
      </div>
    </div>
  );
}

export default AddCourse;
