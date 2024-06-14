import React, { useState } from "react";
import { Paper, Typography, IconButton } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { NavigateBefore, NavigateNext } from "@mui/icons-material"; // Import icons
import {Link} from 'react-router-dom';
import bg1 from '../imgs/bg2.jpg';
import bg2 from '../imgs/bg3.jpg';
const Destinycard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const numberOfItemsPerPage = 1;

  
const motive = [
  {
    name: "Addis Abeba",
    image: bg1,
    title: "Slow and Study",
    data: <div><p>Try learning just 5-10 minutes a day. <span className='text-blue-600 underline font-bold'>Continue your course and reach your peak potential</span></p></div>

  },
  {
    name: "Bahir dar",
    image: bg2,
    title: "A big sale for your big Opportunity",
    data: <div>With courses from $9.99, it’s the right time for the right skills and you. Our biggest sale of the season ends May 23.</div>
  }
];

  const groupedItems = [];
  for (let i = 0; i < motive.length; i += numberOfItemsPerPage) {
    groupedItems.push(motive.slice(i, i + numberOfItemsPerPage));
  }

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', width: 'full'}}>
        <div style={{ flexGrow: 1 }}>
        <Carousel
          animation="slide"
          indicators={true}
          navButtonsAlwaysVisible={false}
          cycleNavigation={false}
          fullHeightHover={false}
          index={currentIndex}
          
        >
          {groupedItems.map((group, index) => (
            <ItemGroup key={index} group={group} />
          ))}
        </Carousel>
      </div>
      
    </div>
  );
};

function ItemGroup({ group }) {
  return (
    <div style={{ display: "flex", justifyContent: "left" }}>
      {group.map((motive, i) => (
        <Item key={i} motive={motive} />
      ))}
    </div>
  );
}

function Item({ motive }) {
  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "white",
        color: "#fff",
        justifyContent: "center",
        alignItems: "center",
        height: "full",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        borderRadius: "1px",
        p: 0,
        mx: 2,
      }}
      elevation={0}
    >
      <Link to ={`/`}> 
      <div className='justify-center relative'>
      <div className='flex items-center relative'>
       <div key={motive.id} className='border border-white-700 shadow-custom'>
          <div className='flex flex-col w-[100%]'>
            <div src={motive.image} className='relative w-full border border-gray-200 object-cover' style={{maxHeight: '460px'}}>
                <img src={motive.image} alt="" className='w-full h-full object-cover' style={{maxHeight: '460px'}}/>
                <div className='absolute top-20 left-24 p-5 rounded-sm w-96 h-45 bg-white border border-white hover:opacity-75 transition-opacity duration-300' >
                  <h1 className='font-bold text-4xl text-black'>{motive.title}</h1>
                  <div className="text-black p-2">{motive.data}</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Link>
    </Paper>
  );
}

export default Destinycard;
