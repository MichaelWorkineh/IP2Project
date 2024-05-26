import React, { useState } from 'react';
import sampleVid from '../../imgs/sampleVid.mp4';
import Rating from '../Rating';
import { Link } from 'react-router-dom';

const HugeVideoLessons = ({ courses }) => {
  const [showAllCourses, setShowAllCourses] = useState(false);

  const toggleCourseVisibility = () => {
    setShowAllCourses(!showAllCourses);
  };

  const visibleCourses = showAllCourses ? courses.length : 1;

  // Function to format the last updated date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    // Extract year, month, and day
    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate();
    // Return formatted date string
    return `${month} ${day}, ${year}`;
  };

  return (
    <div className='m-6'>
      <h1 className='text-4xl font-bold p-4'>What to learn next</h1>
      <h1 className='p-4 font-bold text-2xl'>Our top pic for you</h1>
      <div className='flex'>
        {courses.slice(0, visibleCourses).map((course, index) => (
      <Link to ={`/courPage/${course._id}`}> 
        <div key={index} className='p-2 border-black-200 w-full'>
            <div className='flex flex-row w-[90%] border border-gray-300 rounded-sm p-8 m-3'>
              <div className='bg-blue-500 w-[530px] h-full border border-gray-200 border-b-2'>
                <video src={`http://localhost:5000/${course.video}`}></video>
              </div>
              <div className='p-6'>
                <h1 className='font-bold text-3xl'>{course.title}</h1>
                <span className='text-xl'>{course.description}</span>
                <span className='text-normal m-2 text-gray-500'>{course.Instructor} </span>
                <p className='text-gray-400'><span className='text-black'>By:</span> {course.instructor.userEmail}</p>
                <p className='font-tiny'>Last Updated: {formatDate(course.lastUpdated)} <span> {course.hours} course hours</span> <span>  {course.audience}</span></p>
                <div className='text-normal ml-2 flex mt-2'>
                  <span className='text-red-600 font-bold'><Rating defaultValue={course.rating}/></span>
                  <span className='mt-1'>({course.reviews})</span>
                </div>
                <div className='text-normal mt-6 font-bold'>
                  <span className='font-bold'>${course.price}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
        ))}
      </div>
    </div>
  );
};

export default HugeVideoLessons;
