import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AvailableCities = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  const availableCities = ["Bengaluru", "Kanpur"];

  const cities = [
     { name: "Kanpur", href: "/pandits/Kanpur", src: "https://a4celebration.com/assets/istockphoto-508964332-612x612-BMOIN5b3.jpg" },
    { name: "Bengaluru", href: "/pandits/Bengaluru", src: "https://pujapurohit.in/assets/images/cities/bengluru.webp" },
    { name: "Delhi", href: "/pandits/Delhi", src: "https://pujapurohit.in/assets/images/cities/newdelhi.webp" },
    { name: "Noida", href: "/pandits/Noida", src: "https://firebasestorage.googleapis.com/v0/b/mongodb-asset/o/places%2Fnoida.png?alt=media&token=902ba55d-2469-40cd-9f10-b6f2672f8a10&_gl=1*vlbioo*_ga*MTE0NDIwNTUxMi4xNjU0MjY0Mzg0*_ga_CW55HF8NVT*MTY5NzcyMjAxNS4zNzYuMS4xNjk3NzIyNTM4LjYwLjAuMA.." },
    { name: "Gurugram", href: "/pandits/Gurugram", src: "https://firebasestorage.googleapis.com/v0/b/mongodb-asset/o/cities%2Fgurugram.png?alt=media&token=f860b4bf-c9a3-480b-9bac-e6b26f92e772" },
    { name: "Pune", href: "/pandits/Pune", src: "https://pujapurohit.in/assets/images/cities/pune.webp" },
    { name: "Mumbai", href: "/pandits/Mumbai", src: "https://pujapurohit.in/assets/images/cities/mumbai.webp" },
   
  ];

  const handleCityClick = (city) => {
    const isAvailable = availableCities.includes(city.name);
    if (isAvailable) {
      setSelectedCity(city.name);
      // navigate or do something with city.href if needed
    } else {
      toast.warn("Service not available in your location", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        theme: "dark"
      });
    }
  };

  return (
    <div className="flex bg-gradient-to-r from-pink-300 to-pink-300 w-full flex-wrap items-center md:px-8 px-2 py-6">
      <div className="md:flex items-center justify-center w-full">
        <div className="text-white text-center md:text-left mb-2 md:mb-0">
          <p className="md:flex md:flex-col">
            <span className="md:text-xl text-sm">We are</span>
            <span className="md:text-2xl text-sm font-semibold"> Available In</span>
          </p>
        </div>

        <div className="flex flex-wrap items-center w-full">
          {cities.map((city, index) => {
            const isAvailable = availableCities.includes(city.name);
            const isSelected = selectedCity === city.name;

            return (
              <div
                key={index}
                onClick={() => handleCityClick(city)}
                className={`relative cursor-pointer h-full w-24 md:w-36 flex flex-col justify-center items-center px-2 m-2 p-1 rounded-lg shadow-md transition duration-300
                  ${isAvailable ? "bg-white hover:shadow-lg" : "bg-white hover:shadow-lg"}`}
              >
                <img
                 
                  loading="lazy"
                  width="200"
                  height="200"
                  decoding="async"
                  className="rounded-lg h-14 w-34 object-contain"
                  src={city.src}
                />

                <p className={`text-sm font-semibold mt-2 ${
                  isAvailable ? "text-pink-700" : "text-pink-700"
                }`}>
                  {city.name}
                </p>

                {isAvailable && isSelected && (
                  <FaCheckCircle className="absolute top-1 right-1 text-green-500 text-xl" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default AvailableCities;
