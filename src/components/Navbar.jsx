import React, {useState,useEffect} from 'react'
import alarm from '../imgs/alarm.png'
import heart from '../imgs/heart.png'
import cart from '../imgs/cart.svg'
import udemyLogo from '../imgs/UDMY_BIG.png'
import { doSignOut } from '../firebase/auth'
import { useAuth } from '../contexts/AuthProvider'
import { Link } from 'react-router-dom'
import { fetchUserData } from '../firebase/auth'
import Categories from './Categories'
import { FiSearch } from 'react-icons/fi'

const Navbar = () => {
    const {currentUser} = useAuth();
    const userId = currentUser ? currentUser.uid : null;
    const [userData, setUserData] = useState(null);
    const { userLoggedIn, signOut} = useAuth();
    const [activeAccMenu, setActiveAccMenu] = useState(false);
    const [activeCatg, setActiveCatag] = useState(false);
    const [activeBiss, setActiveBis] = useState(false);
    const [activeTech, setActiveTech] = useState(false);
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

      
  const toggleAccMenu = () => {
    setActiveAccMenu(!activeAccMenu);
  };

  const toggleUdeBussiness = () => {
    setActiveBis(!activeBiss);
  };

  const toggleUdeTech = () => {
    setActiveTech(!activeTech);
  }


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
                    <div className='mt-3'>
                        <Link to={'/'}><img src={udemyLogo} alt="" className='w-18 h-8' /></Link>
                    </div>
                    <div className=' mt-5'>
                        Categories
                    </div>
                    {activeCatg ? (
                        <div className="absolute right-6 top-20 mt-0 w-auto bg-red-500 border border-gray-200 rounded-sm shadow-lg z-50">
                        </div>
                    ) : (<></>)}
                    
                    <div className='relative flex items-center'>
                    <input
                        type='text'
                        placeholder='Search for anything'
                        className='outline-none border-black border rounded-3xl w-[600px] h-12 text-base pl-12 bg-slate-100'
                    />
                    <FiSearch className='text-gray-500 absolute left-3' style={{ fontSize: '24px' }} />
                    </div>
                    <div   onMouseDown={toggleUdeBussiness} onMouseLeave={toggleUdeTech} className=' mt-5'>Udemy Bussiness</div>
                    {activeBiss ? (
                        <div  className="absolute right-96 top-20 mt-0 w-[270px] bg-white border border-gray-200 rounded-sm shadow-lg z-10">
                            <div>
                                <p className='text-center font-bold text-large p-2'>Get your team access to over 25,000 top Udemy courses, anytime, anywhere.</p>
                                <button className='font-bold flex justify-center w-[85%] m-4 py-2 bg-gray-800 text-white text-xl'>Try Udemy Bussiness</button>
                            </div>
                        </div>
                    ) : (<></>)}
                    
                    <div  onMouseDown={toggleUdeTech} onMouseLeave={toggleUdeTech} className=' mt-5'>Tech on Udemy</div>
                    {activeTech ? (
                        <div className="absolute right-56 top-20 mt-0 w-64 bg-white border border-gray-200 rounded-sm shadow-lg z-10">
                            <div>
                            <p className='text-center font-bold text-large p-2'> Turn what you know into an opportunity and reach millions around the world.</p>
                            <button className='font-bold flex justify-center w-[85%] m-4 py-2 bg-gray-800 text-white text-xl'>Learn More</button>
                            </div>
                        </div>
                    ) : (<></>)}
                    <div  className=' mt-5 hover:text-blue-600'><Link to={"/myLearning"}>My Learning</Link></div>
                    
                    <div className='w-6 h-6 mt-5 cursor-pointer'>
                        <Link to="/myLearning?section=Wishlist">
                            <svg width="100" height="100" viewBox="0 0 110 105" xmlns="http://www.w3.org/2000/svg">
                                <path class="fill-white stroke-black stroke-2 transition hover:stroke-blue-700" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                            </svg>
                        </Link>
                    </div>
                    <div className='mt-4 relative'>
                        <img src={cart} alt="" className='w-10 h-8'/>
                        <div className='absolute -top-1 -right-2 bg-purple-500 rounded-full px-2 py-1/4 text-white'>2</div>
                    </div>
                    <div className='w-6 h-6 mt-5 cursor-pointer'><img src={alarm} alt="" /></div>
                    <div className='text-base text-primary font-medium space-x-1 hidden lg:block mr-0'>
                {   userLoggedIn ? (
                    <div className='flex gap-4 mt-2'>
                            <div onMouseDown={toggleAccMenu} >
                            <div className='bg-black text-white rounded-full p-2 mt-1' >{firstNameInitial}{lastNameInitial}</div>
                            <Link to={"/"} className='text-black'></Link>
                        </div>
                        {activeAccMenu && (
                        <div className="absolute right-6 top-20 mt-0 w-auto bg-white border border-gray-200 rounded-sm shadow-lg z-10">
                            <ul className="py-1 text-gray-500 text-sm">
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b-2">
                                <div className='flex  '>
                                <div className='bg-black text-white rounded-full p-2 mt-1 w-16 h-16 p-4 font-bold text-xl ' >{firstNameInitial}{lastNameInitial}</div>
                                <div className='text-sm flex flex-col p-4 text-black'>
                                    <p>{userData.displayName}</p>
                                    <p className='text-gray-500'>{userData.email}</p>
                                </div>
                                </div>
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                My Learning
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                My Cart
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b">
                                WishList
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                Public Profile
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b">
                                Settings
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500" onClick={doSignOut}>
                                Logout
                            </li>
                            </ul>
                        </div>
                        )}
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