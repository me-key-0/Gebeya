import img1 from '../assets/hero/a.jpeg';
import img2 from '../assets/hero/aa.jpeg';
import img3 from '../assets/hero/aaa.jpeg';
import img4 from '../assets/hero/aaaa.jpeg';
import Slider from "react-slick";

const Hero = () => {
  const ImageList = [
    { id: 1, src: img1, title: "Transportation", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
    { id: 2, src: img2, title: "Upto 50% off on all Women's Wear", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
    { id: 3, src: img3, title: "Upto 70% off on all Product sale", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
    { id: 4, src: img4, title: "Transportation", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
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
              <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all">
                Join Now
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
