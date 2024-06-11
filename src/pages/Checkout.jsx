import React, { useState, useEffect } from 'react';
import CheckoutCart from '../components/CheckoutCart';
import PaymentForm from '../components/PaymentForm';
import { useSearchParams } from 'react-router-dom';
import VideoLessonsSM from '../components/videoDisplay/VideoLessonsSM';
import axios from 'axios';

const Checkout = () => {
    const [searchParams] = useSearchParams();
    const totalCourses = searchParams.get('totalCourses') ;
    const totalPrice = searchParams.get('totalPrice');
    const originalPrice = searchParams.get('originalPrice');
    const courseDataString = searchParams.get('courseData') || '[]';
    const discount = totalPrice - originalPrice;
    let paymentCourses = [];
    let payPrice = 0;
    let payOriginalPrice = 0;
    let payDiscount = 0;
    let payCourseNum = 0;
    const [totalPrices, setTotalPrice] = useState(0);
    const [totalOrignalPrice, setTotalOrignalPrice] = useState(0);
    const [totalCoursess, setTotalCourses] = useState(0);
    const [courses, setCourses] = useState([]);
    const [parsedCourse, setParsedCourses] = useState([]);
    const [cart, setCartItems] = useState([]);
    const [parsedCourseData, setParsedCourseData] = useState(null);

   
    useEffect(() => {
        const data = JSON.parse(courseDataString);
            setParsedCourseData(data);
            setParsedCourses([data]);
    }, [courseDataString]);

    useEffect(() => {
        const calculateCartDetails = () => {
          const numOfCourses = parsedCourse.length;
          const total = parsedCourse.reduce((acc, course) => acc + course.price, 0);
          const totalOrignal = parsedCourse.reduce((acc, course)=> acc + course.originalPrice,0);
          setTotalCourses(numOfCourses);
          setTotalPrice(total);
          setTotalOrignalPrice(totalOrignal);
        };
    
        calculateCartDetails();
      }, [parsedCourseData]);

      console.log(courses);

    useEffect(() => {
        const fetchOrderlist = async () => {
            try {
                const token = localStorage.getItem('firebaseToken');
                const response = await axios.get('http://localhost:5000/cart', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setCartItems(response.data);
                if (!parsedCourseData) {
                    setCourses(response.data);
                }
            } catch (error) {
                console.error('Error fetching wishlist:', error);
            }
        };

        fetchOrderlist();
    }, [parsedCourseData]);

   

    if (totalPrice === null) {
        payPrice = totalPrices;
        payOriginalPrice = totalOrignalPrice;
        payDiscount = payPrice - payOriginalPrice;
        paymentCourses = parsedCourse;
    } else {
        payPrice = totalPrice;
        payOriginalPrice = originalPrice;
        payDiscount = discount;
        paymentCourses = cart;
    }

    console.log(payPrice);
    console.log(payPrice);
    return (
        <div className='bg-bar'>
            <div className='flex pl-40 mt-8 bg-bar'>
                <div className='p-10 ml-20 w-[45%] bg-white'>
                    <h1 className='font-bold text-gray-700 text-4xl pb-8'>Checkout</h1>
                    <h1 className='font-bold text-2xl text-gray-700'>Billing address</h1>
                    <p className='text-sm w-[100%]'>
                        Udemy is required by law to collect applicable transaction taxes for purchases made in certain tax jurisdictions.
                    </p>
                    <h1 className='font-bold text-2xl text-gray-700 mt-6'>Payment Method</h1>
                    <div className='w-full'>
                        <PaymentForm payPrice={payPrice} courses={paymentCourses} />
                    </div>
                    <h1 className='font-bold text-2xl text-gray-700 mt-6'>Order Details</h1>
                    <VideoLessonsSM courses={paymentCourses} />
                </div>
                <div className='w-[400px] mt-20'>
                    <CheckoutCart totalCourses={totalCourses} totalPrice={payPrice} discount={payDiscount} />
                </div>
            </div>
        </div>
    );
};

export default Checkout;
