import React, { useState } from 'react';
import { useRef } from 'react';

const VideoLessons = ({ courseData, isVideoOpen, videos }) => {
    const videoRef = useRef(null);
    const title = courseData.title;
    const [isOpen, setIsOpen] = useState(true);
    const [selectedVideo, setSelectedVideo] = useState(`http://localhost:5000/${courseData.video}`);
    const [selectedTitle, setSelectedTitle] = useState(title);
    const [isPlaying, setIsPlaying] = useState(false); // Track video playing state

    const onClose = () => {
        setIsOpen(false);
    }

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const handleVideoClick = (vidSrc, vidTitle) => {
        setSelectedVideo(vidSrc);
        setSelectedTitle(vidTitle);
    }

    const playFirstTenSeconds = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true); 
            setTimeout(() => {
                videoRef.current.pause();
                setIsPlaying(false); 
            }, 10000); 
        }
    };

    if (!isVideoOpen || !isOpen) return null;

    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center overflow-y-auto'>
            <div className=' w-[600px] bg-gray-700 z-999 overflow-y-auto'>
                <div className='flex justify-end'><button className='text-gray-500 text-xl place-self-end pr-5 pt-5' onClick={onClose}>X</button></div>
                <div className='p-4 font-bold text-white'>
                    <h1>Course Preview</h1>
                    <h1 className='text-xl'>{selectedTitle}</h1>
                </div>
                <div className='flex relative justify-center mt-12'>
                    <div className='w-[90%] '>
                        <video ref={videoRef} src={selectedVideo} style={{ maxHeight: '300px', maxWidth: '520px' }}>
                        </video>
                        {!isPlaying && ( 
                            <button className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-3 py-4 bg-blue-500 rounded-full font-bold text-white' onClick={playFirstTenSeconds}>Play</button>
                        )}
                        {isPlaying && ( 
                            <div  className='absolute -bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-3 py-4 bg-blue-500 rounded-full font-bold text-white'>
                                Buy Course to Play Fully
                            </div>
                        )}
                    </div>
                </div>
                <div className='p-4 text-white font-bold'>
                    Other free sample Videos
                   
                </div>
            </div>
        </div>
    )
}

export default VideoLessons;
