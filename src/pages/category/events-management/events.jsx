import React from 'react';
import CategoryTopBanner from './category-top-banner';
import CategoryWiseFilter from './CategoryWiseFilter';
import CategoryWiseProduct from './category-wise-product';
import ProductSection1 from '../../../components/product/product-section-1'
import EventManagementCategoryWiseFeed from '../../../components/category-wise-feed/event-category-wise-feed';
import ChildCategoryFilter from './child-category-filter';
import MetaTags from '../../../components/SEO/MetaTags';
const Events = () => {
  return (
    <>


      <MetaTags
        title="Event Management Categories | Destination Wedding, Corporate, College & Marriage Events"
        description="Explore top Event Management services in Kanpur including Destination Weddings, Marriage Events, College Functions, and Corporate Event Planning. Organize your event with professional excellence."
        keywords="Destination Wedding Planner Kanpur, Marriage Event Management, College Event Organizers, Corporate Event Planning Kanpur, Best Event Managers"
      />



      <div className="w-full px-4 "> {/* Removed 'container mx-auto' */}
        <CategoryTopBanner />

        <div className="col-span-12">
          <ChildCategoryFilter></ChildCategoryFilter>
        </div>

        <div className="col-span-12">
          <EventManagementCategoryWiseFeed></EventManagementCategoryWiseFeed>
        </div>
      </div>



    </>
  );
};

export default Events;
