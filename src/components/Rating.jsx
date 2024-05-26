import React, { useState } from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'; // Assuming you are using react-icons for star icons

const Rating = ({ defaultValue }) => {
  const rating =(defaultValue); // Round the rating to the nearest integer
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseOver = (index) => {
    setHoverRating(index);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleClick = (index) => {
    // You can handle click events here if needed
  };

  const renderStar = (index, ratingValue) => {
    if (ratingValue <= rating) {
      return <FaStar color="#ffc107" size={12} />;
    } else if (ratingValue - rating === 0.5) {
      return <FaStarHalfAlt color="#ffc107" size={12} />;
    } else {
      return <FaStarHalfAlt color="#ffc107" size={12} />;
    }
  };

  return (
    <div className='flex p-2'>
      <span className='mr-1'>{rating}</span>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;

        return (
            
          <label key={index} className='pt-1'>
            <input 
              className='hidden'
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => handleClick(ratingValue)}
            />
            {renderStar(index, ratingValue)}
          </label>
        );
      })}
    </div>
  );
};

export default Rating;
