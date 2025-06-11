import React, { useState } from 'react';
import { Tags, DollarSign, Star, Search, ChevronDown } from 'lucide-react';

const CategoryWiseFilter = () => {
  const [openSection, setOpenSection] = useState({
    category: true,
    price: true,
    rating: true,
  });

  const toggleSection = (key) => {
    setOpenSection((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="p-5 bg-white rounded-2xl shadow-sm border border-gray-100 font-sans w-[300px] space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-amber-100">
        <h3 className="text-lg font-bold text-gray-900">Filters</h3>
        <button className="text-sm font-medium text-amber-700 hover:text-amber-800">
          Reset All
        </button>
      </div>

      {/* Category Filter */}
      <div className="space-y-3">
        <button
          onClick={() => toggleSection('category')}
          className="flex items-center justify-between w-full group"
        >
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-amber-50 rounded-lg">
              <Tags className="w-4 h-4 text-amber-600" />
            </div>
            <span className="text-base font-semibold text-gray-800 group-hover:text-amber-700 transition-colors">
              Categories
            </span>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${openSection.category ? 'rotate-180' : ''}`}
          />
        </button>

        {openSection.category && (
          <div className="pl-9 space-y-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search categories..."
                className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
              />
            </div>
            <ul className="space-y-2">
              {['Balloons', 'Lights', 'Flowers', 'Candles'].map((category, index) => (
                <li key={index}>
                  <label className="flex items-center gap-2 cursor-pointer hover:bg-amber-50 p-2 rounded-lg transition-colors">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-amber-600 rounded border-gray-300 focus:ring-amber-500"
                    />
                    <span className="text-sm font-medium text-gray-700">{category}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Price Filter */}
      <div className="space-y-3">
        <button
          onClick={() => toggleSection('price')}
          className="flex items-center justify-between w-full group"
        >
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-amber-50 rounded-lg">
              <DollarSign className="w-4 h-4 text-amber-600" />
            </div>
            <span className="text-base font-semibold text-gray-800 group-hover:text-amber-700 transition-colors">
              Price Range
            </span>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${openSection.price ? 'rotate-180' : ''}`}
          />
        </button>

        {openSection.price && (
          <div className="pl-9 space-y-2">
            {['Under ₹500', '₹500 - ₹1000', '₹1000 - ₹2000', 'Above ₹2000'].map((range, index) => (
              <div key={index} className="flex items-center gap-2 hover:bg-amber-50 p-2 rounded-lg transition-colors">
                <input
                  type="radio"
                  name="price-range"
                  id={`price-${index}`}
                  className="h-4 w-4 text-amber-600 border-gray-300 focus:ring-amber-500"
                />
                <label htmlFor={`price-${index}`} className="text-sm font-medium text-gray-700 cursor-pointer">
                  {range}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Rating Filter */}
      <div className="space-y-3">
        <button
          onClick={() => toggleSection('rating')}
          className="flex items-center justify-between w-full group"
        >
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-amber-50 rounded-lg">
              <Star className="w-4 h-4 text-amber-600" />
            </div>
            <span className="text-base font-semibold text-gray-800 group-hover:text-amber-700 transition-colors">
              Customer Rating
            </span>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${openSection.rating ? 'rotate-180' : ''}`}
          />
        </button>

        {openSection.rating && (
          <div className="pl-9 space-y-2">
            {[5, 4, 3, 2].map((stars) => (
              <div key={stars} className="flex items-center gap-2 hover:bg-amber-50 p-2 rounded-lg transition-colors">
                <input
                  type="radio"
                  name="rating"
                  id={`rating-${stars}`}
                  className="h-4 w-4 text-amber-600 border-gray-300 focus:ring-amber-500"
                />
                <label htmlFor={`rating-${stars}`} className="flex items-center gap-1 text-sm font-medium text-gray-700 cursor-pointer">
                  {[...Array(stars)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                  <span className="ml-1">& Up</span>
                </label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Apply Button */}
      <button className="w-full py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors shadow-sm">
        Apply Filters
      </button>
    </div>
  );
};

export default CategoryWiseFilter;