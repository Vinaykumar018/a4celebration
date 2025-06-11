import React from 'react';
import CategoryTopBanner from './category-top-banner';
import CategoryWiseFilter from './CategoryWiseFilter';

import CategoryWiseFeed from '../../../components/category-wise-feed/decoration-category-wise-feed';
import ChildCategoryFilter from './child-category-filter';
const Decorations = () => {
  return (
    <>
   <div className="w-full py-2 px-4"> {/* Removed 'container mx-auto' */}
        <CategoryTopBanner />

        <div className="md:col-span-8">
          <ChildCategoryFilter />
        </div>

        <div className="md:col-span-9">
          <CategoryWiseFeed />
        </div>
      </div>
    
    </>
  );
};

export default Decorations;
