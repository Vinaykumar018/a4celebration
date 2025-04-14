import CardTypeB from '../cards/card-type-b';
import img1 from '../../assets/artist/OX--600x600.png'

const ProductSection4 = () => {
  const services = [
    {
      id: 1,
      name: "DJ Arjun",
      image: img1,
      price: 150,
      rating: 4.7,
      slug: "dj-arjun"
    },
    {
      id: 2,
      name: "Singer Kavya",
      image: img1,
      price: 200,
      rating: 4.8,
      slug: "singer-kavya"
    },
    {
      id: 3,
      name: "Dancer Rahul",
      image: img1,
      price: 180,
      rating: 4.6,
      slug: "dancer-rahul"
    },
    {
      id: 4,
      name: "Stand-up Artist Neha",
      image: img1,
      price: 220,
      rating: 4.9,
      slug: "standup-artist-neha"
    },
    {
      id: 5,
      name: "Instrumentalist Rishi",
      image: img1,
      price: 170,
      rating: 4.5,
      slug: "instrumentalist-rishi"
    },
    {
      id: 6,
      name: "Folk Singer Meera",
      image: img1,
      price: 160,
      rating: 4.4,
      slug: "folk-singer-meera"
    },
    {
      id: 7,
      name: "Anchor Varun",
      image: img1,
      price: 140,
      rating: 4.6,
      slug: "anchor-varun"
    },
  ];
  

  return (
    <CardTypeB
      title="Trending Artists"
      description="Explore our spiritual services"
      services={services}
      baseImageUrl={img1}
      themeColor="#f472b6

"
      ctaText="Book Now"
       section="Trending Artists"
    sectionSlug="/trending"
    />
  );
};
export default ProductSection4;