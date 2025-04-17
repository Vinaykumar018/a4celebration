import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const reviews = [
  {
    name: "Alice Johnson",
    review: "Absolutely loved the service! Highly recommended.Loved the experience, highly recommendedLoved the experience, highly recommended",
    rating: 4.5,
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    name: "Michael Smith",
    review: "Great experience. Very professional staff.Loved the experience, highly recommendedLoved the experience, highly recommended",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    name: "Emma Brown",
    review: "Service was good but can improve on punctuality.Loved the experience, highly recommendedLoved the experience, highly recommended",
    rating: 3.5,
    image: "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    name: "David Lee",
    review: "Fantastic customer care. Will come back again!Loved the experience, highly recommendedLoved the experience, highly recommended",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/4.jpg"
  },
  {
    name: "Sophia Williams",
    review: "Everything went smoothly, great service.Loved the experience, highly recommendedLoved the experience, highly recommended",
    rating: 4.5,
    image: "https://randomuser.me/api/portraits/women/5.jpg"
  },
  {
    name: "Chris Martin",
    review: "Very satisfied with the professionalism.Loved the experience, highly recommendedLoved the experience, highly recommended",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/6.jpg"
  },
  {
    name: "Lily Evans",
    review: "Good support and easy process.Loved the experience, highly recommendedLoved the experience, highly recommended",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/7.jpg"
  },
  {
    name: "James Carter",
    review: "Could improve the delivery time.Loved the experience, highly recommendedLoved the experience, highly recommended",
    rating: 3,
    image: "https://randomuser.me/api/portraits/men/8.jpg"
  },
  {
    name: "Isabella Moore",
    review: "Loved the experience, highly recommendedLoved the experience, highly recommendedLoved the experience, highly recommended!",
    rating: 4.5,
    image: "https://randomuser.me/api/portraits/women/9.jpg"
  }
];

const renderStars = (rating) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);

  return (
    <>
      {[...Array(full)].map((_, i) => <FaStar key={`f-${i}`} className="text-yellow-400 text-xs" />)}
      {half && <FaStarHalfAlt className="text-yellow-400 text-xs" />}
      {[...Array(empty)].map((_, i) => <FaRegStar key={`e-${i}`} className="text-yellow-400 text-xs" />)}
    </>
  );
};

const CustomerReviewSlider = () => {
  return (
    <section className="px-2 py-6 bg-gray-100 mt-8 bg-pink-50">
    <h2
  className="text-center text-4xl sm:text-5xl font-bold tracking-wide mb-8 text-pink-600"
  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
>
  Customer Reviews
</h2>


      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        spaceBetween={10}
        
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {reviews.map((review, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-white border border-pink-300 shadow-md shadow-pink-200 rounded-lg p-3 flex flex-col items-center text-center h-full pb-8">
              <img
                src={review.image}
                alt={review.name}
                className="w-16 h-16 rounded-full object-cover mb-2"
              />
              <h3 className="font-medium text-sm mb-1">{review.name}</h3>
              <div className="flex justify-center mb-1">{renderStars(review.rating)}</div>
              <p className="text-gray-600 text-xs">{review.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CustomerReviewSlider;
