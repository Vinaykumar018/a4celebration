
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts,removeProduct } from '../../redux/productSlice';
import { useEffect } from "react";
import img1 from '../../assets/decoration/1687938112_original.avif'
import SimpleCard1 from "../cards/simple-card-1";

const CategoryWiseFeed = () => {


  const dispatch = useDispatch();
 
  const { products, loading, error } = useSelector((state) => state.products);

  // Fetch categories on component mount
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  console.log(products)

  const services = [
    {
      id: 1,
      name: "Wedding Stage Decoration",
      image: img1,
      price: 500,
      rating: 4.8,
      slug: "product"
    },
    {
      id: 2,
      name: "Birthday Party Decoration",
      image: img1,
      price: 300,
      rating: 4.6,
      slug: "product"
    },
    {
      id: 3,
      name: "Baby Shower Decoration",
      image: img1,
      price: 350,
      rating: 4.7,
      slug: "product"
    },
    {
      id: 4,
      name: "Engagement Decoration",
      image: img1,
      price: 400,
      rating: 4.9,
      slug: "product"
    },
    {
      id: 5,
      name: "House Warming Decor",
      image: img1,
      price: 250,
      rating: 4.5,
      slug: "product"
    },
    {
      id: 6,
      name: "Corporate Event Decoration",
      image: img1,
      price: 600,
      rating: 4.4,
      slug: "product"
    },
    {
      id: 7,
      name: "Festival Theme Decoration",
      image: img1,
      price: 280,
      rating: 4.6,
      slug: "product"
    },
  ];


  return (
    <SimpleCard1
    
    title="Decorations"
          description="Explore our spiritual services"
          services={products}
          baseImageUrl={img1}
          themeColor="#f472b6"
          section="Decorations"
      sectionSlug="/decorations"
          ctaText="Book Now"
    />
  );
};
export default CategoryWiseFeed;