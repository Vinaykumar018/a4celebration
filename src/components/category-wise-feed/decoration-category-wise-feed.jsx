import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/productSlice';
import { useEffect, useMemo } from "react";
import img1 from '../../assets/decoration/1687938112_original.avif';
import SimpleCard1 from "../cards/simple-card-1";
import { useParams } from 'react-router-dom';

const CategoryWiseFeed = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  

  const { products, loading, error } = useSelector((state) => state.products);

  // Fetch products once when component mounts
  useEffect(() => {
    dispatch(fetchProducts());
    
  }, [dispatch]);

  // Filter products based on slug matching childCategoryId
const filteredProducts = useMemo(() => {

  if (!slug || !products) return products;
  
  return products.filter(product => {
    console.log(product)
    if (!product.child_categories) return false;

   console.log(product.child_categories,slug)
    
   return product.child_categories.some(childCategory => {
  const normalizedName = childCategory.name.toLowerCase().replace(/\s+/g, '-').trim();
  return normalizedName === slug.toLowerCase();
});

  });
}, [products, slug]);




  return (
    <SimpleCard1
      title="Decorations"
      description="Explore our spiritual services"
      services={filteredProducts}
      baseImageUrl={img1}
      themeColor="#ff7e00"
      section="Decorations"
      sectionSlug="/decorations/service"
      ctaText="Book Now"
    />
  );
};

export default CategoryWiseFeed;
