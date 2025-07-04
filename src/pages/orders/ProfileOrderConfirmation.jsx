import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getOrderById } from '../../services/decoration-orders/order-api';
import { CheckCircle, Truck, CreditCard, Package, User, MapPin, Calendar, Clock, XCircle, Loader2, ChevronRight } from "lucide-react";
import ReceiptDownloadButton from './Receipt-order';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';

export default function ProfileOrderConfirmation() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { orderId } = useParams();
  const [orderData, setOrderData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const data = await getOrderById(orderId);
        setOrderData(data?.data);
      } catch (err) {
        setError(err?.response?.data?.message || 'Failed to fetch order');
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const formatAddress = () => {
    if (!orderData?.addressDetails) return 'No address provided';
    const { home_address, street_address, city_address, pincode } = orderData.addressDetails;
    return `${home_address}, ${street_address}, ${city_address}, ${pincode}`;
  };

  const getStatusColor = (status) => {
    if (!status) return "bg-gray-100 text-gray-800";
    switch (status.toLowerCase()) {
      case "processing":
        return "bg-amber-100 text-amber-800";
      case "confirmed":
        return "bg-green-100 text-green-800";
      case "shipped":
        return "bg-blue-100 text-blue-800";
      case "delivered":
        return "bg-purple-100 text-purple-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status) => {
    switch (status?.toLowerCase()) {
      case "processing":
        return <Loader2 className="w-5 h-5 animate-spin" />;
      case "confirmed":
        return <CheckCircle className="w-5 h-5" />;
      case "shipped":
        return <Truck className="w-5 h-5" />;
      case "delivered":
        return <Package className="w-5 h-5" />;
      case "cancelled":
        return <XCircle className="w-5 h-5" />;
      default:
        return <Package className="w-5 h-5" />;
    }
  };

  


  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <Loader2 className="w-12 h-12 animate-spin text-amber-500" />
    </div>
  );
  
  if (error) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center p-6 max-w-md bg-red-50 rounded-lg">
        <XCircle className="w-12 h-12 mx-auto text-red-500 mb-4" />
        <h2 className="text-xl font-bold text-red-700 mb-2">Error Loading Order</h2>
        <p className="text-gray-600 mb-4">{error}</p>
        <Link 
          to="/profile" 
          className="px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors inline-block"
        >
          Back to Profile
        </Link>
      </div>
    </div>
  );
  
  if (!orderData) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center p-6 max-w-md bg-amber-50 rounded-lg">
        <Package className="w-12 h-12 mx-auto text-amber-500 mb-4" />
        <h2 className="text-xl font-bold text-amber-700 mb-2">Order Not Found</h2>
        <p className="text-gray-600 mb-4">We couldn't find details for this order.</p>
        <Link 
          to="/" 
          className="px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors inline-block"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );

  // Order status timeline
  const statusSteps = [
    { id: 'pending', label: 'Pending', active: ['pending', 'processing', 'confirmed', 'shipped', 'delivered'].includes(orderData?.orderDetails?.order_status?.toLowerCase()) },
    { id: 'processing', label: 'Processing', active: ['processing', 'confirmed', 'shipped', 'delivered'].includes(orderData?.orderDetails?.order_status?.toLowerCase()) },
    { id: 'confirmed', label: 'Confirmed', active: ['confirmed', 'shipped', 'delivered'].includes(orderData?.orderDetails?.order_status?.toLowerCase()) },
    { id: 'shipped', label: 'Shipped', active: ['shipped', 'delivered'].includes(orderData?.orderDetails?.order_status?.toLowerCase()) },
    { id: 'delivered', label: 'Delivered', active: orderData?.orderDetails?.order_status?.toLowerCase() === 'delivered' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Success Animation */}
        <AnimatePresence>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center mb-8 pt-8"
          >
            {orderData?.orderDetails?.order_status?.toLowerCase() === 'cancelled' ? (
              <>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                >
                  <XCircle className="w-24 h-24 text-red-500" />
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl md:text-4xl font-bold text-red-700 text-center mt-4"
                >
                  Order Cancelled
                </motion.h1>
              </>
            ) : (
              <>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                >
                  <CheckCircle className="w-24 h-24 text-amber-500" />
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl md:text-4xl font-bold text-amber-700 text-center mt-4"
                >
                  Thank You for Your Order!
                </motion.h1>
              </>
            )}
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-2 text-center"
            >
              <p className="text-lg text-gray-600">
                Your order <span className="font-semibold text-amber-600">{orderData?.order_id || 'N/A'}</span> is{" "}
                <span className={`font-medium ${getStatusColor(orderData?.orderDetails?.order_status).split(' ')[1]}`}>
                  {orderData?.orderDetails?.order_status || 'Unknown'}
                </span>
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Order Status Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-6"
        >
          <div className="mb-6">
  <div className="bg-white p-4 rounded-lg shadow-sm border border-amber-100">
    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
      <Truck className="w-5 h-5 mr-2 text-amber-600" />
      Order Progress
    </h3>
    
    <div className="relative">
      {/* Horizontal progress line */}
      <div className="absolute left-4 right-4 top-1/2 h-0.5 bg-gray-200 -translate-y-1/2"></div>
      
      <div className="flex justify-between relative z-10">
        {statusSteps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center" style={{ width: `${100/statusSteps.length}%` }}>
            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mb-2
              ${step.active ? 'bg-amber-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
              {step.active ? (
                <CheckCircle className="w-4 h-4" />
              ) : (
                <span className="text-xs font-medium">{index + 1}</span>
              )}
            </div>
            <h4 className={`text-xs sm:text-sm font-medium text-center ${step.active ? 'text-gray-900' : 'text-gray-500'}`}>
              {step.label}
            </h4>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
        </motion.div>

        {/* Order Status Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-6"
        >
          <div className="bg-white border border-amber-200 rounded-lg shadow-sm overflow-hidden">
            <div className="bg-amber-50 p-4 border-b border-amber-200 flex justify-between items-center">
              <div className="flex items-center text-amber-700 font-semibold text-lg">
                <Package className="mr-2 h-5 w-5" />
                Order Status
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(orderData?.orderDetails?.order_status)}`}>
                {orderData?.orderDetails?.order_status || 'Unknown'}
              </span>
            </div>
            
            <div className="p-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex items-center mb-2 md:mb-0">
                  {getStatusIcon(orderData?.orderDetails?.order_status)}
                  <span className="ml-2 text-sm text-gray-500">
                    Last updated: {orderData?.orderDetails?.lastUpdated ?
                      new Date(orderData.orderDetails.lastUpdated).toLocaleString() : 'N/A'}
                  </span>
                </div>
                
               
              </div>
              
              {/* Status-specific messages */}
              {orderData?.orderDetails?.order_status?.toLowerCase() === 'processing' && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-3 p-3 bg-blue-50 rounded text-sm text-blue-800"
                >
                  Your order is being processed. We'll notify you once it's confirmed.
                </motion.div>
              )}
              
              {orderData?.orderDetails?.order_status?.toLowerCase() === 'shipped' && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-3 p-3 bg-green-50 rounded text-sm text-green-800"
                >
                  Your order has shipped! Expected delivery: {orderData?.deliveryNotes || 'soon'}
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* User Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <div className="bg-white border border-amber-200 rounded-lg shadow-sm h-full">
              <div className="bg-amber-50 p-4 border-b border-amber-200">
                <div className="flex items-center text-amber-700 font-semibold text-lg">
                  <User className="mr-2 h-5 w-5" />
                  Customer Details
                </div>
              </div>
              <div className="p-4">
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-gray-900">{orderData?.userDetails?.username || 'N/A'}</p>
                    <p className="text-sm text-gray-600">{orderData?.userDetails?.email || 'N/A'}</p>
                    <p className="text-sm text-gray-600">{orderData?.userDetails?.contactNumber || 'N/A'}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Shipping Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <div className="bg-white border border-amber-200 rounded-lg shadow-sm h-full">
              <div className="bg-amber-50 p-4 border-b border-amber-200">
                <div className="flex items-center text-amber-700 font-semibold text-lg">
                  <MapPin className="mr-2 h-5 w-5" />
                  Shipping Address
                </div>
              </div>
              <div className="p-4">
                <div className="space-y-3">
                  <p className="text-gray-700">{formatAddress()}</p>
                  <div className="mt-2">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Shipping Method:</span> {orderData?.shippingMethod || 'N/A'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Delivery Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <div className="bg-white border border-amber-200 rounded-lg shadow-sm h-full">
              <div className="bg-amber-50 p-4 border-b border-amber-200">
                <div className="flex items-center text-amber-700 font-semibold text-lg">
                  <Calendar className="mr-2 h-5 w-5" />
                  Delivery Information
                </div>
              </div>
              <div className="p-4">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                    <p className="text-gray-700">{orderData?.deliveryNotes || 'No delivery notes available'}</p>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Order Date:</span> {orderData?.orderDetails?.order_requested_date || 'N/A'} at{" "}
                      {orderData?.orderDetails?.order_requested_time || 'N/A'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Payment Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
          >
            <div className="bg-white border border-amber-200 rounded-lg shadow-sm h-full">
              <div className="bg-amber-50 p-4 border-b border-amber-200">
                <div className="flex items-center text-amber-700 font-semibold text-lg">
                  <CreditCard className="mr-2 h-5 w-5" />
                  Payment Information
                </div>
              </div>
              <div className="p-4">
                <div className="space-y-3">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Payment Method:</span> {orderData?.paymentDetails?.paymentMethodType || 'N/A'}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Payment Status:</span>
                    <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(orderData?.paymentDetails?.transactionStatus)}`}>
                      {orderData?.paymentDetails?.transactionStatus || 'Unknown'}
                    </span>
                  </p>
                  {orderData?.paymentDetails?.transactionStatus?.toLowerCase() === 'failed' && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="p-2 bg-red-50 rounded text-xs text-red-700"
                    >
                      Payment failed. Please check your payment method or try again.
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Order Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="mt-6"
        >
          <div className="bg-white border border-amber-200 rounded-lg shadow-sm">
            <div className="bg-amber-50 p-4 border-b border-amber-200">
              <div className="flex items-center text-amber-700 font-semibold text-lg">
                <Package className="mr-2 h-5 w-5" />
                Order Summary
              </div>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                {orderData?.productDetails?.length ? (
                  orderData.productDetails.map((product, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 * index }}
                      className="flex justify-between items-center py-3 border-b border-amber-100"
                    >
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-amber-100 rounded-md flex items-center justify-center mr-4">
                          <Package className="h-6 w-6 text-amber-500" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{product?.productName || 'Unknown Product'}</p>
                          <p className="text-sm text-gray-500">Qty: {product?.quantity || 0}</p>
                        </div>
                      </div>
                      <p className="font-medium text-gray-900">₹{product?.amount || 0}</p>
                    </motion.div>
                  ))
                ) : (
                  <p className="text-gray-500 py-4 text-center">No products found in this order</p>
                )}

                <div className="pt-2">
                  <div className="flex justify-between py-2">
                    <p className="text-gray-600">Subtotal</p>
                    <p className="font-medium">₹{orderData?.paymentDetails?.totalAmount || 0}</p>
                  </div>
                  {orderData?.discountApplied > 0 && (
                    <div className="flex justify-between py-2">
                      <p className="text-gray-600">Discount</p>
                      <p className="font-medium text-green-600">-₹{orderData.discountApplied}</p>
                    </div>
                  )}
                  <div className="flex justify-between py-2">
                    <p className="text-gray-600">Shipping</p>
                    <p className="font-medium">Free</p>
                  </div>
                  <div className="h-px w-full bg-amber-100 my-2"></div>
                  <div className="flex justify-between py-2">
                    <p className="font-semibold text-lg">Total</p>
                    <p className="font-bold text-lg text-amber-700">₹{orderData?.paymentDetails?.totalAmount || 0}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="mt-8 mb-12 text-center"
        >
          {orderData?.orderDetails?.order_status?.toLowerCase() !== 'cancelled' ? (
            <p className="text-gray-600 mb-4">
              {orderData?.orderDetails?.order_status?.toLowerCase() === 'delivered' 
                ? 'We hope you love your purchase! Need help with anything?'
                : 'We\'ll notify you when your order ships. You can track your order status anytime.'}
            </p>
          ) : (
            <p className="text-gray-600 mb-4">
              Your order has been cancelled. We're sorry to see you go!
            </p>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/profile" 
              className="px-6 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
            >
              {orderData?.orderDetails?.order_status?.toLowerCase() === 'delivered' ? 'Leave a Review' : 'Track Order'}
            </Link>
            <ReceiptDownloadButton orderData={orderData} />
            <Link
              to="/"
              className="px-6 py-2 bg-white border border-amber-300 text-amber-600 rounded-md hover:bg-amber-50 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}