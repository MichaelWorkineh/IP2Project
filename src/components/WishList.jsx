import React, {useEffect, useState} from 'react'
import LGVideoLesson from './videoDisplay/LGVideoLesson';
import axios from 'axios';

const WishList = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const token = localStorage.getItem('firebaseToken');
        const response = await axios.get('http://localhost:5000/wishlist', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setWishlist(response.data);
      } catch (error) {
        console.error('Error fetching wishlist:', error);
      }
    };

    fetchWishlist();
  }, []);

  const handleRemoveFromWishlist = async (courseId) => {
    console.log("Course ID to be removed from wishlist:", courseId);
    try {
      const token = localStorage.getItem('firebaseToken');
      await axios.delete(`http://localhost:5000/wishlist/remove/${courseId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      setWishlist(wishlist.filter(course => course._id !== courseId));
    } catch (error) {
      console.error('Error removing course from wishlist:', error);
    }
  };
  

  return (
    <div className='h-[400px] p-10'>
      <LGVideoLesson courses={wishlist} handleRemoveFromWishlist={handleRemoveFromWishlist} fromWishlist={true}/>
    </div>
  )
}

export default WishList