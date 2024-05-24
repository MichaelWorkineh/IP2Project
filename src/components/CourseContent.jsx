import React from 'react'
import { useState } from 'react';

const CourseContent = ({courseData}) => {

    const [expandedItems, setExpanded] = useState({});
    const [showFullContent, setShowFullContent] = useState(false);

    const toggleContent = () => {
        setShowFullContent(!showFullContent);
    }

    const toggleItem = (index) => {
        setExpanded((prevState)=> ({
            ...prevState,
            [index]: !prevState[index],
        }));
    }
    const toggleAllItems = () => {
        const allExpanded = Object.values(expandedItems).every((item) => item);
        const newExpandedState = {};
    
        for (let i = 0; i < items.length; i++) {
          newExpandedState[i] = !allExpanded;
        }
    
        setExpanded(newExpandedState);
      };
    

    

     const items= courseData.videoDescription.chapters;
     console.log(items);
  return (
    <div className='m-10'>
        <div>
            <div className='m-3'>
                <h1 className='text-2xl font-bold'>Course Content</h1>
            </div>
            <div className='flex flex row justify-between m-2'>
                <div>
                    <span>{courseData.hours} hours</span>
                </div>
                <div className='text-blue-800 font-bold'>
                <button className='m-1' onClick={toggleAllItems}> Expand all </button>
                </div>
            </div>
        </div>
        {items.map((item, index) => (
    <div key={index} className='border border-gray-300 pt-5'>
        <div className='font-bold text-lg flex justify-between mx-2'>
            <button className='m-1' onClick={() => toggleItem(index)}>
                {expandedItems[index] ? 'Collapse' : 'Expand'} {item.title}
            </button>
            <div className='font-normal'>{item.timestamp}</div>
        </div>
        <hr className='border border-gray-100' />
        <div>
            {expandedItems[index] && (
                <ul className='list-disc ml-8'>
                    {items.map((chapter, _id) => (
                        <li key={_id}>{chapter.title} - {chapter.timestamp}</li>
                    ))}
                </ul>
            )}
        </div>
    </div>
))}

        <div>
            <div font-bold text-2xl>
                <h1 className='font-bold text-2xl m-2'>Requirements</h1>
                <div className='text-sm'>
                    {courseData.requirements}
                </div>    
            </div>
            <div font-bold text-2xl>
                <h1 className='font-bold text-2xl m-2'>Description</h1>
                <div className='text-sm'>
                <p>
                {courseData.description}
                </p>
                </div>
            </div>
            <div font-bold text-2xl>
                <h1 className='font-bold text-2xl m-2'>Who this course is for</h1>
                <div className='text-sm'>
                    <p>People working in an office environment who must use a spreadsheet program</p>
                    <p>People working in an office environment who must use a spreadsheet program</p>
                    <p>People working in an office environment who must use a spreadsheet program</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CourseContent