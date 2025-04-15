import CardTypeC from '../cards/card-type-c';
import img1 from '../../assets/caterings/Catering-In-Riyadh-300x300.jpg'
import CardTypeA from '../cards/card-type-a';

const ProductSection5 = () => {
  const services = [
    {
      id: 1,
      name: "Wedding Catering",
      image: img1,
      price: 120,
      rating: 4.8,
      slug: "wedding-catering"
    },
    {
      id: 2,
      name: "Corporate Catering",
      image: img1,
      price: 100,
      rating: 4.6,
      slug: "corporate-catering"
    },
    {
      id: 3,
      name: "Birthday Catering",
      image: img1,
      price: 90,
      rating: 4.7,
      slug: "birthday-catering"
    },
    {
      id: 4,
      name: "Buffet Services",
      image: img1,
      price: 150,
      rating: 4.9,
      slug: "buffet-services"
    },
    {
      id: 5,
      name: "Live Counter Setup",
      image: img1,
      price: 200,
      rating: 4.5,
      slug: "live-counter-setup"
    },
    {
      id: 6,
      name: "Veg & Non-Veg Packages",
      image: img1,
      price: 180,
      rating: 4.4,
      slug: "veg-nonveg-packages"
    },
    {
      id: 7,
      name: "Custom Menu Planning",
      image: img1,
      price: 130,
      rating: 4.6,
      slug: "custom-menu-planning"
    },
  ];
  

  return (
    <CardTypeC
      title="Catering Events"
      description="Explore our spiritual services"
      services={services}
      baseImageUrl={img1}
      themeColor="#f472b6

"
      ctaText="Book Now"

       section="Catering Events"
    sectionSlug="/catering"
    />
  );
};
export default ProductSection5;