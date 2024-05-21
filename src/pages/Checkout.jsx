import React from 'react'
import CheckoutCart from '../components/CheckoutCart'
import LGVideoLesson from '../components/videoDisplay/LGVideoLesson'


const Checkout = () => {
  return (
    <div>
    <div>
        <h1 className='font-bold text-gray-700 text-4xl p-8'>Shopping Cart</h1>
    </div>
    <div className='flex pl-10'>
        <div className='p-10 w-[60%]'>
            <h1 className='font-bold text-2xl text-gray-700'>Billing address</h1>
            <p className='text-sm w-[100%]'>Udemy is required by law to collect applicable transaction taxes for purchases made in certain tax jurisdictions.</p>
            <h1 className='font-bold text-2xl text-gray-700 mt-6'>Payment Method</h1>
        </div>
        <div className='w-[400px]'>
            <CheckoutCart/>
        </div>
    </div>
    <h1 className='font-bold text-2xl text-gray-700 mt-6'>Order Details</h1>
      
</div>
  )
}

export default Checkout