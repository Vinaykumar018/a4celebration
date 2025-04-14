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
      slug: "wedding-planning"
    },
    {
      id: 2,
      name: "Corporate Events",
      image: img1,
      price: 400,
      rating: 4.6,
      slug: "corporate-events"
    },
    {
      id: 3,
      name: "Birthday Parties",
      image: img1,
      price: 250,
      rating: 4.7,
      slug: "birthday-parties"
    },
    {
      id: 4,
      name: "Cultural Events",
      image: img1,
      price: 300,
      rating: 4.5,
      slug: "cultural-events"
    },
    {
      id: 5,
      name: "Concert Management",
      image: img1,
      price: 800,
      rating: 4.9,
      slug: "concert-management"
    },
    {
      id: 6,
      name: "Exhibition Stalls",
      image: img1,
      price: 350,
      rating: 4.4,
      slug: "exhibition-stalls"
    },
    {
      id: 7,
      name: "Product Launches",
      image: img1,
      price: 600,
      rating: 4.7,
      slug: "product-launches"
    },
  ];
  

  return (
    <CardTypeC
      title="Decorations"
      description="Explore our spiritual services"
      services={services}
      baseImageUrl={img1}
      themeColor="#f472b6

"
      ctaText="Book Now"
      section="Event Organization"
    sectionSlug="/event"
    />
  );
};
export default ProductSection6;