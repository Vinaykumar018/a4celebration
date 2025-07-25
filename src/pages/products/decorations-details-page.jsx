import React, { useState, useEffect } from 'react';
import { Heart, ShoppingCart, Star, ChevronRight, Gift, Sparkles } from 'lucide-react';
import DeliveryInfo from '../../components/delivery/DeliveryInfo';
import PincodeDeliveryChecker from '../../components/delivery/Delivery-date';
import RelatedProductSection1 from '../../components/related-products-feed/related-product-section-1';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../../hooks/cartHook';
import { ToastContainer, toast } from 'react-toastify';
import { TimeSlotPicker } from '../../components/delivery/DateTimePicker';
import DescriptionOverview from '../../components/product/description-overview';
import KitsOverview from '../../components/product/kits-overview';
import { useSelector } from "react-redux";
import useUserCartData from '../../hooks/useUserCartData';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import WishlistButton from '../wishlist/WishlistButton';

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
  
  .thumbnail-active {
    border-color: #f59e0b;
    transform: scale(1.05);
  }
`;

const DecorationsDetailsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { serviceData, sectionData } = location.state;
  const { userData } = useSelector((state) => state.user);
  const { cartItems: initialCartItems, isLoading: isCartLoading } = useUserCartData();
  const { addToCart, updateItem } = useCart();

  const [mainImage, setMainImage] = useState(serviceData.featured_image);
  const [isDeliveryAvailable, setIsDeliveryAvailable] = useState(false);
  const [pincode, setPincode] = useState("");
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [dateTime, setDateTime] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const [existingCartItem, setExistingCartItem] = useState(null);

  // Check if item is already in cart
  useEffect(() => {
    if (!isCartLoading && initialCartItems) {
      const foundItem = initialCartItems.find(
        item => item.product_id === serviceData.product_id
      );
      if (foundItem) {
        setIsInCart(true);
        setExistingCartItem(foundItem);
      }
    }
  }, [initialCartItems, isCartLoading, serviceData.product_id]);

  const handleBookNow = async () => {
    if (!dateTime) {
      toast.error('Please select a date and time slot');
      return;
    }
     const isLoggedIn = localStorage.getItem('isLoggedIn');
  const userId = localStorage.getItem('userId');
      if (!isLoggedIn || !userId) {
       toast.info('Please login to book services', {
         autoClose: 1000, // Toast closes in 2 seconds
         onClose: () => navigate("/login")
       });
       return;
     }

    setIsProcessing(true);

    const formattedTime = `${dateTime.startTime} - ${dateTime.endTime}`;

    const cartItem = {
      product_id: serviceData.product_id,
      product_name: serviceData.name,
      quantity: 1, // Fixed to 1 for decoration items
      service_date: dateTime.date,
      service_time: formattedTime,
      pinCode: pincode,
      featured_image: serviceData.featured_image,
      price: serviceData.price,
      section: 'decoration'
    };

    try {
      if (isInCart) {
        // Update existing item
        await updateItem(
          userData?.data?._id,
          serviceData.product_id,
          {
            service_date: dateTime.date,
            service_time: formattedTime,
            pinCode: pincode
          }
        );
        toast.success('Cart details updated!');
      } else {
        // Add new item
        await addToCart({
          userID: userData?.data?._id,
          items: [cartItem]
        });
        toast.success('Added to cart!');
      }

      setTimeout(() => {
        navigate('/cart');
      }, 1500);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to update cart');
      console.error(error);
    } finally {
      setIsProcessing(false);
    }
  };

  const changeImage = (src) => {
    setMainImage(src);
  };

  const calculateDiscount = () => {
    if (!serviceData.mrp_price) return 0;
    return Math.round((1 - serviceData.price / (serviceData.mrp_price)) * 100);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const [descriptionPart, kitPart] = serviceData.description.split('Kit:');

  // Image handling with fallback
  const getImageUrl = (imagePath) => {
    if (!imagePath) return '/images/placeholder-product.jpg';
    return imagePath.startsWith('http') ? imagePath : `https://a4celebration.com/api/${imagePath}`;
  };


  useEffect(() => {
  setMainImage(serviceData.featured_image); // Reset to new product's image
}, [serviceData]); // Trigger when `serviceData` updates

  return (
    <>
      <ToastContainer  autoClose={3000} />
      <style>{styles}</style>

      <div className="bg-gradient-to-b bg-amber-50 font-poppins pb-8 min-h-screen">
        {serviceData.isOffer && (
          <div className="bg-gradient-to-r from-amber-400 to-amber-500 text-white py-2 px-4 text-center text-sm font-medium flex items-center justify-center gap-2">
            <Gift className="h-4 w-4" />
            <span>Special Celebration Offer! Get {calculateDiscount()}% off on this product</span>
            <ChevronRight className="h-4 w-4" />
          </div>
        )}

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap -mx-4">
            {/* Product Images Section */}
            <div className="w-full md:w-1/2 mb-8 px-4">
              <div className="flex flex-col-reverse sm:flex-row gap-4">
                {/* Thumbnails */}
                <div className="flex flex-row sm:flex-col gap-4 overflow-x-auto sm:overflow-y-auto sm:max-h-[500px] scrollbar-hide">
                  {[serviceData.featured_image, ...serviceData.other_images].map((src, index) => (
                    <div
                      key={index}
                      className={`relative size-16 sm:size-20 flex-shrink-0 rounded-lg cursor-pointer transition-all duration-300 border-2 ${mainImage === src ? 'thumbnail-active' : 'border-amber-100'}`}
                      onClick={() => changeImage(src)}
                    >
                      <img
                        src={getImageUrl(src)}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover rounded-md"
                        onError={(e) => {
                          e.target.src = '/images/placeholder-product.jpg';
                        }}
                      />
                    </div>
                  ))}
                </div>

                {/* Main Image */}
                <div className="relative flex-1">
                  <img
                    src={getImageUrl(mainImage)}
                    alt={serviceData.name}
                    className="w-full h-auto max-h-[500px] object-contain rounded-xl product-shadow border-2 border-amber-100"
                    onError={(e) => {
                      e.target.src = '/images/placeholder-product.jpg';
                    }}
                  />
                  {serviceData.isOffer && (
                    <div className="absolute top-4 left-4 bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                      {serviceData.status === 'new' ? 'NEW!' : 'OFFER!'}
                    </div>
                  )}
                </div>
              </div>

              <div className="hidden sm:hidden md:block mt-6">
                <DescriptionOverview description={descriptionPart} />
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

            {/* Product Details Section */}
            <div className="w-full md:w-1/2 px-4">
              <h2 className="text-3xl font-bold mb-1 font-playfair text-amber-800">
                {serviceData.name}
              </h2>

              {/* Pricing Section */}
              <div className="mb-1 flex items-center">
                <span className="text-2xl font-bold text-amber-700 mr-2">
                  {formatPrice(serviceData.price)}
                </span>
              
                    <span className="text-gray-500 line-through">
                      {formatPrice(serviceData.mrp_price)}
                    </span>
                    <span className="ml-3 bg-amber-100 text-amber-800 text-sm font-medium px-2 py-1 rounded-full">
                      Save {calculateDiscount()}% ✨
                    </span>
                
              </div>

              {/* Rating Section */}
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

              {/* Quantity Display (fixed to 1 for decorations) */}


              {/* Pincode Checker */}
              <PincodeDeliveryChecker
                onDeliveryAvailable={setIsDeliveryAvailable}
                pincode={pincode}
                setPincode={setPincode}
              />

              {/* Time Slot Picker */}
              <div className="space-y-4 mt-4">
                <TimeSlotPicker
                  onTimeSlotSelect={setDateTime}
                  PIN={isDeliveryAvailable}
                  initialDate={isInCart ? existingCartItem?.service_date : null}
                  initialTime={isInCart ? existingCartItem?.service_time : null}
                />
              </div>

              {/* Action Buttons */}
            <div className="flex space-x-4 mt-8">
                {isInCart ? (
                  <>
                    <button
                      onClick={() => navigate('/cart')}
                      className="flex-1 bg-amber-600 hover:bg-amber-700 flex gap-2 items-center justify-center text-white px-6 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 transition-all transform shadow-lg"
                    >
                      <ShoppingCart size={20} />
                      Go to Cart
                    </button>

                    <button
                      onClick={handleBookNow}
                      disabled={!dateTime || isProcessing}
                      className={`flex-1 bg-orange-600 flex gap-2 items-center justify-center text-white px-6 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 transition-all transform shadow-lg ${!dateTime ? 'opacity-50 cursor-not-allowed' : 'hover:bg-orange-700 hover:scale-[1.02] hover:shadow-xl'
                        }`}
                    >
                      {isProcessing ? (
                        <LoadingSpinner size={20} color="text-white" />
                      ) : (
                        <>
                          <Sparkles size={20} />
                          Update Booking
                        </>
                      )}
                    </button>
                  </>
                ) : (
                  <button
                    onClick={handleBookNow}
                    disabled={!dateTime || isProcessing}


                    className={`bg-black flex gap-2 items-center text-yellow-400 px-6 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 transition-all transform shadow-lg ${!dateTime
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:bg-gray-900 hover:scale-[1.02] hover:shadow-xl'
                      }`}
                  >
                    {isProcessing ? (
                      <LoadingSpinner size={20} color="text-white" />
                    ) : (
                      <>
                        <ShoppingCart size={20} />
                        Book Now
                      </>
                    )}
                  </button>
                )}

               <WishlistButton productId={serviceData.product_id} inCart={isInCart}></WishlistButton>
              </div>
               



              {/* Product Description - Mobile */}
              <div className="block md:hidden mt-6">
                <DescriptionOverview description={descriptionPart} />
              </div>
              <KitsOverview data={kitPart} />

              {/* Delivery Information */}
              <div className="space-y-4 mt-6">
                <DeliveryInfo />
              </div>
            </div>
          </div>

          {/* Related Products Section */}
          <h2 className="text-3xl font-bold text-center google-font mt-12 mb-6">
            <span className="border-b-[1vw] border-amber-700 rounded-md inline-block">
              Related Services
            </span>
          </h2>
          <div className="space-y-4">
            <RelatedProductSection1 />
          </div>
        </div>
      </div>
    </>
  );
};

export default DecorationsDetailsPage;