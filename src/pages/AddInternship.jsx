function AddInternship({ onSave, onCancel }) {
     const handleSave = (e) => {
    e.preventDefault();
    onSave();
  };
  return (
    <div className="settcour-container">
      
      <div className="settcour-padding">
        <div className="settcour-add-course">
          <p>Add Course</p>
        </div>

        <div className="settcour-hedd">
          <div className="settcour-inputs">
            <div className="settcour-title">
              <div className="settcour-p"><p>Title</p></div>
              <input type="text" placeholder="Enter Title" />
            </div>

            <div className="settcour-title">
              <div className="settcour-p"><p>Category</p></div>
              <select id="settcour-category" name="category">
                <option value="fullstack">Select</option>
                <option value="fullstack">Full Stack Development</option>
                <option value="datascience">Data Science</option>
                <option value="uiux">UI/UX Design</option>
                <option value="cybersecurity">Cybersecurity</option>
                <option value="cloud">Cloud Computing</option>
              </select>
            </div>
             <div className="settcour-title">
              <div className="settcour-p"><p>Place</p></div>
              <input type="text" placeholder="Enter Place" />
            </div>
            

            <div className="settcour-title">
              <div className="settcour-p"><p>Type of Enrollment</p></div>
              <select id="settcour-enrolment" name="enrolment">
                <option value="online">Select</option>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
                <option value="hybrid">Hybrid (Online + Offline)</option>
              </select>
            </div>
            <div className="settcour-title">
              <div className="settcour-p"><p>Duration</p></div>
              <select id="settcour-enrolment" name="enrolment">
                <option value="online">Select</option>
                <option value="online">3months</option>
                <option value="offline">4months</option>
                <option value="hybrid">6months</option>
              </select>
            </div>

            <div className="settcour-title">
              <div className="settcour-p"><p>Price</p></div>
              <input type="text" placeholder="Enter Price" />
            </div>
          </div>

          <div className="settcour-desc">
            <div className="settcour-p"><p>Description</p></div>
            <textarea placeholder="Enter The Description"></textarea>
          </div>

          <div className="settcour-image">
            <div className="settcour-p"><p>Upload Image</p></div>
            <label className="settcour-upload-box" htmlFor="settcour-fileUpload">
              <img src="../images/upload.png" alt="Upload Icon" />
              <p className="uplood">Upload Image</p>
              <input type="file" id="settcour-fileUpload" accept="image/*" />
            </label>
          </div>

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
export default AddInternship;
