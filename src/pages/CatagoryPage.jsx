import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import PopularCategory from '../components/PopularCategory';
import TrendingCategory from '../components/TrendingCategory';
import HugeVideoLessons from '../components/videoDisplay/HugeVideoLesson';
import FilterBar from '../components/filterbar/FilterBar';
import VideoLessonsSM from '../components/videoDisplay/VideoLessonsSM';
import SearchPage from './SearchPage';

const CategoryPage = () => {
  const [courses, setCourses] = useState([]);
  const [activeMenuItem, setActiveMenuItem] = useState("Most Popular");
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const mainCategory = searchParams.get('main');
  const subCategory = searchParams.get('sub');
  const courseInfo = useState(true);
  const searchQuery = new URLSearchParams(location.search).get('search');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.post('http://localhost:5000/courses/category', {
          main: mainCategory,
          sub: subCategory
        });
        setCourses(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCourses();
  }, [mainCategory, subCategory]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const section = queryParams.get('section');
    if (section && MenuItems.some(item => item.title === section)) {
      setActiveMenuItem(section);
    }
  }, [location.search]);

  const handleMenuItemCheck = (title, path) => {
    setActiveMenuItem(title);
  };

  const MenuItems = [
    { title: "Most Popular", path: "/categories?section=Most Popular" },
    { title: "Trending", path: "/categories?section=Trending" },
  ];

  return (
    <div>
      <h1 className='text-4xl font-bold p-12 pl-24'>{mainCategory} & {subCategory}</h1>
      <div className='px-24 p-3'>
        <h1 className='font-bold text-2xl '>Courses to get you started</h1>
        <p className='p-2'>Explore courses from experienced, real-world experts.</p>
        <ul className='flex flex-row pt-2 mr-5 text-md pb-2 mb-1 border-b-2'>
          {MenuItems.map(({ path, title }, index) => (
            <li key={index} className='mr-5 font-bold text-gray-400'>
              <NavLink to={path} className={`${activeMenuItem === title ? 'pb-2 text-black border-b-4 border-black' : ''}`} onClick={() => handleMenuItemCheck(title, path)}>
                <span>{title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
        <div className='flex-grow'>
          {activeMenuItem === 'Most Popular' && <PopularCategory courses={courses} courseInfo={courseInfo} />}
          {activeMenuItem === 'Trending' && <TrendingCategory courses={courses} courseInfo={courseInfo} />}
        </div>
        <div>
          <HugeVideoLessons courses={courses} />
        </div>
        <SearchPage/>
      </div>
    </div>
  );
};

export default CategoryPage;