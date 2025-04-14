import React from 'react';
import img1 from '../../assets/banner/1680x400_Banner-4_Birthday-Celebrations_Desktop_20240930_132612.avif';
import { motion } from 'framer-motion';

const Banner2 = () => {
  return (
    <div className="relative w-full overflow-hidden group mt-8 px-4 sm:px-6 lg:px-8">
      {/* Container with max-width and centering */}
      <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] rounded-xl md:rounded-2xl overflow-hidden shadow-xl">
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 z-10  rounded-[inherit]"></div>
        
        {/* Banner Image with smooth hover effect */}
        <motion.img
          src={img1}
          alt="Birthday Celebrations Banner"
          className="object-cover w-full h-full"
          loading="eager"
          decoding="async"
          width="1680"
          height="400"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        
        {/* Banner Content - Centered with animation */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
           
          
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute-bottom-2 left-0 right-0 h-4 bg-gradient-to-t from-pink-100 to-transparent z-0"></div>
    </div>
  );
};

export default Banner2;