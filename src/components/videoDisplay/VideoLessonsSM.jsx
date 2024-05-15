import React, { useState } from 'react'

const VideoLessonsSM = ({courses}) => {

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
            <div className='bg-blue-500 w-16 h-16 border border-gray-200 border-b-2'>
            </div>
          <div>
              <h1 className='font-bold pl-3'>{course.title}</h1>
              <span className='text-sm pl-4'><span className='text-green-700 font-bold ml-1'>7.5 total hours </span><span className='text-gray-600'>Updated 4/2024</span></span>
          </div>
        </div>
       <div className='flex flex-row text-sm'>
        <span className='text-red-600 font-bold'>{course.rating}</span>
        <span className='mx-10'>{course.hours}</span>
        <div className='flex flex-col'>
            <span className='font-bold'>{course.price}</span>
            <span className='text-gray-500 text-sm'>{course.originalPrice}</span>
        </div>
        <div>
            <button className='py-3 px-3 border border-gray-300 mx-4 rounded-full'>but</button>
        </div>
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