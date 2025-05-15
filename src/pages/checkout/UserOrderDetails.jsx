import { ArrowLeft, Gift, NotebookIcon as Lotus, Info, Calendar, Clock, MapPin, Sparkles, PartyPopper, Heart,Navigation,Home, Flag } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { User,Phone,Mail } from "lucide-react";
import RazorPayIcon from '../../assets/payment/razorpay-icon (1).svg'
import Upi from '../../assets/payment/upi.svg'
import Cod from '../../assets/payment/reshot-icon-cash-on-delivery-5UB8T6KGXR.svg'
import axios from "axios";
import {  useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useCart } from '../../hooks/cartHook';
import { placeOrder } from "../../services/decoration-orders/order-api";
export const UserOrderDetails = ({ cartItems = [], currencySymbol, userData }) => {
  


   

    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const { cart, clearCart} = useCart(); // This will store
    console.log(cart) 
const navigate=useNavigate()

  // Extracting the first item from cartItems for display
  const cartItem = cartItems[0] || {};


    const transformToOrderSchema = () => {
    // Calculate total amount
    const totalAmount = cartItems.reduce(
      (sum, item) => sum + (item.price * item.quantity),
      0
    );

    // Prepare the order object
    const orderData = {
      userDetails: {
        userId: userData._id,
        username: userData.username,
        contactNumber: userData.mobile,
        email: userData.email
      },
      addressDetails: {
        home_address: userData.address.split(',')[1]?.trim() || userData.address,
        street_address: userData.address.split(',')[0]?.trim() || userData.address,
        city_address: userData.city,
        pincode: userData.pincode
      },
      productDetails: cartItems.map(item => ({
        productId: item.product_id,
        productName: item.name,
        amount: item.price,
        quantity: item.quantity
      })),
      paymentDetails: {
        totalAmount: totalAmount,
        transactionId: null,
        transactionStatus: 'pending',
        transactionDate: null,
        paymentMethodType: "COD",
      },
      orderDetails: {
        order_status: 'processing',
        order_requested_date: new Date().toISOString().split('T')[0],
        order_requested_time: new Date().toTimeString().split(' ')[0],
        products: cartItems.map(item => ({
          productId: item.product_id,
          quantity: item.quantity
        })),
        lastUpdated: new Date()
      },
      deliveryNotes: `Service requested for ${cartItem.service_date} between ${cartItem.service_time}`,
      discountApplied: 0,
      shippingMethod: 'Standard Delivery'
    };

    return orderData;
  };




 const handlePlaceOrder = async (event) => {
  event.preventDefault();

  const orderData = transformToOrderSchema();
  console.log("orderdata", orderData);

  try {
    const data = await placeOrder(orderData);
    clearCart(userData._id);
    navigate("/order/" + data.data.order_id);
  } catch (error) {
    if (error.response) {
      console.error('Order failed:', error.response.data.message);
    } else {
      console.error('Network error:', error.message);
    }
  }
};

  


  return (
    <form className="space-y-6" onSubmit={handlePlaceOrder}>
      {/* Customer Details */}
      <div className="border-2 border-rose-200 rounded-xl shadow-lg bg-white overflow-hidden">
         <div 
        className="bg-gradient-to-r from-rose-100 to-pink-100 border-b border-rose-200 p-4 cursor-pointer"
        onClick={() => setIsOpen1(!isOpen1)}
      >
        <h2 className="text-rose-800 flex items-center justify-between gap-2 font-playfair text-lg">
          <span className="flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-rose-600 text-white text-sm">
              1
            </span>
            Your Celebration Details ✨
          </span>
          {isOpen1 ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </h2>
      </div>



      {/* Summary view when closed */}
      {!isOpen1 && (
        <div className="p-4 bg-rose-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-rose-800">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-rose-600" />
              <span className="font-medium">Name:</span>
              <span>{userData?.username || 'Not provided'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-rose-600" />
              <span className="font-medium">Phone:</span>
              <span>{userData?.mobile || 'Not provided'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-rose-600" />
              <span className="font-medium">Email:</span>
              <span>{userData?.email || 'Not provided'}</span>
            </div>
          </div>
        </div>
      )}
      
      {isOpen1 && (
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="username" className="text-rose-800 font-medium">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                id="username"
                name="username"
                className="w-full border-2 border-rose-200 rounded-lg p-3 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                required
                placeholder="Your beautiful name"
                defaultValue={userData?.username} // Populate with userData
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="contactNumber" className="text-rose-800 font-medium">
                Phone <span className="text-rose-500">*</span>
              </label>
              <input
                id="contactNumber"
                name="contactNumber"
                className="w-full border-2 border-rose-200 rounded-lg p-3 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                required
                placeholder="Where we can reach you"
                defaultValue={userData?.mobile} // Populate with userData
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-rose-800 font-medium">
              Email Address <span className="text-rose-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full border-2 border-rose-200 rounded-lg p-3 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
              required
              placeholder="For booking confirmation 💌"
              defaultValue={userData?.email} // Populate with userData
            />
          </div>
        </div>)}
      </div>

      {/* Shipping Address */}
      <div className="border-2 border-rose-200 rounded-xl shadow-lg bg-white overflow-hidden">
       
         <div 
        className="bg-gradient-to-r from-rose-100 to-pink-100 border-b border-rose-200 p-4 cursor-pointer"
        onClick={() => setIsOpen2(!isOpen2)}
      >
        <h2 className="text-rose-800 flex items-center justify-between gap-2 font-playfair text-lg">
          <span className="flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-rose-600 text-white text-sm">
              2
            </span>
             Celebration Venue 🏡
          </span>
          {isOpen2 ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </h2>
      </div>


 {!isOpen2 && (
        <div className="p-4 bg-rose-10">
          <div className="space-y-3 text-sm text-rose-800">
            <div className="flex items-start gap-2">
              <Home className="h-4 w-4 mt-0.5 text-rose-600 flex-shrink-0" />
              <div>
                <p className="font-medium">Address</p>
                <p className="text-rose-700">
                  {userData?.address || 'Not provided'}
                  {userData?.city && `, ${userData.city}`}
                  {userData?.pincode && `, ${userData.pincode}`}
                </p>
              </div>
            </div>
            
            {userData?.country && (
              <div className="flex items-center gap-2">
                <Flag className="h-4 w-4 text-rose-600" />
                <span className="font-medium">Country:</span>
                <span>{userData.country}</span>
              </div>
            )}
          </div>
        </div>
      )}

      {isOpen2 && (
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="h-5 w-5 text-rose-600" />
            <p className="text-sm text-rose-800">Where should we bring the celebration magic?</p>
          </div>

          <div className="space-y-2">
            <label htmlFor="aptSuite" className="text-rose-800 font-medium">
              Apt/Suite/Building <span className="text-rose-500">*</span>
            </label>
            <input
              id="aptSuite"
              name="aptSuite"
              className="w-full border-2 border-rose-200 rounded-lg p-3 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
              required
              placeholder="Your celebration spot"
              defaultValue={userData?.address} // Populate with userData
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="streetAddress" className="text-rose-800 font-medium">
              Street Address <span className="text-rose-500">*</span>
            </label>
            <input
              id="streetAddress"
              name="streetAddress"
              className="w-full border-2 border-rose-200 rounded-lg p-3 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
              required
              placeholder="Where the party's at!"
              defaultValue={userData?.address} // Populate with userData
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="city" className="text-rose-800 font-medium">
                City/Town <span className="text-rose-500">*</span>
              </label>
              <input
                id="city"
                name="city"
                className="w-full border-2 border-rose-200 rounded-lg p-3 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                required
                placeholder="Your city of joy"
                defaultValue={userData?.city} // Populate with userData
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="zipCode" className="text-rose-800 font-medium">
                Zip/Postal Code <span className="text-rose-500">*</span>
              </label>
              <input
                id="zipCode"
                name="zipCode"
                className="w-full border-2 border-rose-200 rounded-lg p-3 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                required
                placeholder="Postal code"
                defaultValue={userData?.pincode} // Populate with userData
              />
            </div>
          
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div className="space-y-2">
              <label htmlFor="country" className="text-rose-800 font-medium">
                Country <span className="text-rose-500">*</span>
              </label>
              <input
                id="country"
                name="country"
                className="w-full border-2 border-rose-200 rounded-lg p-3 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                required
                placeholder="Your country"
                defaultValue={userData?.country} // Populate with userData
              />
            </div>
          </div>
        </div>
      )}
      </div>

      {/* Special Notes */}
      <div className="border-2 border-rose-200 rounded-xl shadow-lg bg-white overflow-hidden">
        <div className="bg-gradient-to-r from-rose-100 to-pink-100 border-b border-rose-200 p-4">
          <h2 className="text-rose-800 flex items-center gap-2 font-playfair text-lg">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-rose-600 text-white text-sm">
              3
            </span>
            Special Celebration Wishes 💫
          </h2>
        </div>
        <div className="p-6">
          <div className="space-y-2">
            <textarea
              id="specialNote"
              name=" specialNote"
              className="w-full border-2 border-rose-200 rounded-lg p-3 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 outline-none transition-all min-h-[120px]"
              placeholder="Tell us about your celebration dreams, special rituals, or anything we should know to make it perfect..."
            />
          </div>
        </div>
      </div>

     

      {/* Submit Button */}


     <div className="mb-6">
  <div className="p-6 space-y-4 bg-white border-2 border-rose-200 rounded-xl shadow-sm">
    <h3 className="text-lg font-semibold text-gray-800">Select Payment Method</h3>
    
    {/* Razorpay Option */}
    <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:border-rose-300 transition-colors">
      <input
        type="radio"
        id="razorpay"
        name="payment"
        value="razorpay"
        className="text-rose-600 border-2 border-rose-300 focus:ring-rose-200"
      />
      <label htmlFor="razorpay" className="flex items-center space-x-3 cursor-pointer w-full">
        <div className="bg-blue-50 p-2 rounded-lg">
         <img src={RazorPayIcon} alt="Razorpay" style={{ width: '100px' }} className="w-8 h-8"/>
        </div>
        <div>
          <p className="font-medium text-gray-800">Razorpay</p>
          <p className="text-sm text-gray-500">Credit/Debit Cards, UPI, Netbanking</p>
        </div>
      </label>
    </div>
    
    {/* UPI Option */}
    <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:border-rose-300 transition-colors">
      <input
        type="radio"
        id="upi"
        name="payment"
        value="upi"
        className="text-rose-600 border-2 border-rose-300 focus:ring-rose-200"
      />
      <label htmlFor="upi" className="flex items-center space-x-3 cursor-pointer w-full">
        <div className="bg-purple-50 p-2 rounded-lg">
         <img src={Upi} style={{ width: '100px' }} className="w-8 h-8"></img>
        </div>
        <div>
          <p className="font-medium text-gray-800">UPI</p>
          <p className="text-sm text-gray-500">Google Pay, PhonePe, Paytm, BHIM</p>
        </div>
      </label>
    </div>
    
    {/* Cash on Delivery Option */}
    <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:border-rose-300 transition-colors">
      <input
        type="radio"
        id="cod"
        name="payment"
        value="cod"
        className="text-rose-600 border-2 border-rose-300 focus:ring-rose-200"
      />
      <label htmlFor="cod" className="flex items-center space-x-3 cursor-pointer w-full">
        <div className="bg-green-50 p-2 rounded-lg">
            <img src={Cod} style={{ width: '100px' }} className="w-8 h-8"></img>
        </div>
        <div>
          <p className="font-medium text-gray-800">Cash on Delivery</p>
          <p className="text-sm text-gray-500">Pay when you receive your order</p>
        </div>
      </label>
    </div>
    {/* Terms and Conditions */}
      <div className="mb-6">
        <div className="p-6 space-y-4 bg-white  border-rose-200 rounded-xl shadow-sm">
          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              id="terms"
              className="text-rose-600 border-2 border-rose-300 rounded mt-1 focus:ring-rose-200"
              required
            />
            <label htmlFor="terms" className="text-sm cursor-pointer">
              I agree to the{" "}
              <Link to="#" className="text-rose-600 hover:underline font-medium">
                terms and conditions
              </Link>{" "}
              of this celebration booking
            </label>
          </div>

          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              id="offers"
              className="text-rose-600 border-2 border-rose-300 rounded mt-1 focus:ring-rose-200"
            />
            <label htmlFor="offers" className="text-sm cursor-pointer">
              Yes! I want to receive exclusive celebration offers and updates 💌
            </label>
          </div>
        </div>
      </div>
  </div>
   
</div>

{/* Submit Button */}
<button
  type="submit"
  className="w-full py-4 text-lg rounded-xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.01] flex items-center justify-center gap-2"
>
  <Sparkles className="h-5 w-5"  />
  Complete Your Celebration Booking
  <Sparkles className="h-5 w-5" />
</button>
    </form>
  );
};