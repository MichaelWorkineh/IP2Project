import React from 'react'
import LGVideoLesson from './videoDisplay/LGVideoLesson'

const TrendingCategory = ({courses, courseInfo}) => {
  return (
    <div>
        <LGVideoLesson courses={courses} courseInfo={courseInfo}/>
    </div>
  )
}

export default TrendingCategory