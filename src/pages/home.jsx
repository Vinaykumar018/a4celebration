import React from 'react';
import Slider from '../components/slider/Slider';
import Service from '../components/service/Service';
import AvailableCities from '../components/service/AvailableCities';
import AboutDetails from '../components/service/AboutDetails';
import Banner1 from '../components/banner/banner1';
import FeaturedServices from '../components/cards/card-type-a';
import MyComponent from '../components/product/product-section-1';
import ProductSection2 from '../components/product/product-section-2';
import ProductSection1 from '../components/product/product-section-1';
import Banner2 from '../components/banner/banner2';
import ProductSection3 from '../components/product/product-section-3';
import ProductSection4 from '../components/product/product-section-4';
import Banner3 from '../components/banner/banner3';
import ProductSection5 from '../components/product/product-section-5';
import ProductSection6 from '../components/product/product-section-6';
import WhyChooseUs from '../components/service/WhyChooseUs';
import CustomerReviewSlider from '../components/service/CustomerReviewSlider';


const Home = () => {
  return (
    <>
      <Slider></Slider>
      <Service></Service>
      <AvailableCities></AvailableCities>
      <AboutDetails></AboutDetails>
      <Banner1></Banner1>
      <ProductSection1></ProductSection1>
      <ProductSection2></ProductSection2>
      <Banner2 ></Banner2>
      <ProductSection3></ProductSection3>
      <ProductSection4></ProductSection4>
      <Banner3></Banner3>
      <ProductSection5></ProductSection5>
     <ProductSection6></ProductSection6>
     <CustomerReviewSlider></CustomerReviewSlider>
     <WhyChooseUs></WhyChooseUs>
   
     
      
      



    </>
  );
}

export default Home;
