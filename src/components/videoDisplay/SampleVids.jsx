import React, {useState} from 'react'

const SampleVids = ({videos, onVideoClick}) => {
    const [showAllCourses, setShowAllCourses] = useState(false);

    const toggleCourseVisiblity = () => {
      setShowAllCourses(!showAllCourses);
    }
  
    const visibleCourses = showAllCourses ? videos.length : 5;
    const handleVideoClick = (videoUrl, videoTitle) => {
        if(typeof onVideoClick === 'function') {
            onVideoClick(videoUrl, videoTitle);
            console.log(videoUrl);
        }
    }
  return (
  <div>
     {videos.slice(0, visibleCourses).map((course,index)=> (
        <div key={index}>
          <div  className='p-5  border-black-200 border-b-2 flex justify-between'  onClick={()=> handleVideoClick(course.video, course.title)} >
          <div className='flex'>
              <div className='w-28 border border-gray-200 border-b-2 cursor-pointer' >
                <video src={course.video}                   
                >
                </video>
              </div>
            <div>
                <h1 className='font-bold pl-3'>{course.title}</h1>
            </div>
          </div>
         <div className='flex flex-row text-sm'>
          <span className='text-red-600 font-bold'>{course.rating}</span>
          <span className='mx-10'>{course.hours}</span>
          <div className='flex flex-col'>
              <span className='font-bold'>{course.price}</span>
              <span className='text-gray-500 text-sm'>{course.originalPrice}</span>
          </div>
         </div>
      </div>
      </div>
    ))}
  </div>
  )
}

export default SampleVids