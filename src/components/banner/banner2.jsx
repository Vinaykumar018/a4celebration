import React from 'react';
import { motion } from 'framer-motion';

// Image sources for Banner2
const desktopImg = 'https://cheetah.cherishx.com/website_layout/1680x400_Banner-5_Gifts_Desktop_20240930_132612.jpg?format=avif';
const mobileImg = 'https://cheetah.cherishx.com/website_layout/800x400_Banner-5_Gifts_Mobile_20240930_132612.jpg?format=avif';

const Banner2 = () => {
  return (
    <div className="px-3 mt-6">
      <div className="w-full rounded-3xl overflow-hidden shadow-lg">
        <motion.picture
          initial={{ scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="block w-full"
        >
          {/* Desktop Source */}
          <source media="(min-width: 769px)" srcSet={desktopImg} />
          {/* Mobile Source */}
          <source media="(max-width: 768px)" srcSet={mobileImg} />
          {/* Fallback image */}
          <img
            src={desktopImg}
            alt="Unique Gifts & Surprises for all occasions"
            className="w-full h-[45vw] sm:h-[22.8vw] object-fill rounded-3xl"
            loading="lazy"
          />
        </motion.picture>
      </div>
    </div>
  );
};

export default Banner2;
