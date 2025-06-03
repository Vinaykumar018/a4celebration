import React from 'react';
import CategoryTopBanner from './category-top-banner';
import CategoryWiseFilter from './CategoryWiseFilter';
import CategoryWiseProduct from './category-wise-product';
import ProductSection1 from '../../../components/product/product-section-1'
import EventManagementCategoryWiseFeed from '../../../components/category-wise-feed/event-category-wise-feed';
import ChildCategoryFilter from './child-category-filter';
const Events = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <CategoryTopBanner />
      <ChildCategoryFilter></ChildCategoryFilter>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-6">
        {/* 4 columns for filter */}
        <div className="md:col-span-3">
          <CategoryWiseFilter />
        </div>

        {/* 8 columns for products */}
        <div className="md:col-span-9">
        <EventManagementCategoryWiseFeed></EventManagementCategoryWiseFeed>
        </div>
      </div>
    </div>
  );
};

export default Events;
