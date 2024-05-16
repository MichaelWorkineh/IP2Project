import React, {useState,useEffect} from 'react'
import alarm from '../imgs/alarm.png'
import heart from '../imgs/heart.png'
import cart from '../imgs/shopping-cart.png'
import udemyLogo from '../imgs/UDMY_BIG.png'
import { doSignOut } from '../firebase/auth'
import { useAuth } from '../contexts/AuthProvider'
import { Link } from 'react-router-dom'
import { fetchUserData } from '../firebase/auth'

const Navbar = () => {
    const {currentUser} = useAuth();
    const userId = currentUser ? currentUser.uid : null;
    const [userData, setUserData] = useState(null);
    const { userLoggedIn, signOut} = useAuth();
    let firstNameInitial = '';
    let lastNameInitial = '';

    useEffect(() => {
        if (currentUser) {
          fetchUserData(currentUser.uid)
            .then((data) => {
              setUserData(data);
            })
            .catch((error) => {
              console.error('Error fetching user data:', error);
            });
        }
      }, [currentUser]);


    if (userData && userData.displayName) {
        const nameParts = userData.displayName.split(' ');
        if (nameParts.length > 0) {
          firstNameInitial = nameParts[0].charAt(0).toUpperCase(); // First letter of first name
          if (nameParts.length > 1) {
            lastNameInitial = nameParts[1].charAt(0).toUpperCase(); // Last letter of last name
          }
        }
      }

      return (
    <div className='mt-2 p-2 border-b-2 '>
            <nav className='text-sm font-semibold '>
                <div className='flex  justify-evenly'>
                    <div className=''>
                        <img src={udemyLogo} alt="" className='w-28 h-11' />
                    </div>
                    <div className=' mt-5'>
                        Categories
                    </div>
                    <div>
                        <input type="text" className='border border-gray-600 rounded-full py-3 px-44 mb-1 items-left' placeholder='search anything'/>
                    </div>
                    <div  className=' mt-5'>Udemy Bussiness</div>
                    <div  className=' mt-5'>Tech on Udemy</div>
                    <div  className=' mt-5'>My Learning</div>
                    <div className='w-6 h-6 mt-5 cursor-pointer'><img src={heart} alt="" /></div>
                    <div className='w-6 h-6 mt-5 cursor-pointer'><img src={cart} alt="" /></div>
                    <div className='w-6 h-6 mt-5 cursor-pointer'><img src={alarm} alt="" /></div>
                    <div className='text-base text-primary font-medium space-x-1 hidden lg:block mr-0'>
                {   userLoggedIn ? (
                    <div className='flex gap-4 mt-2'>
                        <div>
                            <button onClick={doSignOut} className='text-white py-2 px-3 mt-1 bg-black border rounded '>Sign Out</button>
                        </div>
                        <div>
                            <div className='bg-black text-white rounded-full p-2 mt-1' >{firstNameInitial}{lastNameInitial}</div>
                            <Link to={"/"} className='text-black'></Link>
                        </div>
                    </div>
                    
                ) : (
                    <div className='mt-3'>
                        <Link to="/login" className='text-blue py-2 px-4 font-normal'>Log in</Link>
                        <Link to = "/sign-up" className='text-white py-2 px-4 bg-black border rounded-sm'>Sign Up</Link>
                    </div>
                )

                }    
            </div>      
                </div>
            </nav>
    </div>
  )
}

export default Navbar