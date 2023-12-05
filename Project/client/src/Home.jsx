import React from 'react';
import web from "../src/images/img1.svg";
import '../src/index.css'; 
import Common from './Common';

const Home = () => {
  return (
    <>
      <Common 
      name="Grow Your Business with" 
      imgsrc={web}
      visit='/Services'
      btname="Get Started"
      />
      
    </>
  );
}

export default Home;
