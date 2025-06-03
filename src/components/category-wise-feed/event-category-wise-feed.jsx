
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '../../redux/eventManagementSlice';
import { useEffect, useMemo } from "react";
import img1 from '../../assets/decoration/1687938112_original.avif'
import SimpleCard2 from "../cards/simple-card-2";
import CardTypeC from '../cards/card-type-c';
import { useParams } from 'react-router-dom';
const EventManagementCategoryWiseFeed = () => {




  const dispatch = useDispatch();
   const { slug } = useParams();
   
    const { events, loading, error } = useSelector((state) => state.events);
   
  
    // Fetch categories on component mount
    useEffect(() => {
      dispatch(fetchEvents());
    }, [dispatch]);





    
      // Filter events based on slug matching childCategoryId
    const filteredevents = useMemo(() => {
    
      if (!slug || !events) return events;
      
      return events.filter(product => {
        console.log(product)
        if (!product.child_categories) return false;
    
       console.log(product.child_categories,slug)
        
       return product.child_categories.some(childCategory => {
      const normalizedName = childCategory.name.toLowerCase().replace(/\s+/g, '-').trim();
      return normalizedName === slug.toLowerCase();
    });
    
      });
    }, [events, slug]);




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
          services={filteredevents}
          baseImageUrl={img1}
          themeColor="#ff7e00"
          section="Decorations"
      sectionSlug="/decorations"
          ctaText="Book Now"
    />
  );
};
export default EventManagementCategoryWiseFeed;