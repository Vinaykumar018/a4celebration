import React from 'react';
import { Link } from "react-router-dom"; 
import { ChevronDown } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from '../../redux/categoriesSlice';
import { useEffect } from "react";

const BottomNavbar = () => {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  // Function to convert child category name to URL-friendly format
  const formatChildUrl = (parentSlug, childName) => {
    return `/${parentSlug}/${childName.toLowerCase().replace(/\s+/g, '-')}`;
  };

  if (loading) return <div className="hidden md:block w-full bg-white py-2 text-center">Loading categories...</div>;
  if (error) return <div className="hidden md:block w-full bg-white py-2 text-center text-red-500">Error loading categories</div>;

  return (
    <div className="hidden md:block w-full bg-white border-t border-gray-100 shadow-[0_5px_15px_-5px_rgba(0,0,0,0.5)] px-3">
      <div className="w-full max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Navigation categories */}
        <nav className="flex items-center space-x-8">
          {categories.map((category) => (
            <div key={category._id} className="group relative">
              {/* Main category link */}
              <Link 
                to={`/${category.slug_url}`} 
                className="flex items-center text-gray-700 hover:text-rose-500 font-medium transition-colors"
              >
                {category.category_name}
                {Object.keys(category.child_category || {}).length > 0 && (
                  <ChevronDown className="ml-1 h-4 w-4" />
                )}
              </Link>

              {/* Dropdown for child categories - only show if they exist */}
              {Object.keys(category.child_category || {}).length > 0 && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
                  {Object.entries(category.child_category).map(([id, child]) => (
                    <Link 
                      key={id}
                      to={formatChildUrl(category.slug_url, child.name)}
                      className="block px-4 py-2 text-gray-700 hover:bg-rose-50 hover:text-rose-500"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default BottomNavbar;