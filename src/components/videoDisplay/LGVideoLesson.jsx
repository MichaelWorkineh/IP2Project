import React, { useState } from "react";
import { Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { Link } from 'react-router-dom';
import Rating from "../Rating";
import axios from 'axios'; 

const Destinycard = ({ courses, courseInfo, fromWishlist }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);  // State to track the currently hovered item
  const numberOfItemsPerPage = 4;

  const groupedItems = [];
  for (let i = 0; i < courses.length; i += numberOfItemsPerPage) {
    groupedItems.push(courses.slice(i, i + numberOfItemsPerPage));
  }

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const addToCart = async (courseData, Id) => {
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

  const addToWishlist = async (courseData, Id) => {
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

  console.log(courseInfo);
  const [coursePop, setCoursePop] = useState(courseInfo);

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', width: 'full' }}>
      <div style={{ flexGrow: 1 }}>
        <Carousel
          animation="slide"
          indicators={false}
          navButtonsAlwaysVisible={true}
          cycleNavigation={false}
          fullHeightHover={false}
          index={currentIndex}
          interval={null}

        >
          {groupedItems.map((group, index) => (
            <ItemGroup 
              key={index} 
              group={group} 
              hoveredIndex={hoveredIndex} 
              setHoveredIndex={setHoveredIndex} 
              addToCart={addToCart} 
              addToWishlist={addToWishlist} 
              courseInfo={courseInfo}
              fromWishlist={fromWishlist}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

function ItemGroup({ group, hoveredIndex, setHoveredIndex, addToCart, addToWishlist, courseInfo,fromWishlist }) {
  return (
    <div style={{ display: "flex", justifyContent: "left" }}>
      {group.map((course, i) => (
        <Item 
          key={i} 
          course={course} 
          index={i} 
          hoveredIndex={hoveredIndex} 
          setHoveredIndex={setHoveredIndex} 
          addToCart={addToCart} 
          addToWishlist={addToWishlist} 
          courseInfo={courseInfo}
          fromWishlist = {fromWishlist}
          
        />
      ))}
    </div>
  );
}

function Item({ course, index, hoveredIndex, setHoveredIndex, addToCart, addToWishlist, courseInfo, fromWishlist }) {
  const handleMouseOver = () => {
    if (courseInfo) {
      setHoveredIndex(index);
    }
  };

  const handleMouseOut = () => {
    setHoveredIndex(null);
  };

  
  const handleRemoveFromWishlist = async (courseId) => {
    console.log("Course ID to be removed from wishlist:", courseId);
    try {
      const token = localStorage.getItem('firebaseToken');
      await axios.delete(`http://localhost:5000/wishlist/remove/${courseId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
    } catch (error) {
      console.error('Error removing course from wishlist:', error);
    }
  };

  const [popupPosition, setPopupPosition] = useState({ right: '-300px', left: 'auto' });

  const ref = React.useRef();

  React.useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const windowWidth = window.innerWidth;
      
      if (rect.right + 300 > windowWidth) {
        setPopupPosition({ right: 'auto', left: '-300px' });
      } else {
        setPopupPosition({ right: '-300px', left: 'auto' });
      }
    }
  }, [hoveredIndex]);

  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "white",
        color: "#fff",
        justifyContent: "center",
        alignItems: "center",
        height: "380px",
        width: "300px",
        display: "flex",
        flexDirection: "column",
        borderRadius: "1px",
        p: 0,
        mx: 2,
      }}
      elevation={0}
      onMouseOver={handleMouseOver}  // Set hovered index on mouse over
      onMouseOut={handleMouseOut}    // Reset hovered index on mouse out
      ref={ref}
      handleRemoveFromWishlist={handleRemoveFromWishlist}
    >
      <Link to={`/courPage/${course._id}`}>
        <div className='pt-4'>
          <div className='flex flex-col w-full text-black pt-2'>          
            <div className=' border border-gray-200'>
              <div className="">
              {fromWishlist ? (
                <div className="absolute right-0 z-50">
                    <button className='py-2 px-3 rounded-full'
                        onClick={(e) => {
                          e.preventDefault();
                          handleRemoveFromWishlist(course._id);
                        }}
                    >
                  <svg width="60" height="60" viewBox="0 0 20 40" xmlns="http://www.w3.org/2000/svg">
                    <path className="fill-white stroke-blue-purple-500 fill-purple-500 stroke-1 transition hover:stroke-blue-700" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </button>
                </div>) : (
                <div>
                </div>)}
                </div>           
              <video src={`http://localhost:5000/${course.video}`} style={{ maxHeight: '200px', maxWidth: '' }}>
                Your browser does not support the video tag.
              </video>
            </div>
            <div className='p-1'>
              <h1 className='font-bold'>{course.title}</h1>
              <span className='text-sm text-gray-500 text-black'>By: {course.instructor.userEmail}</span>
              <div className='text-sm flex'>
                <span className='text-red-600 font-bold'><Rating defaultValue={course.rating} /></span>
                <span className="mt-2"> ({course.reviews})</span>
                <div className='text-sm text-gray-400 mt-2 ml-2'>{course.hours} course hours</div>
              </div>
              <span className='font-bold text-tiny'>${course.price}</span>
            </div>
          </div>
        </div>
        {hoveredIndex === index ? (
          <div 
            className="absolute -top-0 text-black mt-0 w-[300px] p-3 bg-white border border-gray-200 rounded-sm shadow-lg z-10" 
            style={popupPosition}
          >
            <h1 className='font-bold '>{course.category.main} </h1>
            <div className='text-sm flex'>
              <span className='text-red-600 font-bold'><Rating defaultValue={course.rating} /></span>
              <span className="mt-2"> ({course.reviews})</span>
              <div className='text-sm text-gray-400 mt-2 ml-2'>{course.hours} course hours</div>
            </div>
            <p>{course.description}</p>
            <p>{course.WhatYouLearn}</p>
            <div className="flex">
              <div className="w-[80%] m-2">
                <button className='bg-blue-600 border border-blue-500  text-white font-bold py-3 w-full' onClick={() => addToCart(course, course.instructor.userEmail)}>Add to cart</button>
              </div>
              <div className='w-[18%] border border-gray-500 mr-2 mt-2 h-[50px] rounded-full'>
                <button className=' py-2 px-3 rounded-full' onClick={() => addToWishlist(course, course.instructor.userEmail)}>
                  <svg width="50" height="50" viewBox="0 0 50 40" xmlns="http://www.w3.org/2000/svg">
                    <path className="fill-white stroke-black stroke-2 transition hover:stroke-blue-700" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </Link>
    </Paper>
  );
}

export default Destinycard;
