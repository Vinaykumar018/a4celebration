import React from 'react';
import CategoryTopBanner from './category-top-banner';
import CategoryWiseFilter from './CategoryWiseFilter';
import CategoryWiseProduct from './category-wise-product';
import GiftCategoryWiseFeed from '../../../components/category-wise-feed/gift-category-wise-feed'
import ChildCategoryFilter from './child-category-filter';
import MetaTags from '../../../components/SEO/MetaTags';
const Events = () => {
  return (
     <>
     <MetaTags
  title="Gifting Categories | Plants, Customized Gifts, Hampers & Loved One Presents"
  description="Discover the best gifting categories including indoor Plants, Customized Gifts, Luxury Hampers, and thoughtful presents for your Loved Ones. Perfect gifts for every occasion in Kanpur."
  keywords="Gift Plants, Customized Gifts Kanpur, Gift Hampers, Personalized Presents, Gifts for Loved Ones, Kanpur Gift Shop"
/>

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
