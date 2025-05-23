import React, { useState } from 'react';

const HelpCentre = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  const faqs = [
    {
      question: "How do I reset my password?",
      answer: "To reset your password, go to the login page and click on 'Forgot Password'..."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, Amex), PayPal, and bank transfers."
    },
    {
      question: "How can I contact customer support?",
      answer: "You can reach our support team 24/7 via email or live chat on our website."
    },
    {
      question: "What is your refund policy?",
      answer: "We offer a 30-day money-back guarantee. Contact support within 30 days of purchase."
    },
    {
      question: "How do I update my account information?",
      answer: "Log into your account, go to 'Account Settings', and make the changes you need."
    }
  ];

  return (

    <div class="w-full  bg-amber-50 p-2">
      <div className="mx-auto max-w-6xl p-4 bg-amber-100 min-h-screen rounded-xl shadow-md">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="md:w-1/3 p-6">
            <div className="sticky top-0">
              <h2 className="text-3xl font-bold text-amber-600 mb-6">FAQs</h2>
              <p className="text-sm text-amber-800 mb-1">Need help?</p>
              <p className="text-xs text-gray-500">Search or browse our help topics below.</p>

              <div className="relative mt-6">
                <input
                  type="search"
                  placeholder="Search..."
                  className="w-full py-3 pl-10 pr-4 text-sm rounded-full border border-amber-300 focus:ring-2 focus:ring-amber-400 focus:outline-none shadow-sm"
                />
                <svg className="w-5 h-5 absolute left-3 top-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M12.9 14.32a8 8 0 111.41-1.41l4.3 4.3-1.41 1.41-4.3-4.3zM8 14a6 6 0 100-12 6 6 0 000 12z" />
                </svg>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="md:w-2/3 p-6 space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                onClick={() => toggleFaq(index)}
                className="border border-amber-200 bg-white rounded-lg p-5 shadow-sm cursor-pointer hover:shadow-md transition"
              >
                <div className="flex justify-between items-center">
                  <h4 className={`font-semibold ${openFaq === index ? 'text-amber-600' : 'text-gray-800'}`}>
                    {faq.question}
                  </h4>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform ${openFaq === index ? 'rotate-180' : ''
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                {openFaq === index && (
                  <p className="mt-3 text-sm text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}

            {/* Contact Section */}
            <div className="bg-amber-100 border border-amber-200 rounded-lg p-6 shadow-inner mt-12">
              <h3 className="text-xl font-semibold text-amber-700 mb-3">Still need help?</h3>
              <p className="text-sm text-gray-700 mb-4">
                If your issue wasn't resolved, reach out to us anytime!
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-medium text-amber-600 mb-2">Contact</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>📞 +1 (555) 123-4567</li>
                    <li>📧 support@example.com</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-amber-600 mb-2">Social</h4>
                  <div className="flex gap-4 text-amber-500">
                    <a href="https://twitter.com/example" className="hover:text-amber-700">🐦 Twitter</a>
                    <a href="https://facebook.com/example" className="hover:text-amber-700">📘 Facebook</a>
                    <a href="https://wa.me/15551234567" className="hover:text-amber-700">💬 WhatsApp</a>
                    <a href="https://t.me/example" className="hover:text-amber-700">📨 Telegram</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCentre;
