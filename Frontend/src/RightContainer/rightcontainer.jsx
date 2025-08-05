import React from 'react';
import CourseList from '../cards/CourseList';
import './rightcontainer.css';

function RightContainer({ selectedCategory }) {
  const allCourses = [
    {
      id: 1,
      title: "Python Fullstack Development",
      category: "Full stack Development",
      duration: "3 Months",
      rating: 4.5,
      reviews: 1235,
      price: 6000,
      image: "/images/python.png",
    },
    {
      id: 2,
      title: "Business Analytics Essentials",
      category: "Business",
      duration: "2 Months",
      rating: 4.2,
      reviews: 890,
      price: 4500,
      image: "/images/business.png",
    },
    {
      id: 3,
      title: "Digital Marketing 101",
      category: "Marketing",
      duration: "1 Month",
      rating: 4.3,
      reviews: 450,
      price: 3500,
      image: "/images/digitalmarketing.png",
    },
    // ✅ Add more courses with unique IDs if needed
  ];

  const filteredCourses =
    selectedCategory === "All"
      ? allCourses
      : allCourses.filter(course => course.category === selectedCategory);

  return (
    <div className="right-container">
      <div className="title-container1">
        <p>{selectedCategory === "All" ? "All Courses" : selectedCategory}</p>
      </div>
      <div className="courses-container">
        <CourseList courses={filteredCourses} />
      </div>
    </div>
  );
}

export default RightContainer;
