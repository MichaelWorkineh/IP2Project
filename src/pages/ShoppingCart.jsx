import React, { useState,useEffect } from 'react'
import VideoLessonsSM from '../components/videoDisplay/VideoLessonsSM'
import Cart from '../components/Cart';
import CheckoutCart from '../components/CheckoutCart';
import LGVideoLesson from '../components/videoDisplay/LGVideoLesson';

const ShoppingCart = () => {

    const [courses, setCourses] = useState([]);
    useEffect(()=> {
        const fetchCourses = async () => {
            try {
              const response = await fetch("/courses.json");
              if (!response.ok) {
                throw new Error("Failed to fetch course data");
              }
              const courseData = await response.json();
              console.log("Course data:", courseData);
              setCourses(courseData);
            } catch (error) {
              console.error(error);
            }
          };
          
         
          
          fetchCourses();
    }, []);
  return (
    <div>
        <div>
            <h1 className='font-bold text-gray-700 text-4xl p-8'>Shopping Cart</h1>
        </div>
        <div className='flex pl-10'>
            <div>
                <span>1 Course in Cart</span>
                <VideoLessonsSM courses = {courses}/>
            </div>
            <div className='w-[400px]'>
                <CheckoutCart/>
            </div>
        </div>
        <LGVideoLesson courses = {courses}/>
    </div>
  )
}

export default ShoppingCart