import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const WhyChooseUs = () => {
  const poojas = [
    {
      image: "https://cheetah.cherishx.com/uploads/6d7371721cfb0174664d8184758c87e8_original.jpg",
      title: "Plan Your Perfect Celebration",
      description: "From birthdays to grand weddings, we help you plan every detail of your special event with creativity and care."
    },
    {
      image: "https://cheetah.cherishx.com/uploads/1727607802_original.jpg?format=avif&width=640&height=640",
      title: "Professional Event Decoration",
      description: "Make your event stand out with our custom decoration services, tailored to match your theme and style perfectly."
    },
    {
      image: "https://cheetah.cherishx.com/uploads/1715856927_original.jpg?format=avif&width=640&height=640",
      title: "Unique Gifts for Every Occasion",
      description: "Browse our curated collection of thoughtful gifts perfect for weddings, birthdays, festivals, and corporate events."
    },
    {
      image: "https://cheetah.cherishx.com/uploads/1568374857_original.jpg",
      title: "Artist & Talent Management",
      description: "Book skilled performers, DJs, anchors, and entertainers to add life and energy to your celebration."
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === poojas.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? poojas.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="px-4 py-8 bg-amber-50" id="why-choose-us">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl sm:text-5xl font-bold tracking-wide mb-8 text-amber-600" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
          Why Choose Us
        </h2>

        {/* Mobile Slider */}
        <div className="relative md:hidden">
          <div className="overflow-hidden">
            <div 
              ref={sliderRef}
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {poojas.map((pooja, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-full px-2"
                >
                  <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-md border border-amber-100">
                    <img
                      alt={pooja.title}
                      loading="lazy"
                      className="object-contain w-40 h-40"
                      src={pooja.image}
                    />
                    <div className="mt-4 text-center">
                      <h3 className="text-amber-600 font-bold text-xl">{pooja.title}</h3>
                      <p className="text-gray-700 mt-2">{pooja.description}</p>
                      <div className="flex justify-center mt-3">
                        {[1, 2, 3].map((dot) => (
                          <div key={dot} className="w-2 h-2 bg-amber-400 rounded-full mx-1"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
          >
            <ChevronLeft className="w-6 h-6 text-amber-600" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
          >
            <ChevronRight className="w-6 h-6 text-amber-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-4 space-x-2">
            {poojas.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-amber-600' : 'bg-amber-200'}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-6">
          {poojas.map((pooja, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center bg-white p-6 rounded-2xl shadow-sm border border-amber-100 hover:shadow-md transition-shadow"
            >
              <img
                alt={pooja.title}
                loading="lazy"
                className="object-contain w-40 h-40"
                src={pooja.image}
              />
              <div className="flex flex-col items-center md:items-start text-center md:text-start mt-4 md:mt-0 md:ml-6">
                <h3 className="text-amber-600 font-bold text-xl">{pooja.title}</h3>
                <p className="text-gray-700 mt-2">{pooja.description}</p>
                <div className="flex mt-3">
                  {[1, 2, 3].map((dot) => (
                    <div key={dot} className="w-2 h-2 bg-amber-400 rounded-full mx-1"></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;