import React, { useState } from "react";
import LeftSidebar from "../sidebar/leftsidebar.jsx";
import RightContainer from "../RightContainer/rightcontainer.jsx";
import Title from "../Title/title.jsx";
import "../pages/courses.css";
import "../RightContainer/rightcontainer.css";

function Courses() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    'All',
    'Mechanical',
    'Frontend Development',
    'Backend Development',
    'Full Stack Development',
    'Programming Languages',
    'Hardware',
    'Business',
    'Marketing',
    'Social Media'
  ];

  return (
    <div className="courses-page">
      <Title text="Courses" underline="Course" />
      <div className="padding-container">
        <LeftSidebar
          categories={categories}
          // No duration section in Courses page
          onCategoryChange={setSelectedCategory}
        />
        <RightContainer selectedCategory={selectedCategory} />
      </div>
    </div>
  );
}

export default Courses;
