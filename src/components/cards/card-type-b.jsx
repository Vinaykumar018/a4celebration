
import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { FaStar, FaStarHalfAlt, FaRegStar, FaHeart, FaArrowRight } from "react-icons/fa"
import { Autoplay, Pagination } from "swiper/modules"
import { EyeIcon } from "lucide-react"
// serviceLinkPrefix = "/product"

const CardTypeB = ({
  title = "Featured Decorations",
  description = "Explore our wide range of decoration services",
  services = [],
  baseImageUrl = "/placeholder.svg?height=200&width=300",
  serviceLinkPrefix = "/product",
  themeColor = "#ff7e00",
  showRating = true,
  showPrice = true,
  ctaText = "BOOK NOW",
  section,
  sectionSlug
}) => {
  const [favorites, setFavorites] = useState({})

  const toggleFavorite = (id, e) => {
    e.preventDefault()
    e.stopPropagation()
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const renderStars = (rating = 4.5) => {
    const fullStars = Math.floor(rating)
    const halfStar = rating % 1 !== 0
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0)

    return (
      <div className="flex items-center gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} className="text-yellow-400 text-sm" />
        ))}
        {halfStar && <FaStarHalfAlt className="text-yellow-400 text-sm" />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={`empty-${i}`} className="text-yellow-400 text-sm" />
        ))}
        <span className="text-xs text-gray-500 ml-1">({rating.toFixed(1)})</span>
      </div>
    )
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <section className="bg-white px-5 rashi_wrapper mt-2" id="zodiac_Sign">
      <div className="container-fluid mx-auto px-6">
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
            pauseOnMouseEnter: true,
          }}
          spaceBetween={30}
          slidesPerView={4}

          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="h-full px-2 pb-10">
                <Link to={`${serviceLinkPrefix}/${service.slug}`} className="block h-full">
                  <div className="h-full bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
                    {/* Favorite Button */}
                    <button
                      onClick={(e) => toggleFavorite(service.id || index, e)}
                      className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-md"
                    >
                      <FaHeart
                        className={`${favorites[service.id || index] ? "text-red-500" : "text-gray-300"} text-lg`}
                      />
                    </button>

                    {/* Image Section */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image || baseImageUrl}
                        alt={service.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                      {/* Price Badge */}
                      {showPrice && (
                        <div className="absolute bottom-3 left-3 bg-white/90 px-3 py-1 rounded-lg shadow-sm">
                          <div className="flex items-baseline gap-1">
                            <span className="font-bold" style={{ color: themeColor }}>
                              {formatPrice(service.price)}
                            </span>
                            {service.originalPrice && (
                              <span className="text-xs text-gray-500 line-through">
                                {formatPrice(service.originalPrice)}
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                        {service.name}
                      </h3>

                      {service.location && (
                        <p className="text-sm text-gray-500 mb-2">
                          {service.location}
                        </p>
                      )}

                      {showRating && (
                        <div className="mb-3">
                          {renderStars(service.rating)}
                        </div>
                      )}

                      <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                        {service.description || "Beautiful decoration package"}
                      </p>

                      <button
                        className="mt-auto flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium text-white"
                        style={{ backgroundColor: themeColor }}
                      >
                        {ctaText}
                        <FaArrowRight className="text-xs" />
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-pagination !bottom-0"></div>
        </Swiper>
      </div>
    </section>
  )
}

export default CardTypeB