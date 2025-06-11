import React from 'react';
import { motion } from 'framer-motion';

import img1 from '../../../assets/banner/Gifting.jpg'

// Image sources for CategoryTopBanner
const desktopImg = img1;
const mobileImg = img1;

const CategoryTopBanner = () => {
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

export default CategoryTopBanner;
