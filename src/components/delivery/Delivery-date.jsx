import React, { useState } from "react";

const PincodeDeliveryChecker = () => {
  const [pincode, setPincode] = useState("");
  const [deliveryDate, setDeliveryDate] = useState(null);
  const [error, setError] = useState("");

  const checkDeliveryDate = () => {
    if (!pincode || pincode.length !== 6 || isNaN(Number(pincode))) {
      setError("Please enter a valid 6-digit pincode.");
      setDeliveryDate(null);
      return;
    }

    const simulatedDeliveryDays = Math.floor(Math.random() * 6) + 2;
    setDeliveryDate(simulatedDeliveryDays);
    setError("");
  };

  return (
    <div className="w-full mx-auto mb-6 text-left font-sans bg-pink-50 p-4 rounded-lg shadow-sm">
      <p className="text-xl font-bold mb-4 text-pink-700">🚚 Check Delivery Date</p>

      <div className="flex border border-pink-300 rounded-lg overflow-hidden shadow">
        <input
          type="text"
          placeholder="Enter Your City Pincode"
          maxLength={6}
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
          className="flex-1 px-4 py-2 outline-none rounded-l-lg bg-white text-pink-700 placeholder-pink-400"
        />
        <button
          onClick={checkDeliveryDate}
          className="px-5 py-2 bg-pink-600 text-white font-semibold hover:bg-pink-700 transition-colors duration-200"
        >
          Check
        </button>
      </div>

      <div className="min-h-[20px] mt-2">
        {error && <p className="text-sm text-red-600 mt-2">{error}</p>}
        {deliveryDate && (
          <p className="text-sm text-green-600 mt-2">
            🎉 Estimated delivery time: {deliveryDate} days
          </p>
        )}
      </div>
    </div>
  );
};

export default PincodeDeliveryChecker;
