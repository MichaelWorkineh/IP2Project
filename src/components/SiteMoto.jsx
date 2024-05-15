import React, { useState } from 'react';
import motivePic from '../imgs/motive.jpg';
import motivePic2 from '../imgs/addisAbeba.jpg';


const SiteMoto = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAllCourses, setShowAllCourses] = useState(true);

  
const motive = [
    {
      name: "Addis Abeba",
      image: motivePic
    },
    {
      name: "Bahir dar",
      image: motivePic2
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
    <div className='justify-center'>
      <div className='flex items-center'>
        <button
          onClick={prevSlide}
          className='p-2 bg-gray-300 hover:bg-gray-400 rounded-l'
        >
          Left
        </button>
        <div key={currMotive.id} className='border border-white-700 shadow-custom'>
          <div className='flex flex-col w-[100%]'>
            <div src={currMotive.image} className='w-[] h-[470px] border border-gray-200' style={{maxHeight: '460px'}}>
                <img src={currMotive.image} alt="" className='' style={{maxHeight: '460px', maxWidth: '100%', minWidth: '100%'}}/>
            </div>
            <div className='absolute top-0 m-20'>
              <h1 className='font-bold text-white text-4xl z-999'>{currMotive.title}</h1>
            </div>
          </div>
        </div>
        <button
          onClick={nextSlide}
          className='p-2 bg-gray-300 hover:bg-gray-400 rounded-r'
        >
          Right
        </button>
      </div>
    </div>
  );
};

export default SiteMoto