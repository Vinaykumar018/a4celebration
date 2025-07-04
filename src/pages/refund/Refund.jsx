import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="md:w-1/3 bg-gradient-to-b from-yellow-600 to-yellow-700 p-6 text-white">
            <div className="sticky top-6">
              <h1 className="text-2xl font-bold mb-1">Refund Policy</h1>
              <p className="text-yellow-100 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

              {/* Quick Links */}
              <div className="mb-8">
                <h2 className="font-semibold text-lg mb-3">Quick Links</h2>
                <ul className="space-y-2">
                  <li><a href="#eligibility" className="text-yellow-100 hover:text-white">Eligibility</a></li>
                  <li><a href="#process" className="text-yellow-100 hover:text-white">Refund Process</a></li>
                  <li><a href="#timelines" className="text-yellow-100 hover:text-white">Timelines</a></li>
                  <li><a href="#exceptions" className="text-yellow-100 hover:text-white">Exceptions</a></li>
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
                We strive for complete customer satisfaction. If you're not satisfied with your purchase, 
                you may be eligible for a refund under the following policy.
              </p>

              <section id="eligibility" className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-yellow-200 pb-2">1. Eligibility for Refunds</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p>To be eligible for a refund:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>The request must be made within <strong className="text-yellow-600">15 days</strong> of purchase</li>
                      <li>The product must be unused, unopened, and in original packaging</li>
                      <li>For services, cancellation must be made at least <strong className="text-yellow-600">4 hours</strong> before scheduled time</li>
                    </ul>
                  </div>
                  <p>Proof of purchase or receipt is required for all refund requests.</p>
                </div>
              </section>

              <section id="process" className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-yellow-200 pb-2">2. Refund Process</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p>To initiate a refund:</p>
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>Contact our customer support with your order details</li>
                      <li>Return the product (if applicable) with all original accessories</li>
                      <li>Wait for confirmation of receipt and inspection</li>
                      <li>Receive refund to original payment method</li>
                    </ol>
                  </div>
                  <p>Return shipping costs are the customer's responsibility unless the return is due to our error.</p>
                </div>
              </section>

              <section id="timelines" className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-yellow-200 pb-2">3. Refund Timelines</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <ul className="list-disc pl-5 space-y-1">
                      <li><strong className="text-yellow-600">Credit/Debit Cards:</strong> 5-10 business days</li>
                      <li><strong className="text-yellow-600">UPI/NET Banking:</strong> 3-5 business days</li>
                      <li><strong className="text-yellow-600">Cash on Delivery:</strong> Refund via bank transfer (7-10 business days)</li>
                    </ul>
                  </div>
                  <p>The processing time begins after we receive and inspect your return (for products).</p>
                </div>
              </section>

              <section id="exceptions" className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-yellow-200 pb-2">4. Non-Refundable Items/Services</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p>The following are typically not eligible for refunds:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Services already rendered</li>
                      <li>Downloadable software or digital products</li>
                      <li>Personalized or custom-made products</li>
                      <li>Gift cards</li>
                    </ul>
                  </div>
                  <p>Partial refunds may be granted in special circumstances at our discretion.</p>
                </div>
              </section>

              <div className="mt-12 bg-yellow-50 rounded-lg p-6 border border-yellow-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Need Help With Refunds?</h3>
                <p className="text-gray-600 mb-5">
                  Our customer support team is happy to assist with any refund-related questions.
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

export default RefundPolicy;