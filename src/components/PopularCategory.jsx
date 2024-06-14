import React from 'react'
import LGVideoLesson from './videoDisplay/LGVideoLesson'

const PopularCategory = ({courses, courseInfo}) => {
  return (
    <div>
        <LGVideoLesson courses={courses} courseInfo={courseInfo}/>
    </div>
  )
}

export default PopularCategory