import React from 'react';
import CategoryTopBanner from './category-top-banner';
import CategoryWiseFilter from './CategoryWiseFilter';
import CategoryWiseProduct from './category-wise-product';
import GiftCategoryWiseFeed from '../../../components/category-wise-feed/gift-category-wise-feed'

const Events = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <CategoryTopBanner />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-6">
        {/* 4 columns for filter */}
        <div className="md:col-span-3">
          <CategoryWiseFilter />
        </div>

        {/* 8 columns for products */}
        <div className="md:col-span-9">
          <GiftCategoryWiseFeed></GiftCategoryWiseFeed>
        
        </div>
      </div>
    </div>
  );
};

export default Events;
