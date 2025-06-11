// import { ArrowLeft, Gift, NotebookIcon as Lotus, Info, Calendar, Clock, MapPin, Sparkles, PartyPopper, Heart, Navigation, Home, Flag } from "lucide-react";
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { ChevronDown, ChevronUp } from 'lucide-react';
// import { User, Phone, Mail } from "lucide-react";
// import RazorPayIcon from '../../assets/payment/razorpay-icon (1).svg';
// import Upi from '../../assets/payment/upi.svg';
// import Cod from '../../assets/payment/reshot-icon-cash-on-delivery-5UB8T6KGXR.svg';
// import { useCart } from '../../hooks/cartHook';
// import { placeOrder } from "../../services/decoration-orders/order-api";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { updateRequestStatus } from "../../services/customized-products/customized-api-service";


// export const UserOrderCustomDetails = ({ cartItems = [], currencySymbol, userData }) => {
//     const [isOpen2, setIsOpen2] = useState(false);
//     const [isOpen1, setIsOpen1] = useState(false);
//     const { cart, clearCart } = useCart();
//     const navigate = useNavigate();

//     // State for input fields
//     const [username, setUsername] = useState(userData?.username || '');
//     const [contactNumber, setContactNumber] = useState(userData?.mobile || '');
//     const [email, setEmail] = useState(userData?.email || '');
//     const [aptSuite, setAptSuite] = useState(userData?.address || '');
//     const [streetAddress, setStreetAddress] = useState(userData?.address || '');
//     const [city, setCity] = useState(userData?.city || '');
//     const [zipCode, setZipCode] = useState(userData?.pincode || '');
//     const [country, setCountry] = useState(userData?.country || '');
//     const [specialNote, setSpecialNote] = useState('');
//     const [paymentMethod, setPaymentMethod] = useState("COD");
//     const [customProductID, setCustomProductID] = useState('000');

//     function getID() {
//         if (cartItems.length > 0) {
//             // Example: take the product_id of the first item
//             setCustomProductID(cartItems[0]._id
//             );
//         }
//     }

//     useEffect(() => {
//         if (cartItems.length > 0) {
//             getID();
//         }
//     }, [cartItems]);
//     console.log(customProductID, cartItems)

//     const transformToOrderSchema = () => {

//         const totalAmount = cartItems.reduce(
//             (sum, item) => sum + (item.final_price * (item.quantity || 1)),
//             0
//         );



//         const orderData = {
//             userDetails: {
//                 userId: userData._id,
//                 username: username,
//                 contactNumber: contactNumber,
//                 email: email
//             },
//             addressDetails: {
//                 home_address: aptSuite,
//                 street_address: streetAddress,
//                 city_address: city,
//                 pincode: zipCode
//             },
//             productDetails: cartItems.map(item => ({
//                 productId: item.product_id,
//                 productName: item.name,
//                 amount: item.final_price,
//                 quantity: 1
//             })),
//             paymentDetails: {
//                 totalAmount: totalAmount,
//                 transactionId: null,
//                 transactionStatus: 'pending',
//                 transactionDate: null,
//                 paymentMethodType: paymentMethod,
//             },
//             orderDetails: {
//                 order_status: 'processing',
//                 order_requested_date: new Date().toISOString().split('T')[0],
//                 order_requested_time: new Date().toTimeString().split(' ')[0],
//                 products: cartItems.map(item => ({
//                     productId: item.product_id,
//                     quantity: 1
//                 })),
//                 lastUpdated: new Date()
//             },
//             deliveryNotes: `Service requested for ${cartItems[0]?.service_date} between ${cartItems[0]?.service_time}`,
//             discountApplied: 0,
//             shippingMethod: 'Standard Delivery'
//         };

//         return orderData;
//     };


//      const validateFields = () => {
//             const requiredFields = {
//                 username: username.trim(),
//                 contactNumber: contactNumber.trim(),
//                 email: email.trim(),
//                 aptSuite: aptSuite.trim(),
//                 streetAddress: streetAddress.trim(),
//                 city: city.trim(),
//                 zipCode: zipCode.trim(),
//                 country: country.trim()
//             };
    
//             const missingFields = Object.entries(requiredFields)
//                 .filter(([key, value]) => !value)
//                 .map(([key]) => key);
    
//             if (missingFields.length > 0) {
//                 toast.error(`Please fill in all required fields: ${missingFields.join(', ')}`);
//                 return false;
//             }
    
//             // Validate email format
//             const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//             if (!emailRegex.test(email)) {
//                 toast.error('Please enter a valid email address');
//                 return false;
//             }
    
//             // Validate phone number (basic check for at least 10 digits)
//             const phoneRegex = /^\d{10,}$/;
//             if (!phoneRegex.test(contactNumber)) {
//                 toast.error('Please enter a valid contact number (at least 10 digits)');
//                 return false;
//             }
    
//             return true;
//         };
    
        
//     const handlePlaceOrder = async (event) => {
//         event.preventDefault();
//          if (!validateFields()) {
//             return;
//         }
//         const orderData = transformToOrderSchema();

//         try {
//             if (paymentMethod === "razorpay") {
//                 const response = await placeOrder(orderData);
//                 const { order, razorpayOrderId } = response.data;

//                 const options = {
//                     key: import.meta.env.VITE_RAZORPAY_KEY,
//                     amount: orderData.paymentDetails.totalAmount * 100,
//                     currency: "INR",
//                     name: "A4 CELEBRATION",
//                     description: "Order Payment",
//                     order_id: razorpayOrderId,
//                     handler: async function (response) {
//                         try {
//                             const verificationResponse = await axios.post(
//                                 `${API_URL}orders/verify-payment`,
//                                 {
//                                     order_id: order.order_id,
//                                     razorpayOrderId,
//                                     payment_id: response.razorpay_payment_id,
//                                     signature: response.razorpay_signature,
//                                 },
//                                 {
//                                     headers: {
//                                         Authorization: API_KEY,
//                                     },
//                                 }
//                             );

//                             if (verificationResponse.data.status === 'success') {
//                                 await updateRequestStatus(customProductID, { status: 'confirmed' });

//                                 toast.success("Payment Successful. Order Confirmed.");
//                                 setTimeout(() => {
//                                     clearCart(userData._id);
//                                     navigate(`/order/${order.order_id}`);
//                                 }, 2000);
//                             }
//                         } catch (error) {
//                             toast.error("Payment failed");
//                             console.error('Payment verification failed:', error);
//                             alert(error.response?.data?.message || 'Payment verification failed. Please contact support.');
//                         }
//                     },
//                     prefill: { name: username, email, contact: contactNumber },
//                     theme: { color: "#F37254" },
//                     modal: {
//                         ondismiss: function () {
//                             alert('Payment window closed. Your order is not confirmed.');
//                         },
//                     },
//                 };

//                 const razorpay = new window.Razorpay(options);
//                 razorpay.open();
//             } else {
//                 const response = await placeOrder(orderData);
//                 const order = response.data.order;

//                 await updateRequestStatus(customProductID, { status: 'confirmed' });

//                 toast.success("Order placed successfully with Cash on Delivery.");
//                 clearCart(userData._id);
//                 navigate(`/order/${order.order_id}`);
//             }
//         } catch (error) {
//             console.error('Order failed:', error);
//             alert('Order placement failed. Please try again.');
//         }
//     };



//     return (
//         < form className="space-y-6" onSubmit={handlePlaceOrder}>
//             <ToastContainer />
//             {/* Customer Details */}
//             <div className="border-2 border-amber-200 rounded-xl shadow-lg bg-white overflow-hidden">
//                 <div
//                     className="bg-gradient-to-r from-amber-100 to-amber-100 border-b border-amber-200 p-4 cursor-pointer"
//                     onClick={() => setIsOpen1(!isOpen1)}
//                 >
//                     <h2 className="text-amber-800 flex items-center justify-between gap-2 font-playfair text-lg">
//                         <span className="flex items-center gap-2">
//                             <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-600 text-white text-sm">
//                                 1
//                             </span>
//                             Your Celebration Details ✨
//                         </span>
//                         {isOpen1 ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
//                     </h2>
//                 </div>

//                 {/* Summary view when closed */}
//                 {!isOpen1 && (
//                     <div className="p-4 bg-amber-10">
//                         <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-amber-800">
//                             <div className="flex items-center gap-2">
//                                 <User className="h-4 w-4 text-amber-600" />
//                                 <span className="font-medium">Name:</span>
//                                 <span>{username || 'Not provided'}</span>
//                             </div>
//                             <div className="flex items-center gap-2">
//                                 <Phone className="h-4 w-4 text-amber-600" />
//                                 <span className="font-medium">Phone:</span>
//                                 <span>{contactNumber || 'Not provided'}</span>
//                             </div>
//                             <div className="flex items-center gap-2">
//                                 <Mail className="h-4 w-4 text-amber-600" />
//                                 <span className="font-medium">Email:</span>
//                                 <span>{email || 'Not provided'}</span>
//                             </div>
//                         </div>
//                     </div>
//                 )}

//                 {isOpen1 && (
//                     <div className="p-6 space-y-4">
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                             <div className="space-y-2">
//                                 <label htmlFor="username" className="text-amber-800 font-medium">
//                                     Full Name <span className="text-amber-500">*</span>
//                                 </label>
//                                 <input
//                                     id="username"
//                                     name="username"
//                                     className="w-full border-2 border-amber-200 rounded-lg p-3 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
//                                     required
//                                     placeholder="Your beautiful name"
//                                     value={username}
//                                     onChange={(e) => setUsername(e.target.value)}
//                                 />
//                             </div>
//                             <div className="space-y-2">
//                                 <label htmlFor="contactNumber" className="text-amber-800 font-medium">
//                                     Phone <span className="text-amber-500">*</span>
//                                 </label>
//                                 <input
//                                     id="contactNumber"
//                                     name="contactNumber"
//                                     className="w-full border-2 border-amber-200 rounded-lg p-3 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
//                                     required
//                                     placeholder="Where we can reach you"
//                                     value={contactNumber}
//                                     onChange={(e) => setContactNumber(e.target.value)}
//                                 />
//                             </div>
//                         </div>

//                         <div className="space-y-2">
//                             <label htmlFor="email" className="text-amber-800 font-medium">
//                                 Email Address <span className="text-amber-500">*</span>
//                             </label>
//                             <input
//                                 id="email"
//                                 name="email"
//                                 type="email"
//                                 className="w-full border-2 border-amber-200 rounded-lg p-3 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
//                                 required
//                                 placeholder="For booking confirmation 💌"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                             />
//                         </div>
//                     </div>
//                 )}
//             </div>

//             {/* Shipping Address */}
//             <div className="border-2 border-amber-200 rounded-xl shadow-lg bg-white overflow-hidden">
//                 <div
//                     className="bg-gradient-to-r from-amber-100 to-amber-100 border-b border-amber-200 p-4 cursor-pointer"
//                     onClick={() => setIsOpen2(!isOpen2)}
//                 >
//                     <h2 className="text-amber-800 flex items-center justify-between gap-2 font-playfair text-lg">
//                         <span className="flex items-center gap-2">
//                             <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-600 text-white text-sm">
//                                 2
//                             </span>
//                             Celebration Venue 🏡
//                         </span>
//                         {isOpen2 ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
//                     </h2>
//                 </div>

//                 {!isOpen2 && (
//                     <div className="p-4 bg-amber-10">
//                         <div className="space-y-3 text-sm text-amber-800">
//                             <div className="flex items-start gap-2">
//                                 <Home className="h-4 w-4 mt-0.5 text-amber-600 flex-shrink-0" />
//                                 <div>
//                                     <p className="font-medium">Address</p>
//                                     <p className="text-amber-700">
//                                         {aptSuite || 'Not provided'}
//                                         {city && `, ${city}`}
//                                         {zipCode && `, ${zipCode}`}
//                                     </p>
//                                 </div>
//                             </div>

//                             {country && (
//                                 <div className="flex items-center gap-2">
//                                     <Flag className="h-4 w-4 text-amber-600" />
//                                     <span className="font-medium">Country:</span>
//                                     <span>{country}</span>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 )}

//                 {isOpen2 && (
//                     <div className="p-6 space-y-4">
//                         <div className="flex items-center gap-2 mb-4">
//                             <MapPin className="h-5 w-5 text-amber-600" />
//                             <p className="text-sm text-amber-800">Where should we bring the celebration magic?</p>
//                         </div>

//                         <div className="space-y-2">
//                             <label htmlFor="aptSuite" className="text-amber-800 font-medium">
//                                 Apt/Suite/Building <span className="text-amber-500">*</span>
//                             </label>
//                             <input
//                                 id="aptSuite"
//                                 name="aptSuite"
//                                 className="w-full border-2 border-amber-200 rounded-lg p-3 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
//                                 required
//                                 placeholder="Your celebration spot"
//                                 value={aptSuite}
//                                 onChange={(e) => setAptSuite(e.target.value)}
//                             />
//                         </div>

//                         <div className="space-y-2">
//                             <label htmlFor="streetAddress" className="text-amber-800 font-medium">
//                                 Street Address <span className="text-amber-500">*</span>
//                             </label>
//                             <input
//                                 id="streetAddress"
//                                 name="streetAddress"
//                                 className="w-full border-2 border-amber-200 rounded-lg p-3 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
//                                 required
//                                 placeholder="Where the party's at!"
//                                 value={streetAddress}
//                                 onChange={(e) => setStreetAddress(e.target.value)}
//                             />
//                         </div>

//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                             <div className="space-y-2">
//                                 <label htmlFor="city" className="text-amber-800 font-medium">
//                                     City/Town <span className="text-amber-500">*</span>
//                                 </label>
//                                 <input
//                                     id="city"
//                                     name="city"
//                                     className="w-full border-2 border-amber-200 rounded-lg p-3 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
//                                     required
//                                     placeholder="Your city of joy"
//                                     value={city}
//                                     onChange={(e) => setCity(e.target.value)}
//                                 />
//                             </div>
//                             <div className="space-y-2">
//                                 <label htmlFor="zipCode" className="text-amber-800 font-medium">
//                                     Zip/Postal Code <span className="text-amber-500">*</span>
//                                 </label>
//                                 <input
//                                     id="zipCode"
//                                     name="zipCode"
//                                     className="w-full border-2 border-amber-200 rounded-lg p-3 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
//                                     required
//                                     placeholder="Postal code"
//                                     value={zipCode}
//                                     onChange={(e) => setZipCode(e.target.value)}
//                                 />
//                             </div>
//                         </div>

//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                             <div className="space-y-2">
//                                 <label htmlFor="country" className="text-amber-800 font-medium">
//                                     Country <span className="text-amber-500">*</span>
//                                 </label>
//                                 <input
//                                     id="country"
//                                     name="country"
//                                     className="w-full border-2 border-amber-200 rounded-lg p-3 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
//                                     required
//                                     placeholder="Your country"
//                                     value={country}
//                                     onChange={(e) => setCountry(e.target.value)}
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>

//             {/* Special Notes */}
//             <div className="border-2 border-amber-200 rounded-xl shadow-lg bg-white overflow-hidden">
//                 <div className="bg-gradient-to-r from-amber-100 to-amber-100 border-b border-amber-200 p-4">
//                     <h2 className="text-amber-800 flex items-center gap-2 font-playfair text-lg">
//                         <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-600 text-white text-sm">
//                             3
//                         </span>
//                         Special Celebration Wishes 💫
//                     </h2>
//                 </div>
//                 <div className="p-6">
//                     <div className="space-y-2">
//                         <textarea
//                             id="specialNote"
//                             name="specialNote"
//                             className="w-full border-2 border-amber-200 rounded-lg p-3 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 outline-none transition-all min-h-[120px]"
//                             placeholder="Tell us about your celebration dreams, special rituals, or anything we should know to make it perfect..."
//                             value={specialNote}
//                             onChange={(e) => setSpecialNote(e.target.value)}
//                         />
//                     </div>
//                 </div>
//             </div>

//             {/* Payment Method Selection */}
//             <div className="mb-6">
//                 <div className="p-6 space-y-4 bg-white border-2 border-amber-200 rounded-xl shadow-sm">
//                     <h3 className="text-lg font-semibold text-gray-800">Select Payment Method</h3>

//                     {/* Razorpay Option */}
//                     <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:border-amber-300 transition-colors">
//                         <input
//                             type="radio"
//                             id="razorpay"
//                             name="payment"
//                             value="razorpay"
//                             checked={paymentMethod === "razorpay"}
//                             onChange={() => setPaymentMethod("razorpay")}
//                             className="text-amber-600 border-2 border-amber-300 focus:ring-amber-200"
//                         />
//                         <label htmlFor="razorpay" className="flex items-center space-x-3 cursor-pointer w-full">
//                             <div className="bg-blue-50 p-2 rounded-lg">
//                                 <img src={RazorPayIcon} alt="Razorpay" style={{ width: '100px' }} className="w-8 h-8" />
//                             </div>
//                             <div>
//                                 <p className="font-medium text-gray-800">Razorpay</p>
//                                 <p className="text-sm text-gray-500">Credit/Debit Cards, UPI, Netbanking</p>
//                             </div>
//                         </label>
//                     </div>

//                     {/* UPI Option */}
//                     <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:border-amber-300 transition-colors">
//                         <input
//                             type="radio"
//                             id="upi"
//                             name="payment"
//                             value="upi"
//                             checked={paymentMethod === "upi"}
//                             onChange={() => setPaymentMethod("upi")}
//                             className="text-amber-600 border-2 border-amber-300 focus:ring-amber-200"
//                         />
//                         <label htmlFor="upi" className="flex items-center space-x-3 cursor-pointer w-full">
//                             <div className="bg-purple-50 p-2 rounded-lg">
//                                 <img src={Upi} style={{ width: '100px' }} className="w-8 h-8" />
//                             </div>
//                             <div>
//                                 <p className="font-medium text-gray-800">UPI</p>
//                                 <p className="text-sm text-gray-500"> Google Pay, PhonePe, Paytm, BHIM</p>
//                             </div>
//                         </label>
//                     </div>

//                     {/* Cash on Delivery Option */}
//                     <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:border-amber-300 transition-colors">
//                         <input
//                             type="radio"
//                             id="cod"
//                             name="payment"
//                             value="cod"
//                             checked={paymentMethod === "cod"}
//                             onChange={() => setPaymentMethod("cod")}
//                             className="text-amber-600 border-2 border-amber-300 focus:ring-amber-200"
//                         />
//                         <label htmlFor="cod" className="flex items-center space-x-3 cursor-pointer w-full">
//                             <div className="bg-green-50 p-2 rounded-lg">
//                                 <img src={Cod} style={{ width: '100px' }} className="w-8 h-8" />
//                             </div>
//                             <div>
//                                 <p className="font-medium text-gray-800">Cash on Delivery</p>
//                                 <p className="text-sm text-gray-500">Pay when you receive your order</p>
//                             </div>
//                         </label>
//                     </div>

//                     {/* Terms and Conditions */}
//                     <div className="mb-6">
//                         <div className="p-6 space-y-4 bg-white border-amber-200 rounded-xl shadow-sm">
//                             <div className="flex items-start space-x-2">
//                                 <input
//                                     type="checkbox"
//                                     id="terms"
//                                     className="text-amber-600 border-2 border-amber-300 rounded mt-1 focus:ring-amber-200"
//                                     required
//                                 />
//                                 <label htmlFor="terms" className="text-sm cursor-pointer">
//                                     I agree to the{" "}
//                                     <Link to="#" className="text-amber-600 hover:underline font-medium">
//                                         terms and conditions
//                                     </Link>{" "}
//                                     of this celebration booking
//                                 </label>
//                             </div>

//                             <div className="flex items-start space-x-2">
//                                 <input
//                                     type="checkbox"
//                                     id="offers"
//                                     className="text-amber-600 border-2 border-amber-300 rounded mt-1 focus:ring-amber-200"
//                                 />
//                                 <label htmlFor="offers" className="text-sm cursor-pointer">
//                                     Yes! I want to receive exclusive celebration offers and updates 💌
//                                 </label>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Submit Button */}
//             <button
//                 type="submit"
//                 className="w-full py-4 text-lg rounded-xl font-bold bg-gradient-to-r from-amber-500 to-amber-500 hover:from-amber-600 hover:to-amber-600 text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.01] flex items-center justify-center gap-2"
//             >
//                 <Sparkles className="h-5 w-5" />
//                 Complete Your Celebration Booking
//                 <Sparkles className="h-5 w-5" />
//             </button>
//         </form>
//     );
// };

import { ArrowLeft, Gift, NotebookIcon as Lotus, Info, Calendar, Clock, MapPin, Sparkles, PartyPopper, Heart, Navigation, Home, Flag } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, ChevronUp } from 'lucide-react';
import { User, Phone, Mail } from "lucide-react";
import RazorPayIcon from '../../assets/payment/razorpay-icon (1).svg';
import Upi from '../../assets/payment/upi.svg';
import Cod from '../../assets/payment/reshot-icon-cash-on-delivery-5UB8T6KGXR.svg';
import { useCart } from '../../hooks/cartHook';
import { placeOrder } from "../../services/decoration-orders/order-api";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateRequestStatus } from "../../services/customized-products/customized-api-service";

// Security validation functions
const validateUsername = (username) => {
  // Only allow letters, spaces, and basic punctuation (.,'-)
  const regex = /^[a-zA-Z\s.,'-]+$/;
  return regex.test(username) && username.length <= 100;
};

const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email) && email.length <= 100;
};

const validatePhone = (phone) => {
  // Basic phone number validation (10-15 digits)
  const regex = /^\d{10,15}$/;
  return regex.test(phone);
};

const validateAddress = (address) => {
  // Allow letters, numbers, spaces, and basic punctuation
  const regex = /^[a-zA-Z0-9\s.,'-/]+$/;
  return regex.test(address) && address.length <= 200;
};

const validateCity = (city) => {
  const regex = /^[a-zA-Z\s-]+$/;
  return regex.test(city) && city.length <= 50;
};

const validateZipCode = (zip) => {
  const regex = /^\d{4,10}$/;
  return regex.test(zip);
};

const validateCountry = (country) => {
  const regex = /^[a-zA-Z\s-]+$/;
  return regex.test(country) && country.length <= 50;
};

const validateSpecialNote = (note) => {
  // Allow letters, numbers, spaces, and basic punctuation
  // Strip any HTML tags before checking
  const strippedNote = note.replace(/<[^>]*>?/gm, '');
  return strippedNote.length <= 500;
};

const sanitizeInput = (input) => {
  // Basic HTML/JS injection prevention
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
};

export const UserOrderCustomDetails = ({ cartItems = [], currencySymbol, userData }) => {
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const { cart, clearCart } = useCart();
    const navigate = useNavigate();

    // State for input fields with sanitization
    const [username, setUsername] = useState(userData?.username || '');
    const [contactNumber, setContactNumber] = useState(userData?.mobile || '');
    const [email, setEmail] = useState(userData?.email || '');
    const [aptSuite, setAptSuite] = useState(userData?.address || '');
    const [streetAddress, setStreetAddress] = useState(userData?.address || '');
    const [city, setCity] = useState(userData?.city || '');
    const [zipCode, setZipCode] = useState(userData?.pincode || '');
    const [country, setCountry] = useState(userData?.country || '');
    const [specialNote, setSpecialNote] = useState('');
    const [paymentMethod, setPaymentMethod] = useState("COD");
    const [customProductID, setCustomProductID] = useState('000');

    function getID() {
        if (cartItems.length > 0) {
            setCustomProductID(cartItems[0]._id);
        }
    }

    useEffect(() => {
        if (cartItems.length > 0) {
            getID();
        }
    }, [cartItems]);

    const transformToOrderSchema = () => {
        const totalAmount = cartItems.reduce(
            (sum, item) => sum + (item.final_price * (item.quantity || 1)),
            0
        );

        const orderData = {
            userDetails: {
                userId: userData._id,
                username: username,
                contactNumber: contactNumber,
                email: email
            },
            addressDetails: {
                home_address: aptSuite,
                street_address: streetAddress,
                city_address: city,
                pincode: zipCode
            },
            productDetails: cartItems.map(item => ({
                productId: item.product_id,
                productName: item.name,
                amount: item.final_price,
                quantity: 1
            })),
            paymentDetails: {
                totalAmount: totalAmount,
                transactionId: null,
                transactionStatus: 'pending',
                transactionDate: null,
                paymentMethodType: paymentMethod,
            },
            orderDetails: {
                order_status: 'processing',
                order_requested_date: new Date().toISOString().split('T')[0],
                order_requested_time: new Date().toTimeString().split(' ')[0],
                products: cartItems.map(item => ({
                    productId: item.product_id,
                    quantity: 1
                })),
                lastUpdated: new Date()
            },
            deliveryNotes: `Service requested for ${cartItems[0]?.service_date} between ${cartItems[0]?.service_time}`,
            discountApplied: 0,
            shippingMethod: 'Standard Delivery'
        };

        return orderData;
    };

    const validateFields = () => {
        const requiredFields = {
            username: username.trim(),
            contactNumber: contactNumber.trim(),
            email: email.trim(),
            aptSuite: aptSuite.trim(),
            streetAddress: streetAddress.trim(),
            city: city.trim(),
            zipCode: zipCode.trim(),
            country: country.trim()
        };

        // Check for empty required fields
        const missingFields = Object.entries(requiredFields)
            .filter(([key, value]) => !value)
            .map(([key]) => key);

        if (missingFields.length > 0) {
            toast.error(`Please fill in all required fields: ${missingFields.join(', ')}`);
            return false;
        }

        // Validate each field with security checks
        if (!validateUsername(username)) {
            toast.error('Please enter a valid name (only letters, spaces, and basic punctuation)');
            return false;
        }

        if (!validateEmail(email)) {
            toast.error('Please enter a valid email address');
            return false;
        }

        if (!validatePhone(contactNumber)) {
            toast.error('Please enter a valid contact number (10-15 digits only)');
            return false;
        }

        if (!validateAddress(aptSuite)) {
            toast.error('Please enter a valid address (no special characters)');
            return false;
        }

        if (!validateAddress(streetAddress)) {
            toast.error('Please enter a valid street address (no special characters)');
            return false;
        }

        if (!validateCity(city)) {
            toast.error('Please enter a valid city name (letters and spaces only)');
            return false;
        }

        if (!validateZipCode(zipCode)) {
            toast.error('Please enter a valid zip code (4-10 digits only)');
            return false;
        }

        if (!validateCountry(country)) {
            toast.error('Please enter a valid country name (letters and spaces only)');
            return false;
        }

        if (specialNote && !validateSpecialNote(specialNote)) {
            toast.error('Special note contains invalid characters or is too long (max 500 characters)');
            return false;
        }

        return true;
    };
        
    const handlePlaceOrder = async (event) => {
        event.preventDefault();
        if (!validateFields()) {
            return;
        }
        
        // Sanitize all inputs before processing
        const sanitizedData = {
            username: sanitizeInput(username),
            contactNumber: sanitizeInput(contactNumber),
            email: sanitizeInput(email),
            aptSuite: sanitizeInput(aptSuite),
            streetAddress: sanitizeInput(streetAddress),
            city: sanitizeInput(city),
            zipCode: sanitizeInput(zipCode),
            country: sanitizeInput(country),
            specialNote: sanitizeInput(specialNote)
        };

        const orderData = transformToOrderSchema();
        
        // Update order data with sanitized values
        orderData.userDetails = {
            ...orderData.userDetails,
            username: sanitizedData.username,
            contactNumber: sanitizedData.contactNumber,
            email: sanitizedData.email
        };
        
        orderData.addressDetails = {
            ...orderData.addressDetails,
            home_address: sanitizedData.aptSuite,
            street_address: sanitizedData.streetAddress,
            city_address: sanitizedData.city,
            pincode: sanitizedData.zipCode
        };

        try {
            if (paymentMethod === "razorpay") {
                const response = await placeOrder(orderData);
                const { order, razorpayOrderId } = response.data;

                const options = {
                    key: import.meta.env.VITE_RAZORPAY_KEY,
                    amount: orderData.paymentDetails.totalAmount * 100,
                    currency: "INR",
                    name: "A4 CELEBRATION",
                    description: "Order Payment",
                    order_id: razorpayOrderId,
                    handler: async function (response) {
                        try {
                            const verificationResponse = await axios.post(
                                `${API_URL}orders/verify-payment`,
                                {
                                    order_id: order.order_id,
                                    razorpayOrderId,
                                    payment_id: response.razorpay_payment_id,
                                    signature: response.razorpay_signature,
                                },
                                {
                                    headers: {
                                        Authorization: API_KEY,
                                    },
                                }
                            );

                            if (verificationResponse.data.status === 'success') {
                                await updateRequestStatus(customProductID, { status: 'confirmed' });
                                toast.success("Payment Successful. Order Confirmed.");
                                setTimeout(() => {
                                    clearCart(userData._id);
                                    navigate(`/order/${order.order_id}`);
                                }, 2000);
                            }
                        } catch (error) {
                            toast.error("Payment failed");
                            console.error('Payment verification failed:', error);
                            alert(error.response?.data?.message || 'Payment verification failed. Please contact support.');
                        }
                    },
                    prefill: { 
                        name: sanitizedData.username, 
                        email: sanitizedData.email, 
                        contact: sanitizedData.contactNumber 
                    },
                    theme: { color: "#F37254" },
                    modal: {
                        ondismiss: function () {
                            alert('Payment window closed. Your order is not confirmed.');
                        },
                    },
                };

                const razorpay = new window.Razorpay(options);
                razorpay.open();
            } else {
                const response = await placeOrder(orderData);
                const order = response.data.order;

                await updateRequestStatus(customProductID, { status: 'confirmed' });
                toast.success("Order placed successfully with Cash on Delivery.");
                clearCart(userData._id);
                navigate(`/order/${order.order_id}`);
            }
        } catch (error) {
            console.error('Order failed:', error);
            toast.error('Order placement failed. Please try again.');
        }
    };

    // Helper function to handle input changes with validation
    const handleInputChange = (e, validator, setter, fieldName) => {
        const value = e.target.value;
        if (validator(value)) {
            setter(value);
        } else {
            toast.error(`Invalid input for ${fieldName}`);
        }
    };

    return (
        <form className="space-y-6" onSubmit={handlePlaceOrder}>
            <ToastContainer />
            {/* Customer Details */}
            <div className="border-2 border-amber-200 rounded-xl shadow-lg bg-white overflow-hidden">
                <div
                    className="bg-gradient-to-r from-amber-100 to-amber-100 border-b border-amber-200 p-4 cursor-pointer"
                    onClick={() => setIsOpen1(!isOpen1)}
                >
                    <h2 className="text-amber-800 flex items-center justify-between gap-2 font-playfair text-lg">
                        <span className="flex items-center gap-2">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-600 text-white text-sm">
                                1
                            </span>
                            Your Celebration Details ✨
                        </span>
                        {isOpen1 ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                    </h2>
                </div>

                {/* Summary view when closed */}
                {!isOpen1 && (
                    <div className="p-4 bg-amber-10">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-amber-800">
                            <div className="flex items-center gap-2">
                                <User className="h-4 w-4 text-amber-600" />
                                <span className="font-medium">Name:</span>
                                <span>{username || 'Not provided'}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-amber-600" />
                                <span className="font-medium">Phone:</span>
                                <span>{contactNumber || 'Not provided'}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-amber-600" />
                                <span className="font-medium">Email:</span>
                                <span>{email || 'Not provided'}</span>
                            </div>
                        </div>
                    </div>
                )}

                {isOpen1 && (
                    <div className="p-6 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="username" className="text-amber-800 font-medium">
                                    Full Name <span className="text-amber-500">*</span>
                                </label>
                                <input
                                    id="username"
                                    name="username"
                                    className="w-full border-2 border-amber-200 rounded-lg p-3 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                                    required
                                    placeholder="Your beautiful name"
                                    value={username}
                                    onChange={(e) => handleInputChange(e, validateUsername, setUsername, 'name')}
                                    maxLength="100"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="contactNumber" className="text-amber-800 font-medium">
                                    Phone <span className="text-amber-500">*</span>
                                </label>
                                <input
                                    id="contactNumber"
                                    name="contactNumber"
                                    type="tel"
                                    className="w-full border-2 border-amber-200 rounded-lg p-3 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                                    required
                                    placeholder="Where we can reach you"
                                    value={contactNumber}
                                    onChange={(e) => handleInputChange(e, validatePhone, setContactNumber, 'phone number')}
                                    maxLength="15"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-amber-800 font-medium">
                                Email Address <span className="text-amber-500">*</span>
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className="w-full border-2 border-amber-200 rounded-lg p-3 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                                required
                                placeholder="For booking confirmation 💌"
                                value={email}
                                onChange={(e) => handleInputChange(e, validateEmail, setEmail, 'email')}
                                maxLength="100"
                            />
                        </div>
                    </div>
                )}
            </div>

            {/* Shipping Address */}
            <div className="border-2 border-amber-200 rounded-xl shadow-lg bg-white overflow-hidden">
                <div
                    className="bg-gradient-to-r from-amber-100 to-amber-100 border-b border-amber-200 p-4 cursor-pointer"
                    onClick={() => setIsOpen2(!isOpen2)}
                >
                    <h2 className="text-amber-800 flex items-center justify-between gap-2 font-playfair text-lg">
                        <span className="flex items-center gap-2">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-600 text-white text-sm">
                                2
                            </span>
                            Celebration Venue 🏡
                        </span>
                        {isOpen2 ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                    </h2>
                </div>

                {!isOpen2 && (
                    <div className="p-4 bg-amber-10">
                        <div className="space-y-3 text-sm text-amber-800">
                            <div className="flex items-start gap-2">
                                <Home className="h-4 w-4 mt-0.5 text-amber-600 flex-shrink-0" />
                                <div>
                                    <p className="font-medium">Address</p>
                                    <p className="text-amber-700">
                                        {aptSuite || 'Not provided'}
                                        {city && `, ${city}`}
                                        {zipCode && `, ${zipCode}`}
                                    </p>
                                </div>
                            </div>

                            {country && (
                                <div className="flex items-center gap-2">
                                    <Flag className="h-4 w-4 text-amber-600" />
                                    <span className="font-medium">Country:</span>
                                    <span>{country}</span>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {isOpen2 && (
                    <div className="p-6 space-y-4">
                        <div className="flex items-center gap-2 mb-4">
                            <MapPin className="h-5 w-5 text-amber-600" />
                            <p className="text-sm text-amber-800">Where should we bring the celebration magic?</p>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="aptSuite" className="text-amber-800 font-medium">
                                Apt/Suite/Building <span className="text-amber-500">*</span>
                            </label>
                            <input
                                id="aptSuite"
                                name="aptSuite"
                                className="w-full border-2 border-amber-200 rounded-lg p-3 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                                required
                                placeholder="Your celebration spot"
                                value={aptSuite}
                                onChange={(e) => handleInputChange(e, validateAddress, setAptSuite, 'address')}
                                maxLength="200"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="streetAddress" className="text-amber-800 font-medium">
                                Street Address <span className="text-amber-500">*</span>
                            </label>
                            <input
                                id="streetAddress"
                                name="streetAddress"
                                className="w-full border-2 border-amber-200 rounded-lg p-3 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                                required
                                placeholder="Where the party's at!"
                                value={streetAddress}
                                onChange={(e) => handleInputChange(e, validateAddress, setStreetAddress, 'street address')}
                                maxLength="200"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="city" className="text-amber-800 font-medium">
                                    City/Town <span className="text-amber-500">*</span>
                                </label>
                                <input
                                    id="city"
                                    name="city"
                                    className="w-full border-2 border-amber-200 rounded-lg p-3 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                                    required
                                    placeholder="Your city of joy"
                                    value={city}
                                    onChange={(e) => handleInputChange(e, validateCity, setCity, 'city')}
                                    maxLength="50"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="zipCode" className="text-amber-800 font-medium">
                                    Zip/Postal Code <span className="text-amber-500">*</span>
                                </label>
                                <input
                                    id="zipCode"
                                    name="zipCode"
                                    type="text"
                                    className="w-full border-2 border-amber-200 rounded-lg p-3 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                                    required
                                    placeholder="Postal code"
                                    value={zipCode}
                                    onChange={(e) => handleInputChange(e, validateZipCode, setZipCode, 'zip code')}
                                    maxLength="10"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="country" className="text-amber-800 font-medium">
                                    Country <span className="text-amber-500">*</span>
                                </label>
                                <input
                                    id="country"
                                    name="country"
                                    className="w-full border-2 border-amber-200 rounded-lg p-3 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                                    required
                                    placeholder="Your country"
                                    value={country}
                                    onChange={(e) => handleInputChange(e, validateCountry, setCountry, 'country')}
                                    maxLength="50"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Special Notes */}
            <div className="border-2 border-amber-200 rounded-xl shadow-lg bg-white overflow-hidden">
                <div className="bg-gradient-to-r from-amber-100 to-amber-100 border-b border-amber-200 p-4">
                    <h2 className="text-amber-800 flex items-center gap-2 font-playfair text-lg">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-600 text-white text-sm">
                            3
                        </span>
                        Special Celebration Wishes 💫
                    </h2>
                </div>
                <div className="p-6">
                    <div className="space-y-2">
                        <textarea
                            id="specialNote"
                            name="specialNote"
                            className="w-full border-2 border-amber-200 rounded-lg p-3 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 outline-none transition-all min-h-[120px]"
                            placeholder="Tell us about your celebration dreams, special rituals, or anything we should know to make it perfect..."
                            value={specialNote}
                            onChange={(e) => handleInputChange(e, validateSpecialNote, setSpecialNote, 'special note')}
                            maxLength="500"
                        />
                    </div>
                </div>
            </div>

            {/* Payment Method Selection */}
            <div className="mb-6">
                <div className="p-6 space-y-4 bg-white border-2 border-amber-200 rounded-xl shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-800">Select Payment Method</h3>

                    {/* Razorpay Option */}
                    <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:border-amber-300 transition-colors">
                        <input
                            type="radio"
                            id="razorpay"
                            name="payment"
                            value="razorpay"
                            checked={paymentMethod === "razorpay"}
                            onChange={() => setPaymentMethod("razorpay")}
                            className="text-amber-600 border-2 border-amber-300 focus:ring-amber-200"
                        />
                        <label htmlFor="razorpay" className="flex items-center space-x-3 cursor-pointer w-full">
                            <div className="bg-blue-50 p-2 rounded-lg">
                                <img src={RazorPayIcon} alt="Razorpay" style={{ width: '100px' }} className="w-8 h-8" />
                            </div>
                            <div>
                                <p className="font-medium text-gray-800">Razorpay</p>
                                <p className="text-sm text-gray-500">Credit/Debit Cards, UPI, Netbanking</p>
                            </div>
                        </label>
                    </div>

                    {/* UPI Option */}
                    <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:border-amber-300 transition-colors">
                        <input
                            type="radio"
                            id="upi"
                            name="payment"
                            value="upi"
                            checked={paymentMethod === "upi"}
                            onChange={() => setPaymentMethod("upi")}
                            className="text-amber-600 border-2 border-amber-300 focus:ring-amber-200"
                        />
                        <label htmlFor="upi" className="flex items-center space-x-3 cursor-pointer w-full">
                            <div className="bg-purple-50 p-2 rounded-lg">
                                <img src={Upi} style={{ width: '100px' }} className="w-8 h-8" />
                            </div>
                            <div>
                                <p className="font-medium text-gray-800">UPI</p>
                                <p className="text-sm text-gray-500"> Google Pay, PhonePe, Paytm, BHIM</p>
                            </div>
                        </label>
                    </div>

                    {/* Cash on Delivery Option */}
                    <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:border-amber-300 transition-colors">
                        <input
                            type="radio"
                            id="cod"
                            name="payment"
                            value="cod"
                            checked={paymentMethod === "cod"}
                            onChange={() => setPaymentMethod("cod")}
                            className="text-amber-600 border-2 border-amber-300 focus:ring-amber-200"
                        />
                        <label htmlFor="cod" className="flex items-center space-x-3 cursor-pointer w-full">
                            <div className="bg-green-50 p-2 rounded-lg">
                                <img src={Cod} style={{ width: '100px' }} className="w-8 h-8" />
                            </div>
                            <div>
                                <p className="font-medium text-gray-800">Cash on Delivery</p>
                                <p className="text-sm text-gray-500">Pay when you receive your order</p>
                            </div>
                        </label>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="mb-6">
                        <div className="p-6 space-y-4 bg-white border-amber-200 rounded-xl shadow-sm">
                            <div className="flex items-start space-x-2">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    className="text-amber-600 border-2 border-amber-300 rounded mt-1 focus:ring-amber-200"
                                    required
                                />
                                <label htmlFor="terms" className="text-sm cursor-pointer">
                                    I agree to the{" "}
                                    <Link to="#" className="text-amber-600 hover:underline font-medium">
                                        terms and conditions
                                    </Link>{" "}
                                    of this celebration booking
                                </label>
                            </div>

                            <div className="flex items-start space-x-2">
                                <input
                                    type="checkbox"
                                    id="offers"
                                    className="text-amber-600 border-2 border-amber-300 rounded mt-1 focus:ring-amber-200"
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
                className="w-full py-4 text-lg rounded-xl font-bold bg-gradient-to-r from-amber-500 to-amber-500 hover:from-amber-600 hover:to-amber-600 text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.01] flex items-center justify-center gap-2"
            >
                <Sparkles className="h-5 w-5" />
                Complete Your Celebration Booking
                <Sparkles className="h-5 w-5" />
            </button>
        </form>
    );
};