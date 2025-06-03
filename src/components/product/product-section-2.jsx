import React, { useEffect } from 'react';
import useGiftHook from '../../hooks/useGiftHooks';
import CardTypeB from "../cards/card-type-b";

const ProductSection2 = () => {
  const { giftList, giftLoading, giftError, fetchGifts } = useGiftHook();

  useEffect(() => {
    fetchGifts();
  }, []);

  // Transform the giftList data to match the expected format in CardTypeB
  

  return (
    <CardTypeB
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

export default ProductSection2;