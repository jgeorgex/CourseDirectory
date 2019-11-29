import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import CourseList from './CourseList';

function CoursesPage() {
  const [courses, setCourses] = useState([]);

  // Get courses from the API.  When call completes, store the array of courses in state.  
  useEffect(() => {
    getCourses().then(_courses => setCourses(_courses));
  }, []);

  return (
    <>
      <h2>Courses</h2>
      <CourseList courses={courses} />
    </>
  );
}


export default CoursesPage;
