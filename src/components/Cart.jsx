import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import VideoLessons from './popups/VideoLessons';
import sampleVid from '../imgs/sampleVid.mp4';

const Cart = ({showContent, videos}) => {

    const hideThreshold = 100; 
    const shouldHideContent = showContent > hideThreshold;
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    const toggleVideo = () => {
        setIsVideoOpen(!isVideoOpen);
    }
    const closeVideo = () => {
        setIsVideoOpen(false);
    }

    console.log(videos);
  
  return (
    <div className='bg-white border border-white-300'>
        {shouldHideContent ? (
            <div></div>
        ) : (
        <div className='relative h-[200px]'>
            <video src={sampleVid}>
            </video>
            <button className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-3 py-4 bg-blue-500 rounded-full font-bold text-white'  onClick ={toggleVideo}>Vide</button>
            <VideoLessons sampleVid={sampleVid} videos ={videos} isVideoOpen={isVideoOpen}/>
        </div>
        )}
        <div>
            <div className='p-4'>
                <span className='text-3xl m-2 pt-4 font-bold'>$13.99</span>
                <span className='text-gray-500 mx-2'>$74.99</span>
                <span className='mx-2'>81% off</span>
                <div className='flex justify-center'><p className='text-red-500'><span className='font-bold'>1 day</span> left at this price!</p></div>
            </div>
            <div className='flex flex-col'>
                <div className='flex w-full'>
                    <button className='bg-blue-600 m-2 border border-blue-500 w-[80%] text-white font-bold py-3'>Add to cart</button>
                    <button className='border border-black-500 m-2 w-[18%]'>luv</button>
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