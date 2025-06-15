import React from 'react';
import CategoryTopBanner from './category-top-banner';
import CategoryWiseFilter from './CategoryWiseFilter';

import CategoryWiseFeed from '../../../components/category-wise-feed/decoration-category-wise-feed';
import ChildCategoryFilter from './child-category-filter';
const Decorations = () => {
  return (
    <>
   <div className="w-full  px-4"> {/* Removed 'container mx-auto' */}
        <CategoryTopBanner />

        <div className="col-span-12">
          <ChildCategoryFilter />
        </div>

        <div className="col-span-12">
          <CategoryWiseFeed />
        </div>
      </div>
    
    </>
  );
};

export default Decorations;
