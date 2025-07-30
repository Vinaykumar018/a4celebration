// src/components/StarRating.jsx
import React, { useEffect, useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { getAllRatingsForProduct } from "../../services/rating-api-service/rating-api-service";

const StarRating = ({ product_id }) => {
  const [rating, setRating] = useState(null);

  useEffect(() => {
    const fetchRatings = async () => {
      try {
        const response = await getAllRatingsForProduct(product_id);
        // Assuming response is like { averageRating: 4.3 }
        console.log(response)
        setRating(response?.averageRating || 0);
      } catch (error) {
        console.error("Failed to fetch rating:", error);
      }
    };

    fetchRatings();
  }, [product_id]);

  const renderStars = () => {
    if (rating === null) return <p className="text-gray-400 text-sm">Loading...</p>;

    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} className="text-yellow-400 text-xs" />
        ))}
        {halfStar && <FaStarHalfAlt className="text-yellow-400 text-xs" />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={`empty-${i}`} className="text-yellow-400 text-xs" />
        ))}
      </div>
    );
  };

  return <>{renderStars()}</>;
};

export default StarRating;
