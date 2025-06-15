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
    <section className="bg-white rashi_wrapper mt-2" id="zodiac_Sign">
      <div className="w-full">
        {/* ... your existing heading code ... */}

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-4 auto-rows-fr">
          {services?.map((service, index) => {
            const words = service.name.split(" ");
            return (
              <div key={index} className="h-full">
                <Link 
                  to={`${sectionSlug}/${service.slug_url}`} 
                  className="block h-full"
                  state={{
                    serviceData: service,
                    sectionData: section
                  }}
                >
                  <div
                    className="rashi_sign_box bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 p-2 h-full flex flex-col"
                    style={{ 
                      borderRadius: "16px", 
                      border: `1px ${themeColor} solid`,
                      minHeight: '280px' // optional minimum height
                    }}
                  >
                    {/* Image Section - Fixed Height */}
                    <div className="sign_box_img flex justify-center mb-2 h-40">
                      <img
                        src={`${"https://a4celebration.com/api/" + service.featured_image}`}
                        alt={service.name}
                        className="object-cover rounded-lg w-full h-full"
                      />
                    </div>

                    {/* Content Section - Flex Grow */}
                    <div className="sign_box_cont text-center p-1 flex flex-col flex-grow">
                      <h4 className="text-sm font-medium mb-1 line-clamp-2">
                        {service.name}
                      </h4>

                      {showRating && (
                        <div className="flex justify-center items-center gap-1 text-xs mt-1">
                          {renderStars(service.rating || 0)}
                        </div>
                      )}

                      {showPrice && (
                        <p className="text-xs text-gray-600 mb-1">Price: ${service.price}</p>
                      )}

                      <div className="mt-auto">
                        <Link
                          to={`${sectionSlug}/${service.slug_url}`}
                          state={{
                            serviceData: service,
                            sectionData: section
                          }}
                          className="inline-block text-xs px-3 py-1.5 rounded-md uppercase text-white transition-colors duration-300"
                          style={{ backgroundColor: themeColor }}
                        >
                          {ctaText}
                        </Link>
                      </div>
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
