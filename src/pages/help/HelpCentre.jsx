import React, { useState } from 'react';
import { FiSearch, FiChevronDown, FiChevronUp, FiPhone, FiMail, FiClock, FiMapPin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const HelpCentre = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  const faqs = [
    {
      question: "How long do I have to return a product?",
      answer: (
        <div className="space-y-2">
          <p>You can return a product within <strong className="text-yellow-600">15 days</strong> of delivery.</p>
          <p>The product must be unused and in its original packaging to be eligible for a return.</p>
        </div>
      )
    },
    {
      question: "How can I cancel my order or service?",
      answer: (
        <div className="space-y-2">
          <p>You can cancel your order or service up to <strong className="text-yellow-600">4 hours</strong> before the scheduled time.</p>
          <p>After this period, cancellation may not be possible as the service is already prepared or dispatched.</p>
        </div>
      )
    },
    {
      question: "What payment methods do you accept?",
      answer: (
        <div className="space-y-2">
          <p>We exclusively use Razorpay for secure payments, which supports:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Credit/Debit Cards</li>
            <li>Net Banking</li>
            <li>UPI Payments</li>
            <li>Cash on Delivery (COD) - Available for select locations</li>
          </ul>
        </div>
      )
    },
    {
      question: "How can I contact customer support?",
      answer: (
        <div className="space-y-2">
          <p>Our customer support team is available:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Phone: <a href="tel:+918750200899" className="text-yellow-600 hover:underline">+91 8750200899</a></li>
            <li>Email: <a href="mailto:hello@deificdigital.com" className="text-yellow-600 hover:underline">hello@deificdigital.com</a></li>
            <li>WhatsApp: <a href="https://wa.me/918750200899" className="text-yellow-600 hover:underline">Chat with us</a></li>
            <li>Hours: Mon-Sat, 10AM–7PM</li>
          </ul>
        </div>
      )
    },
    {
      question: "How do I update my account information?",
      answer: (
        <div className="space-y-2">
          <p>To update your account details:</p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Log into your account</li>
            <li>Go to 'My Profile'</li>
            <li>Click on 'Edit Profile' button</li>
            <li>Make your changes</li>
            <li>Click 'Save Changes' to update</li>
          </ol>
        </div>
      )
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (typeof faq.answer === 'string' && faq.answer.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="md:w-1/3 bg-gradient-to-b from-yellow-600 to-yellow-500 p-6 text-white">
            <div className="sticky top-6">
              <h1 className="text-2xl font-bold mb-1">Help Centre</h1>
              <p className="text-yellow-100 mb-6">Find answers to your questions</p>
              
              <div className="relative mb-8">
                <FiSearch className="absolute left-3 top-3.5 text-yellow-200" />
                <input
                  type="search"
                  placeholder="Search help articles..."
                  className="w-full pl-10 pr-4 py-2.5 bg-yellow-500 text-white placeholder-yellow-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

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

          {/* FAQ Section */}
          <div className="md:w-2/3 p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
            
            {filteredFaqs.length > 0 ? (
              <div className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-5 py-4 text-left flex justify-between items-center bg-gray-50 hover:bg-gray-100"
                    >
                      <h3 className="font-medium text-gray-800">{faq.question}</h3>
                      {openFaq === index ? (
                        <FiChevronUp className="text-gray-500" />
                      ) : (
                        <FiChevronDown className="text-gray-500" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-5 py-4 bg-white text-gray-700 border-t border-gray-100">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-500">No results found for "{searchQuery}"</p>
              </div>
            )}

            {/* Contact CTA */}
            <div className="mt-12 bg-yellow-50 rounded-lg p-6 border border-yellow-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Still need help?</h3>
              <p className="text-gray-600 mb-5">
                Our team is ready to assist you with any questions or concerns you may have.
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
  );
};

export default HelpCentre;