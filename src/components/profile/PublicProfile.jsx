import React, {useState,useEffect} from 'react'
import LGVideoLessons from '../videoDisplay/LGVideoLessons';
import axios from 'axios';
import MDVideoLessons from '../videoDisplay/MDVideoLessons';
import VideoLessonsSM from '../videoDisplay/VideoLessonsSM';

const PublicProfile = ({name}) => {

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
  return (
    <div className='bg-black w-full h-24'>
        <div className='flex w-full justify-left text-white text-4xl p-5 bg-blak font-bold'>
            <h1>Welcome, {name}</h1>
        </div>
        <div className='p-10 font-bold text-xl'>
            Courses Enrolled In
            <LGVideoLessons courses = {wishlist}/>
        </div>
    </div>
  )
}

export default PublicProfile