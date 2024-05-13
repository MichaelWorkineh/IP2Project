import React, {useState} from 'react'

const LGVideoLessons = ({courses}) => {

  const [showAllCourses,setShowAllCourses] = useState(false);

  const toggleCourseVisiblity = () => {
    setShowAllCourses(!showAllCourses);
  }

  const visibleCourses = showAllCourses ? courses.length : 3;

  return (
    <div className='border-b-2 '>
    <h1 className='font-3xl font-bold'>More Courses by Colt Steele</h1>
    <div className='flex'>
      {courses.slice(0,visibleCourses).map((course,index)=> (
        <div key ={index} className='p-2  border-black-200 '>
        <div className='flex flex-col w-46'>
          <div className='bg-blue-500 w-46 h-32 border border-gray-200 border-b-2'>
          </div>
          <div className='p-2'>
              <h1 className='font-bold'>{course.title}</h1>
              <span className='text-sm m-2 text-gray-500'>{course.Instructor} </span>
              <div className='text-sm ml-2'><span className='text-red-600 font-bold'>{course.rating}</span><span className=''>({course.reviews})</span></div>
              <div className=' text-sm text-gray-400'>{course.hours} course-nu course lvl</div>
              <span className='font-bold text-tiny'>{course.price}</span>
      </div>
    </div>  
    </div>
      ))}        
    </div>
</div>
  )
}

export default LGVideoLessons