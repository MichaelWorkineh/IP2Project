import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthProvider';
import axios from 'axios';

const MDVideoLessons = ({courses}) => {

  const [showAllCourses,setShowAllCourses] = useState(false);
  const [totalCourses, setTotalCourses] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [courseIds, setCourseIds] = useState([]);
  const [totalOrignalPrice, setTotalOrignalPrice] = useState(0);
  const {currentUser} = useAuth();
  const Id = currentUser ? currentUser.uid : null;
 
  const toggleCourseVisiblity = () => {
    setShowAllCourses(!showAllCourses);
  }

  useEffect(() => {
    const calculateCartDetails = () => {
      const numOfCourses = courses.length;
      const total = courses.reduce((acc, course) => acc + course.price, 0);
      const totalOrignal = courses.reduce((acc, course)=> acc + course.originalPrice,0);
      setTotalCourses(numOfCourses);
      setTotalPrice(total);
      setTotalOrignalPrice(totalOrignal);
    };

    calculateCartDetails();
  }, [courses]);

  useEffect(() => {
    if (courses.length > 0) {
      const ids = courses.map(course => course._id);
      setCourseIds(ids);
    }
  }, [courses]);

  console.log(courseIds);
  const addToCart = async () => {
    try {
        const userId = Id;
        const token = localStorage.getItem('firebaseToken'); 
        
        const response = await axios.post('http://localhost:5000/cart/addMany', { courseIds, userId }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
     });
        
      console.log(response.data.message);
    } catch (error) {
      console.error("Error adding course to cart:", error.response.data.message);
    }
  };


  const visibleCourses = showAllCourses ? courses.length : 3;

  return (
    <div className='border border-gray-200 mt-6 p-4'>
                <h1 className='font-3xl font-bold'>Frequently Bought Together</h1>
                  {courses.slice(0,visibleCourses).map((course,index)=> (
                   <Link to={`/courPage/${course._id}`}>
                       <div key ={index} className='p-5  border-black-200 flex justify-between'>
                    <div className='flex'>
                      <div className='bg-blue-500 w-42 h-28 border border-gray-200 border-b-2'>
                        <video src={`http://localhost:5000/${course.video}`} className='w-full h-full'></video>
                      </div>
                      <div className='p-2'>
                          <h1 className='font-bold'>{course.title}</h1>
                          <span className='text-sm m-2 text-gray-500'>{course.company},..{course.Instructor} </span>
                          <div className='text-sm ml-2'><span className='text-red-600 font-bold'>{course.rating}</span><span className=''>(2,069)</span></div>
                  </div>
                    </div>
                  <div className='flex flex-row text-sm p-2'>
                    <div className='flex flex-col'>
                        <span className='font-bold'>{course.price}</span>
                        <span className='text-gray-500 text-sm'>{course.originalPrice}</span>
                    </div>
                  </div>
                </div>
                   </Link>
                  ))}        
                <div className='flex justify-between'>
                    <span className='m-5'><span >Total:</span><span className='font-bold mr-2'>${totalPrice} </span><span className='text-gray-500 line-through'>${totalOrignalPrice}</span></span>
                    <button className='bg-green-600 m-2 border border-blue-500 px-12 text-white font-bold py-3' onClick={addToCart}>Add to cart</button>
                </div>
            </div>
  )
}

export default MDVideoLessons