import React from 'react';
import '../pages/body.css';
import SearchBar from '../Searchbar/searchBar.jsx';
import '../Searchbar/searchBar.css';

function LeftSidebar({ categories, showDuration, onCategoryChange }) {
  return (
    <div className="left-container">
      <SearchBar />

      <div className="category-title">
        <p>Category</p>
      </div>
      {categories.map((category, index) => (
        <div className="checkbox" key={index}>
          <input
            type="checkbox" // use radio buttons to select only one
            id={`cat-${index}`}
            name="category"
            onChange={() => onCategoryChange(category)} // 👈 update selectedCategory
          />
          <label htmlFor={`cat-${index}`}>{category}</label>
        </div>
      ))}

      {showDuration && (
        <div className="duration-section">
          <div className="category-title">
            <p>Duration</p>
          </div>
          {['1 Month', '2 Months', '3 Months','4 Months','5Months'].map((duration, index) => (
            <div className="checkbox" key={index}>
              <input type="checkbox" id={`dur-${index}`} />
              <label htmlFor={`dur-${index}`}>{duration}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


export default LeftSidebar;
