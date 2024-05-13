import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import SampleVids from '../videoDisplay/SampleVids';

const VideoLessons = ({sampleVid, isVideoOpen, videos}) => {
    
    const title = "JavaScript for beginners";
    const [isOpen, setIsOpen] = useState(true);
    const [selectedVideo, setSelectedVideo] = useState(sampleVid);
    const [selectedTitle, setSelectedTitle] = useState(title);
    const onClose  = () => {
        setIsOpen(false);
    }

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const handleVideoClick = (vidSrc, vidTitle) => {
        setSelectedVideo(vidSrc);
        setSelectedTitle(vidTitle);
    }

    console.log(sampleVid);

   
    if (!isVideoOpen || !isOpen) return null;

    return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center overflow-y-auto'>
        <div className=' w-[600px] mt-96 bg-gray-700 z-999 overflow-y-auto'>
            <div className='flex justify-end'><button className='text-gray-500 text-xl place-self-end pr-5 pt-5' onClick={onClose}>X</button></div>
            <div className='p-4 font-bold text-white'>
                <h1>Course Preview</h1>
                <h1 className='text-xl'>{selectedTitle}</h1>
            </div>
            <div className='flex justify-center mt-12' >
                <div className='w-[90%] '>
                  <video src={selectedVideo}></video>
                </div>
            </div>
            <div className='p-4 text-white font-bold'>
                Other free sample Videos
                <SampleVids videos={videos} onVideoClick = {handleVideoClick}/>
            </div>
        </div>
    </div>
  )
}

export default VideoLessons