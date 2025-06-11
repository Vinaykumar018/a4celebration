// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Check } from "lucide-react";

// import img1 from '../../assets/slider/1680x800-customer-moments-desktop-66e2b6738e4f6 (1).avif';
// import img2 from '../../assets/slider/1680x800-customer-moments-desktop-66e2b6738e4f6 (1).avif';
// import img3 from '../../assets/slider/1680x800-customer-moments-desktop-66e2b6738e4f6 (1).avif';

// const slides = [
//   {
//     image: img1,
//     title: "Premium Decoration 1",
//     features: ["Feature one", "Feature two", "Feature three"],
//   },
//   {
//     image: img2,
//     title: "Elegant Setup 2",
//     features: ["Feature A", "Feature B"],
//   },
//   {
//     image: img3,
//     title: "Traditional Theme 3",
//     features: ["Custom lighting", "Creative decor"],
//   },
// ];

// export default function Slider() {
//   return (
//     <div className="w-full h-[60vh] sm:h-[70vh] md:h-[75vh] lg:h-[80vh] overflow-hidden">
//       <Swiper
//         modules={[Autoplay, Navigation, Pagination]}
//         autoplay={{ delay: 3000 }}
//         spaceBetween={0}
//         slidesPerView={1}
//         loop
//         pagination={{ clickable: true }}
      
//         className="w-full h-full"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index} className="w-full h-full">
//             <div className="relative w-full h-full">
//               {/* Overlay */}
//               <div className="absolute inset-0  z-10"></div>

//               {/* Image */}
//               <img
//                 src={slide.image}
//                 alt={slide.title || "Slide Image"}
//                 className="object-cover w-full h-full"
//                 loading="lazy"
//               />

//               {/* Content */}
//               <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-24">
               
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }




import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Check } from "lucide-react";

import img1 from '../../assets/slider/pre.jpg';
import img2 from '../../assets/slider/birthday.png';
import img3 from '../../assets/slider/HappyFathersday(2).jpg';
import img4 from '../../assets/slider/CorporateGift.jpg';

const slides = [
  {
    image: img1,
    title: "Premium Decoration 1",
    features: ["Feature one", "Feature two", "Feature three"],
  },
  {
    image: img2,
    title: "Elegant Setup 2",
    features: ["Feature A", "Feature B"],
  },
  {
    image: img3,
    title: "Traditional Theme 3",
    features: ["Custom lighting", "Creative decor"],
  },
   {
    image: img4,
    title: "Traditional Theme 4",
    features: ["Custom lighting", "Creative decor"],
  }
];

export default function Slider() {
  return (
    <div className="w-full  sm:h-auto md:h-[75vh] lg:h-[80vh] overflow-hidden">
      <Swiper
        modules={[ Navigation, Pagination,Autoplay]}
      autoplay={{ delay: 3000 }}
        spaceBetween={0}
        slidesPerView={1}
        loop
        pagination={{ clickable: true }}
      
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <div className="relative w-full h-full">
              {/* Overlay */}
              <div className="absolute inset-0  z-10"></div>

              {/* Image */}
              {console.log(slide.image)}
              <img
                src={slide.image}
                alt={slide.title || "Slide Image"}
                className="object-cover w-full md:h-full sm:h-auto"
                loading="lazy"
              />

              {/* Content */}
              <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-24">
               
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
