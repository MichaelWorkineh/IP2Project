import React from 'react'

const WhatYouLearn = ({courseData}) => {
  return (
    <div className='border border-gray-300 p-10 m-10'>
      <h1 className='font-bold text-2xl'>What you'll learn</h1>
      <div className='flex flex-col m-2 text-sm text-gray-500'>
        {courseData.WhatYouLearn
        }
      </div>
    </div>
  )
}

export default WhatYouLearn