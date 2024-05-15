import React from 'react'

const Footer = () => {
  return (
        <div className='bg-gray-700 text-white'>
        <div className='flex justify-between w-full border-b-2 border-gray-500'>
            <div className='flex flex-col p-8'>
                <h1 className='font-bold text-2xl'>Teach the world online</h1>
                <p className='p-2'>Create an online video course, reach students across the globe, and earn money</p>
            </div>
            <div className='p-8'>
                <button className='px-4 py-3 border border-white border-2 font-bold'>Teach On Udemy</button>
            </div>
        </div>
        <div className='p-5 border-b-2 border border-gray-500 '>
            <h1 className='font-bold text-2xl'>Top Companies choose <span className='text-blue-500'>Udemy Business</span> to build in-demand career skills.</h1>

    </div>
    </div>
  )
}

export default Footer