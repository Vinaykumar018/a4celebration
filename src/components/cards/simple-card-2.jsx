import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const SimpleCard2 = ({
  title = "Featured Services",
  description = "Explore our wide range of services",
  services = [],
  baseImageUrl = "",
  serviceLinkPrefix = "/event-management",
  themeColor = "#ff7e00",
  showRating = true,
  showPrice = true,
  ctaText = "Book Now",
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

  return (
    <section className="bg-white rashi_wrapper mt-2" id="zodiac_Sign">
      <div className="w-full sm:px-0 px-0 ">
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-3">
          {services?.map((service, index) => {
            const words = service.name.split(" ");
            return (
              <Link to={`${serviceLinkPrefix}/service/${service.slug_url}`} key={index} className="block h-full" state={{
                serviceData: service,
                sectionData: "Event Management"
              }}>
                <motion.div
                  className="h-full bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  style={{ borderBottom: `3px solid ${themeColor}` }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Image Section */}
                  <div className="sign_box_img flex justify-center p-4 bg-gray-50">

                    <img
                      src={`${"https://a4celebration.com/api/" + service.featured_image}`}
                      alt={service.name}
                      className="object-cover rounded-lg w-full h-40 md:h-48"
                      style={{
                        aspectRatio: '1/1',
                        objectFit: 'contain'
                      }}
                    />
                  </div>

                  {/* Content Section */}
                  <div className="sign_box_cont p-5 text-center">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                      {words.length > 4 ? `${words.slice(0, 2).join(" ")}` : service.name}
                    </h4>

                    {showRating && (
                      <div className="flex justify-center items-center gap-1 mb-2">
                        {renderStars(service.rating || 0)}
                        <span className="text-xs text-gray-500 ml-1">
                          ({service.rating?.toFixed(1) || '0.0'})
                        </span>
                      </div>
                    )}

                    {showPrice && (
                      <p className="text-sm font-medium text-gray-700 mb-4">
                        ${service.price?.toFixed(2) || '0.00'}
                      </p>
                    )}

                    <div className="mt-4">

                      <motion.button
                        className="w-full py-2 px-4 rounded-md uppercase font-medium text-sm tracking-wide text-white transition-colors duration-300"
                        style={{ backgroundColor: themeColor }}
                        whileHover={{
                          backgroundColor: '#e67300',
                          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                        }}
                      >
                        {ctaText}
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SimpleCard2;
