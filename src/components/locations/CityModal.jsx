import React from 'react';
import img1 from '../../assets/cities/istockphoto-484897208-612x612.jpg'
import img2 from '../../assets/cities/istockphoto-508412854-612x612.jpg'

import img3 from '../../assets/cities/istockphoto-508964332-612x612.jpg'
import img4 from '../../assets/cities/istockphoto-519748948-612x612.jpg'

import img5 from '../../assets/cities/istockphoto-544003114-612x612.jpg'
import img6 from '../../assets/cities/istockphoto-1411353192-612x612.jpg'
import hyd from '../../assets/cities/istockphoto-622521982-612x612.jpg'

// CityModal Component
const CityModal = ({ isOpen, onClose, }) => {

  if (!isOpen) return null;


  const cities = [
    { name: 'Delhi NCR', image: img2 },
    { name: 'Jaipur', image: img5 },

    { name: 'Kolkata', image: img6 },
    { name: 'Indore', image: img5 },
    { name: 'Pune', image: img1 },

    { name: 'Hyderabad', image: hyd },

    { name: 'Kanpur', image: img3 },

    { name: 'Banglore', image: img4 },
  ];

  return (
    <div className="fixed inset-0 bg-black/90 bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-[90%] max-w-3xl shadow-xl relative">
        <button
          onClick={() => {
          
            onClose();
          }}
          className="absolute top-4 right-4 text-amber-600 hover:text-amber-800 text-2xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-center text-2xl font-semibold text-amber-700">Select your City</h2>
        <p className="text-center text-gray-600 mt-2 mb-6">Find more than 3000 decorations, gifts and surprises!</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {cities.map((city, idx) => (
            <div
              key={idx}
              className="bg-amber-50 hover:bg-amber-100 transition-all p-4 rounded-lg text-center shadow-md cursor-pointer"
            >
              <img
                src={city.image}
                alt={city.name}
                className="mx-auto mb-2 h-12 object-contain"
              />
              <p className="text-amber-700 font-medium">{city.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CityModal;
