import React from 'react';
import { Link } from "react-router-dom"; 
import { ChevronDown } from "lucide-react";

const BottomNavbar = () => {
  return (
    <div className=" hidden md:block w-full bg-white border-t border-gray-100 shadow-[0_5px_15px_-5px_rgba(0,0,0,0.5)] px-3">
      <div className="w-full max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        
        {/* Navigation categories */}
        <nav className="flex items-center space-x-8">
          
          {/* Decorations Dropdown */}
          <div className="group relative">
            <Link to="/decoration" className="flex items-center text-gray-700 hover:text-rose-500 font-medium transition-colors">
              Decorations
              <ChevronDown className="ml-1 h-4 w-4" />
            </Link>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
              <Link to="/decoration" className="block px-4 py-2 text-gray-700 hover:bg-rose-50 hover:text-rose-500">Balloons</Link>
              <Link to="/decoration" className="block px-4 py-2 text-gray-700 hover:bg-rose-50 hover:text-rose-500">Backdrops</Link>
              <Link to="/decoration" className="block px-4 py-2 text-gray-700 hover:bg-rose-50 hover:text-rose-500">Centerpieces</Link>
            </div>
          </div>

          {/* Giftings Dropdown */}
          <div className="group relative">
            <Link to="/giftings" className="flex items-center text-gray-700 hover:text-rose-500 font-medium transition-colors">
              Giftings
              <ChevronDown className="ml-1 h-4 w-4" />
            </Link>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
              <Link to="/giftings" className="block px-4 py-2 text-gray-700 hover:bg-rose-50 hover:text-rose-500">Personalized Gifts</Link>
              <Link to="/giftings" className="block px-4 py-2 text-gray-700 hover:bg-rose-50 hover:text-rose-500">Corporate Gifts</Link>
              <Link to="/giftings" className="block px-4 py-2 text-gray-700 hover:bg-rose-50 hover:text-rose-500">Gift Boxes</Link>
            </div>
          </div>

          {/* Artist Management Dropdown */}
          <div className="group relative">
            <Link to="/artists" className="flex items-center text-gray-700 hover:text-rose-500 font-medium transition-colors">
              Artist Management
              <ChevronDown className="ml-1 h-4 w-4" />
            </Link>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
              <Link to="/artists" className="block px-4 py-2 text-gray-700 hover:bg-rose-50 hover:text-rose-500">Musicians</Link>
              <Link to="/artists" className="block px-4 py-2 text-gray-700 hover:bg-rose-50 hover:text-rose-500">DJs</Link>
              <Link to="/artists" className="block px-4 py-2 text-gray-700 hover:bg-rose-50 hover:text-rose-500">Performers</Link>
            </div>
          </div>

          {/* Catering Dropdown */}
          <div className="group relative">
            <Link to="/catering" className="flex items-center text-gray-700 hover:text-rose-500 font-medium transition-colors">
              Catering
              <ChevronDown className="ml-1 h-4 w-4" />
            </Link>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
              <Link to="/catering" className="block px-4 py-2 text-gray-700 hover:bg-rose-50 hover:text-rose-500">Weddings</Link>
              <Link to="/catering" className="block px-4 py-2 text-gray-700 hover:bg-rose-50 hover:text-rose-500">Corporate Events</Link>
              <Link to="/catering" className="block px-4 py-2 text-gray-700 hover:bg-rose-50 hover:text-rose-500">Private Parties</Link>
            </div>
          </div>

          {/* Event Organizer Dropdown */}
          <div className="group relative">
            <Link to="/events" className="flex items-center text-gray-700 hover:text-rose-500 font-medium transition-colors">
              Event Organizer
              <ChevronDown className="ml-1 h-4 w-4" />
            </Link>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
              <Link to="/events" className="block px-4 py-2 text-gray-700 hover:bg-rose-50 hover:text-rose-500">Weddings</Link>
              <Link to="/events" className="block px-4 py-2 text-gray-700 hover:bg-rose-50 hover:text-rose-500">Birthdays</Link>
              <Link to="/events" className="block px-4 py-2 text-gray-700 hover:bg-rose-50 hover:text-rose-500">Corporate Events</Link>
            </div>
          </div>

        </nav>
      </div>
    </div>
  );
}

export default BottomNavbar;
