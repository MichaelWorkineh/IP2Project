import React from 'react'

const CheckoutCart = ({totalCourses, totalPrice, totalOrignalPrice}) => {
  return (
    <div className='justify-center pt-0 p-10'>
        <h1 className='font-bold text-gray-500 mb-2 ml-2'>Total: {totalCourses} courses</h1>
        <h1 className='font-bold text-4xl'>{totalPrice}</h1>
        <h1 className='text-gray-500'>{totalOrignalPrice}</h1>
        <h1>87% off</h1>
        <button className='w-full bg-purple-500 py-2 mt-2 text-white font-bold'>Checkout</button>
        <div className='p-2 border-t border-gray-400 mt-4'>
          <h1 className='font-bold'>Promotions</h1>
        </div>
        <button className='border border-gray-300 py-2 w-full'>Claim Cuppon</button>
        <div className='flex flex-row mt-3 justify-center'>
            <input className='w-[76%] border border-gray-400' type="text"  placeholder='hellow'/>
            <button className='bg-purple-500 py-2 px-4 text-white font-bold'>Apply</button>
        </div>
    </div>
  )
}

export default CheckoutCart