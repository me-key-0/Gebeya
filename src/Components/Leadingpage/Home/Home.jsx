import React from "react";

import Navbar from "./Navbar";
// import Slider from "./Slider";
import Cards from "./cards";
import Agents from './Agents';
import Footer from './Footer';
import Hero from './Slider'

const Home = () => {
  return (
    <>
      <Navbar />
      {/* <Slider /> */}
      <Hero />
      <Cards />
      <Agents />
      <Footer/>
      
    </>
  );
};
export default Home;
