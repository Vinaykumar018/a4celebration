import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Trash2, ShoppingBag, Gift, Info, Calendar, Clock } from "lucide-react";
import { useCart } from '../../hooks/cartHook';

const Cart = () => {

  const { 
    cartItems, 
    cartTotal, 
    itemCount,
    removeFromCart,
    updateQuantity,
    clearCart
  } = useCart();
  console.log(cartItems)
  const navigate = useNavigate();
  const [promoCode, setPromoCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const currencySymbol = "₹";
  
  // Static dummy cart data
  // const [cartItems, setCartItems] = useState([
  //   {
  //     _id: "1",
  //     product_name: "Sacred Rudraksha Mala",
  //     product_image: "https://jusst4you.com/wp-content/uploads/2025/01/2-4-768x768.webp",
  //     product_amount: 1299,
  //     quantity: 1,
  //     service_date: "2023-07-15",
  //     service_time: "10:00 AM",
  //     in_stock: true
  //   },
   
  // ]);

  // Function to remove an item from the cart
  const handleRemoveItem = (itemId) => {
    console.log(itemId)
    removeFromCart((item) => item._id !== itemId)
    
    toast.success("Item removed from cart");
  };

  // Function to empty the cart
  const handleEmptyCart = () => {
    removeFromCart()
    
    toast.success("Cart emptied");
  };

  // Calculate subtotal, shipping, and total
  const subtotal = cartItems.reduce((total, item) => total + item.product_amount * item.quantity, 0);
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  // Handle checkout
  const handleCheckout = () => {
    setIsLoading(true);
    // Simulate API call or any processing
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Proceed to checkout!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        onClose: () => navigate("/checkout"), // Navigate after toast closes
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white font-poppins">
    <ToastContainer />

    {/* Special Offers Banner */}
    <div className="w-full bg-pink-100 border-t-4 border-pink-500">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Gift className="h-5 w-5 text-pink-600" />
          <p className="text-sm">
            <span className="font-semibold">Special Offers.</span> We found offers available based on items in your cart.
          </p>
        </div>
        <Link to="#" className="text-pink-700 hover:underline text-sm font-medium">
          See All Deals & Offers
        </Link>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 py-8">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 sm:gap-0">
  <div className="flex items-center gap-2">
    <ShoppingBag className="h-8 w-12 text-pink-300" />
    <h1 className="text-2xl sm:text-3xl font-bold text-pink-800">Your Sacred Cart</h1>
  </div>
  <Link to="/" className="self-start sm:self-auto">
    <button className="border border-pink-300 text-pink-700 hover:bg-pink-100 px-4 py-2 rounded">
      Continue Shopping
    </button>
  </Link>
</div>


      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {cartItems.length === 0 ? (
            <div className="border-dashed border-2 border-pink-200 rounded-lg p-6">
              <div className="flex flex-col items-center justify-center py-12">
                <ShoppingBag className="h-12 w-12 text-pink-300 mb-4" />
                <p className="text-lg text-gray-600 mb-2">Your cart is empty</p>
                <p className="text-sm text-gray-500 mb-6">Add items to begin your spiritual journey</p>
                <Link to="/">
                  <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded">
                    Browse Products
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item._id} className="overflow-hidden border-pink-200 shadow-md rounded-lg">
                <div className="relative">
                  <div className="absolute top-2 right-2">
                    <button
                      className="text-gray-500 hover:text-red-500 hover:bg-red-50 p-2 rounded-full"
                      onClick={() => handleRemoveItem(item.serviceData._id
                        )}
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="p-4 md:p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="relative h-32 w-32 mx-auto md:mx-0 rounded-lg overflow-hidden border-2 border-pink-200 bg-white">
                        <img
                          src={item.product_image}
alt={item.product_name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex-1 space-y-3">
                        <div>
                          <Link to="#" className="text-pink-800 hover:text-pink-600 font-medium text-lg">
                            {item.product_name}
                          </Link>
                          <span className="ml-2 bg-green-50 text-green-700 border-green-200 px-2 py-1 rounded text-sm">
                            In Stock
                          </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-pink-600" />
                              <p className="text-sm text-gray-700">
                                <span className="font-medium">Booking Date:</span>{" "}
                                {new Date(item.service_date).toLocaleDateString()}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-pink-600" />
                              <p className="text-sm text-gray-700">
                                <span className="font-medium">Booking Time:</span> {item.service_time}
                              </p>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <div className="flex flex-col space-y-1">
                                <p className="text-xs text-green-600">Get it by Monday, Jul 7</p>
                                <p className="text-xs text-gray-600">When you order by 8:00 Today</p>
                              </div>
                            </div>

                            <div className="flex flex-col space-y-1 mt-2">
                              <p className="text-sm text-gray-700">
                                <span className="font-medium">Quantity:</span> {item.quantity}
                              </p>
                              <p className="text-sm text-gray-700">
                                <span className="font-medium">Price:</span> {currencySymbol}{" "}
                                {item.product_amount.toFixed(2)}
                              </p>
                              <p className="text-sm font-medium text-pink-800">
                                <span className="font-medium">Total:</span> {currencySymbol}{" "}
                                {(item.product_amount * item.quantity).toFixed(2)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-pink-100">
                      <p className="text-xs text-gray-600">
                        <span className="font-medium">Parampara:</span> Earn a ₹20 statement credit when you spend
                        ₹29 on eligible purchases.
                        <Link to="#" className="text-pink-700 hover:underline ml-1">
                          Learn more
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-4 space-y-6">
            <div className="border-pink-200 shadow-md rounded-lg overflow-hidden">
              <div className="bg-pink-50 border-b border-pink-100 p-4">
                <h2 className="text-center text-pink-800 font-bold">Order Summary</h2>
              </div>
              <div className="p-6 space-y-6">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="Enter Promo code here..."
                    className="border border-pink-200 focus:border-pink-400 px-3 py-2 rounded w-full"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  <button className="border border-pink-200 text-pink-700 hover:bg-pink-100 px-4 py-2 rounded">
                    Apply
                  </button>
                </div>

                <hr className="bg-pink-100" />

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <p className="text-gray-600">
                      Subtotal ({cartItems.reduce((acc, item) => acc + item.quantity, 0)} items):
                    </p>
                    <p className="font-medium">
                      {currencySymbol} {subtotal.toFixed(2)}
</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-600">Shipping:</p>
                    <p className="text-green-600">Two-Day Delivery</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-600">Saving/Promo Code:</p>
                    <p>-</p>
                  </div>
                  <div className="flex justify-between">
                    <Link to="#" className="text-pink-700 hover:underline flex items-center gap-1">
                      <Info className="h-4 w-4" />
                      <span>Estimate Tax</span>
                    </Link>
                    <p className="text-xs italic">See in Checkout</p>
                  </div>
                </div>

                <hr className="bg-pink-100" />

                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-pink-800">Total:</p>
                  <p className="text-lg font-bold text-pink-800">
                    {currencySymbol} {total.toFixed(2)}
                  </p>
                </div>

                <button
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded"
                  onClick={handleCheckout}
                  type="submit"
                  disabled={cartItems.length === 0 || isLoading}
                >
                  {isLoading ? "Processing..." : "Proceed to Checkout"}
                </button>

                <button
                  className="w-full border border-pink-200 text-pink-700 hover:bg-pink-100 px-6 py-2 rounded"
                  onClick={handleEmptyCart}
                  disabled={cartItems.length === 0}
                >
                  Empty Cart
                </button>
              </div>
            </div>

            <div className="border-pink-200 rounded-lg p-4">
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <img src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/visa-1024.png" alt="Visa" width={40} height={30} />
                <img src="http://cdn3.iconfinder.com/data/icons/payment-method-1/64/_Mastercard-1024.png" alt="Mastercard" width={40} height={30} />
                <img src="https://cdn3.iconfinder.com/data/icons/payment-method-1/64/_Paypal-01-1024.png" alt="PayPal" width={40} height={30} />
                <img src="https://cdn4.iconfinder.com/data/icons/circle-payment/32/payment_001-rupay-128.png" alt="RuPay" width={40} height={30} />
                <img src="https://economictimes.indiatimes.com/thumb/msid-74960608,width-1200,height-900,resizemode-4,imgsize-49172/upi-twitter.jpg?from=mdr" alt="UPI" width={40} height={30} />
              </div>
              <p className="text-center text-xs text-gray-500 mt-3">Guarantee Safe and Secure Payment Checkout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Cart;