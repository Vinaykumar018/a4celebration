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
import ProfileOrderConfirmation from "../pages/orders/ProfileOrderConfirmation";
import EventManagementDetailsPage from "../pages/products/event-management-details-page";
import GiftsDetailsPage from "../pages/products/gifts-details-page";
import CustomizedCheckoutPage from "../pages/checkout/customizedCheckout";
import Services from "../pages/category/services-section/Services";
import CateringEventsDetailsPage from "../pages/products/catering-events-details-page";
import ArtistManagementDetailsPage from "../pages/products/artist-management-details-page";
import ContactPage from "../pages/contact/Contact";
import AboutUs from "../pages/about-us/AboutUs";
import PrivacyPolicy from "../pages/privacy-policy/PrivacyPolicy";
import TermsOfService from "../pages/terms-conditions/Terms";
import RefundPolicy from "../pages/refund/Refund";
import ForgetPassword from "../components/authentication/ForgetPassword";
import ProfileCustomOrderConfirmation from "../pages/orders/ProfileCustomizedOrderConfirmation";
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
      <Route path="/forget-password" element={<ForgetPassword></ForgetPassword>} />

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

        <Route path="/contact" element={<ContactPage></ContactPage>} />
         <Route path="/about" element={<AboutUs></AboutUs>} />
         <Route path="/privacy" element={<PrivacyPolicy></PrivacyPolicy>} />
          <Route path="/terms" element={<TermsOfService></TermsOfService>} />
          <Route path="/refunds" element={<RefundPolicy></RefundPolicy>} />


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
      <Route
        path="/profile/:orderId"
        element={
          isAuthenticated ? <ProfileOrderConfirmation></ProfileOrderConfirmation> : <Navigate to="/login" />
        }
      />
       <Route
        path="/profile/custom/:orderId"
        element={
          isAuthenticated ?<ProfileCustomOrderConfirmation></ProfileCustomOrderConfirmation> : <Navigate to="/login" />
        }
      />

    </Routes>
  );
};

export default RoutesComponent;
