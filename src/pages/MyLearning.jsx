import React, {useState, useEffect} from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import MyLists from '../components/MyLists';
import AllCourses from '../components/AllCourses';
import WishList from '../components/WishList';
import Archived from '../components/Archieved';
import LearningTools from '../components/LearningTools';
import axios from 'axios';


const MyLearning = () => {


    const [activeMenuItem, setActiveMenuItem] = useState("All courses");

    const location = useLocation();
  
    
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const token = localStorage.getItem('firebaseToken');
        const response = await axios.get('http://localhost:5000/boughtCourses', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setWishlist(response.data);
      } catch (error) {
        console.error('Error fetching bought courses:', error);
      }
    };

    fetchWishlist();
  }, []);
  
    useEffect(() => {
      const queryParams = new URLSearchParams(location.search);
      const section = queryParams.get('section');
      if (section && MenuItems.some(item => item.title === section)) {
        setActiveMenuItem(section);
      }
    }, [location.search]);

    const handleMenuItemCheck = (title, path, event)=> {
      if(title === "All courses" || title === "My Lists" || title === "Wishlist"|| title === "Archived"|| title === "Learning tools") {
        event.preventDefault();
      }
      setActiveMenuItem(title);
    };

    const MenuItems = [
    { title: "All courses", path: "/myLearning?section=All courses" },
    { title: "My Lists", path: "/myLearning?section=My Lists" },
    { title: "Wishlist", path: "/myLearning?section=Wishlist" },
    { title: "Archived", path: "/myLearning?section=Archived" },
    { title: "Learning tools", path: "/myLearning?section=Learning tools" }
    ]


    return (
    <div className='flex flex-col'>
        <div className='bg-gray-800'>
            <h1 className='font-bold text-white text-4xl pt-12 pl-28'>My Learning</h1>
            <div>
          <ul className='flex flex-row pt-12 mr-5 pl-28 text-md mb-1'>
            {MenuItems.map(({path, title})=> (
              <li className='mr-5 font-bold text-gray-300'>
                <NavLink to={path} className={`${activeMenuItem === title ? 'text-white border-b-4 border-white': ''}`} onClick = {(event)=>handleMenuItemCheck(title, path, event)}>
                  <span>{title}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        </div>
        <div className='flex-grow'>
          {activeMenuItem === 'All courses' && <AllCourses courses = {wishlist}/>}
          {activeMenuItem === 'My Lists' && <MyLists/>}
          {activeMenuItem === 'Wishlist' && <WishList/>}
          {activeMenuItem === 'Archived' && <Archived/>}
          {activeMenuItem === 'Learning tools' && <LearningTools/>}
        </div>
    </div>
  )
}

export default MyLearning