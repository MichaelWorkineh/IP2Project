import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import SampleVids from '../videoDisplay/SampleVids';
import VideoLessonsSM from '../videoDisplay/VideoLessonsSM';
import MDVideoLessons from '../videoDisplay/MDVideoLessons';


const AddToCart = ({courseData,isCartOpen}) => {
    
     const title = courseData.title;
    const [isOpen, setIsOpen] = useState(true);
    const [selectedVideo, setSelectedVideo] = useState(`http://localhost:5000/${courseData.video}`);
    const [selectedTitle, setSelectedTitle] = useState(title);
    const onClose  = () => {
        setIsOpen(false);
        isCartOpen = !isCartOpen;
    }

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const handleVideoClick = (vidSrc, vidTitle) => {
        setSelectedVideo(vidSrc);
        setSelectedTitle(vidTitle);
    }


    
   
    if (!isCartOpen || !isOpen) return null;

    return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center overflow-y-auto'>
        <div className=' w-[600px] bg-white z-999 overflow-y-auto'>
            <div className='flex justify-end'><button className='text-gray-500 text-xl place-self-end pr-5 pt-5' onClick={onClose}>X</button></div>
            <h1 className='font-bold p-2 pl-4 border-b border-gray-400'>Added to cart</h1>
            <VideoLessonsSM courses={[courseData]} showCartButton={isCartOpen}/>
            <MDVideoLessons courses={[courseData]}/>
        </div>
    </div>
  )
}

export default AddToCart;