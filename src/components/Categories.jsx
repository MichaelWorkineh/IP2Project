import React, { useState } from 'react';

const CategoriesBar = () => {

  const categories = [
    {
      name: 'Development',
      subcategories: ['Web Development', 'Data Science', 'Mobile Development', 'Programming Languages']
    },
    {
      name: 'Business',
      subcategories: ['Finance', 'Entrepreneurship', 'Communication', 'Management']
    },
    {
      name: 'IT & Software',
      subcategories: ['Network & Security', 'Hardware', 'Operating Systems', 'Other IT & Software']
    },
    // Add more categories and subcategories as needed
  ];

  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (index) => {
    setActiveCategory(index === activeCategory ? null : index);
  };

  return (
    <div className=" border-b border-gray-200 mx-6">
      <ul className="relative flex p-2 space-x-7">
        {categories.map((category, index) => (
          <li key={category.name} className="relative text-md">
            <button
              onMouseEnter={() => handleCategoryClick(index)}
              className={`font-medium ${activeCategory === index ? 'text-blue-500' : 'text-gray-700'} hover:text-blue-500`}
            >
              {category.name}
            </button>
            {activeCategory === index && (
              <ul className="absolute mt-2 p-2 bg-gray-600 text-white font-bold shadow-lg rounded-md z-50 flex space-x-4 justify-center" style= {{width: '100vw', left: 0}}>
                {category.subcategories.map((subcategory) => (
                  <li key={subcategory} className="py-1 px-2 cursor-pointer rounded">
                    {subcategory}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesBar;
