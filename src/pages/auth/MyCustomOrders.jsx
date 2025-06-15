import React, { useEffect, useState } from 'react';
import { getCustomizedRequests } from '../../services/customized-products/customized-api-service';
import { Package } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MyCustomOrders = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const data = await getCustomizedRequests();
        setRequests(data);
      } catch (err) {
        console.error('Error fetching requests:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);
const navigate=useNavigate()
  const handleBookNow = (requestId) => {
    // Implement your booking logic here
   navigate("/checkout/"+requestId)
  };

  return (
   <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8 max-w-6xl">
  <div className="bg-white rounded-lg border border-gray-200 shadow-lg overflow-hidden">
    {/* Header */}
    <div className="bg-gradient-to-r from-amber-500 to-amber-600 px-4 sm:px-6 py-4">
      <div className="flex items-center justify-center space-x-3">
        <Package className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        <h1 className="text-lg sm:text-2xl font-bold text-white">
          My Customized Orders
        </h1>
      </div>
    </div>

    {/* Table */}
    <div className="overflow-x-auto p-2 sm:p-4">
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
        </div>
      ) : requests.length === 0 ? (
        <p className="text-center py-8 text-gray-500">No customized orders found.</p>
      ) : (
        <>
          {/* Desktop Table */}
          <table className="hidden sm:table min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event Info</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Preferences</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {requests.map((req) => (
                <tr key={req._id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="ml-0 sm:ml-4">
                        <div className="text-sm font-medium text-gray-900">{req.name}</div>
                        <div className="text-sm text-gray-500">{req.phone_number}</div>
                        <div className="text-sm text-gray-500">{req.email || 'N/A'}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {new Date(req.event_date).toLocaleDateString()}
                    </div>
                    <div className="text-sm text-gray-500">
                      {req.guest_count} guests
                    </div>
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{req.food_preference}</div>
                    <div className="text-sm text-gray-500">{req.budget_range}</div>
                    {req.special_requirements && (
                      <div className="text-xs text-gray-400 mt-1">
                        {req.special_requirements}
                      </div>
                    )}
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      req.status === 'approved' 
                        ? 'bg-green-100 text-green-800' 
                        : req.status === 'pending' 
                          ? 'bg-amber-100 text-amber-800' 
                          : 'bg-gray-100 text-gray-800'
                    }`}>
                      {req.status.charAt(0).toUpperCase() + req.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {req.status === 'approved' ? (
                      <div>
                        <div className="text-gray-900 font-medium">₹{req.final_price?.toLocaleString() || 'N/A'}</div>
                        {req.quoted_price && (
                          <div className="text-xs text-gray-400 line-through">
                            ₹{req.quoted_price.toLocaleString()}
                          </div>
                        )}
                      </div>
                    ) : (
                      '--'
                    )}
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {req.status === 'approved' && (
                      <button
                        onClick={() => handleBookNow(req._id)}
                        className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-md shadow-sm transition-all duration-200 transform hover:scale-105 text-xs sm:text-sm"
                      >
                        Book Now
                      </button>
                    )}
                    {req.status === 'pending' && (
                      <button
                        disabled
                        className="bg-yellow-100 text-yellow-600 px-3 sm:px-4 py-1 sm:py-2 rounded-md cursor-not-allowed text-xs sm:text-sm"
                      >
                        Pending
                      </button>
                    )}
                    {req.status === 'rejected' && (
                      <button
                        disabled
                        className="bg-red-100 text-red-600 px-3 sm:px-4 py-1 sm:py-2 rounded-md cursor-not-allowed text-xs sm:text-sm"
                      >
                        Rejected
                      </button>
                    )}
                    {(req.status === 'completed' || req.status === 'confirmed') && (
                      <button
                        onClick={() => handleTrackOrder(req._id)}
                        className={`${req.status === 'completed' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-purple-600 hover:bg-purple-700'} text-white px-3 sm:px-4 py-1 sm:py-2 rounded-md shadow-sm transition-all duration-200 text-xs sm:text-sm`}
                      >
                        Track Order
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile Cards */}
          <div className="sm:hidden space-y-4">
            {requests.map((req) => (
              <div key={req._id} className="bg-white border border-gray-200 rounded-lg shadow p-4">
                <div className="space-y-3">
                  <div>
                    <h3 className="font-medium text-gray-900">{req.name}</h3>
                    <p className="text-sm text-gray-500">{req.phone_number}</p>
                    <p className="text-sm text-gray-500">{req.email || 'N/A'}</p>
                  </div>
                  
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm text-gray-900">
                        {new Date(req.event_date).toLocaleDateString()}
                      </p>
                      <p className="text-sm text-gray-500">
                        {req.guest_count} guests
                      </p>
                    </div>
                    <div>
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        req.status === 'approved' 
                          ? 'bg-green-100 text-green-800' 
                          : req.status === 'pending' 
                            ? 'bg-amber-100 text-amber-800' 
                            : 'bg-gray-100 text-gray-800'
                      }`}>
                        {req.status.charAt(0).toUpperCase() + req.status.slice(1)}
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-900">{req.food_preference}</p>
                    <p className="text-sm text-gray-500">{req.budget_range}</p>
                    {req.special_requirements && (
                      <p className="text-xs text-gray-400 mt-1">
                        {req.special_requirements}
                      </p>
                    )}
                  </div>
                  
                  {req.status === 'approved' && req.final_price && (
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        ₹{req.final_price?.toLocaleString() || 'N/A'}
                      </p>
                      {req.quoted_price && (
                        <p className="text-xs text-gray-400 line-through">
                          ₹{req.quoted_price.toLocaleString()}
                        </p>
                      )}
                    </div>
                  )}
                  
                  <div className="pt-2">
                    {req.status === 'approved' && (
                      <button
                        onClick={() => handleBookNow(req._id)}
                        className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-4 py-2 rounded-md shadow-sm transition-all duration-200"
                      >
                        Book Now
                      </button>
                    )}
                    {req.status === 'pending' && (
                      <button
                        disabled
                        className="w-full bg-yellow-100 text-yellow-600 px-4 py-2 rounded-md cursor-not-allowed"
                      >
                        Pending Approval
                      </button>
                    )}
                    {req.status === 'rejected' && (
                      <button
                        disabled
                        className="w-full bg-red-100 text-red-600 px-4 py-2 rounded-md cursor-not-allowed"
                      >
                        Rejected
                      </button>
                    )}
                    {(req.status === 'completed' || req.status === 'confirmed') && (
                      <button
                        onClick={() => handleTrackOrder(req._id)}
                        className={`w-full ${req.status === 'completed' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-purple-600 hover:bg-purple-700'} text-white px-4 py-2 rounded-md shadow-sm transition-all duration-200`}
                      >
                        Track Order
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>

    {/* Footer */}
    <div className="bg-gray-50 px-4 sm:px-6 py-4 border-t border-gray-200">
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
        <p className="text-sm text-gray-500">
          Showing <span className="font-medium">{requests.length}</span> orders
        </p>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            Previous
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default MyCustomOrders;