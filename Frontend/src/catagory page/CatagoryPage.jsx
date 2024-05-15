import { Banner, Card, Carousel,  Button, Timeline , Tabs, Navbar, Dropdown, Accordion, Rating} from "flowbite-react";
import { HiX, HiArrowNarrowRight, HiCalendar, HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import {MdAnnouncement, MdDashboard } from "react-icons/md";

import Instructor from "./Instructor";
import FilterTab from "./FilterTab";
import Profile from "./image.jpg"
import InfoIcon from '@mui/icons-material/Info';

import VideoComponent from "./VideoComponent";
import VideoComponent2 from "./VideoComponent2";
import vidLink from "./0001-0019.mp4"

export default function CatagoryPage(){
    let x = true;
    function flip(){
        x = !x;
    }
    return(
        <div className="pl-[5rem] pr-[5rem]">
            <h1 className="text-[3rem] font-bold mt-10 mb-9">Web Development Courses</h1>
            <h2 className="text-[1.4rem] font-bold mt-9 mb-5">Courses to get you started</h2>

            <Tabs aria-label="Default tabs" style="default">
                <Tabs.Item active title="Most popular">
                <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                    <Carousel>
                        <div className="inline-flex gap-8 justify-center items-center">
                        
                            <VideoComponent videolink={vidLink} name="How to make video" poster="SkillSprints Inc." rating= {4} price="74.99"></VideoComponent>
                            <VideoComponent videolink={vidLink} name="How to make video" poster="SkillSprints Inc." rating= {2} price="74.99"></VideoComponent>
                            <VideoComponent videolink={vidLink} name="How to make video" poster="SkillSprints Inc." rating= {3} price="74.99"></VideoComponent>
                        </div>
                        <div className="inline-flex gap-8 justify-center items-center">
                            
                            <VideoComponent videolink={vidLink} name="How to make video" poster="SkillSprints Inc." rating= {4} price="74.99"></VideoComponent>
                            <VideoComponent videolink={vidLink} name="How to make video" poster="SkillSprints Inc." rating= {5} price="74.99"></VideoComponent>
                            <VideoComponent videolink={vidLink} name="How to make video" poster="SkillSprints Inc." rating= {4} price="74.99"></VideoComponent>
                        </div>
                        <div className="inline-flex gap-8 justify-center items-center">
                            
                            <VideoComponent videolink={vidLink} name="How to make video" poster="SkillSprints Inc." rating= {1} price="74.99"></VideoComponent>
                            <VideoComponent videolink={vidLink} name="How to make video" poster="SkillSprints Inc." rating= {4} price="74.99"></VideoComponent>
                            <VideoComponent videolink={vidLink} name="How to make video" poster="SkillSprints Inc." rating= {2} price="74.99"></VideoComponent>
                        </div>
                    </Carousel>
                </div>
                </Tabs.Item>
                <Tabs.Item title="New">
                <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                    <Carousel>
                        <div className="inline-flex gap-8 justify-center items-center">
                            
                            <VideoComponent videolink={vidLink} name="How to make video" poster="SkillSprints Inc." rating= {4} price="74.99"></VideoComponent>
                            <VideoComponent videolink={vidLink} name="How to make video" poster="SkillSprints Inc." rating= {2} price="74.99"></VideoComponent>
                            <VideoComponent videolink={vidLink} name="How to make video" poster="SkillSprints Inc." rating= {3} price="74.99"></VideoComponent>
                        </div>
                        <div className="inline-flex gap-8 justify-center items-center">
                            
                            <VideoComponent videolink={vidLink} name="How to make video" poster="SkillSprints Inc." rating= {4} price="74.99"></VideoComponent>
                            <VideoComponent videolink={vidLink} name="How to make video" poster="SkillSprints Inc." rating= {5} price="74.99"></VideoComponent>
                            <VideoComponent videolink={vidLink} name="How to make video" poster="SkillSprints Inc." rating= {4} price="74.99"></VideoComponent>
                        </div>
                        <div className="inline-flex gap-8 justify-center items-center">
                            
                            <VideoComponent videolink={vidLink} name="How to make video" poster="SkillSprints Inc." rating= {1} price="74.99"></VideoComponent>
                            <VideoComponent videolink={vidLink} name="How to make video" poster="SkillSprints Inc." rating= {4} price="74.99"></VideoComponent>
                            <VideoComponent videolink={vidLink} name="How to make video" poster="SkillSprints Inc." rating= {2} price="74.99"></VideoComponent>
                        </div>
                    </Carousel>
                </div>
                </Tabs.Item> 
                <Tabs.Item title="Trending">
                <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                    <Carousel>
                        <div className="inline-flex gap-8 justify-center items-center">
                            
                            <VideoComponent videolink={vidLink} name="How to make video" poster="SkillSprints Inc." rating= {4} price="74.99"></VideoComponent>
                            <VideoComponent videolink={vidLink} name="How to make video" poster="SkillSprints Inc." rating= {2} price="74.99"></VideoComponent>
                            <VideoComponent videolink={vidLink} name="How to make video" poster="SkillSprints Inc." rating= {3} price="74.99"></VideoComponent>
                        </div>
                        <div className="inline-flex gap-8 justify-center items-center">
                            
                            <VideoComponent videolink={vidLink} name="How to make video" poster="SkillSprints Inc." rating= {4} price="74.99"></VideoComponent>
                            <VideoComponent videolink={vidLink} name="How to make video" poster="SkillSprints Inc." rating= {5} price="74.99"></VideoComponent>
                            <VideoComponent videolink={vidLink} name="How to make video" poster="SkillSprints Inc." rating= {4} price="74.99"></VideoComponent>
                        </div>
                        <div className="inline-flex gap-8 justify-center items-center">
                            
                            <VideoComponent videolink={vidLink} name="How to make video" poster="SkillSprints Inc." rating= {1} price="74.99"></VideoComponent>
                            <VideoComponent videolink={vidLink} name="How to make video" poster="SkillSprints Inc." rating= {4} price="74.99"></VideoComponent>
                            <VideoComponent videolink={vidLink} name="How to make video" poster="SkillSprints Inc." rating= {2} price="74.99"></VideoComponent>
                        </div>
                    </Carousel>
                </div>
                </Tabs.Item> 
            </Tabs>

            <div>
                <h2 className="text-[1.4rem] font-bold mt-[4rem] mb-4"> Featured courses</h2>
                <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 border-solid border-[0.01rem] border-[rgb(178,178,178)] p-4 align-center items-center">
                    <Carousel>
                        <VideoComponent2 videolink={vidLink} name="How to make video" poster="SkillSprints Inc." description={"Liberation is only possible when every one is free!! Antifada! Antifada!"} rating={2} price="74.99"/>
                        <VideoComponent2 videolink={vidLink} name="How to make video" poster="SkillSprints Inc." description={"Liberation is only possible when every one is free!! Antifada! Antifada!"} rating={2} price="74.99"/>
                        <VideoComponent2 videolink={vidLink} name="How to make video" poster="SkillSprints Inc." description={"Liberation is only possible when every one is free!! Antifada! Antifada!"} rating={2} price="74.99"/>
                        <VideoComponent2 videolink={vidLink} name="How to make video" poster="SkillSprints Inc." description={"Liberation is only possible when every one is free!! Antifada! Antifada!"} rating={2} price="74.99"/>
                        <VideoComponent2 videolink={vidLink} name="How to make video" poster="SkillSprints Inc." description={"Liberation is only possible when every one is free!! Antifada! Antifada!"} rating={2} price="74.99"/>
                    </Carousel>
                </div>
            </div>

            <div>
                <h2 className="text-[1.4rem] font-bold mt-10"> Popular topics</h2>
                <div className="h-36 sm:h-44 xl:h-60 2xl:h-76">
                    
                    <Carousel>
                        <div className="grid grid-cols-[repeat(5,1fr)] grid-rows-[repeat(2,auto)] gap-1.5">
                        <p className="border-solid border-[0.01rem] border-[rgb(178,178,178)] p-1 md:p-2 text-[0.8rem] item-center md:text-[1rem]"> Python </p>
                        <p className="border-solid border-[0.01rem] border-[rgb(178,178,178)] p-2">JavaScript</p>
                        <p className="border-solid border-[0.01rem] border-[rgb(178,178,178)] p-2">Data Science</p>
                        <p className="border-solid border-[0.01rem] border-[rgb(178,178,178)] p-2">Java</p>
                        <p className="border-solid border-[0.01rem] border-[rgb(178,178,178)] p-2">Unity</p>
                        <p className="border-solid border-[0.01rem] border-[rgb(178,178,178)] p-2">Web Development</p>
                        <p className="border-solid border-[0.01rem] border-[rgb(178,178,178)] p-2">React JS</p>
                        <p className="border-solid border-[0.01rem] border-[rgb(178,178,178)] p-2"> Unreal Engine</p>
                        <p className="border-solid border-[0.01rem] border-[rgb(178,178,178)] p-2">Machine Learning</p>
                        <p className="border-solid border-[0.01rem] border-[rgb(178,178,178)] p-2">C# programing language </p>
                        </div>
                        <div className="grid grid-cols-[repeat(5,1fr)] grid-rows-[repeat(2,auto)] gap-1.5">
                        <p className="border-solid border-[0.01rem] border-[rgb(178,178,178)] p-2"> Python </p>
                        <p className="border-solid border-[0.01rem] border-[rgb(178,178,178)] p-2">JavaScript</p>
                        <p className="border-solid border-[0.01rem] border-[rgb(178,178,178)] p-2">Data Science</p>
                        <p className="border-solid border-[0.01rem] border-[rgb(178,178,178)] p-2">Java</p>
                        <p className="border-solid border-[0.01rem] border-[rgb(178,178,178)] p-2">Unity</p>
                        <p className="border-solid border-[0.01rem] border-[rgb(178,178,178)] p-2">Web Development</p>
                        <p className="border-solid border-[0.01rem] border-[rgb(178,178,178)] p-2">React JS</p>
                        <p className="border-solid border-[0.01rem] border-[rgb(178,178,178)] p-2"> Unreal Engine</p>
                        <p className="border-solid border-[0.01rem] border-[rgb(178,178,178)] p-2">Machine Learning</p>
                        <p className="border-solid border-[0.01rem] border-[rgb(178,178,178)] p-2">C# programing language </p>
                        </div>
                    </Carousel>
                    
                </div>
            </div>

            <div className="mt-[1rem] mb-[3rem]">
                <h2 className="text-[1.4rem] font-bold mt-2 mb-2">Popular Instructors</h2>
                <div>
                    <div className="h-36 sm:h-44 xl:h-60 2xl:h-76">
                        <Carousel>
                            <div className="inline-flex gap-2">
                                <Instructor name={"hasan the hun"} profile={Profile} course={"comi101"} courseNumber={3} student={120000} catagory={"Leftism"}/>
                                <Instructor name={"hasan the hun"} profile={Profile} course={"comi101"} courseNumber={3} student={120000} catagory={"Leftism"}/>
                                <Instructor name={"hasan the hun"} profile={Profile} course={"comi101"} courseNumber={3} student={120000} catagory={"Leftism"}/>
                            </div>   
                            <div className="inline-flex gap-2">
                                <Instructor name={"hasan the hun"} profile={Profile} course={"comi101"} courseNumber={3} student={120000} catagory={"Leftism"}/>
                                <Instructor name={"hasan the hun"} profile={Profile} course={"comi101"} courseNumber={3} student={120000} catagory={"Leftism"}/>
                                <Instructor name={"hasan the hun"} profile={Profile} course={"comi101"} courseNumber={3} student={120000} catagory={"Leftism"}/>
                            </div>   
                            <div className="inline-flex gap-2">
                                <Instructor name={"hasan the hun"} profile={Profile} course={"comi101"} courseNumber={3} student={120000} catagory={"Leftism"}/>
                                <Instructor name={"hasan the hun"} profile={Profile} course={"comi101"} courseNumber={3} student={120000} catagory={"Leftism"}/>
                                <Instructor name={"hasan the hun"} profile={Profile} course={"comi101"} courseNumber={3} student={120000} catagory={"Leftism"}/>
                            </div>   
                        </Carousel>
                    </div>
                </div>
            </div>

            <div> 
                <h2 className="text-[1.4rem] font-bold">All Development courses</h2>
                <div className="border-solid border-[0.01rem] border-[rgb(178,178,178)] p-3 mt-2 mb-5 font-semibold"> <InfoIcon/> Not sure? All courses have a 30-day money-back guarantee</div>
                
                <div className=" items-center justify-center inline-flex gap-3 mb-8">
                    <button className="border-solid border-2 border-black p-1 text-[1.2rem]" onClick={flip}>
                        Filter
                    </button>
                    <Dropdown label="sort by" dismissOnClick={false}>
                        <Dropdown.Item>Most Popular</Dropdown.Item>
                        <Dropdown.Item>Highest Rated</Dropdown.Item>
                        <Dropdown.Item>Newst</Dropdown.Item>
                    </Dropdown>
                </div>

            </div>

           <div className="inline-flex gap-10 justify-center ">
                {x?(<div>
                    <FilterTab/>
                </div>):null}
                <div>
                    <VideoComponent2 videolink={vidLink} name="How to make video" poster="SkillSprints Inc." description={"Liberation is only possible when every one is free!! Antifada! Antifada!"} rating={2} price="74.99"/>
                    <VideoComponent2 videolink={vidLink} name="How to make video" poster="SkillSprints Inc." description={"Liberation is only possible when every one is free!! Antifada! Antifada!"} rating={2} price="74.99"/>
                    <VideoComponent2 videolink={vidLink} name="How to make video" poster="SkillSprints Inc." description={"Liberation is only possible when every one is free!! Antifada! Antifada!"} rating={2} price="74.99"/>
                    <VideoComponent2 videolink={vidLink} name="How to make video" poster="SkillSprints Inc." description={"Liberation is only possible when every one is free!! Antifada! Antifada!"} rating={2} price="74.99"/>
                    <VideoComponent2 videolink={vidLink} name="How to make video" poster="SkillSprints Inc." description={"Liberation is only possible when every one is free!! Antifada! Antifada!"} rating={2} price="74.99"/>
                </div>
           </div> 
        </div>
    )
}