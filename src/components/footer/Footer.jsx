import React from "react";
import footer from '../../assets/A4 Celebration 1 (3).png'
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaInstagram, FaWhatsapp, FaFacebook, FaTwitter } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="bg-black text-white">
            {/* Top Footer Section */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <img 
                            className="h-32 object-contain" 
                            src={footer}
                            alt="Company Logo" 
                        />
                        <p className="text-gray-300">
                            Creating magical moments through exquisite decorations and thoughtful gifts
                        </p>
                        <div>
                            <h4 className="text-lg font-medium mb-3 text-amber-500">Newsletter</h4>
                            <div className="flex">
                                <input 
                                    type="email" 
                                    placeholder="Your email" 
                                    className="px-4 py-2 w-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-amber-500"
                                />
                                <button className="bg-amber-500 hover:bg-amber-600 text-black px-4 py-2 transition duration-300">
                                    <i className="fas fa-paper-plane"></i>
                                </button>
                            </div>
                            <p className="text-xs text-gray-400 mt-2">
                                By subscribing you agree to our <Link to="/terms" className="text-amber-400 hover:underline">Terms</Link> and <Link to="/privacy" className="text-amber-400 hover:underline">Privacy Policy</Link>.
                            </p>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h5 className="text-lg font-medium mb-4 text-amber-500">Our Services</h5>
                        <ul className="space-y-2 pl-0"> {/* Added pl-0 for symmetry */}
                            <li><Link to="/decorations/wedding-decoration" className="text-gray-300 hover:text-amber-400 transition">Wedding Decor</Link></li>
                            <li><Link to="/event-management/corporate-event" className="text-gray-300 hover:text-amber-400 transition">Corporate Events</Link></li>
                            <li><Link to="/decorations/birthday-decoration" className="text-gray-300 hover:text-amber-400 transition">Birthday Packages</Link></li>
                            <li><Link to="/giftings/customized" className="text-gray-300 hover:text-amber-400 transition">Custom Gift Boxes</Link></li>
                            <li><Link to="/decorations" className="text-gray-300 hover:text-amber-400 transition">Balloon Decorations</Link></li>
                        </ul>
                    </div>

                    {/* Quick Links Column */}
                    <div>
                        <h5 className="text-lg font-medium mb-4 text-amber-500">Quick Links</h5>
                        <ul className="space-y-2 pl-0"> {/* Added pl-0 for symmetry */}
                            <li><Link to="/about" className="text-gray-300 hover:text-amber-400 transition">About Us</Link></li>
                           
                            <li><Link to="/help" className="text-gray-300 hover:text-amber-400 transition">FAQ</Link></li>
                            <li><Link to="/contact" className="text-gray-300 hover:text-amber-400 transition">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column - Now Symmetrical */}
                   <div>
  <h5 className="text-lg font-medium mb-4 text-amber-500">Contact Us</h5>
  <ul className="space-y-2 pl-0">
  <li>
    <a
      href="https://www.google.com/maps/place/195,+Awadhpuri+Rd,+near+ICICI+Bank,+Lakhanpur,+Khyora,+Kanpur,+Uttar+Pradesh+208024"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-amber-400 transition cursor-pointer"
    >
      195, Awadhpuri Rd, near ICICI Bank, Lakhanpur, Khyora, Kanpur, Uttar Pradesh 208024
    </a>
  </li>
  <li>
    <a
      href="tel:+91 8750200899"
      className="text-gray-300 hover:text-amber-400 transition cursor-pointer"
    >
     +91 8750200899
    </a>
  </li>
  <li>
    <a
      href="mailto:hello@deificdigital.com"
      className="text-gray-300 hover:text-amber-400 transition cursor-pointer"
    >
      hello@deificdigital.com
    </a>
  </li>
  <li>
    <span className="text-gray-300">Mon-Sat: 10AM–7PM</span>
  </li>
</ul>

  <div className="mt-6">
    <h6 className="text-gray-400 mb-3">Follow Us</h6>
     <div className="flex gap-4">
                    <a href="https://www.instagram.com/a4celebration/" className="p-1 bg-black text-white rounded-full hover:bg-yellow-600 transition">
                      <FaInstagram className="text-xl" />
                    </a>
                    <a
                      href="https://wa.me/918750200899"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-1 bg-black text-white rounded-full hover:bg-yellow-600 transition"
                    >
                      <FaWhatsapp className="text-xl" />
    
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61562203856563" className="p-1 bg-black text-white rounded-full hover:bg-yellow-600 transition">
                      <FaFacebook className="text-xl" />
                    </a>
                    <a href="#" className="p-1 bg-black text-white rounded-full hover:bg-yellow-600 transition">
                      <FaTwitter className="text-xl" />
                    </a>
                  </div>
  </div>
</div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-800"></div>

            {/* Bottom Footer Section */}
            <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                   <div className="text-gray-400 text-sm mb-4 md:mb-0">
  &copy; {new Date().getFullYear()}{" "}
  <a
    href="https://deificdigital.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white underline cursor-pointer"
  >
    Deific Digital
  </a>. All rights reserved.
</div>


                    <div className="flex flex-wrap justify-center space-x-4">
                        <Link to="/privacy" className="text-gray-400 hover:text-amber-400 text-sm transition">Privacy Policy</Link>
                        <Link to="/terms" className="text-gray-400 hover:text-amber-400 text-sm transition">Terms of Service</Link>
                       
                        <Link to="/refunds" className="text-gray-400 hover:text-amber-400 text-sm transition">Refund Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;