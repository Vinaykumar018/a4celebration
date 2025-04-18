import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  Heart,
  User,
  MapPin,
  HelpCircle,
  Menu,
  X,
} from "lucide-react";
import LoginModal from "../authentication/LoginModal"; // Adjust the import path as needed
import logo from "../../assets/A4 Celebration 1 (3).png";
import CreateAccountModal from "../authentication/CreateAccountModal";
import CityModal from "../locations/CityModal"; // Ensure you import CityModal

const TopNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isCreateAccountModalOpen, setIsCreateAccountModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for City Modal
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLoginSuccess = () => {
    console.log("Login successful!");
  };

  return (
    <div className={`w-full bg-white flex items-center justify-between px-4 py-2 ${isScrolled ? "shadow-md" : ""}`}>
      {/* Left Logo */}
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </Link>
      </div>

      {/* Desktop Search Bar */}
      <div className="hidden md:flex relative flex-1 max-w-xl mx-6">
        <input
          type="text"
          placeholder="What are you celebrating?"
          className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent"
        />
        <button className="absolute right-0 top-0 h-full px-3 flex items-center text-gray-400 hover:text-rose-500">
          <Search className="h-5 w-5" />
        </button>
      </div>

      {/* Desktop Icons */}
      <div className="hidden md:flex items-center gap-4">
        <Link to="/help" className="flex items-center hover:text-rose-500 cursor-pointer">
          <HelpCircle className="h-5 w-5" />
          <span className="ml-1 text-sm font-medium">HELP CENTER</span>
        </Link>
        <Link to="/wishlist" className="hover:text-rose-500 cursor-pointer flex items-center">
          <Heart className="h-5 w-5" />
        </Link>
        <Link to="/cart" className="hover:text-rose-500 cursor-pointer flex items-center">
          <ShoppingCart className="h-5 w-5" />
        </Link>
        <button
          onClick={() => setIsLoginModalOpen(true)}
          className="flex items-center hover:text-rose-500 cursor-pointer"
        >
          <User  className="h-5 w-5" />
        </button>
        <div className="flex items-center hover:text-rose-500 cursor-pointer" onClick={handleOpenModal}>
          <MapPin className="h-5 w-5 text-rose-500" />
          <span className="ml-1 text-sm font-medium">KANPUR</span>
        </div>
      </div>

      {/* Mobile Icons & Menu */}
      <div className="md:hidden flex items-center gap-2">
      <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
        <Search className="h-5 w-5 text-gray-700 hover:text-rose-500" />
      </button>
      {isSearchOpen && (
         <input
         type="text"
         placeholder="Search..."
         className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent"
       />
      )}
        <Link to="/wishlist">
          <Heart className="h-5 w-5 text-gray-700 hover:text-rose-500" />
        </Link>
        <Link to="/cart">
          <ShoppingCart className="h-5 w-5 text-gray-700 hover:text-rose-500" />
        </Link>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-gray-700" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Slideout Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md z-20 p-4 flex flex-col space-y-4 md:hidden">
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsLoginModalOpen(true);
            }}
            className="flex items-center text-gray-700 hover:text-rose-500"
          >
            <User  className="h-5 w-5 mr-2" /> Log In
          </button>
          <Link to="/help" className="flex items-center text-gray-700 hover:text-rose-500">
            <HelpCircle className="h-5 w-5 mr-2" /> Help Center
          </Link>
          <Link to="/wishlist" className="flex items-center text-gray-700 hover:text-rose-500">
            <Heart className="h-5 w-5 mr-2" /> Wishlist
          </Link>
          <Link to="/cart" className="flex items-center text-gray-700 hover:text-rose-500">
            <ShoppingCart className="h-5 w-5 mr-2" /> Cart
          </Link>
          <div className="flex items-center text-gray-700 hover:text-rose-500" onClick={handleOpenModal}>
            <MapPin className="h-5 w-5 mr-2 text-rose-500" /> Kanpur
          </div>
        </div>
      )}

      {/* City Modal */}
      <CityModal isOpen={isModalOpen} onClose={handleCloseModal} />

      {/* Login Modal */}
      <LoginModal
        open={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onSuccess={handleLoginSuccess}
        onCreateAccount={() => {
          setIsLoginModalOpen(false);
          setIsCreateAccountModalOpen(true);
        }}
      />

      {/* Create Account Modal */}
      <CreateAccountModal
        open={isCreateAccountModalOpen}
        onClose={() => setIsCreateAccountModalOpen(false)}
        onSuccess={() => console.log("Account created successfully!")}
        onSwitchToLogin={() => {
          setIsCreateAccountModalOpen(false);
          setIsLoginModalOpen(true);
        }}
      />
    </div>
  );
};

export default TopNavbar;







