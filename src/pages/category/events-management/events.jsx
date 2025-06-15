import React from 'react';
import CategoryTopBanner from './category-top-banner';
import CategoryWiseFilter from './CategoryWiseFilter';
import CategoryWiseProduct from './category-wise-product';
import ProductSection1 from '../../../components/product/product-section-1'
import EventManagementCategoryWiseFeed from '../../../components/category-wise-feed/event-category-wise-feed';
import ChildCategoryFilter from './child-category-filter';
const Events = () => {
  return (
    <>
    
     <>
   <div className="w-full px-4 "> {/* Removed 'container mx-auto' */}
         <CategoryTopBanner />

        <div className="col-span-12">
           <ChildCategoryFilter></ChildCategoryFilter>
        </div>

        <div className="col-span-12">
          <EventManagementCategoryWiseFeed></EventManagementCategoryWiseFeed>
        </div>
      </div>
    
    </>
   
    </>
  );
};

export default Events;
