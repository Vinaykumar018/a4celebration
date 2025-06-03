import React from 'react';
import CategoryTopBanner from './category-top-banner';
import CategoryWiseFilter from './CategoryWiseFilter';
import CategoryWiseProduct from './category-wise-product';
import ProductSection1 from '../../../components/product/product-section-1'
import CategoryWiseFeed from '../../../components/category-wise-feed/decoration-category-wise-feed';
import img1 from '../../../assets/coming-soon-funny-cartoon-workers-600nw-524317576.webp'
const Artist = () => {
  return (
    // <div className="container mx-auto px-4 py-6">
    //   <CategoryTopBanner />

    //   <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-6">
    //     {/* 4 columns for filter */}
    //     <div className="md:col-span-3">
    //       <CategoryWiseFilter />
    //     </div>

    //     {/* 8 columns for products */}
    //     <div className="md:col-span-9">
    //       <CategoryWiseFeed></CategoryWiseFeed>
    //     </div>
    //   </div>
    // </div>


     //as of now
    
        <div className="w-full flex justify-center">
      <img src={img1} alt=""  />
    </div>
  );
};

export default Artist;
