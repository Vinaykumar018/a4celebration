import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaInstagram, FaWhatsapp, FaFacebook, FaTwitter } from 'react-icons/fa';

import { useState } from 'react';
import axios from 'axios';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const ContactPage = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = import.meta.env.VITE_API_URL;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    // Clear error when user types
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitStatus({ loading: true, success: false, error: null });

    if (!validateForm()) {
      setSubmitStatus({ loading: false, success: false, error: 'Please fix the errors in the form' });
      return;
    }

    try {
      const response = await axios.post(`${API_URL}contact`, formData, {
        headers: {
          Authorization: `Bearer ${API_KEY} `
        }
      })

      const data = await response.data;


      if (!data.success) {
        throw new Error(data.message || 'Failed to submit form');
      }

      setSubmitStatus({ loading: false, success: true, error: null });
      setFormData({ name: '', email: '', phone: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(prev => ({ ...prev, success: false }));
      }, 5000);
    } catch (err) {
      setSubmitStatus({ loading: false, success: false, error: err.message });
    }
  };
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-black text-white py-20">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gold-300">We'd love to hear from you!</p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Info */}
          <div className="md:w-1/2 space-y-8">
            <h2 className="text-3xl font-bold text-black mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-yellow-600">
              Get In Touch
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-yellow-100 rounded-full text-yellow-600">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-black">Our Address</h3>
                  <p className="text-gray-600">195, Awadhpuri Rd, near ICICI Bank, Lakhanpur, Khyora, Kanpur, Uttar Pradesh 208024</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-yellow-100 rounded-full text-yellow-600">
                  <FaPhone className="text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-black">Phone Number</h3>
                  <p className="text-gray-600">+91 8750200899</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-yellow-100 rounded-full text-yellow-600">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-black">Email Address</h3>
                  <p className="text-gray-600">hello@deificdigital.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-yellow-100 rounded-full text-yellow-600">
                  <FaClock className="text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-black">Working Hours</h3>
                  <p className="text-gray-600">Mon-Sat: 10AM–7PM</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h3 className="font-bold text-lg text-black mb-4">Connect With Us</h3>
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-black text-white rounded-full hover:bg-yellow-600 transition">
                  <FaInstagram className="text-xl" />
                </a>
                <a
                  href="https://wa.me/918750200899"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 bg-black text-white rounded-full hover:bg-yellow-600 transition"
                >
                  <FaWhatsapp className="text-xl" />

                </a>
                <a href="#" className="p-3 bg-black text-white rounded-full hover:bg-yellow-600 transition">
                  <FaFacebook className="text-xl" />
                </a>
                <a href="#" className="p-3 bg-black text-white rounded-full hover:bg-yellow-600 transition">
                  <FaTwitter className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 bg-gray-50 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-black mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-yellow-600">
              Send Us a Message
            </h2>

            {/* Success Message */}
            {submitStatus.success && (
              <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg flex items-center gap-3">
                <FaCheckCircle className="text-xl" />
                <div>
                  <p className="font-medium">Thank you for your message!</p>
                  <p className="text-sm">We'll get back to you soon.</p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submitStatus.error && (
              <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg flex items-center gap-3">
                <FaExclamationCircle className="text-xl" />
                <div>
                  <p className="font-medium">Error submitting form</p>
                  <p className="text-sm">{submitStatus.error}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-yellow-500`}
                  placeholder="Enter your name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-yellow-500`}
                  placeholder="Enter your email"
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-yellow-500`}
                  placeholder="Enter your message"
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={submitStatus.loading}
                className={`w-full bg-black text-white py-3 px-6 rounded font-medium hover:bg-yellow-600 transition duration-300 flex justify-center items-center ${submitStatus.loading ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {submitStatus.loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="container mx-auto px-6 pb-16">
        <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.7340029790134!2d80.27750257365282!3d26.49650807785619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c376af134d9b5%3A0x9acdf50018a9366a!2sDeific%20Digital!5e0!3m2!1sen!2sin!4v1750843136245!5m2!1sen!2sin" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="A4Celebration Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;