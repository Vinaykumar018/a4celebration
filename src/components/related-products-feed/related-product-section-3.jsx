
import img1 from '../../assets/events/1664351665_original.avif'
import CardTypeA from '../cards/card-type-a';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents, removeEvent } from '../../redux/eventManagementSlice';
import { useEffect } from 'react';
import RelatedSectionCardC from './related-section-cardC';


const RelatedProductSection3 = () => {
      const dispatch = useDispatch();
    
     const { events, loading, error } = useSelector((state) => state.events);
    
   
     // Fetch categories on component mount
     useEffect(() => {
       dispatch(fetchEvents());
     }, [dispatch]);

  return (
 
   <RelatedSectionCardC
      title="event-management"
            description="Explore our spiritual services"
            services={events}
            baseImageUrl={img1}
            themeColor="#d97706"
            ctaText="Book Now"
       
          sectionSlug="/event-management/service"
   
    />
    
  );
};
export default RelatedProductSection3;