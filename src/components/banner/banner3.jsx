import React from 'react';
import { motion } from 'framer-motion';

// Image sources for Banner3
const desktopImg = 'http://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-98b4-61f7-94e8-34d9f2b1ba0c/raw?se=2025-04-17T10%3A19%3A27Z&sp=r&sv=2024-08-04&sr=b&scid=b765a622-d783-595a-9565-261f26d4b6a3&skoid=a3336399-497e-45e5-8f28-4b88ecca3d1f&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-16T21%3A27%3A56Z&ske=2025-04-17T21%3A27%3A56Z&sks=b&skv=2024-08-04&sig=OTxT%2BGF0ebYNU9sIH9d%2By/5Jq1xdDUXQzwdPREDQBDA%3D';
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
