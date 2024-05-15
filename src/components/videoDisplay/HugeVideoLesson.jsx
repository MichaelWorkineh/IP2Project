import React, {useState} from 'react'

const HugeVideoLessons = ({courses}) => {

  const [showAllCourses,setShowAllCourses] = useState(false);

  const toggleCourseVisiblity = () => {
    setShowAllCourses(!showAllCourses);
  }

  const visibleCourses = showAllCourses ? courses.length : 1;

  return (
    <div className=''>
    <h1 className='text-3xl font-bold'>More Courses by Colt Steele</h1>
    <div className='flex'>
      {courses.slice(0,visibleCourses).map((course,index)=> (
        <div key ={index} className='p-2  border-black-200 w-full'>
        <div className='flex flex-row w-[90%] border border-gray-300 rounded-sm p-8 m-3'>
          <div className='bg-blue-500 w-[530px] h-64 border border-gray-200 border-b-2'>
          </div>
          <div className='p-6'>
              <h1 className='font-bold text-3xl'>{course.title}</h1>
              <span className='text-normal m-2 text-gray-500'>{course.Instructor} </span>
              <div className='text-normal ml-2'><span className='text-red-600 font-bold'>{course.rating}</span><span className=''>({course.reviews})</span></div>
              <div className=' text-normal text-gray-400'>{course.hours} course-nu course lvl</div>
              <span className='font-bold text-tiny '>{course.price}</span>
      </div>
    </div>  
    </div>
      ))}        
    </div>
</div>
  )
}

export default HugeVideoLessons