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
import DecorationsDetailsPage from "../pages/products/decorations-details-page";
import Order from "../pages/orders/order";
import EventManagementDetailsPage from "../pages/products/event-management-details-page";
import GiftsDetailsPage from "../pages/products/gifts-details-page";
import CustomizedCheckoutPage from "../pages/checkout/customizedCheckout";
import Services from "../pages/category/services-section/Services";
import CateringEventsDetailsPage from "../pages/products/catering-events-details-page";
import ArtistManagementDetailsPage from "../pages/products/artist-management-details-page";
const RoutesComponent = () => {


  const isAuthenticated = localStorage.getItem('userId') ? true : false;



  return (
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/decorations" element={<Decoration />} />
      <Route path="/decorations/:slug" element={<Decoration />} />
      <Route path="/giftings" element={<Gifting />} />
      <Route path="/giftings/:slug" element={<Gifting/>} />
      <Route path="/artists" element={<Artist />} />
      <Route path="/catering" element={<Caterings />} />
      <Route path="/baby-shower" element={<BabyShower />} />
      <Route path="/event-management" element={<Events />} />
      <Route path="/event-management/:slug" element={<Events />} />
      <Route path="/decorations/service/:slug" element={<DecorationsDetailsPage />} />
       <Route path="/gifts/e-commerce/:slug" element={<GiftsDetailsPage />} />
      
      <Route path="/cart" element={
          isAuthenticated ? <Cart /> : <Navigate to="/login" />
        } />
      
      <Route path="/help" element={<HelpCentre />} />
      <Route path="/login" element={<LoginPage></LoginPage>} />
      <Route path="/register" element={<RegisterPage></RegisterPage>} />
      <Route path="/profile" element={<Profile></Profile>} />

      <Route path="/event-management/service/:slug" element={<EventManagementDetailsPage />} />


     
      
      <Route path="/event-management/service/:slug" element={<EventManagementDetailsPage />} />


         <Route path="/services" element={<Services/>} />
      <Route path="/services/:slug" element={<Services/>} />
       <Route path="/artist-management" element={<Artist></Artist>} />
      <Route path="/artist-management/:slug" element={<Artist></Artist>} />
      <Route path="/artist/service/:slug" element={<ArtistManagementDetailsPage />} />
       <Route path="/event-catering" element={<Caterings></Caterings>} />
      <Route path="/event-catering/:slug" element={<Caterings></Caterings>} />
       <Route path="/event-catering/service/:slug" element={<CateringEventsDetailsPage />} />


      {/* Protected Routes */}


      <Route
        path="/checkout"
        element={
          isAuthenticated ? <CheckoutPage /> : <Navigate to="/login" />
        }
      />
      <Route
        path="/checkout/:id"
        element={
          isAuthenticated ? <CustomizedCheckoutPage /> : <Navigate to="/login" />
        }
      />

      <Route
        path="/wishlist"
        element={
          isAuthenticated ? <WishlistPage /> : <Navigate to="/login" />
        }
      />
      <Route
        path="/order/:orderId"
        element={
          isAuthenticated ? <Order /> : <Navigate to="/login" />
        }
      />

    </Routes>
  );
};

export default RoutesComponent;
