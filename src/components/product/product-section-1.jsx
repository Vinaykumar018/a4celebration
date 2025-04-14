import CardTypeA from "../cards/card-type-a";
import img1 from '../../assets/decoration/1687938112_original.avif'

const ProductSection1 = () => {
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
    <CardTypeA
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
export default ProductSection1;