import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import VideoLessons from './popups/VideoLessons';
import sampleVid from '../imgs/sampleVid.mp4';
import { useAuth } from '../contexts/AuthProvider';
import AddToCart from './popups/AddToCart';
import axios from 'axios';

const Cart = ({showContent, videos, courseData}) => {

    const hideThreshold = 100; 
    const shouldHideContent = showContent > hideThreshold;
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const {currentUser} = useAuth();
    const Id = currentUser ? currentUser.uid : null;
    console.log(currentUser);
   
    console.log(Id);
    const toggleVideo = () => {
        setIsVideoOpen(!isVideoOpen);
    }

    
    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    }
    const closeVideo = () => {
        setIsVideoOpen(false);
    }
    const addToWishlist = async () => {
        try {
            const userId = Id;
            const token = localStorage.getItem('firebaseToken'); 
            
            const response = await axios.post('http://localhost:5000/wishlist/add', { courseId: courseData._id, userId }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            
            console.log(response.data.message);
        } catch (error) {
            console.error('Error adding course to wishlist:', error);
            console.log(error);
        }
    };

    const addToCart = async () => {
        try {
            const userId = Id;
            const token = localStorage.getItem('firebaseToken'); 
            
            const response = await axios.post('http://localhost:5000/cart/add', { courseId: courseData._id, userId }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
         });
            
          console.log(response.data.message);
        } catch (error) {
          console.error("Error adding course to cart:", error.response.data.message);
        }
      };

      const handleButtonClick = () => {
        addToCart();
        toggleCart();
      };
      
      
    
  
  return (
    <div className='bg-white border border-white-300'>
        {shouldHideContent ? (
            <div></div>
        ) : (
        <div className='relative h-[200px]'>
            <video src={`http://localhost:5000/${courseData.video}`} className='h-[200px]'>
            </video>
            <button className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-3 py-4 bg-blue-500 rounded-full font-bold text-white'  onClick ={toggleVideo}>Vide</button>
            <VideoLessons courseData= {courseData} videos ={videos} isVideoOpen={isVideoOpen}/>
        </div>
        )}
        <div>
            <div className='p-4'>
                <span className='text-3xl m-2 pt-4 font-bold'>${courseData.price}</span>
                <span className='text-gray-500 mx-2'>${courseData.originalPrice}</span>
                <span className='mx-2'>81% off</span>
                <div className='flex justify-center'><p className='text-red-500'><span className='font-bold'>1 day</span> left at this price!</p></div>
            </div>
            <div className='flex flex-col'>
                <div className='flex w-full'>
                    <div className='w-[80%] m-2'>
                        <button className='bg-blue-600 border border-blue-500  text-white font-bold py-2 w-full' onClick={handleButtonClick}>Add to cart</button>
                        <AddToCart courseData={courseData} isCartOpen={isCartOpen}/>
                    </div>
                    <div className='w-[18%]'>
                    <button className=' py-1' onClick={addToWishlist}>
                        <svg width="100" height="100" viewBox="0 0 50 55" xmlns="http://www.w3.org/2000/svg">
                                <path class="fill-white stroke-black stroke-2 transition hover:stroke-blue-700" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                    </button>
                    </div>
                </div>
                <button className=' border border-gray-400 p-4 m-2 font-bold'>Buy Now</button>
                <div className='flex justify-center text-sm'><p >30-Day Money-Back Guarantee</p></div>
            </div>
            <div className='text-gray-700 m-4'>
                <h1 className='font-bold text-black-700'>This course includes:</h1>
                <div className='ml-3 text-sm p-1'>
                    <p>7.5 hours on-demand video</p>
                    <p>6 coding excercises</p>
                    <p>1 article</p>
                    <p>25 downloadable resources</p>
                    <p> Acess on mobile and Tv</p>
                    <p> Full lifetime access</p>
                    <p> Certificate of completion</p>
                </div>
            </div>
            <div className='text-black-500'>
                <div className='flex flex-row underline justify-evenly'>
                   <p>Share</p>
                   <p>Git course</p>
                   <p>Apply coupon</p>
                </div>
                <div className='flex flex-col'>
                    <button className='border border-gray-600 mx-5 py-3'>Claim Cuppon</button>
                    <div className='flex flex-row mt-3 justify-center'>
                        <input className='w-[64%] border border-gray-400' type="text"  placeholder='hellow'/>
                        <button className='bg-gray-800 py-3 px-4 text-white font-bold'>Apply</button>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Cart