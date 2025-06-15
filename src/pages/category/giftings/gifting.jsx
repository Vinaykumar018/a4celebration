import React from 'react';
import CategoryTopBanner from './category-top-banner';
import CategoryWiseFilter from './CategoryWiseFilter';
import CategoryWiseProduct from './category-wise-product';
import GiftCategoryWiseFeed from '../../../components/category-wise-feed/gift-category-wise-feed'
import ChildCategoryFilter from './child-category-filter';

const Events = () => {
  return (
     <>
   <div className="w-full  px-4"> {/* Removed 'container mx-auto' */}
      <CategoryTopBanner />

        <div className="col-span-12">
           <ChildCategoryFilter></ChildCategoryFilter>
        </div>

        <div className="col-span-12">
           <GiftCategoryWiseFeed></GiftCategoryWiseFeed>
        </div>
      </div>
    
    </>
   
   
  );
};

export default Events;
