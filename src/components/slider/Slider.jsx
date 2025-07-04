import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom"; // ✅ Import Link

import img1 from '../../assets/slider/pre.jpg';
import img2 from '../../assets/slider/birthday.png';
import img3 from '../../assets/slider/HappyFathersday(2).jpg';
import img4 from '../../assets/slider/CorporateGift.jpg';

// ✅ Add route links to each slide
const slides = [
  {
    image: img1,
    title: "Premium Decoration 1",
    features: ["Feature one", "Feature two", "Feature three"],
    link: "/event-management/destination-wedding",
  },
  {
    image: img2,
    title: "Elegant Setup 2",
    features: ["Feature A", "Feature B"],
    link: "/decorations/birthday-decoration",
  },
  {
    image: img3,
    title: "Traditional Theme 3",
    features: ["Custom lighting", "Creative decor"],
    link: "/giftings/kids",
  },
  {
    image: img4,
    title: "Traditional Theme 4",
    features: ["Custom lighting", "Creative decor"],
    link: "/giftings/plants",
  },
];

export default function Slider() {
  return (
    <div className="w-full sm:h-auto md:h-[75vh] lg:h-[80vh] overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 3000 }}
        spaceBetween={0}
        slidesPerView={1}
        loop
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <Link to={slide.link}> {/* ✅ Wrap the entire slide */}
              <div className="relative w-full h-full">
                {/* Image */}
                <img
                  src={slide.image}
                  alt={slide.title || "Slide Image"}
                  className="object-cover w-full md:h-full sm:h-auto"
                  loading="lazy"
                />

                {/* Optional Overlay/Content */}
                <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-24">
                  {/* Add any text if needed */}
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
