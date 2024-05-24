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

  return (
    <div>
      <h1>hellow</h1>
      <LGVideoLesson courses={wishlist}/>
    </div>
  )
}

export default WishList