"use client"

import { useState, useEffect } from "react"
import { Share2, Phone, Clock, ChevronLeft, ChevronRight, Check, Gift } from "lucide-react"

const EventManagementDetailsPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [timeLeft, setTimeLeft] = useState({
    days: 16,
    hours: 11,
    minutes: 27,
    seconds: 33,
  })

  const images = [
    "https://www.ptaufiqphotography.com/wp-content/uploads/2019/02/Indian-Wedding-Couples-Session-Hyatt-Pune-1024x683.jpg",

    "https://media.licdn.com/dms/image/v2/D4D22AQHgX-upePfe9A/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1683857830403?e=1750291200&v=beta&t=9zuNd8yXsL4Ox-AyyHHadTxNC9enAU6iPtOhMPOTN8Q",
    "https://media.licdn.com/dms/image/v2/D4D22AQELufa94zFKyw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1683857830255?e=1750291200&v=beta&t=fk_3eSaEEc5vixtnULiYGZXIcI5ZPe4Dz-msP_0Vksk",
    "https://media.licdn.com/dms/image/v2/D4D22AQFXMbxEbjq-qw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1683857815284?e=1750291200&v=beta&t=tOIaJAS6z7g5LCRNAeUKMEWvOX5eRk9MZTB7iooooaY",
  ]

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const packageIncludes = [
    { name: "Venue", included: true },
    { name: "Catering", included: true },
    { name: "Anchor", included: true },
    { name: "Decoration", included: true },
    { name: "DJ", included: true },
    { name: "Entry Theme", included: true },
    { name: "Photography", included: true },
    { name: "Accommodation", included: true },
  ]

  return (
    <div className="bg-white min-h-screen">

      <div className="bg-gradient-to-r bg-yellow-600 text-white py-2 px-4 text-center text-sm font-medium flex items-center justify-center gap-2">
        <Gift className="h-4 w-4" />
        <span>Special Celebration Offer! Get 8 % off on this service</span>
        <ChevronRight className="h-4 w-4" />
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Image and Description */}
          <div className="lg:col-span-7">
            {/* Image Gallery with Navigation */}
            <div className="relative rounded-2xl overflow-hidden mb-8 shadow-lg group">
              <div className="aspect-[4/3] relative">
                <img
                  src={images[currentImageIndex] || "/placeholder.svg"}
                  alt="Event Venue"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Image Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${index === currentImageIndex ? "bg-[#FFD700] w-6" : "bg-white/70 hover:bg-white"
                        }`}
                    />
                  ))}
                </div>

                {/* Share Button */}

              </div>
              <div className="lg:col-span-5 md:hidden mt-1">
                <div className="bg-amber-50 rounded-lg shadow-lg overflow-hidden border border-[#FFD700] sticky top-2">
                  <div className="p-4 border-b border-[#FFD700]">
                    <h1 className="text-xl font-bold mb-4 text-black">Package Details</h1>

                    {/* Package Details List */}
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-[#222222] flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#FFD700"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M12 6v6l4 2"></path>
                            </svg>
                          </div>
                          <span className="font-medium text-black">Price</span>
                        </div>
                        <div className="text-lg font-bold text-yellow-700">₹ 25,00,000</div>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-[#222222] flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#FFD700"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                            </svg>
                          </div>
                          <span className="font-medium text-black">Food Type</span>
                        </div>
                        <div className="text-black font-medium">Mix Menu</div>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-[#222222] flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#FFD700"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                              <circle cx="9" cy="7" r="4"></circle>
                              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                          </div>
                          <span className="font-medium text-black">Pax</span>
                        </div>
                        <div className="text-black font-medium">200 Pax</div>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-[#222222] flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#FFD700"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M2 20h20"></path>
                              <path d="M5 20V8.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C6.52 5 7.08 5 8.2 5h7.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C19 6.52 19 7.08 19 8.2V20"></path>
                              <path d="M12 5v15"></path>
                              <path d="M8 9h1"></path>
                              <path d="M15 9h1"></path>
                              <path d="M8 13h1"></path>
                              <path d="M15 13h1"></path>
                              <path d="M8 17h1"></path>
                              <path d="M15 17h1"></path>
                            </svg>
                          </div>
                          <span className="font-medium text-black">Room</span>
                        </div>
                        <div className="text-black font-medium">70 Room</div>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-[#222222] flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#FFD700"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M12 2a8 8 0 0 0-8 8c0 5.4 7 12 8 12s8-6.6 8-12a8 8 0 0 0-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
                            </svg>
                          </div>
                          <span className="font-medium text-black">City</span>
                        </div>
                        <div className="text-black font-medium">Agra</div>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-[#222222] flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#FFD700"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
                              <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
                              <path d="M12 3v6"></path>
                            </svg>
                          </div>
                          <span className="font-medium text-black">Venue</span>
                        </div>
                        <div className="text-black font-medium">Bng Bells</div>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-[#222222] flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#FFD700"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path>
                              <path d="M16.5 9.4 7.55 4.24"></path>
                              <polyline points="3.29 7 12 12 20.71 7"></polyline>
                              <line x1="12" y1="22" x2="12" y2="12"></line>
                              <circle cx="18.5" cy="15.5" r="2.5"></circle>
                              <path d="M20.27 17.27 22 19"></path>
                            </svg>
                          </div>
                          <span className="font-medium text-black">Package By</span>
                        </div>
                        <div className="text-black font-medium">Bng Bells</div>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-[#222222] flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#FFD700"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <circle cx="12" cy="12" r="10"></circle>
                              <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                          </div>
                          <span className="font-medium text-black">Offer Ends In</span>
                        </div>
                        <div className="text-red-500 font-medium">
                          {timeLeft.days} Days, {String(timeLeft.hours).padStart(2, "0")}:
                          {String(timeLeft.minutes).padStart(2, "0")}:{String(timeLeft.seconds).padStart(2, "0")}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Buttons */}
                  <div className="p-4 space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <button className="flex items-center justify-center gap-1 py-2 px-3 rounded-full border border-[#FFD700] bg-[#222222] transition-colors ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#FFD700"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        <span className="font-medium text-sm text-white">View Contact</span>
                      </button>

                      <button className="flex items-center justify-center gap-1 py-2 px-3 rounded-full bg-[#25D366] text-white hover:bg-[#128C7E] transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="white">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        <span className="font-medium text-sm">WhatsApp</span>
                      </button>
                    </div>

                    <button className="w-full flex items-center justify-center gap-1 py-2 px-3 rounded-full bg-[#FFD700] text-black hover:bg-[#E6C200] transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-black"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="17 8 12 3 7 8"></polyline>
                        <line x1="12" y1="3" x2="12" y2="15"></line>
                      </svg>
                      <span className="font-medium text-sm">Package Enquiry</span>
                    </button>
                  </div>

                  {/* Special Offer */}
                  <div className="p-4 bg-gradient-to-r from-[#222222] to-black text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-[#FFD700] flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                          <path d="M2 17l10 5 10-5"></path>
                          <path d="M2 12l10 5 10-5"></path>
                        </svg>
                      </div>
                      <h3 className="font-bold text-base">Special Offer</h3>
                    </div>
                    <p className="text-gray-300 mb-3 text-xs">
                      Book now and get a complimentary couple's photoshoot at the Taj Mahal!
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="text-xs text-gray-300">
                        Use code: <span className="font-bold text-[#FFD700]">WEDDING2023</span>
                      </div>
                      <button className="text-[#FFD700] font-medium text-xs hover:underline">Copy Code</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Package Includes */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-black">Package Includes</h2>
              <div className="flex flex-wrap gap-3">
                {packageIncludes.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#897712] bg-white hover:bg-[#FFF8E1] transition-colors group cursor-pointer"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#ddbe10] flex items-center justify-center">
                      <Check size={12} className="text-black" />
                    </div>
                    <span className="font-medium">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-black">Description</h2>
              <p className="text-gray-700 leading-relaxed">
                Create your dream destination wedding at Bng Bells in Agra! Enjoy premium rooms for you and your guests,
                plus tasty catering options made just for you.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Our luxury wedding package includes everything you need for a memorable celebration. From stunning
                decorations to professional entertainment, we've got you covered. The venue features beautiful
                architecture and spacious areas for all your wedding events.
              </p>

              {/* Expandable Content */}
              <div className="mt-4">
                <button className="text-[#FFD700] font-medium hover:underline flex items-center">
                  Read more about this package
                  <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            </div>

            {/* Venue Features */}
            <div className="bg-black rounded-xl p-6 text-white hidden md:block">
              <h2 className="text-xl font-bold mb-4 text-[#FFD700] ">Venue Highlights</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex flex-col items-center text-center p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[#FFD700] flex items-center justify-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-black"
                    >
                      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
                      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
                      <path d="M12 3v6"></path>
                    </svg>
                  </div>
                  <span className="font-medium">Luxury Venue</span>
                </div>
                <div className="flex flex-col items-center text-center p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[#FFD700] flex items-center justify-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-black"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <span className="font-medium">Prime Location</span>
                </div>
                <div className="flex flex-col items-center text-center p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[#FFD700] flex items-center justify-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-black"
                    >
                      <path d="M2 20h20"></path>
                      <path d="M5 20V8.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C6.52 5 7.08 5 8.2 5h7.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C19 6.52 19 7.08 19 8.2V20"></path>
                      <path d="M12 5v15"></path>
                      <path d="M8 9h1"></path>
                      <path d="M15 9h1"></path>
                      <path d="M8 13h1"></path>
                      <path d="M15 13h1"></path>
                      <path d="M8 17h1"></path>
                      <path d="M15 17h1"></path>
                    </svg>
                  </div>
                  <span className="font-medium">70 Rooms</span>
                </div>
                <div className="flex flex-col items-center text-center p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[#FFD700] flex items-center justify-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-black"
                    >
                      <path d="M12 12c-3.5 0-7-1.5-7-4 0-3.5 3.5-7 7-7s7 3.5 7 7c0 2.5-3.5 4-7 4Z"></path>
                      <path d="M5 12v4c0 2.5 3.5 4 7 4s7-1.5 7-4v-4"></path>
                      <path d="M5 16v4c0 2.5 3.5 4 7 4s7-1.5 7-4v-4"></path>
                    </svg>
                  </div>
                  <span className="font-medium">200 Pax</span>
                </div>
                <div className="flex flex-col items-center text-center p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[#FFD700] flex items-center justify-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-black"
                    >
                      <path d="M12 2a8 8 0 0 0-8 8c0 5.4 7 12 8 12s8-6.6 8-12a8 8 0 0 0-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
                    </svg>
                  </div>
                  <span className="font-medium">Agra</span>
                </div>
                <div className="flex flex-col items-center text-center p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[#FFD700] flex items-center justify-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-black"
                    >
                      <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                    </svg>
                  </div>
                  <span className="font-medium">Mix Menu</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Package Details */}
          <div className="lg:col-span-5 hidden md:block">
            <div className="bg-amber-50 rounded-lg shadow-lg overflow-hidden border border-[#FFD700] sticky top-2">
              <div className="p-4 border-b border-[#FFD700]">
                <h1 className="text-xl font-bold mb-4 text-black">Package Details</h1>

                {/* Package Details List */}
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#222222] flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#FFD700"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 6v6l4 2"></path>
                        </svg>
                      </div>
                      <span className="font-medium text-black">Price</span>
                    </div>
                    <div className="text-lg font-bold text-yellow-700">₹ 25,00,000</div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#222222] flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#FFD700"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                        </svg>
                      </div>
                      <span className="font-medium text-black">Food Type</span>
                    </div>
                    <div className="text-black font-medium">Mix Menu</div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#222222] flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#FFD700"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                      </div>
                      <span className="font-medium text-black">Pax</span>
                    </div>
                    <div className="text-black font-medium">200 Pax</div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#222222] flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#FFD700"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M2 20h20"></path>
                          <path d="M5 20V8.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C6.52 5 7.08 5 8.2 5h7.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C19 6.52 19 7.08 19 8.2V20"></path>
                          <path d="M12 5v15"></path>
                          <path d="M8 9h1"></path>
                          <path d="M15 9h1"></path>
                          <path d="M8 13h1"></path>
                          <path d="M15 13h1"></path>
                          <path d="M8 17h1"></path>
                          <path d="M15 17h1"></path>
                        </svg>
                      </div>
                      <span className="font-medium text-black">Room</span>
                    </div>
                    <div className="text-black font-medium">70 Room</div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#222222] flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#FFD700"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 2a8 8 0 0 0-8 8c0 5.4 7 12 8 12s8-6.6 8-12a8 8 0 0 0-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
                        </svg>
                      </div>
                      <span className="font-medium text-black">City</span>
                    </div>
                    <div className="text-black font-medium">Agra</div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#222222] flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#FFD700"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
                          <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
                          <path d="M12 3v6"></path>
                        </svg>
                      </div>
                      <span className="font-medium text-black">Venue</span>
                    </div>
                    <div className="text-black font-medium">Bng Bells</div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#222222] flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#FFD700"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path>
                          <path d="M16.5 9.4 7.55 4.24"></path>
                          <polyline points="3.29 7 12 12 20.71 7"></polyline>
                          <line x1="12" y1="22" x2="12" y2="12"></line>
                          <circle cx="18.5" cy="15.5" r="2.5"></circle>
                          <path d="M20.27 17.27 22 19"></path>
                        </svg>
                      </div>
                      <span className="font-medium text-black">Package By</span>
                    </div>
                    <div className="text-black font-medium">Bng Bells</div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#222222] flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#FFD700"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                      </div>
                      <span className="font-medium text-black">Offer Ends In</span>
                    </div>
                    <div className="text-red-500 font-medium">
                      {timeLeft.days} Days, {String(timeLeft.hours).padStart(2, "0")}:
                      {String(timeLeft.minutes).padStart(2, "0")}:{String(timeLeft.seconds).padStart(2, "0")}
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Buttons */}
              <div className="p-4 space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-center gap-1 py-2 px-3 rounded-full border border-[#FFD700] bg-[#222222] transition-colors ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FFD700"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span className="font-medium text-sm text-white">View Contact</span>
                  </button>

                  <button className="flex items-center justify-center gap-1 py-2 px-3 rounded-full bg-[#25D366] text-white hover:bg-[#128C7E] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <span className="font-medium text-sm">WhatsApp</span>
                  </button>
                </div>

                <button className="w-full flex items-center justify-center gap-1 py-2 px-3 rounded-full bg-[#FFD700] text-black hover:bg-[#E6C200] transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-black"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" y1="3" x2="12" y2="15"></line>
                  </svg>
                  <span className="font-medium text-sm">Package Enquiry</span>
                </button>
              </div>

              {/* Special Offer */}
              <div className="p-4 bg-gradient-to-r from-[#222222] to-black text-white">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#FFD700] flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                      <path d="M2 17l10 5 10-5"></path>
                      <path d="M2 12l10 5 10-5"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-base">Special Offer</h3>
                </div>
                <p className="text-gray-300 mb-3 text-xs">
                  Book now and get a complimentary couple's photoshoot at the Taj Mahal!
                </p>
                <div className="flex justify-between items-center">
                  <div className="text-xs text-gray-300">
                    Use code: <span className="font-bold text-[#FFD700]">WEDDING2023</span>
                  </div>
                  <button className="text-[#FFD700] font-medium text-xs hover:underline">Copy Code</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventManagementDetailsPage
