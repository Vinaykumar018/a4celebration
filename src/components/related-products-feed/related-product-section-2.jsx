import React, { useEffect } from 'react';
import useGiftHook from '../../hooks/useGiftHooks';
import RelatedSectionCardB from './related-section-cardB';

const RelatedProductSection2 = () => {
   const { giftList, giftLoading, giftError, fetchGifts } = useGiftHook();

  useEffect(() => {
    fetchGifts();
  }, []);
  

  return (
 
   <RelatedSectionCardB
       title="Giftings"
      description="Explore our Gifting Section"
      services={giftList}
      themeColor="#d97706"
      section="Giftings"
      sectionSlug="/gifts/e-commerce"
      ctaText="Buy Now"
   
    />
    
  );
};
export default RelatedProductSection2;