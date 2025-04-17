import React from 'react';
import { motion } from 'framer-motion';

// Image sources
const desktopImg = 'https://cheetah.cherishx.com/website_layout/1680x400_Banner-4_Birthday-Celebrations_Desktop_20240930_132612.jpg?format=avif';
const mobileImg = 'https://cheetah.cherishx.com/website_layout/800x400_Banner-4_Birthday-Celebrations_Mob_20240930_132612.jpg?format=avif';

const Banner1 = () => {
  return (
    <div className="px-3">
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
            alt="Best birthday decorations for home and outdoor venues"
            className="w-full h-[45vw] sm:h-[22.8vw] object-fill rounded-3xl"
            loading="lazy"
          />
        </motion.picture>
      </div>
    </div>
  );
};

export default Banner1;
