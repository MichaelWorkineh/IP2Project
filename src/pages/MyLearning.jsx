import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import MyLists from '../components/MyLists';
import AllCourses from '../components/AllCourses';
import WishList from '../components/WishList';
import Archived from '../components/Archieved';
import LearningTools from '../components/LearningTools';


const MyLearning = () => {


    const [activeMenuItem, setActiveMenuItem] = useState("All courses");

    const handleMenuItemCheck = (title, path, event)=> {
      if(title === "All courses" || title === "My Lists" || title === "Wishlist"|| title === "Archived"|| title === "Learning tools") {
        event.preventDefault();
      }
      setActiveMenuItem(title);
    };

    const MenuItems = [
      {title: "All courses", path: "/"},
      {title: "My Lists", path: "/"},
      {title: "Wishlist", path: "/"},
      {title: "Archived", path: "/"},
      {title: "Learning tools", path: "/"}

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
          {activeMenuItem === 'All courses' && <AllCourses/>}
          {activeMenuItem === 'My Lists' && <MyLists/>}
          {activeMenuItem === 'Wishlist' && <WishList/>}
          {activeMenuItem === 'Archived' && <Archived/>}
          {activeMenuItem === 'Learning tools' && <LearningTools/>}
        </div>
    </div>
  )
}

export default MyLearning