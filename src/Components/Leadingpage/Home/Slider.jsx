import img1 from '../../../assets/aaa.jpeg';
import img2 from '../../../assets/aaaa.jpeg';
import img3 from '../../../assets/aa.jpeg';
import img4 from '../../../assets/a.jpeg';
import Slider from "react-slick";
import {Link} from 'react-router-dom'

const Hero = () => {
  const ImageList = [
    { id: 1, src: img1, title: "Products from the Source", description: "Pure products from the source " },
    { id: 2, src: img2, title: "Freash products", description: "you can get fresh products" },
    { id: 3, src: img3, title: "From All regions of the Country ", description: "From the region what you want " },
    { id: 4, src: img4, title: "Transportation", description: "we will provide transportation for you." },
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative min-w-[550px] min-h-[650px]">
      <Slider {...settings}>
        {ImageList.map((data) => (
          <div key={data.id} className="relative w-full h-[650px]">
            {/* Image */}
            <img src={data.src} alt={data.title} className="w-full h-full object-cover" />
            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-4">
              <h1 className="text-4xl  font-mono font-semibold mb-2">{data.title}</h1>
              <p className="text-lg mb-4 font-light ">{data.description}</p>
              <Link to='/signup'>
              <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all">
                Join Now
              </button>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;

