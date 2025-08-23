import React from 'react';
import { useLocation } from 'react-router-dom';
import '../pages/body.css';
import SearchBar from '../Searchbar/searchBar.jsx';
import '../Searchbar/searchBar.css';

function LeftSidebar({ categories, showDuration, onCategoryChange }) {
  const location = useLocation();

  // Show Placement section only if on '/courses' route
  const isCoursePage = location.pathname === '/courses';

  return (
    <div className="left-container">
      <SearchBar />

      {/* Category Section */}
      <div className="category-title">
        <p>Category</p>
      </div>
      {categories.map((category, index) => (
        <div className="checkbox" key={index}>
          <input
            type="checkbox"
            id={`cat-${index}`}
            name="category"
            onChange={() => onCategoryChange(category)}
          />
          <label htmlFor={`cat-${index}`}>{category}</label>
        </div>
      ))}

      {/* Placement Section - Only on Courses Page */}
      {isCoursePage && (
        <div className="placement-section">
          <div className="category-title">
            <p>Placement</p>
          </div>
          {['With Placement', 'Without Placement'].map((placement, index) => (
            <div className="checkbox" key={index}>
              <input type="checkbox" id={`place-${index}`} name="placement" />
              <label htmlFor={`place-${index}`}>{placement}</label>
            </div>
          ))}
        </div>
      )}

      {/* Duration Section */}
      {showDuration && (
        <div className="duration-section">
          <div className="category-title">
            <p>Duration</p>
          </div>
          {['1 Month', '2 Months', '3 Months', '4 Months', '5 Months'].map(
            (duration, index) => (
              <div className="checkbox" key={index}>
                <input type="checkbox" id={`dur-${index}`} />
                <label htmlFor={`dur-${index}`}>{duration}</label>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default LeftSidebar;
