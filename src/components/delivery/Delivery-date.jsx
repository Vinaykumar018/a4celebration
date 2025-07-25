import React, { useState } from "react";
import { Lock } from 'lucide-react';

const PincodeDeliveryChecker = ({ onDeliveryAvailable, pincode, setPincode }) => {

  const [isDeliverable, setIsDeliverable] = useState(null);
  const [error, setError] = useState("");
  const devliverableKanpurPincodes = [ 
  "208002", "208001", "208025", "208005", "208011",
  "208022", "208006", "208024", "208026", "208014",
  "208019", "208027", "208017", "208007", "208021",
  "208012", "208010", "208023", "208003", "208013",
  "208004", "208015", "208018", "208008", "208009",
  "208020", "208028", "208029", "208030", "208031"
];


  const checkDelivery = () => {
    if (!pincode || pincode.length !== 6 || isNaN(Number(pincode))) {
      setError("Please enter a valid 6-digit pincode.");
      setIsDeliverable(null);
      onDeliveryAvailable(false); // Notify parent that delivery is not available
      return;
    }

    // Your delivery logic here (example: even pincodes are deliverable)
   const deliverable = devliverableKanpurPincodes.includes(pincode);
  setIsDeliverable(deliverable);
  onDeliveryAvailable(deliverable); // Notify parent
  setError("");
  }

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



// const developedKanpurPincodes = [
//   { area: "Swaroop Nagar", pincode: "208002" },
//   { area: "Arya Nagar", pincode: "208002" },
//   { area: "Civil Lines", pincode: "208001" },
//   { area: "Mall Road", pincode: "208001" },
//   { area: "Tilak Nagar", pincode: "208002" },
//   { area: "Naveen Nagar", pincode: "208025" },
//   { area: "Shastri Nagar", pincode: "208005" },
//   { area: "Sarvodaya Nagar", pincode: "208025" },
//   { area: "Kakadeo", pincode: "208025" },
//   { area: "Kidwai Nagar", pincode: "208011" },
//   { area: "Ratan Lal Nagar", pincode: "208022" },
//   { area: "Govind Nagar", pincode: "208006" },
//   { area: "Pandu Nagar", pincode: "208005" },
//   { area: "Harsh Nagar", pincode: "208001" },
//   { area: "Vikas Nagar", pincode: "208024" },
//   { area: "Lakhanpur", pincode: "208024" },
//   { area: "Awadhpuri", pincode: "208024" },
//   { area: "Indira Nagar", pincode: "208026" },
//   { area: "Juhi", pincode: "208014" },
//   { area: "Rawatpur", pincode: "208019" },
//   { area: "Barra", pincode: "208027" },
//   { area: "Kalyanpur", pincode: "208017" },
//   { area: "Rama Devi", pincode: "208007" },
//   { area: "Naubasta", pincode: "208021" },
//   { area: "Yashoda Nagar", pincode: "208011" },
//   { area: "Fazalganj", pincode: "208012" },
//   { area: "Chunni Ganj", pincode: "208001" },
//   { area: "Krishna Nagar", pincode: "208007" },
//   { area: "Ganga Nagar", pincode: "208010" },
//   { area: "Transport Nagar", pincode: "208023" }
// ];