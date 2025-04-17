import React, { useState } from 'react';
import { Heart, ShoppingCart, Star, ChevronRight, Gift, Sparkles } from 'lucide-react';
import DeliveryInfo from '../../components/delivery/DeliveryInfo';
import PincodeDeliveryChecker from '../../components/delivery/Delivery-date';
import ProductOverview from '../../components/product/ProductOverview';
import RelatedProductSection1 from '../../components/related-products-feed/related-product-section-1';

// Add this in your main CSS file or at the top of your component
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

const ProductDetailsPage = () => {
  const [mainImage, setMainImage] = useState(
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080'
  );
  const [isWishlisted, setIsWishlisted] = useState(false);

  const changeImage = (src) => {
    setMainImage(src);
  };

  return (
    <>
      <style>{styles}</style>
      <div className="bg-gradient-to-b bg-pink-50 font-poppins">
        {/* Special Offer Ribbon */}
        <div className="bg-gradient-to-r from-pink-400 to-rose-500 text-white py-2 px-4 text-center text-sm font-medium flex items-center justify-center gap-2">
          <Gift className="h-4 w-4" />
          <span>Special Celebration Offer! Get 15% off on all accessories</span>
          <ChevronRight className="h-4 w-4" />
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap -mx-4">
            {/* Product Images */}
            <div className="w-full md:w-1/2 mb-8 px-4">
              <div className="relative">
                <img
                  src={mainImage}
                  alt="Product"
                  className="w-full h-auto rounded-xl product-shadow border-2 border-pink-100 mb-4"
                  id="mainImage"
                />
                <div className="absolute top-4 left-4 bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                  NEW!
                </div>
              </div>
              <div className="flex gap-4 py-4 justify-center overflow-x-auto">
                {[
                  'https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8aGVhZHBob25lfGVufDB8MHx8fDE3MjEzMDM2OTB8MA&ixlib=rb-4.0.3&q=80&w=1080',
                  'https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080',
                  'https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080',
                  'https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080'
                ].map((src, index) => (
                  <div 
                    key={index} 
                    className={`relative size-16 sm:size-20 rounded-lg cursor-pointer transition-all duration-300 border-2 ${mainImage === src ? 'border-pink-500 scale-105' : 'border-pink-100'}`}
                    onClick={() => changeImage(src)}
                  >
                    <img
                      src={src}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover rounded-md"
                    />
                    {mainImage === src && (
                      <div className="absolute inset-0 bg-pink-500 bg-opacity-20 rounded-md"></div>
                    )}
                  </div>
                ))}
              </div>
              <div className="hidden sm:hidden md:block">
  <ProductOverview />
</div>
            </div>

            {/* Product Details */}
            <div className="w-full md:w-1/2 px-4">
              <h2 className="text-3xl font-bold mb-2 font-playfair text-rose-800">Premium Wireless Headphones</h2>
              <p className="text-pink-600 mb-4">SKU: WH1000XM4</p>
              
              <div className="mb-4 flex items-center">
                <span className="text-3xl font-bold text-rose-700 mr-2">$349.99</span>
                <span className="text-gray-500 line-through">$399.99</span>
                <span className="ml-3 bg-rose-100 text-rose-800 text-sm font-medium px-2 py-1 rounded-full">
                  Save 12% ✨
                </span>
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, index) => (
                  <Star 
                    key={index} 
                    className={`${index < 4 ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
                    size={20} 
                  />
                ))}
                <span className="ml-2 text-gray-600">4.5 (120 reviews)</span>
              </div>
              
              <p className="text-gray-700 mb-6 border-l-4 border-pink-300 pl-4 py-2 bg-pink-50 rounded-r-lg">
                Experience premium sound quality and industry-leading noise cancellation with these wireless
                headphones. Perfect for music lovers and frequent travelers. 🎧✨
              </p>

              <div className="mb-6 p-4 bg-pink-50 rounded-xl border-2 border-pink-100">
                <h3 className="text-lg font-semibold mb-2 text-rose-800">Color Options:</h3>
                <div className="flex space-x-3">
                  {['Black', 'Silver', 'Rose Gold'].map((color, index) => (
                    <button 
                      key={index}
                      className={`w-10 h-10 rounded-full focus:outline-none border-2 ${index === 0 ? 'border-pink-500' : 'border-transparent'}`}
                      style={{
                        backgroundColor: 
                          color === 'Black' ? '#000' : 
                          color === 'Silver' ? '#c0c0c0' : 
                          '#e0bfb8'
                      }}
                      title={color}
                    ></button>
                  ))}
                </div>
              </div>

              <div className="mb-6 p-4 bg-pink-50 rounded-xl border-2 border-pink-100">
                <label htmlFor="quantity" className="block text-sm font-medium text-rose-800 mb-1">
                  Quantity:
                </label>
                <div className="flex items-center">
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    defaultValue="1"
                    className="w-16 text-center rounded-lg border-2 border-pink-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none py-2"
                  />
                  <span className="ml-3 text-sm text-gray-600">Only 5 left in stock!</span>
                </div>
              </div>

              <div className="flex space-x-4 mb-6">
                <button className="bg-gradient-to-r from-pink-500 to-rose-600 flex gap-2 items-center text-white px-6 py-3 rounded-xl hover:from-pink-600 hover:to-rose-700 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2 transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-xl">
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>
                <button 
                  className={`flex gap-2 items-center px-6 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2 transition-all border-2 ${isWishlisted ? 'bg-pink-50 border-pink-500 text-pink-600' : 'border-pink-200 text-gray-800 hover:border-pink-300'}`}
                  onClick={() => setIsWishlisted(!isWishlisted)}
                >
                  <Heart 
                    size={20} 
                    className={isWishlisted ? 'fill-pink-600 text-pink-600' : ''} 
                  />
                  Wishlist
                </button>
              </div>

              <div className="mb-6 p-4 bg-white rounded-xl border-2 border-pink-100 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="text-pink-500" size={18} />
                  <h3 className="font-semibold text-rose-800">Celebration Special!</h3>
                </div>
                <p className="text-sm text-gray-700">
                  Free gift wrapping and personalized message included with every order this season! 🎁
                </p>
              </div>

              <div className="space-y-4">
                <PincodeDeliveryChecker />
                <DeliveryInfo />
                <div className="block md:hidden">
  <ProductOverview />
</div>

              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center google-font mt-8">
  <span className="border-b-[1vw] border-pink-700 rounded-md inline-block">
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

export default ProductDetailsPage;