import React, { useState, useEffect } from "react";
import { Phone, Check, Star } from "lucide-react";
import img1 from '../../assets/services/1727611247_original (1).avif';

export default function AboutDetails() {
  const cities = ["Kanpur", "Noida", "Delhi", "Mumbai", "Pune"];
  const [currentCity, setCurrentCity] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const city = cities[index];
    if (isDeleting) {
      if (charIndex > 0) {
        setTimeout(() => setCharIndex((prev) => prev - 1), 100);
      } else {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % cities.length);
      }
    } else {
      if (charIndex < city.length) {
        setTimeout(() => setCharIndex((prev) => prev + 1), 150);
      } else {
        setTimeout(() => setIsDeleting(true), 1000);
      }
    }
    setCurrentCity(city.substring(0, charIndex));
  }, [charIndex, isDeleting, index, cities]);

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-pink-50 google-font">
      <div className="container mx-auto px-4">
        {/* Header with logo */}
        <header className="mb-8">
          <div className="text-pink-600 font-bold text-3xl flex items-center font-playfair">
            <span className="bg-pink-600 text-white p-2 rounded-lg mr-2">
              <Phone size={24} />
            </span>
            CelebrationHub
          </div>
        </header>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
          {/* Left side content */}
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair">
              <span className="text-gray-800">Creating Unforgettable</span>{" "}
              <span className="text-pink-600">Celebrations</span>{" "}
              <br />
              <span className="text-gray-800">
                Across <span className="text-pink-600">{currentCity}</span>
              </span>
            </h1>

            <div className="text-gray-600 space-y-4">
              <p className="text-lg">
                CelebrationHub is your premier platform for booking professional event services.
                We bring together the best decorators, caterers, and entertainers to make your events magical.
              </p>

              <div className="space-y-3">
                {[
                  "Verified and experienced event professionals",
                  "Transparent pricing with no hidden charges",
                  "Customized services for all event types",
                  "Easy online booking and scheduling"
                ].map((text, idx) => (
                  <div key={idx} className="flex items-start">
                    <Check className="text-pink-500 mt-1 mr-2 flex-shrink-0" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-pink-600 flex items-center justify-center hover:bg-pink-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition-all shadow-md hover:shadow-pink-200">
                <Phone className="mr-2 h-5 w-5" /> Book Services Now
              </button>
              <button className="border-2 border-pink-600 flex items-center justify-center hover:bg-pink-50 text-pink-600 px-6 py-3 rounded-lg text-lg font-medium transition-all">
                Learn More
              </button>
            </div>

            {/* Testimonials */}
            <div className="mt-8 p-6 bg-white rounded-xl shadow-sm border border-pink-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-pink-400 fill-pink-400 w-5 h-5" />
                ))}
                <span className="ml-2 text-gray-700 font-medium">4.8/5 (980+ reviews)</span>
              </div>
              <p className="text-gray-600 italic">
                "CelebrationHub transformed our wedding into a fairy tale. Their decor team was amazing
                and the catering service was exceptional."
              </p>
              <p className="text-gray-800 font-medium mt-2 font-playfair">- Priya S., Delhi</p>
            </div>
          </div>

          {/* Right side img */}
          <div className="hidden lg:block relative">
            <img
              src={img1}
              alt="Event team setting up decorations"
              className="w-full h-auto object-contain rounded-xl shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-md border border-pink-100 text-center">
              <div className="text-3xl font-bold text-pink-600 font-playfair">500+</div>
              <div className="text-gray-600">Event Professionals</div>
            </div>
            <div className="absolute -top-6 -right-6 bg-pink-600 text-white p-4 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold font-playfair">15</div>
              <div>Cities Served</div>
            </div>
          </div>
        </div>

        {/* Stats section - for mobile */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 lg:hidden">
          {[
            { value: "500+", label: "Event Professionals" },
            { value: "50+", label: "Service Types" },
            { value: "15", label: "Cities" },
            { value: "1200+", label: "Events Served" }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow-sm text-center border-t-4 border-pink-500">
              <div className="text-2xl font-bold text-gray-800 font-playfair">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
