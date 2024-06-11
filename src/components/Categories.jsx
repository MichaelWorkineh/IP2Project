import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CategoriesBar = () => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const coursesResponse = await fetch("http://localhost:5000/courses");
        if (!coursesResponse.ok) {
          throw new Error("Failed to fetch course data");
        }
        const courses = await coursesResponse.json();
        
        const categoryMap = {};
        
        courses.forEach(course => {
          const mainCategory = course.category.main;
          const subCategory = course.category.sub;

          if (!categoryMap[mainCategory]) {
            categoryMap[mainCategory] = new Set();
          }
          categoryMap[mainCategory].add(subCategory);
        });

        const processedCategories = Object.keys(categoryMap).map(main => ({
          name: main,
          subcategories: Array.from(categoryMap[main])
        }));

        setCategories(processedCategories);
      } catch (error) {
        console.error("Error fetching or processing data:", error);
      }
    };

    fetchData();
  }, []);

  const handleCategoryClick = (index) => {
    setActiveCategory(index === activeCategory ? null : index);
  };

  return (
    <div className="border-b border-gray-200 mx-6">
      {categories.length === 0 ? (
        <p>Loading categories...</p>
      ) : (
        <ul className="relative flex p-2 space-x-7 justify-center">
          {categories.map((category, index) => (
            <li 
              key={category.name} 
              className="relative items-center" 
              onMouseEnter={() => handleCategoryClick(index)}
              onMouseLeave={() => handleCategoryClick(null)}
            >
              <button
                className={`font-medium ${activeCategory === index ? 'text-blue-500' : 'text-gray-700'} hover:text-blue-500`}
              >
                {category.name}
              </button>
              {activeCategory === index && (
                <ul className="fixed left-0  mt-0 pt-2 p-2 bg-black text-white font-bold shadow-lg z-50 flex space-x-4 justify-center" style={{ width: '100vw', left: 0 }}>
                  {category.subcategories.map((subcategory) => (
                    <li key={subcategory} className="py-1 px-2 cursor-pointer rounded text-md">
                      <Link to={`/categories?main=${category.name}&sub=${subcategory}`}> {subcategory}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoriesBar;
