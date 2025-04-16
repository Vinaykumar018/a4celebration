// src/Routes.jsx or src/Routes.js
import React from "react";
import { Route, Routes } from "react-router-dom";


import Slider from "../components/slider/Slider";
import Home from "../pages/home";
import Decoration from "../pages/category/decorations/decorations"
import Gifting from '../pages/category/giftings/gifting'
import Artist from "../pages/category/artist/artist";
import Caterings from "../pages/category/caterings/caterings";
import Events from "../pages/category/events-management/events";
import BabyShower from "../pages/category/babyshower/babyshower";

import ProductDetailsPage from '../pages/products/product-details-page'
import CheckoutPage from "../pages/checkout/checkout";
import Cart from "../components/cart/cart";
import WishlistPage from "../pages/wishlist/Wishlist";
import HelpCentre from "../pages/help/HelpCentre";

const RoutesComponent = () => {
  return (
    <Routes>

      <Route path="/" element={<Home></Home>} />
      <Route path="/decoration" element={<Decoration></Decoration>} />
      <Route path="/giftings" element={<Gifting></Gifting>} />
      <Route path="/artists" element={<Artist></Artist>} />
      <Route path="/catering" element={<Caterings></Caterings>} />
      <Route path="/baby-shower" element={<BabyShower></BabyShower>} />
      <Route path="/caterings" element={<Caterings></Caterings>} />
      

      <Route path="/events" element={<Events></Events>} />
      
      <Route  path="/product/:slug" element={<ProductDetailsPage></ProductDetailsPage>} />
      <Route  path="/cart" element={<Cart></Cart>} />
      <Route  path="/checkout" element={<CheckoutPage></CheckoutPage>} />
      <Route  path="/wishlist" element={<WishlistPage></WishlistPage>} />
      <Route path="/help" element={<HelpCentre></HelpCentre>}></Route>






    </Routes>
  );
};

export default RoutesComponent;
