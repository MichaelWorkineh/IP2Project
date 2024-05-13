import React from 'react'
import { useState } from 'react';

const CourseContent = () => {

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
    

    const items = [
        { title: 'Item 1', details: ['Detail 1', 'Detail 2', 'Detail 3'] },
        { title: 'Item 2', details: ['Detail A', 'Detail B'] },
        { title: 'Item 3', details: ['Detail X', 'Detail Y', 'Detail Z'] },
        { title: 'Item 4', details: ['Detail Alpha', 'Detail Beta'] },
        { title: 'Item 5', details: ['Detail One', 'Detail Two', 'Detail Three'] },
      ];

  return (
    <div className='m-10'>
        <div>
            <div className='m-3'>
                <h1 className='text-2xl font-bold'>Course Content</h1>
            </div>
            <div className='flex flex row justify-between m-2'>
                <div>
                    <span>4 sections 16 lectures 1h 7m total length</span>
                </div>
                <div className='text-blue-800 font-bold'>
                <button className='m-1' onClick={toggleAllItems}> Expand all </button>
                </div>
            </div>
        </div>
        {items.map((item, index)=> (
            <div key={index} className='border border-gray-300 pt-5 '>
            <div className='font-bold text-lg flex justify-between mx-2' >
                <button className='m-1' onClick={()=>toggleItem(index)}> {expandedItems[index] ? 'Collapse' : 'Expand'}{item.title}</button>  
                <div className='font-normal'>4h and 20 mins</div>
            </div>
            <hr className='border border-gray-100' />
            <div>
            {expandedItems[index] && (
                <ul className='list-disc ml-8'>
                    {item.details.map((detail,idx)=> (
                        <li key={idx}>{detail}</li>
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
                    <p>Be able to navigate the internet using a web browser.</p>
                    <p>Be able to navigate the internet using a web browser.</p>
                </div>    
            </div>
            <div font-bold text-2xl>
                <h1 className='font-bold text-2xl m-2'>Description</h1>
                <div className='text-sm'>
                <p>
                Google Sheets has become the go-to spreadsheet program for millions of users.

An advanced spreadsheet application, Google Sheets is used for everything from tracking finances, to data management, to logging and tracking. With dozens of features, Google Sheets can be intimidating to first-time users. Luckily you can learn the basics in a short period of time and immediately be productive with the Google Sheets software.

This is a learn-by-doing course in which expert instructor Mark Lassoff will guide you step-by-step through creating your first spreadsheet in the very first sections of the course. You'll even write your first functions just a few minutes into the course! He'll then go deeper into formatting your spreadsheet document so it looks good and is readable. Next, Mark will talk about managing data within Google Sheets. You'll learn sorting and filtering as well as data entry validation. Mark will wrap up the course by discussing the output, export, and collaboration tools within Google Sheets.

Open your laptop and follow along with the video lectures and secure and solidify your knowledge with the step-by-step lab exercises included with the course.  The exercises are specially designed to help you retain and apply the information taught in the video lectures. 
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