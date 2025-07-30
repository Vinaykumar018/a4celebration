// src/components/CompactRating.jsx
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { getAllRatingsForProduct } from "../../services/rating-api-service/rating-api-service";

const CompactRating = ({ product_id }) => {
  const [rating, setRating] = useState(null);
  const [reviewCount, setReviewCount] = useState(0);

  useEffect(() => {
    const fetchRatings = async () => {
      try {
        const response = await getAllRatingsForProduct(product_id);
        console.log(response)
        // Assuming response = { averageRating: 4.5, totalReviews: 120 }
        setRating(response?.averageRating || 0);
        setReviewCount(response?.data?.length || 0);
      } catch (error) {
        console.error("Failed to fetch rating:", error);
      }
    };

    fetchRatings();
  }, [product_id]);

  return (
    <div className="border border-gray-300 rounded-lg px-1 inline-flex items-center mb-2">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          size={12}
          className={`${
            rating !== null && index < Math.round(rating)
              ? "text-yellow-500 fill-yellow-500"
              : "text-gray-300"
          }`}
        />
      ))}
      <span className="ml-1 text-gray-600 text-xs">
        {rating?.toFixed(1) || "-"} | {reviewCount} reviews
      </span>
    </div>
  );
};

export default CompactRating;
