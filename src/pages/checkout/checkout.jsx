import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Gift, NotebookIcon as Lotus, Info, Calendar, Clock, MapPin, Sparkles, PartyPopper, Heart } from "lucide-react";
import { UserOrderDetails } from "./UserOrderDetails";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import useUserCartData from "../../hooks/useUserCartData";
import { fetchUserData } from "../../redux/userSlice";



// Add this in your main CSS file or at the top of your component
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');
  
  .font-poppins {
    font-family: 'Poppins', sans-serif;
  }
  
  .font-playfair {
    font-family: 'Playfair Display', serif;
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  
  .confetti {
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #f0f;
    opacity: 0.7;
  }
`;

export default function CheckoutPage() {



  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData?.data);
  useEffect(() => {

    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const userId = localStorage.getItem('userId');
    if (isLoggedIn && userId) {
      dispatch(fetchUserData(userId));
    }
  }, [dispatch, userData]);

  console.log(userData)
  const { cartItems, isLoading } = useUserCartData();
  const currencySymbol = "₹";



  console.log("cartitems", cartItems)
  console.log("userdata", userData)

  return (
    <>
      <style>{styles}</style>
      <div className="min-h-screen bg-pink-50 font-poppins relative overflow-hidden">
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-pink-200 opacity-20 animate-float"></div>
        <div className="absolute bottom-1/4 right-20 w-24 h-24 rounded-full bg-purple-200 opacity-20 animate-float animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-rose-200 opacity-20 animate-float animation-delay-3000"></div>

        {/* Special Offers Banner */}
        <div className="w-full bg-gradient-to-r from-pink-400 to-rose-400 border-b-2 border-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Gift className="h-5 w-5 text-white" />
              <p className="text-sm text-white">
                <span className="font-semibold">Special Celebration Offers! 🎊</span> Exclusive discounts for your special occasion!
              </p>
            </div>
            <Link to="#" className="text-white hover:underline text-sm font-medium flex items-center">
              See All Deals & Offers <Sparkles className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8 relative">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 sm:gap-0">
            <div className="flex items-center gap-2">
              <Lotus className="h-8 w-8 text-rose-600" />
              <h1 className="text-2xl sm:text-3xl font-bold text-rose-800 font-playfair">
                Celebration Checkout
              </h1>
            </div>
            <Link to="/cart" className="self-start sm:self-auto">
              <button className="border-2 border-rose-300 text-rose-700 hover:bg-rose-50 px-4 py-2 rounded-lg flex items-center shadow-sm transition-all hover:shadow-md">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Return to Cart
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Order Summary (Top on mobile, right on desktop) */}
            <div className="lg:col-span-1 order-1 lg:order-2">
              <div className="sticky top-4 space-y-6">
                <div className="border-2 border-rose-200 shadow-lg rounded-xl overflow-hidden bg-white">
                  <div className="bg-gradient-to-r from-rose-100 to-pink-100 border-b border-rose-200 p-4">
                    <h2 className="text-center text-rose-800 font-medium text-lg">Order Summary 💝</h2>
                  </div>
                  <div className="p-0">
                    {cartItems.map((item) => (
                      <div key={item._id} className="p-4 border-b border-rose-100 hover:bg-rose-50 transition-colors">
                        <div className="flex gap-3">
                          <div className="w-20 h-20 relative rounded-lg overflow-hidden border-2 border-rose-200 shadow-sm">
                            <img
                              src={"http://localhost:3000/" + item.featured_image}
                              alt={item.name}
                              className="object-cover w-full h-full"
                            />
                            <div className="absolute top-1 right-1 bg-white rounded-full p-1 shadow">
                              <Heart className="h-3 w-3 text-rose-500 fill-rose-500" />
                            </div>
                          </div>
                          <div className="flex-1 space-y-1">
                            <h3 className="font-medium text-rose-800">{item.name}</h3>
                            <div className="bg-green-100 text-green-800 border border-green-300 px-2 py-1 rounded-full text-xs inline-flex items-center">
                              <span className="w-2 h-2 rounded-full bg-green-500 mr-1"></span>
                              {item.stock_left > 0 ? "Ready to Celebrate!" : "Out of Stock"}
                            </div>
                            <div className="flex items-center gap-1 text-xs text-gray-600">
                              <Calendar className="h-3 w-3 text-rose-500" />
                              <span>Date: {new Date(item.service_date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center gap-1 text-xs text-gray-600">
                              <Clock className="h-3 w-3 text-rose-500" />
                              <span>Time: {item.service_time}</span>
                            </div>
                            <div className="flex justify-between items-center mt-1">
                              <span className="text-xs">Qty: {item.quantity}</span>
                              <span className="font-medium text-rose-700">
                                {currencySymbol}
                                {(item.price * item.quantity).toFixed(2)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="p-4 space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Subtotal ({cartItems.length} items):</span>
                        <span className="font-medium">
                          {currencySymbol}
                          {cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Shipping:</span>
                        <span className="font-medium">
                          {currencySymbol}
                          {(0).toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Tax:</span>
                        <span className="font-medium">
                          {currencySymbol}
                          {(0).toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Saving/Promo Code:</span>
                        <span>-</span>
                      </div>

                      <div className="my-2 bg-gradient-to-r from-transparent via-rose-200 to-transparent h-px"></div>

                      <div className="flex justify-between font-bold text-lg">
                        <span className="text-rose-800">Total:</span>
                        <span className="text-rose-800">
                          {currencySymbol}
                          {cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}
                        </span>
                      </div>

                      <div className="pt-3">
                        <div className="flex items-center space-x-2">
                          <input
                            placeholder="🎁 Enter Promo code..."
                            className="border-2 border-rose-200 rounded-lg px-3 py-2 focus:border-rose-400 w-full focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                            value=""
                          />
                          <button className="border-2 border-rose-300 bg-rose-500 text-white hover:bg-rose-600 px-4 py-2 rounded-lg flex items-center shadow-sm hover:shadow-md transition-all">
                            Apply
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-rose-50 to-pink-50 border-2 border-rose-200 rounded-xl p-4 text-sm shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <PartyPopper className="h-5 w-5 text-rose-600" />
                    <h3 className="font-medium text-rose-800">Celebration Information</h3>
                  </div>
                  <p className="text-gray-700 mb-2">
                    Our team will contact you within 24 hours to finalize your celebration details and confirm the decoration timings.
                  </p>
                  <p className="text-gray-700">
                    For urgent queries: <span className="text-rose-700 font-medium">support@celebratewithus.com</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Checkout Form (Bottom on mobile, left on desktop) */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <UserOrderDetails cartItems={cartItems} currencySymbol={currencySymbol} userData={userData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}