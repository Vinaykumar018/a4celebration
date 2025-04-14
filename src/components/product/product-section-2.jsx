import CardTypeA from "../cards/card-type-a";
import img1 from '../../assets/gifts/1670584828_original.avif'

const ProductSection2 = () => {
  const services = [
    {
      id: 1,
      name: "Balloon Decoration",
      image: img1,
      price: 70,
      rating: 4.6,
      slug: "balloon-decoration"
    },
    {
      id: 2,
      name: "Flower Bouquet Delivery",
      image: img1,
      price: 90,
      rating: 4.7,
      slug: "flower-bouquet-delivery"
    },
    {
      id: 3,
      name: "Birthday Surprise Setup",
      image: img1,
      price: 150,
      rating: 4.8,
      slug: "birthday-surprise-setup"
    },
    {
      id: 4,
      name: "Anniversary Gift Box",
      image: img1,
      price: 120,
      rating: 4.5,
      slug: "anniversary-gift-box"
    },
    {
      id: 5,
      name: "Customized Chocolate Hamper",
      image: img1,
      price: 100,
      rating: 4.4,
      slug: "chocolate-hamper"
    },
    {
      id: 6,
      name: "Party Props & Supplies",
      image: img1,
      price: 60,
      rating: 4.3,
      slug: "party-props-supplies"
    },
    {
      id: 7,
      name: "Themed Decor Packages",
      image: img1,
      price: 200,
      rating: 4.9,
      slug: "themed-decor-packages"
    },
  ];
  

  return (
    <CardTypeA
      title="Giftings"
      description="Explore our Gifting Section"
      services={services}
      baseImageUrl={img1}
      themeColor="#f472b6"
      section="Giftings"
      section-slug="decorations"
      ctaText="Book Now"
    />
  );
};
export default ProductSection2;