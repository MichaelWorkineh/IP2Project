import React, {useState,useEffect} from 'react'
import HugeVideoLessons from '../components/videoDisplay/HugeVideoLesson'
import LGVideoLessons from '../components/videoDisplay/LGVideoLessons';
import SiteMoto from '../components/SiteMoto';
import LGVideoLesson from '../components/videoDisplay/LGVideoLesson';
import Categories from '../components/Categories'
import Reminder from '../components/Reminder';

const HomePage = () => {

    const [courses, setCourses] = useState([]);
    const [videos, setVideos] = useState([]);
    const [isSticky, setIsSticky] = useState(false);
    const [isAbuse, setIsAbuse] = useState(false);
    const [showContent, setShowContent] = useState(0);

    const toggleAbuse =()=> {
        setIsAbuse(!isAbuse);
    }

    useEffect(()=> {
        const fetchCourses = async () => {
            try {
              const response = await fetch("http://localhost:5000/courses");
              if (!response.ok) {
                throw new Error("Failed to fetch course data");
              }
              const courses = await response.json();
              console.log("Course data:", courses);
              setCourses(courses);
            } catch (error) {
              console.error(error);
            }
          };
          
          const fetchVideos = async () => {
            try {
              const response = await fetch("sampleVids.json");
              if (!response.ok) {
                throw new Error("Failed to fetch video data");
              }
              const videoData = await response.json();
              console.log("Video data:", videoData);
              setVideos(videoData);
            } catch (error) {
              console.error(error);
            }
          };
          
          fetchCourses();
          fetchVideos();
    }, []);

    console.log(courses);
  return (
    <div>
        <Categories/>
        <SiteMoto className="flex justify-center"/>
        <div className='w-[750px]'>
          <Reminder/>
        </div>
        <HugeVideoLessons courses={courses}/>
        <LGVideoLesson courses = {courses}/>
        <LGVideoLesson courses = {courses}/>
        <LGVideoLesson courses = {courses}/>

    </div>
  )
}

export default HomePage