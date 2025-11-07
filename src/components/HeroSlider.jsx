import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "../index.css";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import { Link } from "react-router";

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      img: hero1,
      title: "Keep Your Pets Warm This Winter",
      text: "Cozy jackets, soft blankets, and care for every paw.",
    },
    {
      id: 2,
      img: hero2,
      title: "Warm Hearts, Warm Paws",
      text: "Your furry friends deserve winter comfort and love.",
    },
    {
      id: 3,
      img: hero3,
      title: "Winter Grooming & Pet Spa",
      text: "Gentle care for your pets in the cold season.",
    },
  ];

  return (
    <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Snowflake Overlay */}

      <div className="snowflakes" aria-hidden="true">
        {[...Array(15)].map((_, i) => (
          <div className="snowflake" key={i}>
            ❄️
          </div>
        ))}
      </div>

      {/* Swiper Slider */}

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#00000080] to-[#00000040] flex flex-col items-center justify-center text-center px-6">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-2xl">
                  {slide.text}
                </p>
                <Link
                  to="/services"
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition transform hover:from-blue-700 hover:to-pink-700"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
