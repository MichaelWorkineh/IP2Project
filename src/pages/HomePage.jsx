import React, {useState,useEffect} from 'react'
import HugeVideoLessons from '../components/videoDisplay/HugeVideoLesson'
import LGVideoLessons from '../components/videoDisplay/LGVideoLessons';
import SiteMoto from '../components/SiteMoto';


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
              const response = await fetch("courses.json");
              if (!response.ok) {
                throw new Error("Failed to fetch course data");
              }
              const courseData = await response.json();
              console.log("Course data:", courseData);
              setCourses(courseData);
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
    <div className='p-20'>
        <SiteMoto className="flex justify-center"/>
        <HugeVideoLessons courses={courses}/>
        <LGVideoLessons courses = {courses}/>
        <LGVideoLessons courses = {courses}/>
        <LGVideoLessons courses = {courses}/>
    </div>
  )
}

export default HomePage