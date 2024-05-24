import React, {useState, useEffect} from 'react'
import Reminder from './Reminder'
import LGVideoLesson from '../components/videoDisplay/LGVideoLesson'
import BoughtCourseVideo from '../components/videoDisplay/BoughtCourseVideo'
import axios from 'axios'



const AllCourses = ({courses}) => {

  return (
    <div className='w-[90%] ml-14'>
      <Reminder/>
      <BoughtCourseVideo courses = {courses}/>
    </div>
  )
}

export default AllCourses