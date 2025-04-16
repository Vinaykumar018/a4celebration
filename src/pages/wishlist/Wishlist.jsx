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
    
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex items-center justify-center mb-2">
        <Heart className="w-8 h-8 text-pink-500 mr-3 fill-pink-200" />
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
          Your Favorite Items
        </h1>
      </div>

      <p className="text-center text-gray-500 mb-10">
        There are {String(wishlistItems.length).padStart(2, "0")} products in this list
      </p>

      {wishlistItems.length === 0 ? (
        <div className="text-center py-16">
          <div className="flex justify-center mb-4">
            <Heart className="w-16 h-16 text-pink-300" />
          </div>
          <h2 className="text-2xl font-semibold mb-2">Your wishlist is empty</h2>
          <p className="text-gray-500 mb-6">
            Add items you love to your wishlist. Review them anytime and easily move them to the cart.
          </p>
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded">
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
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
                <tr key={item.id} className="border-b border-b border-pink-100 hover:bg-pink-50">
                  <td className="py-4 px-2">
                    <div className="flex items-center">
                      <div className="h-20 w-20 rounded-md overflow-hidden bg-gray-100 mr-4">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex items-center">
                        {item.name.includes("lamp") ? (
                          <PartyPopper className="w-4 h-4 text-pink-500 mr-2" />
                        ) : item.name.includes("bulb") ? (
                          <Lightbulb className="w-4 h-4 text-pink-500 mr-2" />
                        ) : item.name.includes("vase") ? (
                          <Gift className="w-4 h-4 text-pink-500 mr-2" />
                        ) : (
                          <Cake className="w-4 h-4 text-pink-500 mr-2" />
                        )}
                        <span className="font-medium text-gray-800">{item.name}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-2">
                    {item.salePrice ? (
                      <div>
                        <span className="text-gray-400 line-through mr-2">${item.originalPrice}</span>
                        <span className="font-semibold text-gray-800">${item.salePrice}</span>
                      </div>
                    ) : (
                      <span className="font-semibold text-gray-800">${item.originalPrice}</span>
                    )}
                  </td>
                  <td className="py-4 px-2">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        item.inStock ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      }`}
                    >
                      {item.inStock ? "In Stock" : "Stock Out"}
                    </span>
                  </td>
                  <td className="py-4 px-2">
                    <div className="flex space-x-2">
                      <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded flex items-center">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </button>
                      <button
                        className="border border-gray-200 hover:bg-gray-100 text-gray-500 font-semibold py-2 px-4 rounded flex items-center"
                        onClick={() => removeFromWishlist(item.id)}
                      >
                        <Trash2 className="w-4 h-4 text-pink-500" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-10 flex justify-between items-center">
        <div className="flex items-center text-pink-500">
          <Heart className="w-5 h-5 fill-pink-200 mr-2" />
          <span className="text-sm font-medium">Save your favorites for later</span>
        </div>
        
      </div>
    </div>
  );
}
