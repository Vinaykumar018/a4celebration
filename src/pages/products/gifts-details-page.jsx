import React, { useState } from 'react';
import { Heart, ShoppingCart, Star, ChevronRight, Gift, Sparkles } from 'lucide-react';
import DeliveryInfo from '../../components/delivery/DeliveryInfo';
import PincodeDeliveryChecker from '../../components/delivery/Delivery-date';

import RelatedProductSection1 from '../../components/related-products-feed/related-product-section-1';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../../hooks/cartHook';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { TimeSlotPicker } from '../../components/delivery/DateTimePicker'
import DescriptionOverview from '../../components/product/description-overview';
import KitsOverview from '../../components/product/kits-overview';
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';


const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');
  
  .font-poppins {
    font-family: 'Poppins', sans-serif;
  }
  
  .font-playfair {
    font-family: 'Playfair Display', serif;
  }
  
  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
  
  .product-shadow {
    box-shadow: 0 10px 25px -5px rgba(244, 114, 182, 0.2);
  }
`;

const GiftsDetailsPage = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const { serviceData, sectionData } = location.state;

  const { userData, isAuthenticated, loading, error } = useSelector((state) => state.user);

  const [mainImage, setMainImage] = useState(
    "https://a4celebration.com/api/" + serviceData.featured_image
  );
  const [isDeliveryAvailable, setIsDeliveryAvailable] = useState(false);
  const [pincode, setPincode] = useState("");
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [dateTime, setDateTime] = useState(null);
  const { cart, addToCart } = useCart(); // This will store 


  const handleBookNow = async () => {
    if (!dateTime) {
      toast.error('Please select a date and time slot');
      return;
    }


    const formattedTime = `${dateTime.startTime} - ${dateTime.endTime}`;

    const cartItem = {
      product_id: serviceData.product_id,
      product_name: serviceData.name,
      quantity,
      service_date: dateTime.date,
      service_time: formattedTime,
      pinCode: pincode,
    };

    const cartPayload = {
      userID: userData?.data?._id,
      items: [cartItem]
    };


    try {
      await addToCart(cartPayload);
      toast.success('Added to cart!');
      setTimeout(() => {
        navigate('/cart');
      }, 1500);
    }
    catch (error) {
      // Error handling
      toast.error('cant add to cart!', error);
      console.error(error)

    }
  };

  const changeImage = (src) => {
    setMainImage("https://a4celebration.com/api/" + src);
  };

  // Calculate discount percentage if there's an offer
  const calculateDiscount = () => {
    if (!serviceData.isOffer) return 0;
    // This is a placeholder - you should replace with your actual discount calculation
    return 12; // Example 12% discount
  };

  // Format price with currency symbol
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };


  const [descriptionPart, kitPart] = serviceData.description.split('Kit:');





  return (
    <>
      <ToastContainer></ToastContainer>
      <style>{styles}</style>

      <div className="bg-gradient-to-b bg-amber-50 font-poppins">
        {/* Special Offer Ribbon - only show if there's an offer */}
        {serviceData.isOffer && (
          <div className="bg-gradient-to-r from-amber-400 to-amber-500 text-white py-2 px-4 text-center text-sm font-medium flex items-center justify-center gap-2">
            <Gift className="h-4 w-4" />
            <span>Special Celebration Offer! Get {calculateDiscount()}% off on this product</span>
            <ChevronRight className="h-4 w-4" />
          </div>
        )}

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap -mx-4">
            {/* Product Images */}
             <div className="w-full md:w-1/2 mb-8 px-4">
              <div className="flex  flex-col-reverse sm:flex-row gap-4 ">
                {/* Left Side Thumbnails */}
                <div className="flex flex-row sm:flex-col gap-4 overflow-x-auto sm:overflow-y-auto sm:max-h-[500px] scrollbar-hide">
                  {serviceData.other_images.map((src, index) => (
                    <div
                      key={index}
                      className={`relative size-16 sm:size-20 flex-shrink-0 rounded-lg cursor-pointer transition-all duration-300 border-2 ${mainImage === "https://a4celebration.com/api/" + src ? 'border-amber-500 scale-105' : 'border-amber-100'}`}
                      onClick={() => changeImage(src)}
                    >
                      <img
                        src={"https://a4celebration.com/api/" + src}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover rounded-md"
                      />
                      {mainImage === "https://a4celebration.com/api/" + src && (
                        <div className="absolute inset-0 border-2 border-amber-500 rounded-md rounded-md"></div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Main Image */}
                <div className="relative flex-1">
                  <img
                    src={mainImage}
                    alt={serviceData.name}
                    className="w-full h-auto rounded-xl product-shadow border-2 border-amber-100"
                    id="mainImage"
                  />

                  {serviceData.isOffer && (
                    <div className="absolute top-4 left-4 bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                      {serviceData.status === 'new' ? 'NEW!' : 'OFFER!'}
                    </div>
                  )}


                </div>
              </div>

              <div className="hidden sm:hidden md:block">

                <DescriptionOverview description={descriptionPart} />
                {/* Special Offer Box */}
                {serviceData.isOffer && (
                  <div className="mb-6 p-4 bg-white rounded-xl border-2 border-amber-100 shadow-sm mt-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="text-amber-500" size={18} />
                      <h3 className="font-semibold text-amber-800">Celebration Special!</h3>
                    </div>
                    <p className="text-sm text-gray-700">
                      {serviceData.status === 'active'
                        ? "Free gift wrapping and personalized message included with every order this season! 🎁"
                        : "Special limited-time offer for this product!"}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Product Details */}
            <div className="w-full md:w-1/2 px-4">
              <h2 className="text-3xl font-bold mb-1 font-playfair text-amber-800">
                {serviceData.name}
              </h2>

              {/* SKU/Product ID */}
              {/* <div className="mb-4">
                <p className="text-amber-600">SKU: {serviceData.product_id}</p>
                {serviceData.child_categories && serviceData.child_categories.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {serviceData.child_categories.map((category, index) => (
                      <span key={index} className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">
                        {category.name}
                      </span>
                    ))}
                  </div>
                )}
              </div> */}


              {/* Pricing Section */}
              <div className="mb-1 flex items-center">
                <span className="text-2xl font-bold text-amber-700 mr-2">
                  {formatPrice(serviceData.price)}
                </span>
                {serviceData.isOffer && (
                  <>
                    <span className="text-gray-500 line-through">
                      {formatPrice(serviceData.price * 1.12)} {/* Example original price */}
                    </span>
                    <span className="ml-3 bg-amber-100 text-amber-800 text-sm font-medium px-2 py-1 rounded-full">
                      Save {calculateDiscount()}% ✨
                    </span>
                  </>
                )}
              </div>

              {/* Rating Section - Placeholder since not in your data */}
              <div className="border border-gray-300 rounded-lg px-1 inline-flex items-center mb-2">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className={`${index < 4 ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
                    size={12}
                  />
                ))}
                <span className="ml-1 text-gray-600 text-xs">4.5 | 120 reviews</span>
              </div>

              {/* Short Description */}
              <p className="text-gray-700 mb-1 border-l-4 border-amber-300 pl-4 py-1 bg-amber-50 rounded-r-lg text-sm">
                {serviceData.short_description || serviceData.description}
              </p>

              {/* Quantity Selector */}

              {/* Date and Time Input Fields with AM/PM */}
              <PincodeDeliveryChecker
                onDeliveryAvailable={setIsDeliveryAvailable}
                pincode={pincode} setPincode={setPincode}
              />
              <div className=" space-y-4">

                <TimeSlotPicker
                  onTimeSlotSelect={(slot) => {
                    setDateTime(slot); // This will update with the full slot object
                  }}
                  PIN={isDeliveryAvailable}
                />
              </div>


              {/* Action Buttons */}
              <div className="flex space-x-4 mt-8">
                <div className="relative">
                  <button
                    className={`bg-gradient-to-r from-amber-500 to-amber-600 flex gap-2 items-center text-white px-6 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 transition-all transform shadow-lg ${!dateTime
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:from-amber-600 hover:to-amber-700 hover:scale-[1.02] hover:shadow-xl'
                      }`}
                    onClick={(e) => {
                      if (!dateTime) {
                        e.preventDefault();
                        toast.warning('Please select a date and time slot');
                      } else {
                        handleBookNow();
                      }
                    }}

                  >
                    <ShoppingCart size={20} />
                    Book Now
                  </button>

                  {/* Warning tooltip */}
                  {!dateTime && (
                    <div className="absolute -top-7 left-0 bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded whitespace-nowrap">
                      Please select date and time
                    </div>
                  )}
                </div>
                <button
                  className={`flex gap-2 items-center px-6 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 transition-all border-2 ${isWishlisted ? 'bg-amber-50 border-amber-500 text-amber-600' : 'border-amber-200 text-gray-800 hover:border-amber-300'}`}
                  onClick={() => setIsWishlisted(!isWishlisted)}
                >
                  <Heart
                    size={20}
                    className={isWishlisted ? 'fill-amber-600 text-amber-600' : ''}
                  />
                  Wishlist
                </button>
              </div>





              <div className="block md:hidden">
                <DescriptionOverview description={descriptionPart} />
              </div>
              <KitsOverview data={kitPart} ></KitsOverview>

              {/* Delivery Information */}
              <div className="space-y-4">

                <DeliveryInfo />

              </div>
            </div>
          </div>

          {/* Related Products */}
          <h2 className="text-3xl font-bold text-center google-font mt-8">
            <span className="border-b-[1vw] border-amber-700 rounded-md inline-block">
              Related Products
            </span>
          </h2>

          <div className="space-y-6">
            <RelatedProductSection1 />
            <RelatedProductSection1 />
          </div>
        </div>
      </div>
    </>
  );
};

export default GiftsDetailsPage;