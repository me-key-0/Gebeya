

import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../assets/Cereal-grains_cr-Adobe-stock_E.jpg'; 
import img2 from '../../../assets/friutes.jpg';
import img3 from '../../../assets/oil_seeds.jpg';
import img4 from '../../../assets/diary_products.jpg';
import img5 from '../../../assets/coffee.jpg';
import img6 from '../../../assets/imgforcategories/honey.jpg';

const categories = [
  { name: "Cereal Grains", img: img1 },
  { name: "Fruits and Vegetables ", img: img2 },
  { name: "Oil Seeds", img: img3 },
  { name: "Dairy Products:", img: img4 },
  { name: "Coffee and Tea", img: img5 },
  { name: "Honey and Bee product", img: img6}
];
  
const Cards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 py-16">
      {categories.map((category, index) => (
        <div 
          key={index} 
          className="bg-white rounded-lg shadow-md border-2 overflow-hidden transform transition-transform duration-300 hover:scale-105 mx-auto h-80 flex flex-col justify-between"
        >
          <img 
            src={category.img} 
            alt={category.name} 
            className="w-96 h-48 object-cover" 
          />
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="text-center text-[green] text-lg font-semibold mb-2">
              {category.name} 
            </h3>
            <Link to='/signin'>
            <button className=" flex  bg-white text-black px-4 py-2 rounded-full border border-black hover:bg-[green] hover:text-white font-bold transition duration-300 mx-auto">
              Get more
            </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};


export default Cards;