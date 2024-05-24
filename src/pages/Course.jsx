import React, {useState, useEffect} from 'react'
import udemyLogo from '../imgs/UDMY_BIG.png'
import sampleVid from '../imgs/sampleVid.mp4'
import CourseContent from '../components/CourseContent';
import { NavLink } from 'react-router-dom';
import LearningTools from '../components/LearningTools';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const Course = () => {
    
    const [activeMenuItem, setActiveMenuItem] = useState("Course Content");
    const [courseData, setCourseData] = useState(null);

    const { id } = useParams();
    const courseId = id;

    const toggleAbuse = () => {
        setIsAbuse(!isAbuse);
    }

    useEffect(() => {
        async function fetchCourseData() {
            try {
                const response = await axios.get(`http://localhost:5000/courses/${id}`);
                setCourseData(response.data);
            } catch (error) {
                console.log('Failed to fetch course', error);
            }
        }

        fetchCourseData();
    }, [id]);

    const handleMenuItemCheck = (title, path, event)=> {
      if(title === "All courses" || title === "My Lists" || title === "Wishlist"|| title === "Archived"|| title === "Learning tools") {
        event.preventDefault();
      }
      setActiveMenuItem(title);
    };

    const MenuItems = [
    { title: "Course Content", path: "" },
    { title: "Overview", path: "/" },
    { title: "Q&A", path: "/" },
    { title: "Notes", path: "/" },
    { title: "Announcements", path: "/" },
    { title: "Reviews", path: "/" },
    { title: "Learning tools", path: "/" }
    ]

    console.log(courseData);

  return (
    <div>
      {courseData ? (
          
    <div>
    <div className='w-full bg-gray-600 flex justify-between p-2'>
        <div className='flex'>
            <div className='flex'><img src={udemyLogo} alt="" className='w-18 h-10 text-white' /></div>
            <div className='mx-16'>|</div>
            <div className='text-white font-bold mt-2'>Python on the Backend</div>
        </div>
        <div className='text-white font-bold m-2'>
            <button className='px-3 py-2 rounded-sm mx-2'>Your Progress</button>
            <button className='px-3 py-2 border rounded-sm mx-2'>Share</button>
            <button className='px-3 py-2 border rounded-sm mx-2'>:</button>
        </div>
    </div>
    <div>
        <video className='h-[600px]' controls style={{width: '100vw'}}>
            <source src={`http://localhost:5000/${courseData.video}`} type="video/mp4" />
        </video>
    </div>
    <div>
      <ul className='flex flex-row mt-4 pl-56 text-md mb-1 border-b mb-1'>
        {MenuItems.map(({path, title})=> (
          <li className='mr-5 font-bold text-gray-500 mb-1'>
            <NavLink to={path} className={`${activeMenuItem === title ? 'text-black border-b-4 border-black': ''}`} onClick = {(event)=>handleMenuItemCheck(title, path, event)}>
              <span>{title}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
    <div className='flex-grow flex'>
        <div className='justify-center w-[70%] ml-40'>
                        {activeMenuItem === 'Course Content' && <CourseContent courseData={courseData} />}
                        {activeMenuItem === 'Overview' && <></>}
                        {activeMenuItem === 'Q&A' && <></>}
                        {activeMenuItem === 'Notes' && <></>}
                        {activeMenuItem === 'Announcements' && <LearningTools />}
                        {activeMenuItem === 'Reviews' && <LearningTools />}
                        {activeMenuItem === 'Learning tools' && <LearningTools />}
        </div>
    </div>
</div>
      ) : (
        <div>Loading ....</div>
      )}
    </div>
  )
}

export default Course