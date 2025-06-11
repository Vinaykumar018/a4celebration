import React from 'react';
import CategoryTopBanner from './category-top-banner';
import CategoryWiseFilter from './CategoryWiseFilter';
import CategoryWiseProduct from './category-wise-product';
import GiftCategoryWiseFeed from '../../../components/category-wise-feed/gift-category-wise-feed'
import ChildCategoryFilter from './child-category-filter';

const Events = () => {
  return (
     <>
   <div className="w-full py-2 px-4"> {/* Removed 'container mx-auto' */}
      <CategoryTopBanner />

        <div className="md:col-span-8">
           <ChildCategoryFilter></ChildCategoryFilter>
        </div>

        <div className="md:col-span-9">
           <GiftCategoryWiseFeed></GiftCategoryWiseFeed>
        </div>
      </div>
    
    </>
   
   
  );
};

export default Events;
