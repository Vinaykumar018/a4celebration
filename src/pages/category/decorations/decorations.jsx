import React from 'react';
import CategoryTopBanner from './category-top-banner';
import CategoryWiseFilter from './CategoryWiseFilter';

import CategoryWiseFeed from '../../../components/category-wise-feed/decoration-category-wise-feed';
import ChildCategoryFilter from './child-category-filter';
import MetaTags from '../../../components/SEO/MetaTags';
const Decorations = () => {
  return (
    <>

    
       <MetaTags
  title="Event Decoration Services | Baby Shower, Wedding, Birthday & More - Kanpur"
  description="Find the best decoration services in Kanpur for Baby Shower, Birthday Parties, Baby Welcome, Bachelorette, Pre-Wedding, Wedding, First Night, Festival, and Car Decorations. Book your event decor now!"
  keywords="Baby Shower Decoration Kanpur, Birthday Decoration Kanpur, Baby Welcome Decoration, Bachelorette Party Decor, Pre Wedding Decoration, Wedding Decoration Services, First Night Room Decor, Festival Decoration, Car Decoration Kanpur"
/>

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
