import React from "react";
import "../AddCourse.css"; // reuse same styles

function AddBlog({ onSave, onCancel }) {
  const handleSave = (e) => {
    e.preventDefault();
    onSave();
  };

  return (
    <div className="settcour-container">
      <div className="settcour-padding">
        {/* Header */}
        <div className="settcour-add-course">
          <p>Add Blog</p>
        </div>

        <div className="settcour-hedd">
          {/* Title */}
          <div className="settcour-title">
                      <div className="settcour-p"><p>Title</p></div>
                      <div className=" settcour-inputss">  <input type="text" placeholder="Enter Blog Title" /></div>
          
          </div>

          {/* Description */}
          <div className="settcour-desc">
            <div className="settcour-p"><p>Description</p></div>
            <textarea placeholder="Enter Blog Description"></textarea>
          </div>

          {/* Upload Image */}
          <div className="settcour-image">
            <div className="settcour-p"><p>Upload Image</p></div>
            <label className="settcour-upload-box" htmlFor="blog-fileUpload">
              <img src="../images/upload.png" alt="Upload Icon" />
              <p className="uplood">Upload Image</p>
              <input type="file" id="blog-fileUpload" accept="image/*" />
            </label>
          </div>

          {/* Buttons */}
          <div className="settcour-buttons">
            <div className="settcour-cancel">
              <button type="button" onClick={onCancel}>Cancel</button>
            </div>
            <div className="settcour-save">
              <button type="submit" onClick={handleSave}>SAVE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export const renderList = () => (
  <div className="setting-blog-list">
    {[1, 2, 3, 4].map((_, index) => (
      <div className="setting-blog-card" key={index}>
        <div className="setting-blog-title">
          <img src="/images/plus.png" alt="plus" />
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
          <p>FullStack Development</p>
        </div>

        <div className="setting-blog-modified">
          <p className="ash">Modified</p>
          <p>By John Doe | 02/08/2025 | 03:45 PM</p>
        </div>

        <div className="setting-blog-actions">
          <button className="setting-action-btn">
            <img src="/images/edit.png" alt="edit" />
            <span>Edit</span>
          </button>
          <button className="setting-action-btn">
            <img src="/images/finaldel.png" alt="delete" />
            <span>Delete</span>
          </button>
        </div>
      </div>
    ))}
  </div>
);

export default AddBlog;
