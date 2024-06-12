import React, { useState } from 'react';
import Rating from '../Rating';
import { FaStar } from 'react-icons/fa';

const FilterBar = ({ onFilterChange }) => {
  const [rating, setRating] = useState('');
  const [duration, setDuration] = useState([]);
  const [topics, setTopics] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [expandedSections, setExpandedSections] = useState({
    rating: false,
    duration: false,
    topics: false,
    subCategories: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
    onFilterChange('rating', e.target.value);
  };

  const handleDurationChange = (e) => {
    const { value, checked } = e.target;
    const newDuration = checked
      ? [...duration, value]
      : duration.filter((d) => d !== value);
    setDuration(newDuration);
    onFilterChange('duration', newDuration);
  };

  const handleTopicChange = (e) => {
    const { value, checked } = e.target;
    const newTopics = checked
      ? [...topics, value]
      : topics.filter((topic) => topic !== value);
    setTopics(newTopics);
    onFilterChange('topics', newTopics);
  };

  const handleSubCategoryChange = (e) => {
    const { value, checked } = e.target;
    const newSubCategories = checked
      ? [...subCategories, value]
      : subCategories.filter((subCategory) => subCategory !== value);
    setSubCategories(newSubCategories);
    onFilterChange('subCategories', newSubCategories);
  };

  return (
    <div className="filter-bar p-3 ">
     <div className="filter-section mt-4 pl-2 border-b text-xl w-full">
        <h3 className="font-bold cursor-pointer text-2xl pb-4" onClick={() => toggleSection('rating')}>
          Ratings {expandedSections.rating ? '▲' : '▼'}
        </h3>
        {expandedSections.rating && (
          <div className='pl-2 border-b text-gray-600 text-sm'> 
          {['4.5 & up', '4.0 & up', '3.5 & up', '3.0 & up'].map((r, idx) => (
            <div key={idx} className="flex items-center">
              <input
                type="radio"
                id={`rating-${r}`}
                name="rating"
                value={r}
                onChange={handleRatingChange}
              />
              <label htmlFor={`rating-${r}`} className="ml-2 flex items-center">
                {[...Array(Math.floor(parseFloat(r))).keys()].map((_, i) => (
                  <span key={i}><FaStar color="#ffc109" size={12} className=''/></span>
                ))} <span className='mr-3'>{r}</span>
              </label>
            </div>
          ))}
        </div>
        
        )}
      </div>
      <div className="filter-section mt-4 pl-2 border-b text-2xl ">
        <h3 className="font-bold cursor-pointer pb-4" onClick={() => toggleSection('duration')}>
          Video Duration {expandedSections.duration ? '▲' : '▼'}
        </h3>
        {expandedSections.duration && (
          <div className='pl-2 border-b text-gray-600 text-sm'>
            {['0-1 Hour', '1-3 Hours', '3-6 Hours', '6-17 Hours'].map((d, idx) => (
              <div key={idx}>
                <input
                  type="checkbox"
                  id={`duration-${d}`}
                  value={d}
                  onChange={handleDurationChange}
                />
                <label htmlFor={`duration-${d}`} className="ml-2">{d}</label>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="filter-section mt-4 pl-2 border-b text-2xl">
        <h3 className="font-bold cursor-pointer pb-4" onClick={() => toggleSection('topics')}>
          Topic {expandedSections.topics ? '▲' : '▼'}
        </h3>
        {expandedSections.topics && (
          <div className='pl-2 border-b text-gray-600 text-sm'>
            {['Advanced Java', 'React Masterclass', 'Penetration Testing', 'Network Security'].map((t, idx) => (
              <div key={idx}>
                <input
                  type="checkbox"
                  id={`topic-${t}`}
                  value={t}
                  onChange={handleTopicChange}
                />
                <label htmlFor={`topic-${t}`} className="ml-2">{t}</label>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="filter-section mt-4 pl-2 border-b text-2xl">
        <h3 className="font-bold cursor-pointer pb-4" onClick={() => toggleSection('subCategories')}>
          Subcategory {expandedSections.subCategories ? '▲' : '▼'}
        </h3>
        {expandedSections.subCategories && (
          <div className='pl-2 border-b text-gray-600 text-sm' >
            {['atami', 'IT Certifications'].map((s, idx) => (
              <div key={idx}>
                <input
                  type="checkbox"
                  id={`subcategory-${s}`}
                  value={s}
                  onChange={handleSubCategoryChange}
                />
                <label htmlFor={`subcategory-${s}`} className="ml-2">{s}</label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterBar;
