import React, { useState, useEffect } from 'react';
import Cart from '../components/Cart';
import WhatYouLearn from '../components/WhatYouLearn';
import CourseContent from '../components/CourseContent';
import VideoLessonsSM from '../components/videoDisplay/VideoLessonsSM';
import MDVideoLessons from '../components/videoDisplay/MDVideoLessons';
import Personas from '../components/Personas';
import UserRatings from '../components/UserRatings';
import LGVideoLesson from '../components/videoDisplay/LGVideoLesson';
import SetupProfile from '../components/popups/SetupProfile';
import sampleVid from '../imgs/sampleVid.mp4';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CoursePage = () => {
    const [courses, setCourses] = useState([]);
    const [courseData, setCourseData] = useState(null);
    const [videos, setVideos] = useState([]);
    const [isSticky, setIsSticky] = useState(false);
    const [isAbuse, setIsAbuse] = useState(false);
    const [showContent, setShowContent] = useState(0);
    const { id } = useParams();
    const courseId = id;

    const toggleAbuse = () => {
        setIsAbuse(!isAbuse);
    }

    useEffect(() => {
        async function fetchCourseData() {
            try {
                const response = await axios.get(`http://localhost:5000/courses/${id}`);
                setCourseData(response.data);
            } catch (error) {
                console.log('Failed to fetch course', error);
            }
        }

        fetchCourseData();
    }, [id]);

    useEffect(() => {
        async function fetchCourses() {
            try {
                const response = await fetch(`http://localhost:5000/courses`);
                const data = await response.json();
                setCourses(data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        }

        fetchCourses();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsSticky(scrollTop > 100);
            setShowContent(scrollTop);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    if (!courseData) {
        return <div>Loading...</div>;
    }

    return (
        <div className=''>
            {showContent ? (
                <div className={`${isSticky ? 'fixed top-0 left-0 w-full flex flex-col bg-gray-700 p-2' : 'fixed top-0 left-0 w-full flex flex-col bg-gray-700 p-2'} transition-all  duration-300 ease-in-out fixed top-0 left-0 w-full flex bg-gray-700 text-white`}>
                    <h1 className='lg:text-sm font-bold mt-2 ml-4'>{courseData.title}</h1>
                    <div className='mx-2 text-sm'>
                        <span className='text-yellow-500 mx-2'>{courseData.rating} </span>
                        <span className='text-blue-500 underline mx-2'>({courseData.reviews})</span>
                        <span>{courseData.enrolledStudents} students</span>
                    </div>
                </div>
            ) : (
                <div className='lg:bg-gray-700 text-white p-10 pl-36 flex flex-row'>
                    <div className=''>
                        <nav>
                            dev - web development - Javascipt
                        </nav>
                        <div className='pt-10 w-[70%]'>
                 <h1 className='lg:text-4xl font-bold'>{courseData.title}</h1>
                <p className='lg:pt-4 lg:text-xl'>{courseData.description}</p>
                <div className='lg:pt-4'>
                    <span className='text-yellow-500 mx-2'>{courseData.rating} </span>
                    <span className='text-blue-500 underline mx-2'>{courseData.reviews}</span>
                    <span>23,0000 students</span>
                </div>
                <p className='lg:pt-3'>created by <span className='text-blue-500 underline mr-2'>{courseData.company}</span></p>
                <div className='lg:pt-3'>
                    <span className='mx-4'>{courseData.lastUpdated}</span>
                    <span className='mx-4'>English</span>
                    <span className='mx-4'>English [auto]</span>
                </div>

            </div> 
                    </div>
                </div>
            )}

            <div className={`${isSticky ? 'fixed top-0 right-0 bottom-[100px] bg-white shadow-lg z-20 mb-4' : 'fixed absolute top-16 right-0 bottom-[100px] lg:w-[330px] lg:mr-[205px] lg:mt-10'} transition-all duration-300 ease-in-out top-0 right-0  bottom-[100px] lg:w-[330px] lg:mr-[205px] lg:mt-10`}>
                <Cart showContent={showContent} videos={videos} courseData={courseData} />
            </div>
            <div className='pl-32 w-[60%]'>
                <WhatYouLearn />
                <CourseContent courseData={courseData} />
                <h1 className='font-3xl font-bold'>Students also bought</h1>
                <VideoLessonsSM courses={courses} />
                <MDVideoLessons courses={courses} />
                <div className='m-3'>
                    <Personas />
                </div>
                <div className='grid grid-cols-2'>
                    <div className='grid-col-1'><UserRatings /></div>
                    <div className='grid-col-1'><UserRatings /></div>
                </div>
                <LGVideoLesson courses={courses} />
                <LGVideoLesson courses={courses} />
                <div className='relative z-50 mt-5 mb-5'>
                    <button className='justify-center w-full border border-black py-1.5 mt-4 text-sm font-bold' onClick={toggleAbuse}>Report abuse</button>
                    <SetupProfile isAbuse={isAbuse} />
                </div>
            </div>
        </div>
    );
}

export default CoursePage;

