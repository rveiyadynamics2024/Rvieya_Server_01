import React from 'react';
import CourseCard from './CourseCard';

function CourseList({ courses }) {
  return (
    <div className="course-list">
      {courses.map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </div>
  );
}

export default CourseList;
