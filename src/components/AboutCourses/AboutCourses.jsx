import { useEffect, useState } from 'react';
import { AboutCoursesDetail } from '../AboutCoursesDetail/AboutCoursesDetail';
import './AboutCourses.css';

export const AboutCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/courses.json');
      const result = await response.json();
      setCourses(result);
    };
    fetchData();
  }, []);
  
  return (
    <section id="courses">
      <h1 className="courses__heading">Courses</h1>
      {courses.map((course) => (
        <AboutCoursesDetail
          key={course.id}
          name={course.name}
          company={course.company}
          length={course.length}
          description={course.description}
        />
      ))}
    </section>
  );
};
