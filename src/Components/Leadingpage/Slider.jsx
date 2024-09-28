
import React, { useState, useEffect } from 'react';
import img1 from '../../assets/aaa.jpeg';
import img2 from '../../assets/aaaa.jpeg';
import img3 from '../../assets/aa.jpeg';
import img4 from '../../assets/a.jpeg';


const slides = [img1, img2,img3,img4];



const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true); 

  const nextSlide = () => {
    setFade(false); 
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setFade(true); 
    }, 300); 
  };

  
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[65vw] mx-auto h-[68vh] overflow-hidden mt-6">
      <img
        src={slides[currentSlide]}
        alt={`Slide ${currentSlide + 1}`}
        className={`w-full h-full object-cover transform transition-transform duration-500 ${fade ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[100%]'}`}
      />
      
      <div className="absolute top-2/3 left-1/3 w-1/2 transform -translate-y-1/2 p-4 pb-8">
        <h2 className="text-white text-2xl font-bold italic mb-4">
          Up to 70% off on all products scale 🎉
        </h2>
        <button className=" text-white font-bold absolute top-2/3 left-1/5 w-1/2 px-4 py-2 rounded-lg bg-[green] transition duration-300">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Slider;



