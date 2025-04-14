import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import { Search, ShoppingCart, Heart, User, MapPin, HelpCircle, ChevronDown } from "lucide-react";
import logo from '../../assets/cherishx-logo-website.png'
import TopNavbar from "./top-navbar";
import BottomNavbar from "./bottom-navbar";
export default function Navbar() {
  

  return (
    <header className="w-full sticky top-0 z-50 bg-white transition-shadow duration-300">
    
 <TopNavbar></TopNavbar>
 <BottomNavbar></BottomNavbar>


     
   
    </header>
  );
}