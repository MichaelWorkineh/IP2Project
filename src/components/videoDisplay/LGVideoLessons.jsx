import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LGVideoLessons = ({ courses }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAllCourses, setShowAllCourses] = useState(true);
  const coursesToShow = 4;

  const toggleCourseVisibility = () => {
    setShowAllCourses(!showAllCourses);
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      (prevIndex + coursesToShow) % courses.length
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      (prevIndex - coursesToShow + courses.length) % courses.length
    );
  };

  const getCoursesToDisplay = () => {
    const start = activeIndex;
    const end = activeIndex + coursesToShow;
    if (end <= courses.length) {
      return courses.slice(start, end);
    } else {
      return [...courses.slice(start, courses.length), ...courses.slice(0, end - courses.length)];
    }
  };

  const displayedCourses = getCoursesToDisplay();

  return (
    <div className='border-b-2 p-4'>
      <h1 className='text-3xl font-bold mb-4'>More Courses by Colt Steele</h1>
      <div className='flex items-center'>
        <button
          onClick={prevSlide}
          className='p-2 bg-gray-300 hover:bg-gray-400 rounded-l'
        >
          Left
        </button>
        <div className='flex'>
          {displayedCourses.map((course) => (
            <div key={course.id} className='p-4 border border-black-200 mx-2' style={{maxWidth: '270px'}}>
              <div className='flex flex-col w-46' style={{maxWidth: '270px'}}>
                <div className='bg-blue-500 w-46 h-32 border border-gray-200 mb-2'></div>
                <div className='p-2'>
                  <h1 className='font-bold'>{course.title}</h1>
                  <span className='text-sm m-2 text-gray-500'>{course.instructor}</span>
                  <div className='text-sm ml-2'>
                    <span className='text-red-600 font-bold'>{course.rating}</span>
                    <span> ({course.reviews})</span>
                  </div>
                  <div className='text-sm text-gray-400'>{course.hours} course hours</div>
                  <span className='font-bold text-tiny'>{course.price}</span>
                </div>
              </div>
              <div>
        <button className='py-1.5 px-5 mt-4 border border-solid-5 rounded:sm text-white bg-blue-600 font-bold justify-end'>
        <Link to ={`/courPage/${course.id}`} 
            >View Course</Link>
              </button> 
        </div>
            </div>
          ))}
        </div>
        <button
          onClick={nextSlide}
          className='p-2 bg-gray-300 hover:bg-gray-400 rounded-r'
        >
          Right
        </button>
        
      </div>
    </div>
  );
};

export default LGVideoLessons;
