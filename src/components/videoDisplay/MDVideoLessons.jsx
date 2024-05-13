import React, { useState } from 'react'

const MDVideoLessons = ({courses}) => {

  const [showAllCourses,setShowAllCourses] = useState(false);

  const toggleCourseVisiblity = () => {
    setShowAllCourses(!showAllCourses);
  }

  const visibleCourses = showAllCourses ? courses.length : 3;

  return (
    <div className='border border-gray-200 mt-6 p-4'>
                <h1 className='font-3xl font-bold'>Frequently Bought Together</h1>
                  {courses.slice(0,visibleCourses).map((course,index)=> (
                    <div key ={index} className='p-5  border-black-200 flex justify-between'>
                    <div className='flex'>
                      <div className='bg-blue-500 w-40 h-28 border border-gray-200 border-b-2'>
                      </div>
                      <div className='p-2'>
                          <h1 className='font-bold'>{course.title}</h1>
                          <span className='text-sm m-2 text-gray-500'>{course.company},..{course.Instructor} </span>
                          <div className='text-sm ml-2'><span className='text-red-600 font-bold'>{course.rating}</span><span className=''>(2,069)</span></div>
                          <div className='bg-yellow-500 w-20 py-1 m-2 mx-6 rounded-sm p-2 text-white font-bold text-sm'>Bestseller</div>
                  </div>
                    </div>
                  <div className='flex flex-row text-sm p-2'>
                    <div className='flex flex-col'>
                        <span className='font-bold'>{course.price}</span>
                        <span className='text-gray-500 text-sm'>{course.originalPrice}</span>
                    </div>
                  </div>
                </div>
                  ))}        
                <div className='flex justify-between'>
                    <span className='m-5'><span >Total:</span><span className='font-bold'> $200 </span>$179</span>
                    <button className='bg-green-600 m-2 border border-blue-500 px-12 text-white font-bold py-3'>Add to cart</button>
                </div>
            </div>
  )
}

export default MDVideoLessons