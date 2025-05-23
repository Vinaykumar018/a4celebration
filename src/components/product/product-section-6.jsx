import CardTypeC from '../cards/card-type-c';
import img1 from '../../assets/events/1664351665_original.avif'
import CardTypeA from '../cards/card-type-a';

const ProductSection6 = () => {
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
    <CardTypeC
      title="Decorations"
      description="Explore our spiritual services"
      services={services}
      baseImageUrl={img1}
      themeColor="#d97706"
      ctaText="Book Now"
      section="Event Management"
    sectionSlug="/event-management"
    />
  );
};
export default ProductSection6;