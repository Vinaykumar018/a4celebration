import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/productSlice';
import { useEffect, useMemo } from "react";
import img1 from '../../assets/decoration/1687938112_original.avif';
import SimpleCard1 from "../cards/simple-card-1";
import { useParams } from 'react-router-dom';
import useGiftHook from '../../hooks/useGiftHooks';

const GiftCategoryWiseFeed = () => {

  const { slug } = useParams();
const { giftList, giftLoading, giftError, fetchGifts } = useGiftHook();

  useEffect(() => {
    fetchGifts();
  }, []);
  

  // Filter products based on slug matching childCategoryId
const filteredProducts = useMemo(() => {

  if (!slug || !giftList) return giftList;
  
  return giftList.filter(product => {
    if (!product.child_categories) return false;
    
    return product.child_categories.some(childCategory => {
  const normalizedName = childCategory.name.toLowerCase().replace(/\s+/g, '-').trim();
  return normalizedName === slug.toLowerCase();
});
  });
}, [giftList, slug]);


function normalize(str) {
  return str
    .toLowerCase()
    .replace(/\bthe\b/g, '')        // remove 'the' as a word
    .replace(/[^a-z0-9]/g, '')      // remove spaces, hyphens, punctuation
    .trim();
}
 


  return (
    <SimpleCard1
      title="Decorations"
      description="Explore our spiritual services"
      services={filteredProducts}
      baseImageUrl={img1}
      themeColor="#f472b6"
      section="Decorations"
      sectionSlug="/gifts/e-commerce"
      ctaText="Book Now"
    />
  );
};

export default GiftCategoryWiseFeed;
