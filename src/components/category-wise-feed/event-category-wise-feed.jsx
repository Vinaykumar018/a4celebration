
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts,removeProduct } from '../../redux/productSlice';
import { useEffect } from "react";
import img1 from '../../assets/decoration/1687938112_original.avif'
import SimpleCard2 from "../cards/simple-card-2";
import CardTypeC from '../cards/card-type-c';

const EventManagementCategoryWiseFeed = () => {


   const services = [
      {
        id: 1,
        name: "Wedding Planning",
        image: img1,
        price: 500,
        rating: 4.8,
        slug: "event-management"
      },
      {
        id: 2,
        name: "Corporate Events",
        image: img1,
        price: 400,
        rating: 4.6,
        slug: "event-management"
      },
      {
        id: 3,
        name: "Birthday Parties",
        image: img1,
        price: 250,
        rating: 4.7,
        slug: "event-management"
      },
      {
        id: 4,
        name: "Cultural Events",
        image: img1,
        price: 300,
        rating: 4.5,
        slug: "event-management"
      },
      {
        id: 5,
        name: "Concert Management",
        image: img1,
        price: 800,
        rating: 4.9,
        slug: "event-management"
      },
      {
        id: 6,
        name: "Exhibition Stalls",
        image: img1,
        price: 350,
        rating: 4.4,
        slug: "event-management"
      },
      {
        id: 7,
        name: "Product Launches",
        image: img1,
        price: 600,
        rating: 4.7,
        slug: "event-management"
      },
    ];
    


  return (
    <SimpleCard2
    
    title="Decorations"
          description="Explore our spiritual services"
          services={services}
          baseImageUrl={img1}
          themeColor="#f472b6"
          section="Decorations"
      sectionSlug="/decorations"
          ctaText="Book Now"
    />
  );
};
export default EventManagementCategoryWiseFeed;