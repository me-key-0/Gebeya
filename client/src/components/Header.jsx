import { Link } from "react-router-dom";
import img from "../assets/hero/logo.jpg";

const Header = () => {
  return (
    <div className="">
      {/* <h1 className="text-center font-mono font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-l from-[#18392b] to-[#27634a] border-b-2 shadow-sm">
        HERE YOU CAN FIND EVERYTHING YOU WANT!
      </h1> */}

      <div className="flex justify-between items-center w-full p-1">
        {/* Logo */}
        <div className="flex items-center gap-2 drop-shadow-md">
          <img src={img} alt="logo" className="w-15 h-[50px]" />
          <Link to="/">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-l from-[#18392b] to-[#27634a] font-roboto-mono font-bold text-2xl uppercase">
              Gebeya
            </h1>
          </Link>
        </div>

       
        <div className="flex-grow flex justify-center">
          <ul className="font-thin font-semibold text-xl flex gap-8 text-black">
            <Link to="/">
              <li className="hover:text-[#ffc30b]">Home</li>
            </Link>
            <Link to="/blog">
              <li className="hover:text-[#ffc30b]">Blog</li>
            </Link>
            <Link to="/about">
              <li className="hover:text-[#ffc30b]">About</li>
            </Link>
            <Link to="/contact">
              <li className="hover:text-[#ffc30b]">Contact</li>
            </Link>
          </ul>
        </div>

     
        <div className="ml-auto ">
          <Link>
            <button className="text-black py-1 border-b border-r shadow-xl hover:bg-[#0c9756] hover:duration-300 hover:scale-110 rounded-2xl px-5 py-1">
              <li>Sign in</li>
            </button>
          </Link>
        </div>
        <div className="ml-auto ml-2">
          <Link>
            <button className="text-white py-1 border-b border-r shadow-xl hover:bg-[#0c9756] hover:duration-300 hover:scale-110 bg-gradient-to-l from-[#318663] to-[#399c73] rounded-2xl px-5 py-1">
              <li>Sign Up</li>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
