import React from 'react'
import alarm from '../imgs/alarm.png'
import heart from '../imgs/heart.png'
import cart from '../imgs/shopping-cart.png'
import udemyLogo from '../imgs/UDMY_BIG.png'
import { doSignOut } from '../firebase/auth'

const Navbar = () => {
  return (
    <div className='mt-1 p-2 border-b-2 '>
            <nav className='text-sm font-semibold '>
                <div className='flex  justify-evenly'>
                    <div className=''>
                        <img src={udemyLogo} alt="" className='w-28 h-11' />
                    </div>
                    <div className=' mt-3'>
                        Categories
                    </div>
                    <div>
                        <input type="text" className='border border-gray-600 rounded-full py-3 px-44 mb-1 items-left' placeholder='search anything'/>
                    </div>
                    <div  className=' mt-3'>Udemy Bussiness</div>
                    <div  className=' mt-3'>Tech on Udemy</div>
                    <div  className=' mt-3'>My Learning</div>
                    <div className='w-6 h-6 mt-3 cursor-pointer'><img src={heart} alt="" /></div>
                    <div className='w-6 h-6 mt-3 cursor-pointer'><img src={cart} alt="" /></div>
                    <div className='w-6 h-6 mt-3 cursor-pointer'><img src={alarm} alt="" /></div>
                    <div className='w-10 h-10 bg-black rounded-full p-2 font-bold text-white mt-0 cursor-pointer'>MG</div>    
                    <div><button className='bg-black text-white py-1.5 px-3p-2' onClick={doSignOut}>Logout</button></div>            
                </div>
            </nav>
    </div>
  )
}

export default Navbar