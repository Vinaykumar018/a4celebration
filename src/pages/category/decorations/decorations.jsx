import React from 'react';
import CategoryTopBanner from './category-top-banner';
import CategoryWiseFilter from './CategoryWiseFilter';

import CategoryWiseFeed from '../../../components/category-wise-feed/decoration-category-wise-feed';
const Decorations = () => {
  return (
    <div className="container py-3">
      <CategoryTopBanner />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-6">
        {/* 4 columns for filter */}
        <div className="md:col-span-3">
          <CategoryWiseFilter />
        </div>

        {/* 8 columns for products */}
        <div className="md:col-span-9">
          <CategoryWiseFeed></CategoryWiseFeed>
        </div>
      </div>
    </div>
  );
};

export default Decorations;
