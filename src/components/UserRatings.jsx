import React from 'react'

const UserRatings = () => {
  return (
    <div className='flex flex justify-between border-t-2 border-b-2'>
        <div className='flex flex-col m-5 p-3'>
                <div className='flex'>
                    <div className='w-12 h-12  rounded-full bg-red-500'>   
                    </div>
                    <div className='flex flex-col pl-5'>
                        <h1 className='font-bold'>Sanath H.</h1>
                        <span className=''><span className='text-orange-600 mt-3'>****** </span ><span className='text-sm mb-3 font-bold text-gray-400'>a month ago</span></span>
                    </div>
            </div>
            <div className='mt-3 text-sm'>
                <p>Good course to learn basic AJAX</p>
                <span className=' text-gray-300 mt-5'>Helpful? </span>
            </div>
        </div>
            <div className='m-5 text-bold'>
                :
            </div>
    </div>
  )
}

export default UserRatings