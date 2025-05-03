// src/Routes.jsx or src/Routes.js
import React from "react";
import { Route, Routes } from "react-router-dom";

import Slider from "../components/slider/Slider";
import Home from "../pages/home";
import Decoration from "../pages/category/decorations/decorations";
import Gifting from '../pages/category/giftings/gifting';
import Artist from "../pages/category/artist/artist";
import Caterings from "../pages/category/caterings/caterings";
import Events from "../pages/category/events-management/events";
import BabyShower from "../pages/category/babyshower/babyshower";

import ProductDetailsPage from '../pages/products/product-details-page';
import CheckoutPage from "../pages/checkout/checkout";
import Cart from "../components/cart/cart";
import WishlistPage from "../pages/wishlist/Wishlist";
import HelpCentre from "../pages/help/HelpCentre";


import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import Profile from "../pages/auth/Profile";
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
const RoutesComponent = () => {


  const isAuthenticated = localStorage.getItem('userId') ? true : false;



  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/decoration" element={<Decoration />} />
      <Route path="/giftings" element={<Gifting />} />
      <Route path="/artists" element={<Artist />} />
      <Route path="/catering" element={<Caterings />} />
      <Route path="/baby-shower" element={<BabyShower />} />
      <Route path="/events" element={<Events />} />
      <Route path="/decorations/:slug" element={<ProductDetailsPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/help" element={<HelpCentre />} />
      <Route path="/login" element={<LoginPage></LoginPage>} />
      <Route path="/register" element={<RegisterPage></RegisterPage>} />
      <Route path="/profile" element={<Profile></Profile>} />


      {/* Protected Routes */}


      <Route
        path="/checkout"
        element={
          isAuthenticated ? <CheckoutPage /> : <Navigate to="/login" />
        }
      />

      <Route
        path="/wishlist"
        element={
          isAuthenticated ? <WishlistPage /> : <Navigate to="/login" />
        }
      />

    </Routes>
  );
};

export default RoutesComponent;
