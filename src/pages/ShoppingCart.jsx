import React, { useState,useEffect } from 'react'
import VideoLessonsSM from '../components/videoDisplay/VideoLessonsSM'
import Cart from '../components/Cart';
import CheckoutCart from '../components/CheckoutCart';
import LGVideoLesson from '../components/videoDisplay/LGVideoLesson';
import axios from 'axios';

const ShoppingCart = () => {

  const [cart, setCart] = useState([]);
  const [totalCourses, setTotalCourses] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalOrignalPrice, setTotalOrignalPrice] = useState(0);

  useEffect(() => {
    const fetchCartList = async () => {
      try {
        const token = localStorage.getItem('firebaseToken');
        const response = await axios.get('http://localhost:5000/cart', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setCart(response.data);
      } catch (error) {
        console.error('Error fetching wishlist:', error);
      }
    };

    fetchCartList();
  }, []);

  useEffect(() => {
    const calculateCartDetails = () => {
      const numOfCourses = cart.length;
      const total = cart.reduce((acc, course) => acc + course.price, 0);
      const totalOrignal = cart.reduce((acc, course)=> acc + course.originalPrice,0);
      setTotalCourses(numOfCourses);
      setTotalPrice(total);
      setTotalOrignalPrice(totalOrignal);
    };

    calculateCartDetails();
  }, [cart]);

  console.log(totalOrignalPrice);
  return (
    <div>
        <div>
            <h1 className='font-bold text-gray-700 text-4xl p-8'>Shopping Cart</h1>
        </div>
        <div className=' pl-10  w-full flex  justify-between'>
            <div className='w-[700px]'>
                <span>{totalCourses} Course in Cart</span>
                <VideoLessonsSM courses = {cart}/>
            </div>
            <div className='mr-32 w-[400px]'>
                <CheckoutCart totalCourses={totalCourses} totalPrice={totalPrice} totalOrignalPrice={totalOrignalPrice}/>
            </div>
        </div>
        <LGVideoLesson courses = {cart}/>
    </div>
  )
}

export default ShoppingCart