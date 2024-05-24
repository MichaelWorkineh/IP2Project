import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const VideoLessonsSM = ({courses,  showCartButton }) => {

  const [showAllCourses, setShowAllCourses] = useState(false);

  const toggleCourseVisiblity = () => {
    setShowAllCourses(!showAllCourses);
  }

  const visibleCourses = showAllCourses ? courses.length : 5;

  return (
    <>
    {courses.slice(0, visibleCourses).map((course,index)=> (
      <div key={index}>
        <div  className='p-5  border-black-200 border-b-2 flex justify-between'>
        <div className='flex'>
            <div className='w-32 h-16 border border-gray-200 border-b-2'>
            <video src={`http://localhost:5000/${course.video}`} className='w-full h-full'></video>
            </div>
          <div>
              <h1 className='font-bold pl-3'>{course.title}</h1>
              <span className='text-sm pl-4'><span className='text-green-700 font-bold ml-1'>{courses.hour} </span><span className='text-gray-600'>Updated 4/2024</span></span>
          </div>
        </div>
       <div className='flex flex-row text-sm'>
        <span className='text-red-600 font-bold'>{course.rating}</span>
        <span className='mx-10'>{course.hours} hours</span>
        <div className='flex flex-col'>
            <span className='font-bold'>${course.price}</span>
            <span className='text-gray-500 text-sm'>${course.originalPrice}</span>
        </div>
        {showCartButton ? (
          <div>
          <Link className='py-3 px-3 bg-black text-white font-bold border border-gray-300 mx-4 ' to={'/shoppingCart'}>Go to Cart</Link>
      </div>
        ) : (<></>)}
       </div>
    </div>
    </div>
  ))}
  {
   courses.length > 5  && (
      <div className='mt-4 flex justify-center w-full border border-black py-2 font-bold text-sm'>
        <button onClick={toggleCourseVisiblity}>{showAllCourses ? 'Show Less ': 'Show More'}</button>
      </div>
    )
  }
  </>
)
}

export default VideoLessonsSM