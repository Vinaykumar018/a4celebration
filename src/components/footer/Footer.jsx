import React from "react";
import footer from '../../assets/A4 Celebration 1 (3).png'
import { Link } from "react-router-dom";

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
                                By subscribing you agree to our <Link to="" className="text-amber-400 hover:underline">Terms</Link> and <Link to="" className="text-amber-400 hover:underline">Privacy Policy</Link>.
                            </p>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h5 className="text-lg font-medium mb-4 text-amber-500">Our Services</h5>
                        <ul className="space-y-2">
                            <li><Link to="" className="text-gray-300 hover:text-amber-400 transition">Wedding Decor</Link></li>
                            <li><Link to="" className="text-gray-300 hover:text-amber-400 transition">Corporate Events</Link></li>
                            <li><Link to="" className="text-gray-300 hover:text-amber-400 transition">Birthday Packages</Link></li>
                            <li><Link to="" className="text-gray-300 hover:text-amber-400 transition">Custom Gift Boxes</Link></li>
                            <li><Link to="" className="text-gray-300 hover:text-amber-400 transition">Balloon Decorations</Link></li>
                        </ul>
                    </div>

                    {/* Quick Links Column */}
                    <div>
                        <h5 className="text-lg font-medium mb-4 text-amber-500">Quick Links</h5>
                        <ul className="space-y-2">
                            <li><Link to="" className="text-gray-300 hover:text-amber-400 transition">About Us</Link></li>
                            <li><Link to="" className="text-gray-300 hover:text-amber-400 transition">Gallery</Link></li>
                            <li><Link to="" className="text-gray-300 hover:text-amber-400 transition">Testimonials</Link></li>
                            <li><Link to="" className="text-gray-300 hover:text-amber-400 transition">FAQ</Link></li>
                            <li><Link to="" className="text-gray-300 hover:text-amber-400 transition">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h5 className="text-lg font-medium mb-4 text-amber-500">Contact Us</h5>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <i className="fas fa-map-marker-alt text-amber-400 mt-1 mr-3"></i>
                                <span className="text-gray-300">123 Celebration St, Event City</span>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-phone text-amber-400 mr-3"></i>
                                <span className="text-gray-300">+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-envelope text-amber-400 mr-3"></i>
                                <span className="text-gray-300">info@yourcompany.com</span>
                            </li>
                        </ul>
                        <div className="mt-4">
                            <h6 className="text-gray-400 mb-2">Follow Us</h6>
                            <div className="flex space-x-4">
                                <Link to="" className="text-amber-400 hover:text-amber-300 text-xl">
                                    <i className="fab fa-instagram"></i>
                                </Link>
                                <Link to="" className="text-amber-400 hover:text-amber-300 text-xl">
                                    <i className="fab fa-facebook"></i>
                                </Link>
                                <Link to="" className="text-amber-400 hover:text-amber-300 text-xl">
                                    <i className="fab fa-pinterest"></i>
                                </Link>
                                <Link to="" className="text-amber-400 hover:text-amber-300 text-xl">
                                    <i className="fab fa-tiktok"></i>
                                </Link>
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
                        &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
                    </div>
                    <div className="flex flex-wrap justify-center space-x-4">
                        <Link to="" className="text-gray-400 hover:text-amber-400 text-sm">Privacy Policy</Link>
                        <Link to="" className="text-gray-400 hover:text-amber-400 text-sm">Terms of Service</Link>
                        <Link to="" className="text-gray-400 hover:text-amber-400 text-sm">Shipping Policy</Link>
                        <Link to="" className="text-gray-400 hover:text-amber-400 text-sm">Refund Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;