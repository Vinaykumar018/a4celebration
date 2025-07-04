import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar - Consistent with Help Centre */}
          <div className="md:w-1/3 bg-gradient-to-b from-yellow-600 to-yellow-700 p-6 text-white">
            <div className="sticky top-6">
              <h1 className="text-2xl font-bold mb-1">Privacy Policy</h1>
              <p className="text-yellow-100 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
              
              <div className="mb-8">
                <h2 className="font-semibold text-lg mb-3">Quick Links</h2>
                <ul className="space-y-2">
                  <li><a href="#data-collection" className="text-yellow-100 hover:text-white">Data Collection</a></li>
                  <li><a href="#data-use" className="text-yellow-100 hover:text-white">How We Use Data</a></li>
                  <li><a href="#data-protection" className="text-yellow-100 hover:text-white">Data Protection</a></li>
                  <li><a href="#cookies" className="text-yellow-100 hover:text-white">Cookies</a></li>
                  <li><a href="#rights" className="text-yellow-100 hover:text-white">Your Rights</a></li>
                </ul>
              </div>

              {/* Contact Information - Same as Help Centre */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FiMapPin className="text-yellow-200 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Our Location</h3>
                    <p className="text-sm text-yellow-100">
                      195, Awadhpuri Rd, near ICICI Bank,<br />
                      Lakhanpur, Khyora, Kanpur,<br />
                      Uttar Pradesh 208024
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <FiPhone className="text-yellow-200 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Call Us</h3>
                    <a href="tel:+918750200899" className="text-sm text-yellow-100 hover:underline block">
                      +91 8750200899
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <FiMail className="text-yellow-200 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Email Us</h3>
                    <a href="mailto:hello@deificdigital.com" className="text-sm text-yellow-100 hover:underline block">
                      hello@deificdigital.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <FiClock className="text-yellow-200 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Working Hours</h3>
                    <p className="text-sm text-yellow-100">
                      Mon-Sat: 10AM–7PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:w-2/3 p-6">
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-6">
                We are committed to protecting your privacy. This policy explains how we collect, use, 
                and safeguard your personal information when you use our services.
              </p>

              <section id="data-collection" className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-yellow-200 pb-2">1. Data Collection</h2>
                <p className="mb-4">
                  We collect information to provide better services to all our users. The types of personal 
                  information we collect include:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Contact information (name, email address, phone number)</li>
                  <li>Demographic information (age, gender, location)</li>
                  <li>Payment and transaction details</li>
                  
                </ul>
                <p>
                  We collect this information when you register, use our services, make purchases, 
                  or interact with our website.
                </p>
              </section>

              <section id="data-use" className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-yellow-200 pb-2">2. How We Use Data</h2>
                <p className="mb-4">We use the information we collect for various purposes:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>To provide and maintain our services</li>
                  <li>To process transactions and send order confirmations</li>
                  <li>To communicate with you (service updates, security alerts)</li>
                  <li>To improve our products and services</li>
                  <li>To prevent fraud and enhance security</li>
                
                </ul>
              </section>

              <section id="data-protection" className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-yellow-200 pb-2">3. Data Protection</h2>
                <p className="mb-4">
                  We implement appropriate security measures to protect your personal information:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Encryption of sensitive data in transit and at rest</li>
                  <li>Regular security assessments and audits</li>
                  <li>Access controls to limit who can view your information</li>
                  <li>Secure payment processing through trusted partners</li>
                </ul>
                <p>
                  While we strive to protect your data, no method of transmission over the internet 
                  is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section id="cookies" className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-yellow-200 pb-2">4. Cookies</h2>
                <p className="mb-4">
                  We use cookies and similar tracking technologies to:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Remember your preferences</li>
                  <li>Analyze site traffic and usage patterns</li>
                  <li>Deliver personalized content</li>
                  <li>Support marketing efforts</li>
                </ul>
                <p>
                  You can control cookies through your browser settings, but disabling them may affect 
                  certain features of our website.
                </p>
              </section>

             

              <div className="mt-12 bg-yellow-50 rounded-lg p-6 border border-yellow-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Questions About Our Privacy Policy?</h3>
                <p className="text-gray-600 mb-5">
                  If you have any questions about how we handle your personal information, 
                  please don't hesitate to contact us.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+918750200899"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
                  >
                    <FiPhone />
                    Call Us
                  </a>
                  <a
                    href="https://wa.me/918750200899"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <FaWhatsapp />
                    WhatsApp
                  </a>
                  <a
                    href="mailto:hello@deificdigital.com"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                  >
                    <FiMail />
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;