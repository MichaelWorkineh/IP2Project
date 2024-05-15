import React, { useState } from 'react';
import bg1 from '../imgs/bg2.jpg';
import bg2 from '../imgs/bg3.jpg';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';



const SiteMoto = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAllCourses, setShowAllCourses] = useState(true);

  
const motive = [
    {
      name: "Addis Abeba",
      image: bg1,
      title: "Slow and Study",
      data: <div><p>Try learning just 5-10 minutes a day. <span className='text-blue-600 underline font-bold'>Continue your course and reach your peak potential</span></p></div>

    },
    {
      name: "Bahir dar",
      image: bg2,
      title: "A big sale for your big Opportunity",
      data: <div>With courses from $9.99, it’s the right time for the right skills and you. Our biggest sale of the season ends May 23.</div>
    }
  ];
  const toggleCourseVisibility = () => {
    setShowAllCourses(!showAllCourses);
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === motive.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? motive.length - 1 : prevIndex - 1));
  };

  const currMotive = motive[activeIndex] || {};


  return (
    <div className='justify-center relative'>
      <div className='flex items-center relative'>
       
        <div onClick={prevSlide} className='absolute top-1/2 left-5 transform -translate-y-1/2 cursor-pointer bg-gray-500 rounded-full p-2 text-6xl 'style={{zIndex:999}}>
          <FaArrowLeft className='text-white text-4xl z-999' />
        </div>
        <div key={currMotive.id} className='border border-white-700 shadow-custom'>
          <div className='flex flex-col w-[100%]'>
            <div src={currMotive.image} className='relative w-full border border-gray-200 object-cover' style={{maxHeight: '460px'}}>
                <img src={currMotive.image} alt="" className='w-full h-full object-cover' style={{maxHeight: '460px'}}/>
                <div className='absolute top-20 left-24 p-5 rounded-sm w-96 h-45 bg-white border border-white hover:opacity-75 transition-opacity duration-300' >
                  <h1 className='font-bold text-4xl'>{currMotive.title}</h1>
                  <div>{currMotive.data}</div>
                </div>
            </div>
            <div className='absolute top-0 m-20'>
              <h1 className='font-bold text-white text-4xl z-999'>{currMotive.title}</h1>
            </div>
          </div>
        </div>
          <div onClick={nextSlide} className='absolute top-1/2 right-8 transform -translate-y-1/2 cursor-pointer text-orange--500 text-6xl z-999 rounded-full bg-gray-500 p-2'>
          <FaArrowRight className='text-white text-4xl' />
        </div>
      </div>
    </div>
  );
};

export default SiteMoto