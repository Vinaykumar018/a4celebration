import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { Autoplay, Pagination } from 'swiper/modules';
import { EyeIcon } from 'lucide-react';

const SimpleCard1 = ({
  title = "Featured Services",
  description = "Explore our wide range of services",
  services = [],
  baseImageUrl = "",
  serviceLinkPrefix = "/product",
  themeColor = "#ff7e00",
  showRating = true,
  showPrice = true,
  ctaText = "Book Now",
  section,
  sectionSlug
}) => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} className="text-yellow-400 text-xs" />
        ))}
        {halfStar && <FaStarHalfAlt className="text-yellow-400 text-xs" />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={`empty-${i}`} className="text-yellow-400 text-xs" />
        ))}
      </>
    );
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-white px-5 rashi_wrapper mt-2" id="zodiac_Sign">
      <div className="container-fluid mx-auto px-6">
      <div className="heading_wrapper mb-6">
  <div className="my-12 mb-4">
    <div>
      <a href="#" target="_blank" className="cursor-default pointer-events-none">
       
      { sectionSlug ||section  &&
        <div className="text-[rgb(94,15,77)]">
          
          <div className="flex justify-between items-center">
            <h2 className="text-inherit text-2xl sm:text-3xl font-bold">
             
            </h2>

            <div className="flex items-center gap-2 text-pink-600 hover:text-pink-800 cursor-pointer text-sm sm:text-base font-medium">
               <Link to={sectionSlug}><span>View All</span></Link>
              <EyeIcon className="h-5 w-5" />
            </div> 
          </div>
        </div>
}
      </a>
    </div>
  </div>
</div>


<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {services?.map((service, index) => {
    const words = service.name.split(" ");
    return (
      <div key={index}>
        <Link to={`${serviceLinkPrefix}/${service.slug}`} className="block">

          <div
            className="rashi_sign_box bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 p-2"
            style={{ borderRadius: "16px", border: `1px ${themeColor} solid` }}
          >
            {/* Image Section */}
            <div className="sign_box_img flex justify-center mb-2">
              <img
                src={baseImageUrl}
                alt={service.name}
                className="object-cover rounded-lg"
              />
            </div>

            {/* Content Section */}
            <div className="sign_box_cont text-center p-1">
              <h4 className="text-sm font-medium mb-1">
                {words.length > 4 ? `${words.slice(0, 2).join(" ")}` : service.name}
              </h4>

              {showRating && (
                <div className="flex justify-center items-center gap-1 text-xs mt-1">
                  {renderStars(service.rating || 0)}
                </div>
              )}

              {showPrice && (
                <p className="text-xs text-gray-600 mb-1">Price: ${service.price}</p>
              )}

              <Link
                to={`${serviceLinkPrefix}/${service.slug}`}
                className="inline-block text-xs px-3 py-1.5 rounded-md uppercase text-white transition-colors duration-300"
                style={{ backgroundColor: themeColor }}
              >
                {ctaText}
              </Link>
            </div>
          </div>
        </Link>
      </div>
    );
  })}
</div>

      </div>
    </section>
  );
};

export default SimpleCard1;
