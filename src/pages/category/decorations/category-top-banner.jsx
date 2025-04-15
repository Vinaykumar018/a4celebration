import React from 'react';
import './CategoryTopBanner.css';
import { Cake, Glasses } from 'lucide-react';
import { GiCelebrationFire } from 'react-icons/gi';


export default function CategoryTopBanner() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="relative group overflow-hidden rounded-2xl h-96 bg-pink-300 hover:shadow-xl transition-shadow duration-300 border-4 border-white">

        {/* Background Image with border */}
        <img
          src="https://cheetah.cherishx.com/website_layout/2200x450_Pre-wedding_Desktop_20240930_132612.jpg?format=avif"
          alt="Celebration"
          className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105 border-4 border-white rounded-2xl"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Content */}
        {/* <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
          <div className="transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 space-y-6">
            
            <h2 className="text-3xl md:text-5xl font-bold text-yellow-300 drop-shadow-lg flex items-center justify-center gap-2">
              <GiCelebrationFire /> Celebrate Moments With Us! 
            </h2>

        

            <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg">
              Book Now
            </button>
          </div>
        </div> */}

      </div>
    </div>
  );
}
