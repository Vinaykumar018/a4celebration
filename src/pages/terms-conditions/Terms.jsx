import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="md:w-1/3 bg-gradient-to-b from-yellow-600 to-yellow-700 p-6 text-white">
            <div className="sticky top-6">
              <h1 className="text-2xl font-bold mb-1">Terms of Service</h1>
              <p className="text-yellow-100 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

              {/* Quick Links */}
              <div className="mb-8">
                <h2 className="font-semibold text-lg mb-3">Quick Links</h2>
                <ul className="space-y-2">
                  <li><a href="#orders" className="text-yellow-100 hover:text-white">Orders & Cancellations</a></li>
                  <li><a href="#payments" className="text-yellow-100 hover:text-white">Payments</a></li>
                  <li><a href="#returns" className="text-yellow-100 hover:text-white">Returns & Refunds</a></li>
                  <li><a href="#liability" className="text-yellow-100 hover:text-white">Liability</a></li>
                </ul>
              </div>

              {/* Contact Information */}
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
                These terms govern your use of our services. By using our website or services, you agree to these terms.
              </p>

              <section id="orders" className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-yellow-200 pb-2">1. Orders & Cancellations</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p>You can cancel your order or service up to <strong className="text-yellow-600">4 hours</strong> before the scheduled time.</p>
                    <p>After this period, cancellation may not be possible as the service is already prepared or dispatched.</p>
                  </div>
                  <p>All orders are subject to availability. We reserve the right to refuse or cancel any order.</p>
                </div>
              </section>

              <section id="payments" className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-yellow-200 pb-2">2. Payments</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p>We exclusively use Razorpay for secure payments, which supports:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Credit/Debit Cards</li>
                      <li>Net Banking</li>
                      <li>UPI Payments</li>
                      <li>Cash on Delivery (COD) - Available for select locations</li>
                    </ul>
                  </div>
                  <p>All prices are in INR and inclusive of applicable taxes unless stated otherwise.</p>
                </div>
              </section>

              <section id="returns" className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-yellow-200 pb-2">3. Returns & Refunds</h2>
                <div className="space-y-4">
                  <p>Returns are accepted within <strong className="text-yellow-600">15 days</strong> of delivery for eligible products.</p>
                  <p>Refunds will be processed to the original payment method within 7-10 business days after we receive the returned item.</p>
                </div>
              </section>

              <section id="liability" className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-yellow-200 pb-2">4. Liability</h2>
                <div className="space-y-4">
                  <p>We are not liable for any indirect, incidental, or consequential damages arising from your use of our services.</p>
                  <p>We reserve the right to modify these terms at any time. Continued use after changes constitutes acceptance.</p>
                </div>
              </section>

              <div className="mt-12 bg-yellow-50 rounded-lg p-6 border border-yellow-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Need Help?</h3>
                <p className="text-gray-600 mb-5">
                  Contact us if you have any questions about our terms of service.
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

export default TermsOfService;