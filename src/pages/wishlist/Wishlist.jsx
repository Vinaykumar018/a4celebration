import React, { useState } from "react";
import {
  Heart,
  ShoppingCart,
  Trash2,
  Lightbulb,
  Gift,
  Cake,
  PartyPopper,
} from "lucide-react";

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: "1",
      name: "Stylish table lamp",
      image: "https://cheetah.cherishx.com/uploads/1715946920_original.jpg",
      originalPrice: 259,
      salePrice: 155,
      inStock: true,
    },
    {
      id: "2",
      name: "White energy bulb",
      image: "https://cheetah.cherishx.com/uploads/1680590693_original.jpg?format=avif&width=384&height=384",
      originalPrice: 85,
      salePrice: 59,
      inStock: false,
    },
    {
      id: "3",
      name: "Stylish LED bulb",
      image: "https://cheetah.cherishx.com/uploads/1713933002_original.jpg?format=avif&width=640&height=640",
      originalPrice: 99,
      inStock: true,
    },
    {
      id: "4",
      name: "Decorative flower vase",
      image: "https://cheetah.cherishx.com/uploads/1595159721_original.jpg?format=avif&width=640&height=640",
      originalPrice: 129,
      salePrice: 99,
      inStock: true,
    },
  ]);

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8 max-w-6xl">
      <div className="flex items-center justify-center mb-2">
        <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500 mr-2 sm:mr-3 fill-amber-200" />
        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800">
          Your Favorite Items
        </h1>
      </div>

      <p className="text-center text-sm sm:text-base text-gray-500 mb-6 sm:mb-10">
        There are {String(wishlistItems.length).padStart(2, "0")} products in this list
      </p>

      {wishlistItems.length === 0 ? (
        <div className="text-center py-10 sm:py-16">
          <div className="flex justify-center mb-4">
            <Heart className="w-12 h-12 sm:w-16 sm:h-16 text-amber-300" />
          </div>
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">Your wishlist is empty</h2>
          <p className="text-sm sm:text-base text-gray-500 mb-6">
            Add items you love to your wishlist. Review them anytime and easily move them to the cart.
          </p>
          <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded text-sm sm:text-base">
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="overflow-x-auto">
          {/* Desktop Table View */}
          <table className="w-full hidden sm:table">
            <thead>
              <tr className="border-b">
                <th className="text-left py-4 px-2 font-semibold text-gray-700">Product Name</th>
                <th className="text-left py-4 px-2 font-semibold text-gray-700">Unit Price</th>
                <th className="text-left py-4 px-2 font-semibold text-gray-700">Stock Status</th>
                <th className="text-left py-4 px-2 font-semibold text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {wishlistItems.map((item) => (
                <tr key={item.id} className="border-b border-b border-amber-100 hover:bg-amber-50">
                  <td className="py-4 px-2">
                    <div className="flex items-center">
                      <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-md overflow-hidden bg-gray-100 mr-3 sm:mr-4">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex items-center">
                        {item.name.includes("lamp") ? (
                          <PartyPopper className="w-4 h-4 text-amber-500 mr-2" />
                        ) : item.name.includes("bulb") ? (
                          <Lightbulb className="w-4 h-4 text-amber-500 mr-2" />
                        ) : item.name.includes("vase") ? (
                          <Gift className="w-4 h-4 text-amber-500 mr-2" />
                        ) : (
                          <Cake className="w-4 h-4 text-amber-500 mr-2" />
                        )}
                        <span className="font-medium text-gray-800 text-sm sm:text-base">{item.name}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-2">
                    {item.salePrice ? (
                      <div>
                        <span className="text-gray-400 line-through mr-2 text-sm sm:text-base">${item.originalPrice}</span>
                        <span className="font-semibold text-gray-800 text-sm sm:text-base">${item.salePrice}</span>
                      </div>
                    ) : (
                      <span className="font-semibold text-gray-800 text-sm sm:text-base">${item.originalPrice}</span>
                    )}
                  </td>
                  <td className="py-4 px-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs sm:text-sm ${item.inStock ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }`}
                    >
                      {item.inStock ? "In Stock" : "Stock Out"}
                    </span>
                  </td>
                  <td className="py-4 px-2">
                    <div className="flex space-x-2">
                      <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-1 px-3 sm:py-2 sm:px-4 rounded flex items-center text-xs sm:text-sm">
                        <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        Add to Cart
                      </button>
                      <button
                        className="border border-gray-200 hover:bg-gray-100 text-gray-500 font-semibold py-1 px-3 sm:py-2 sm:px-4 rounded flex items-center text-xs sm:text-sm"
                        onClick={() => removeFromWishlist(item.id)}
                      >
                        <Trash2 className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile Card View */}
          <div className="sm:hidden space-y-4">
            {wishlistItems.map((item) => (
              <div key={item.id} className="border-b border-amber-100 p-3 hover:bg-amber-50 rounded-lg">
                <div className="flex">
                  <div className="h-16 w-16 rounded-md overflow-hidden bg-gray-100 mr-3">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-1">
                      {item.name.includes("lamp") ? (
                        <PartyPopper className="w-3 h-3 text-amber-500 mr-1" />
                      ) : item.name.includes("bulb") ? (
                        <Lightbulb className="w-3 h-3 text-amber-500 mr-1" />
                      ) : item.name.includes("vase") ? (
                        <Gift className="w-3 h-3 text-amber-500 mr-1" />
                      ) : (
                        <Cake className="w-3 h-3 text-amber-500 mr-1" />
                      )}
                      <span className="font-medium text-gray-800 text-sm">{item.name}</span>
                    </div>

                    <div className="mb-1">
                      {item.salePrice ? (
                        <div>
                          <span className="text-gray-400 line-through mr-2 text-xs">${item.originalPrice}</span>
                          <span className="font-semibold text-gray-800 text-sm">${item.salePrice}</span>
                        </div>
                      ) : (
                        <span className="font-semibold text-gray-800 text-sm">${item.originalPrice}</span>
                      )}
                    </div>

                    <span
                      className={`px-2 py-0.5 rounded-full text-xs ${item.inStock ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }`}
                    >
                      {item.inStock ? "In Stock" : "Stock Out"}
                    </span>
                  </div>
                </div>

                <div className="flex justify-end space-x-2 mt-2">
                  <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-1 px-2 rounded flex items-center text-xs">
                    <ShoppingCart className="w-3 h-3 mr-1" />
                    Add to Cart
                  </button>
                  <button
                    className="border border-gray-200 hover:bg-gray-100 text-gray-500 font-semibold py-1 px-2 rounded flex items-center text-xs"
                    onClick={() => removeFromWishlist(item.id)}
                  >
                    <Trash2 className="w-3 h-3 text-amber-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-6 sm:mt-10 flex justify-between items-center">
        <div className="flex items-center text-amber-500">
          <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-200 mr-1 sm:mr-2" />
          <span className="text-xs sm:text-sm font-medium">Save your favorites for later</span>
        </div>
      </div>
    </div>
  );
}