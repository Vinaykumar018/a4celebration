import React from 'react';
import { motion } from 'framer-motion';

// Image sources for Banner3
const desktopImg = 'https://cheetah.cherishx.com/website_layout/1680x400_Banner-2_Desktop_home_page_layout.jpg?format=avif';
const mobileImg = 'https://jusst4you.com/wp-content/uploads/2025/04/proposal-banner-768x384.webp';

const Banner3 = () => {
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
            alt="Proposal Banner"
            className="w-full h-[45vw] sm:h-[22.8vw] object-fill rounded-3xl"
            loading="lazy"
          />
        </motion.picture>
      </div>
    </div>
  );
};

export default Banner3;
