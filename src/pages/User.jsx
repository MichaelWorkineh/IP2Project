import React, {useState,useEffect} from 'react'
import { useAuth } from '../contexts/AuthProvider';
import { fetchUserData } from '../firebase/auth';
import { NavLink } from 'react-router-dom';
import PublicProfile from '../components/profile/PublicProfile';
import Profile from '../components/profile/Profile';
import AccountSecurity from '../components/profile/AccountSecurity';

const User = () => {
    const {currentUser} = useAuth();
    const userId = currentUser ? currentUser.uid : null;
    const [activeMenuItem, setActiveMenuItem] = useState("Public Profile");
    const [userData, setUserData] = useState(null);
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

      let name;

    if (userData && userData.displayName) {
        const nameParts = userData.displayName.split(' ');
        if (nameParts.length > 0) {
          firstNameInitial = nameParts[0].charAt(0).toUpperCase();
          name = nameParts[0];
          name =name + " "+  nameParts[1];
          if (nameParts.length > 1) {
            lastNameInitial = nameParts[1].charAt(0).toUpperCase(); // Last letter of last name
          }
        }
      }

      
      const handleMenuItemClick = (title, path, event) => {
          if (title === "Public Profile" || title === "Profile" || title === "Account Security") {
              event.preventDefault();
          }
          setActiveMenuItem(title);
      };
  
      
      const handleLogout = async() => {
          logout()
           sessionStorage.removeItem('loggedIn');
           sessionStorage.removeItem('userData');
       
         }
     
      const MenuItems = [
          { title: "Public Profile", path: "/publicprofile" },
          { title: "Profile", path: "/profile"},
          { title: "Account Security", path: "/accountSecurity",  }
      ];
  

  return (
    <div className=' border mx-40 mt-16 flex mb-20'>
         <div className=' flex w-full h-[1200px]'>
            <div className='w-100 border-r pt-10'>
                <div className='flex justify-center'>
                    <div>
                        <div className='bg-black text-white rounded-full p-2 mt-1 w-28 h-28 p-8 pt-8 font-bold text-3xl ' >{firstNameInitial}{lastNameInitial}</div>
                        <div className='text-black font-bold mt-2 ml-1'>{name}</div>
                    </div>
                </div>
                <div className='flex gap-x-4 items-left pt-10'>
                    <ul className='text-gray-400'>
                        {MenuItems.map(({ path, title, gap, icon }) => (
                            <li key={title} className={`text-md flex items-left mb-0  ${gap ? "border-t border-gray-300 mt-5" : "mt-2"} hover:bg-gray-500 hover:text-white rounded-sm`}>
                                {gap ? (
                                    <div className="border border-r-1">
                                        <div className='mb-4 w-72 hover:text-gray-300 bg-white pointer-events-none'>
                                            <h1 className='font-semibold px-7 p-4 pb-2 pointer-events-none'>Settings</h1>
                                        </div>
                                        <div className='w-72 flex flex-col cursor-pointer py-2 px-10 mb-0 font-semibold'>
                                            <NavLink to={path} className={`flex items-start ${activeMenuItem === title ? 'text-black bg-gray-500' : ''}`} onClick={(event) => handleMenuItemClick(title, path, event)}  >
                                                <div className='flex items-start'>
                                                    <span>{title}</span>
                                                </div> 
                                            </NavLink>
                                        </div>
                                    </div>                           
                                ) : (
                                    <NavLink to={path} className= {`${activeMenuItem === title ? 'text-white bg-gray-500' : ''}`} onClick={(event) => handleMenuItemClick(title, path, event)}>
                                        <div className="w-72 flex items-start  py-2 px-10 mb-0 font-semibold"> 
                                            <span>{title}</span> 
                                        </div>
                                    </NavLink>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='flex-grow border border-gray w-full'>
                {activeMenuItem === "Public Profile" && <PublicProfile name={name}/>}
                {activeMenuItem === "Profile" && <Profile/>}
                {activeMenuItem === "Account Security" && <AccountSecurity/>}
            </div>
        </div>
    </div>
  )
}

export default User