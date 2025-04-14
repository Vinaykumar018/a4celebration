import React from 'react';
import './CategoryTopBanner.css';

export default function CategoryTopBanner() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="relative group overflow-hidden rounded-2xl h-96 bg-pink-300 hover:shadow-xl transition-shadow duration-300">
        {/* Background Image */}
        <img
          src="https://jusst4you.com/wp-content/uploads/2025/04/ProPosal.webp"
          alt="Celebration"
          className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Content - Hidden by default, shown on hover */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
          <div className="transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
              Celebrate Moments With Us!
            </h2>
            <p className="text-white/90 text-lg max-w-md mx-auto">
              Make your special occasions unforgettable with our premium services
            </p>
            <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg">
              Book Now
            </button>
          </div>
        </div>

        {/* Initial overlay with subtle hint */}
        <div className="absolute inset-0 flex items-center justify-center z-10 group-hover:opacity-0 transition-opacity duration-500">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-pulse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}