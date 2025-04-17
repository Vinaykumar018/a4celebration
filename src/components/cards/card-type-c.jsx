import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { Autoplay, Pagination } from 'swiper/modules';
import { EyeIcon } from 'lucide-react';

const CardTypeC = ({
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
    <section className="bg-pink-50 md:px-0 sm:px-5 px-5 lg:px-0 rashi_wrapper mt-2" id="zodiac_Sign">
      <div className="container-fluid mx-auto md:px-6 sm:px-0 px-0 lg:px-6">
        <div className="heading_wrapper mb-6">
          <div className="my-12 mb-4">
            <div>
              <a href="#" target="_blank" className="cursor-default pointer-events-none">
                <div className="text-[rgb(94,15,77)]">
                  <div className="flex justify-between items-center">
                    <h2 className="text-inherit text-2xl sm:text-3xl font-bold">
                      {section}
                    </h2>

                    <div className="flex items-center gap-2 text-pink-600 hover:text-pink-800 cursor-pointer text-sm sm:text-base font-medium">
                      <Link to={sectionSlug}><span>View All</span></Link>
                      <EyeIcon className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          slidesPerView={4}

          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {services?.map((service, index) => {
            const words = service.name.split(" ");
            return (
              <SwiperSlide key={index}>
                <Link to={`${serviceLinkPrefix}/${service.slug}`} className="block h-full">
                  <motion.div
                    className="h-full bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                    style={{
                      borderBottom: `3px solid ${themeColor}`,
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Image Section */}
                    <div className="sign_box_img flex justify-center p-4 bg-gray-50">
                      <img
                        src={baseImageUrl}
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
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default CardTypeC;