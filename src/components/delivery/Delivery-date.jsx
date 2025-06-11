import React, { useState } from "react";
import { Lock } from 'lucide-react';

const PincodeDeliveryChecker = ({ onDeliveryAvailable, pincode, setPincode }) => {

  const [isDeliverable, setIsDeliverable] = useState(null);
  const [error, setError] = useState("");

  const checkDelivery = () => {
    if (!pincode || pincode.length !== 6 || isNaN(Number(pincode))) {
      setError("Please enter a valid 6-digit pincode.");
      setIsDeliverable(null);
      onDeliveryAvailable(false); // Notify parent that delivery is not available
      return;
    }

    // Your delivery logic here (example: even pincodes are deliverable)
    const deliverable = Number(pincode) % 2 === 0;
    setIsDeliverable(deliverable);
    onDeliveryAvailable(deliverable); // Notify parent of availability
    setError("");
  };

  return (
    <div className="w-full mx-auto mb-1 text-left font-poppins bg-amber-50 p-1 rounded-lg">
      <p className="text-lg font-bold mb-1 text-amber-700 font-playfair">
        🚚 Check Service Availability
      </p>

   <div className="flex border border-amber-300 rounded-lg overflow-hidden shadow product-shadow">
  <input
    type="text"
    placeholder="Enter Your City Pincode"
    maxLength={6}
    value={pincode}
    onChange={(e) => setPincode(e.target.value)}
    className="flex-1 min-w-0 px-4 py-2 outline-none rounded-l-lg bg-white text-amber-700 placeholder-amber-400 text-sm"
  />
  <button
    onClick={checkDelivery}
    className="px-4 sm:px-5 py-2 bg-amber-600 text-white font-semibold hover:bg-amber-700 transition-colors duration-200 text-sm whitespace-nowrap"
  >
    Check
  </button>
</div>

      <div className="min-h-[10px]">
        {error && <p className="text-sm text-red-600 mt-2">{error}</p>}
        {isDeliverable !== null && (
          <p className={`text-sm mt-2 ${isDeliverable ? 'text-green-600' : 'text-red-600'}`}>
            {isDeliverable ? "✅ Available for delivery" : "❌ Not available for delivery"}
          </p>
        )}
      </div>
    </div>
  );
};

export default PincodeDeliveryChecker;