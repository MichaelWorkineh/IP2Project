import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import Rating from '../Rating';

const VideoLessonsSM = ({ courses, handleRemoveFromCart, handleAddToWishlist, fromShoppingCart, showCartButton }) => {
  const [showAllCourses, setShowAllCourses] = useState(false);

  const toggleCourseVisibility = () => {
    setShowAllCourses(!showAllCourses);
  };

  const visibleCourses = showAllCourses ? courses.length : 3;

  return (
    <>
      {courses.slice(0, visibleCourses).map((course, index) => (
        <Link to={`/courPage/${course._id}`} key={index}>
          <div>
            <div className='p-5 border-black-200 border-b-2 flex justify-between'>
              <div className='flex'>
                <div>
                <div className='w-28 h-16 border border-gray-200 border-b-2'>
                  <video src={`http://localhost:5000/${course.video}`} className='w-full h-full'></video>
                </div>
                </div>
                <div className='w-3/4'>
                  <h1 className='font-bold pl-3'>{course.title}</h1>
                  <div className='pl-3'>
                    <span className='w-[70%]'>{course.description}</span>
                    <span >{course.WhatYouLearn}</span>
                    <span>{course.instructor.email}</span>
                  </div>
                  <span className='text-sm ml-20 relative -top-5'>
                    <span className='text-red-600 font-bold -top-5 flex'>
                        <span><Rating defaultValue={course.rating}/></span>
                        <span className='text-black mt-2'>({course.reviews})</span>
                    </span>
                    <span className='text-green-700 font-bold ml-1'>{course.hours} total hours</span>
                    <span className='text-gray-600 ml-2'>Updated 4/2024</span>
                  </span>
                </div>
              </div>
              <div className='flex flex-row text-sm'>
                
                {showCartButton ? (
                  <div className='flex'>
                    <Link className='py-2 px-3 bg-black text-white font-bold border border-gray-300 mx-4' to={'/shoppingCart'}>Go to Cart</Link>
                  </div>
                ) : (
                  fromShoppingCart && (
                    <div className='flex flex-col text-purple-500'>
                      <button
                        className='py-2 px-1 mx-4 my-0 text-md'
                        onClick={(e) => {
                          e.preventDefault();
                          handleRemoveFromCart(course._id);
                        }}
                      >
                        Remove from Cart
                      </button>
                      <button
                        className='py-2 px-3 mx-2 my-0'
                        onClick={(e) => {
                          e.preventDefault();
                          handleAddToWishlist(course._id);
                        }}
                      >
                        Add to Wishlist
                      </button>
                    </div>
                  )
                )}
              </div>
              <div className='flex flex-col text-purple-500'>
                  <span className='font-bold '>${course.price}</span>
                  <span className='text-gray-500 text-sm line-through'>${course.originalPrice}</span>
                </div>
            </div>
          </div>
        </Link>
      ))}
      {courses.length > 5 && (
        <div className='mt-4 flex justify-center w-full border border-black py-2 font-bold text-sm'>
          <button onClick={toggleCourseVisibility}>
            {showAllCourses ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
    </>
  );
};

export default VideoLessonsSM;
