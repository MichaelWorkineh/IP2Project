import React, {useState,useEffect} from 'react'
import HugeVideoLessons from '../components/videoDisplay/HugeVideoLesson'
import LGVideoLessons from '../components/videoDisplay/LGVideoLessons';
import SiteMoto from '../components/SiteMoto';
import LGVideoLesson from '../components/videoDisplay/LGVideoLesson';
import Categories from '../components/Categories'
import Reminder from '../components/Reminder';

const HomePage = () => {

    const [courses, setCourses] = useState([]);
    const [newCourses, setNewCourses] = useState([]);
    const [featuredCourses, setFeaturedCourses] = useState([]);
    const [recommendedCourses, setRecommendedCourses] = useState([]);
    const [videos, setVideos] = useState([]);
    const [isSticky, setIsSticky] = useState(false);
    const [isAbuse, setIsAbuse] = useState(false);
    const [showContent, setShowContent] = useState(0);

    const toggleAbuse =()=> {
        setIsAbuse(!isAbuse);
    }
    useEffect(() => {
      const fetchData = async () => {
        try {
          // Fetch courses
          const coursesResponse = await fetch("http://localhost:5000/courses");
          if (!coursesResponse.ok) {
            throw new Error("Failed to fetch course data");
          }
          const courses = await coursesResponse.json();
          console.log("Course data:", courses);
          setCourses(courses);
    
          // Fetch videos
          const videoResponse = await fetch("sampleVids.json");
          if (!videoResponse.ok) {
            throw new Error("Failed to fetch video data");
          }
          const videoData = await videoResponse.json();
          console.log("Video data:", videoData);
          setVideos(videoData);
    
          // Fetch recommended courses
          const recommendedResponse = await fetch("http://localhost:5000/courses/recommended");
          if (!recommendedResponse.ok) {
            throw new Error("Failed to fetch recommended courses");
          }
          const recommendedCourses = await recommendedResponse.json();
          console.log("Recommended courses:", recommendedCourses);
          setRecommendedCourses(recommendedCourses);
    
          // Fetch new courses
          const newCoursesResponse = await fetch("http://localhost:5000/courses/new");
          if (!newCoursesResponse.ok) {
            throw new Error("Failed to fetch new courses");
          }
          const newCourses = await newCoursesResponse.json();
          console.log("New courses:", newCourses);
          setNewCourses(newCourses);
    
          // Fetch featured courses
          const featuredResponse = await fetch("http://localhost:5000/courses/featured");
          if (!featuredResponse.ok) {
            throw new Error("Failed to fetch featured courses");
          }
          const featuredCourses = await featuredResponse.json();
          console.log("Featured courses:", featuredCourses);
          setFeaturedCourses(featuredCourses);
        } catch (error) {
          console.error(error);
        }
      };
    
      fetchData();
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
        <div className='m-8'>
            <div className=''>
                <h1 className='font-bold text-2xl'>New Courses</h1>
                <LGVideoLesson courses = {newCourses}/>
            </div>
            <div>
                <h1 className='font-bold text-2xl'>Recommended Courses</h1>
                <LGVideoLesson courses = {recommendedCourses}/>
            </div>
            <div>
              <h1 className='font-bold text-2xl'>Featured Courses</h1>
              <LGVideoLesson courses = {featuredCourses}/>
            </div>
        </div>
    </div>
  )
}

export default HomePage