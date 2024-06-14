import React, {useState, useEffect} from 'react'
import Reminder from './Reminder'
import LGVideoLesson from '../components/videoDisplay/LGVideoLesson'
import BoughtCourseVideo from '../components/videoDisplay/BoughtCourseVideo'
import axios from 'axios'



const AllCourses = ({courses}) => {

  return (
    <div className='w-[90%] ml-14 pt-0 relative'>
      <Reminder/>
      <div className=' -top-16'>
          <BoughtCourseVideo courses = {courses} />
      </div>
    </div>
  )
}

export default AllCourses