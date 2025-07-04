import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { Autoplay, Pagination } from 'swiper/modules';
import { EyeIcon } from 'lucide-react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents, removeEvent } from '../../redux/eventManagementSlice';

const CardTypeC = ({
  title = "Featured Services",
  description = "Explore our wide range of services",
  services = [],
  baseImageUrl = "",
  serviceLinkPrefix = "/event-management",
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


    const dispatch = useDispatch();
    const { events, loading, error } = useSelector((state) => state.events);


    useEffect(() => {
      dispatch(fetchEvents());
    }, [dispatch]);

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
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <section className="bg-amber-50 md:px-0  px-2 lg:px-0 rashi_wrapper mt-2" id="zodiac_Sign">
      <div className="container-fluid  md:px-6 px-3 lg:px-6">
        <div className="heading_wrapper mb-6">
          <div className="my-12 mb-4">
            <div className="text-[rgb(94,15,77)]">
              <div className="flex flex-wrap justify-between items-center gap-2"> {/* Added flex-wrap and gap */}
                <h2 className="text-inherit text-2xl sm:text-3xl font-bold min-w-[50%] flex-1"> {/* Added min-width */}
                  {section}
                </h2>

                {sectionSlug && (
                  <Link
                    to={title.toLowerCase()}
                    className="flex items-center gap-2 text-amber-600 hover:text-amber-800 cursor-pointer text-sm sm:text-base font-medium whitespace-nowrap"
                  >
                    <span>View All</span>
                    <EyeIcon className="h-5 w-5" />
                  </Link>
                )}
              </div>
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
                <Link
                  to={`${sectionSlug}/${service.slug_url}`}
                  className="block h-full"
                  state={{ serviceData: service, sectionData: section }}
                >
                  <motion.div
                    className="h-full bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col"
                    style={{ borderBottom: `3px solid ${themeColor}` }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Fixed Image Section (unchanged) */}
                    <div className="w-full h-48 md:h-56 overflow-hidden flex-shrink-0">
                      <img
                        src={service.featured_image ? "https://a4celebration.com/api/" + service.featured_image : baseImageUrl}
                        alt={service.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Fixed Content Section */}
                    <div className="p-5 text-center flex flex-col h-[200px] "> {/* Fixed height */}
                      {/* Title with fixed height */}
                      <h4 className="text-md font-semibold mb-2 line-clamp-2 h-12 overflow-hidden">
                        {words.length > 4 ? `${words.slice(0, 2).join(" ")}` : service.name}
                      </h4>

                      {/* Rating (fixed space) */}
                      {showRating && (
                        <div className="flex justify-center items-center gap-1 mb-2 h-6">
                          {renderStars(service.rating || 0)}
                          <span className="text-xs text-gray-500 ml-1">
                            ({service.rating?.toFixed(1) || '0.0'})
                          </span>
                        </div>
                      )}

                      {/* Price (fixed space) */}
                      {showPrice && (
                        <p className="text-sm font-medium text-gray-700 mb-4 h-6">
                          {formatPrice(service.price)}
                        </p>
                      )}

                      {/* Button pushed to bottom */}
                      <div className="mt-auto">
                        <motion.button
                          className="w-full py-2 px-4 rounded-md uppercase font-medium text-sm tracking-wide text-white transition-colors duration-300 whitespace-nowrap"
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