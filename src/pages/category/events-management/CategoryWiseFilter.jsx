import React from 'react';
import { Tags, DollarSign, Star, Search } from 'lucide-react';

const CategoryWiseFilter = () => {
  return (
    <div className="p-6 border border-gray-200 rounded-xl shadow-lg bg-white font-sans space-y-6">
      {/* Category Filter */}
      <div className="border border-gray-200 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-4">
          <Tags className="w-5 h-5 text-blue-600" />
          <h2 className="text-lg font-bold text-gray-800">Filter by Category</h2>
        </div>
        
        {/* Search Bar */}
        <div className="mb-4 flex items-center space-x-2 border rounded-lg p-2">
          <Search className="w-5 h-5 text-gray-600" />
          <input
            type="text"
            placeholder="Search categories"
            className="w-full text-sm text-gray-700 focus:outline-none"
          />
        </div>

        <ul className="space-y-3">
          {['Balloons', 'Lights', 'Flowers', 'Candles'].map((category, index) => (
            <li key={index}>
              <label className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded transition-all duration-200">
                <input
                  type="checkbox"
                  className="h-5 w-5 text-blue-500 rounded focus:ring-blue-400"
                />
                <span className="text-gray-700 text-sm font-bold">{category}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Filter */}
      <div className="border border-gray-200 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-4">
          <DollarSign className="w-5 h-5 text-green-600" />
          <h2 className="text-lg font-bold text-gray-800">Filter by Price</h2>
        </div>
        <ul className="space-y-3">
          {['Under ₹500', '₹500 - ₹1000', '₹1000 - ₹2000', 'Above ₹2000'].map((range, index) => (
            <li key={index}>
              <label className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded transition-all duration-200">
                <input
                  type="checkbox"
                  className="h-5 w-5 text-green-500 rounded focus:ring-green-400"
                />
                <span className="text-gray-700 text-sm font-bold">{range}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Rating Filter */}
      <div className="border border-gray-200 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-4">
          <Star className="w-5 h-5 text-yellow-500" />
          <h2 className="text-lg font-semibold text-gray-800">Filter by Rating</h2>
        </div>
        <ul className="space-y-3">
          {[5, 4, 3, 2].map((stars) => (
            <li key={stars}>
              <label className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded transition-all duration-200">
                <input
                  type="checkbox"
                  className="h-5 w-5 text-yellow-500 rounded focus:ring-yellow-400"
                />
                <span className="text-gray-700 text-sm font-bold flex items-center gap-1">
                  {[...Array(stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                  &amp; up
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryWiseFilter;
