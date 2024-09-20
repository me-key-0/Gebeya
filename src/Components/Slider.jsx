
// import React, { useState } from 'react';
// import img1 from '../assets/mixed6.jpg';// images can be edit what we want by disscussion with you
// import img2 from '../assets/mixed7.jpg';
// import img3 from '../assets/mixed3.jpg';
// import img4 from '../assets/mixed4.jpg';
// import img5 from '../assets/mixed1.jpg';


// const slides = [img1, img2, img3, img4, img5];

// const Slider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   return (
//     <div className="relative w-[65vw] mx-auto h-[68vh] overflow-hidden  mt-6">
//       <img
//         src={slides[currentSlide]}
//         alt={`Slide ${currentSlide + 1}`}
//         className="w-full h-full object-cover"
//       />
      
//       <div className="absolute top-1/2 left-0 w-1/2 transform -translate-y-1/2 p-4 pb-8">
//         <h2 className="text-white text-2xl  font-bold italic mb-4">
//         up to 70% off on all product scale 🎉
//         </h2>
//         <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300 transition duration-300">
//           Sign Up
//         </button>
//       </div>

//       {/* Navigation Arrows */}
//       <button 
//         className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
//         onClick={prevSlide}
//       >
//         &#10094; {/* Left Arrow */}
//       </button>
//       <button 
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
//         onClick={nextSlide}
//       >
//         &#10095; {/* Right Arrow */}
//       </button>
//     </div>
//   );
// };

// export default Slider;








import React, { useState, useEffect } from 'react';
import img1 from '../assets/aaa.jpeg';
import img2 from '../assets/aaaa.jpeg';
import img3 from '../assets/aa.jpeg';
import img4 from '../assets/mixed4.jpg';
import img5 from '../assets/mixed1.jpg';

const slides = [img1, img2,img3 ];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true); 

  const nextSlide = () => {
    setFade(false); 
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setFade(true); // Fade in after changing slide
    }, 300); 
  };

  // Auto-update the slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[65vw] mx-auto h-[68vh] overflow-hidden mt-6">
      <img
        src={slides[currentSlide]}
        alt={`Slide ${currentSlide + 1}`}
        className={`w-full h-full object-cover transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}
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



