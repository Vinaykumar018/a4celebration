import React from "react";
import {
  Store,
  Truck,
  Undo2,
  ShieldCheck,
  BadgeCheck,
  Users,
  Star,
  CreditCard,
  IndianRupee
} from 'lucide-react';

const DeliveryInfo = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; }
      `}</style>

      <div className="bg-yellow-50 p-3 rounded-lg shadow-sm max-w-2xl mx-auto border border-yellow-100">
        {/* Delivery Section */}
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-2">
            <Truck className="w-5 h-5 text-yellow-700" />
            <h3 className="font-semibold text-yellow-900">Delivery Options</h3>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-start gap-2 p-2 bg-white rounded-md border border-yellow-100">
              <Store className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-yellow-900 text-sm">Services Orders</p>
                <p className="text-gray-600 text-xs">On time (before 1 hr of requested)</p>
              </div>
            </div>
            
            <div className="flex items-start gap-2 p-2 bg-white rounded-md border border-yellow-100">
              <Truck className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-yellow-900 text-sm">Ecommerce Orders</p>
                <p className="text-gray-600 text-xs">3-7 business days delivery</p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Section */}
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck className="w-5 h-5 text-yellow-700" />
            <h3 className="font-semibold text-yellow-900">Payment Methods</h3>
          </div>
          
          <div className="grid grid-cols-3 gap-2 mb-2">
            <div className="p-2 bg-white rounded-md border border-yellow-100 flex flex-col items-center">
              <img 
                src="https://masteriyo.com/wp-content/uploads/2023/12/razorpay-integration.webp" 
                alt="Razorpay" 
                className="h-10 object-contain mb-1"
              />
             <span className="text-xs text-yellow-800">RazorPay</span>
            
            </div>
            
            <div className="p-2 bg-white rounded-md border border-yellow-100 flex flex-col items-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/UPI-Logo.png" 
                alt="Razorpay" 
                className="h-10 object-cover mb-1"
              />
              <span className="text-xs text-yellow-800">UPI</span>
            </div>
            
            <div className="p-2 bg-white rounded-md border border-yellow-100 flex flex-col items-center">
             <img 
                src="https://media.istockphoto.com/id/537487845/vector/payment-by-cash.jpg?s=612x612&w=0&k=20&c=ikEp0CWBCwizA4xdzFGUw1QO0FBGfjE1_iq-aOco8Dg=" 
                alt="Razorpay" 
                className="h-10 object-cover mb-1"
              />
               <span className="text-xs text-yellow-800">COD</span>
            </div>
          </div>
          
          <div className="flex items-center gap-1 text-xs text-yellow-700">
            <ShieldCheck className="w-3 h-3" />
            <span>100% Secure Payments</span>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="bg-yellow-100 p-2 rounded-md">
          <div className="flex items-center gap-2 mb-2">
            <Star className="w-5 h-5 text-yellow-700" />
            <h3 className="font-semibold text-yellow-900 text-sm">Why Customers Trust Us</h3>
          </div>
          
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4 text-yellow-700" />
              <span>10K+ Customers</span>
            </div>
            
            <div className="flex items-center gap-1">
              <BadgeCheck className="w-4 h-4 text-yellow-700" />
              <span>Original Images</span>
            </div>
            
            <div className="flex items-center gap-1">
              <Undo2 className="w-4 h-4 text-yellow-700" />
              <span>Expert Decorators</span>
            </div>
            
            <div className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-yellow-700" />
              <span>Secure Payments</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeliveryInfo;