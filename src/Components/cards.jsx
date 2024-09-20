

import React from 'react';
import img1 from '../assets/coffee.jpg'; // Replace with your actual image paths
import img2 from '../assets/friutes.jpg';
import img3 from '../assets/oil_seeds.jpg';
import img4 from '../assets/diary_products.jpg';
import img5 from '../assets/Cereal-grains_cr-Adobe-stock_E.jpg';
import img6 from '../assets/Pulses_and_Legumes.jpg';

const categories = [
  { name: "Cereal Grains", img: img1 },
  { name: "Fruits", img: img2 },
  { name: "Oil Seeds", img: img3 },
  { name: "Dairy Products:", img: img4 },
  { name: "Coffee and Tea", img: img5 },
  { name: "Pulses and legumes", img: img6}
];
  
const Cards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 py-16">
      {categories.map((category, index) => (
        <div 
          key={index} 
          className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 mx-auto h-80 flex flex-col justify-between"
        >
          <img 
            src={category.img} 
            alt={category.name} 
            className="w-96 h-48 object-cover" // Fixed height for uniformity
          />
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="text-center text-[green] text-lg font-semibold mb-2">
              {category.name} 
            </h3>
            <button className="bg-white text-black px-4 py-2 rounded-full border border-black hover:bg-[green] hover:text-white font-bold transition duration-300 mx-auto">
              Get more
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};


export default Cards;