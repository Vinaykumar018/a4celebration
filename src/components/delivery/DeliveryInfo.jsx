import {
  Store,
  Truck,
  Undo2,
  Lock
} from 'lucide-react';

const DeliveryInfo = () => {
  return (
    <div className="bg-pink-50 p-4 text-sm space-y-2 font-sans rounded-lg rounded-lg shadow-sm">
      <p className="text-xl font-bold mb-4 text-pink-700">Get it in 7 days</p>

      <div className="space-y-3">
        {/* Store Pickup */}
        <div className="flex items-start gap-2">
          <Store className="w-4 h-4 text-pink-500 mt-1" />
          <div>
            <span className="font-semibold">Store Pickup: </span>
            <span>Order now for pickup on <strong>Wed, Jul 7</strong> at Neykart Store. </span>
            <span className="cursor-pointer text-pink-600 underline hover:text-pink-800">
              Discover all pickup locations
            </span>
          </div>
        </div>

        {/* Shipping */}
        <div className="flex items-start gap-2">
          <Truck className="w-4 h-4 text-pink-500 mt-1" />
          <div>
            <span className="font-semibold">Shipping &amp; Delivery: </span>
            <span>Available in your Area. </span>
            <span className="cursor-pointer text-pink-600 underline hover:text-pink-800">
              Enter your location
            </span>
          </div>
        </div>

        {/* Easy Return */}
        <div className="flex items-start gap-2">
          <Undo2 className="w-4 h-4 text-pink-500 mt-1" />
          <div>
            <span className="font-semibold">Easy Return: </span>
            <span>Return this item until Jul 22. </span>
            <a href="#" className="text-pink-600 underline hover:text-pink-800">Return Policy</a>
          </div>
        </div>
      </div>

      {/* Trust symbols */}
      <div className="pt-3">
        <img
          src="http://localhost:3001/image/trust-symbols_a.webp"
          alt="transaction"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Secure Transaction */}
      <div className="flex items-center gap-2 mt-4">
        <Lock className="w-5 h-5 text-pink-500" />
        <span className="text-pink-600">Secure Transaction</span>
      </div>
    </div>
  );
};

export default DeliveryInfo;
