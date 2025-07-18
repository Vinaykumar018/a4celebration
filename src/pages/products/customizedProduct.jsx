// import { useState } from 'react';
// import { X, Calendar, User, Phone, Mail, Users, Utensils, DollarSign } from 'lucide-react';
// import { ToastContainer, toast } from 'react-toastify';

// function CustomRequestModal({ productId, userId, onClose ,  name,email}) {
//   console.log(name,email)
//   const [formData, setFormData] = useState({
//     product_id: productId,
//     user_id: userId,
//     phone_number: '',
//     name: '',
//     email: '',
//     event_date: '',
//     guest_count: '',
//     food_preference: '',
//     budget_range: '',
//     special_requirements: '',
//     package_customizations: ''
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);
//   const AUTH_TOKEN = import.meta.env.VITE_API_KEY;

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     // Regex to check for HTML tags
//     const htmlTagRegex = /<[^>]*>/;
//     // Regex to check for unwanted words
//     const unwantedWordsRegex = /\b(don't|even|unable)\b/i;
//     // Regex for email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     // Regex for name validation (no special characters)
//     const nameRegex = /^[a-zA-Z\s]*$/;
//     // Regex for phone number (only digits)
//     const phoneRegex = /^[0-9]*$/;

//     // Validate based on input name
//     switch (name) {
//       case 'name':
//         if (!nameRegex.test(value)) {
//           setError('Name can only contain letters and spaces.');
//           return;
//         }
//         break;
//       case 'phone_number':
//         if (!phoneRegex.test(value)) {
//           setError('Phone number can only contain digits.');
//           return;
//         }
//         break;
//       case 'email':
//         if (!emailRegex.test(value)) {
//           setError('Please enter a valid email address.');
//           return;
//         }
//         break;
//       default:
//         break;
//     }

//     // Check for HTML tags or unwanted words
//     if (htmlTagRegex.test(value) || unwantedWordsRegex.test(value)) {
//       setError('Input contains invalid characters or words.');
//       return; // Prevent updating the state
//     }

//     setError(null); // Clear error if input is valid
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       // Required fields validation
//       if (!formData.phone_number || !formData.name || !formData.event_date ||
//         !formData.guest_count || !formData.food_preference || !formData.budget_range) {
//         throw new Error('Please fill all required fields');
//       }

//       const response = await fetch('https://a4celebration.com/api/api/customized/create-request', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: AUTH_TOKEN
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || 'Failed to submit request');
//       }

//       setSuccess(true);
//       toast.success('Request submitted successfully!');
//     } catch (err) {
//       setError(err.message);
//       toast.error(`Error: ${err.message}`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed mt-12 inset-0 flex items-center justify-center bg-black/70 bg-opacity-50 z-50 ">
//       <ToastContainer />
//       <div className="w-[80vw] h-[90vh] bg-white rounded-lg shadow-lg overflow-y-auto">
//         <div className="relative mt-12">
//           <button
//             onClick={onClose}
//             className="absolute top-3 right-3 p-2 text-gray-500 hover:text-gray-700 focus:outline-none z-50"
//           >
//             <X size={20} />
//           </button>

//           <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=500')] bg-cover bg-center opacity-20"></div>
//           <div className="relative py-6 flex flex-col items-center justify-center space-y-2 bg-gradient-to-r from-amber-500/10 to-red-500/10">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="h-10 w-10 text-amber-600"
//             >
//               <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
//             </svg>
//             <h2 className="text-xl font-bold text-amber-800 font-serif">Customize Your Event</h2>
//             <p className="text-sm text-amber-700">Tell us about your special occasion!</p>
//           </div>
//         </div>

//         <div className="p-6">
//           {success ? (
//             <div className="text-center py-8">
//               <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
//                 <svg
//                   className="h-6 w-6 text-green-600"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//                 </svg>
//               </div>
//               <h3 className="mt-3 text-lg font-medium text-gray-900">Request Submitted!</h3>
//               <p className="mt-2 text-sm text-gray-500">
//                 We've received your customization request. Our team will contact you shortly.
//               </p>
//               <div className="mt-6">
//                 <button
//                   onClick={onClose}
//                   className="px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700"
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           ) : (
//             <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
//               {/* Full Name */}
//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-amber-800">
//                   Full Name <span className="text-red-500">*</span>
//                 </label>
//                 <div className="relative">
//                   <User className="absolute left-3 top-2.5 h-5 w-5 text-amber-500" />
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     className="w-full pl-10 pr-3 text-gray-500 py-2.5 rounded-lg border border-amber-200 bg-amber-50 focus:ring-amber-300"
//                     placeholder="Your name"
//                     required
//                   />
//                 </div>
//                 {error && <p className="text-red-500 text-sm">{error}</p>}
//               </div>

//               {/* Phone Number */}
//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-amber-800">
//                   Phone Number <span className="text-red-500">*</span>
//                 </label>
//                 <div className="relative">
//                   <Phone className="absolute left-3 top-2.5 h-5 w-5 text-amber-500" />
//                   <input
//                     type="tel"
//                     name="phone_number"
//                     value={formData.phone_number}
//                     onChange={handleInputChange}
//                     className="w-full pl-10 pr-3 text-gray-500 py-2.5 rounded-lg border border-amber-200 bg-amber-50 focus:ring-amber-300"
//                     placeholder="Your phone number"
//                     required
//                   />
//                 </div>
//                 {error && <p className="text-red-500 text-sm">{error}</p>}
//               </div>

//               {/* Email */}
//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-amber-800">Email Address</label>
//                 <div className="relative">
//                   <Mail className="absolute left-3 top-2.5 h-5 w-5 text-amber-500" />
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     className="w-full pl-10 pr-3 text-gray-500 py-2.5 rounded-lg border border-amber-200 bg-amber-50 focus:ring-amber-300"
//                     placeholder="your.email@example.com"
//                   />
//                 </div>
//                 {error && <p className="text-red-500 text-sm">{error}</p>}
//               </div>

//               {/* Event Date */}
//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-amber-800">
//                   Event Date <span className="text-red-500">*</span>
//                 </label>
//                 <div className="relative">
//                   <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-amber-500" />
//                   <input
//                     type="date"
//                     name="event_date"
//                     value={formData.event_date}
//                     onChange={handleInputChange}
//                     min={new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split('T')[0]} // Tomorrow
//                     className="w-full pl-10 pr-3 text-gray-500 py-2.5 rounded-lg border border-amber-200 bg-amber-50 focus:ring-amber-300"
//                     required
//                   />
//                 </div>
//               </div>

//               {/* Guest Count */}
//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-amber-800">
//                   Guest Count <span className="text-red-500">*</span>
//                 </label>
//                 <div className="relative">
//                   <Users className="absolute left-3 top-2.5 h-5 w-5 text-amber-500" />
//                   <input
//                     type="number"
//                     name="guest_count"
//                     value={formData.guest_count}
//                     onChange={handleInputChange}
//                     className="w-full pl-10 pr-3 text-gray-500 py-2.5 rounded-lg border border-amber-200 bg-amber-50 focus:ring-amber-300"
//                     min="1"
//                     placeholder="Approximate number of guests"
//                     required
//                   />
//                 </div>
//               </div>

//               {/* Food Preference */}
//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-amber-800">
//                   Food Preference <span className="text-red-500">*</span>
//                 </label>
//                 <div className="relative">
//                   <Utensils className="absolute left-3 top-2.5 h-5 w-5 text-amber-500" />
//                   <select
//                     name="food_preference"
//                     value={formData.food_preference}
//                     onChange={handleInputChange}
//                     className="w-full pl-10 pr-3 text-gray-500 py-2.5 rounded-lg border border-amber-200 bg-amber-50 focus:ring-amber-300"
//                     required
//                   >
//                     <option value="">Select preference</option>
//                     <option value="Vegetarian">Vegetarian</option>
//                     <option value="Non-Vegetarian">Non-Vegetarian</option>
//                     <option value="Vegan">Vegan</option>
//                     <option value="Mix">Mix</option>
//                   </select>
//                 </div>
//               </div>

//               {/* Budget Range */}
//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-amber-800">
//                   Budget Range <span className="text-red-500">*</span>
//                 </label>
//                 <div className="relative">
//                   <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-amber-500" />
//                   <select
//                     name="budget_range"
//                     value={formData.budget_range}
//                     onChange={handleInputChange}
//                     className="w-full pl-10 pr-3 text-gray-500 py-2.5 rounded-lg border border-amber-200 bg-amber-50 focus:ring-amber-300"
//                     required
//                   >
//                     <option value="">Select budget range</option>
//                     <option value="Below 2 Lakhs">Below 2 Lakhs</option>
//                     <option value="2 Lakhs - 5 Lakhs">2 Lakhs - 5 Lakhs</option>
//                     <option value="5 Lakhs - 10 Lakhs">5 Lakhs - 10 Lakhs</option>
//                     <option value="10 Lakhs - 15 Lakhs">10 Lakhs - 15 Lakhs</option>
//                     <option value="15 Lakhs - 20 Lakhs">15 Lakhs - 20 Lakhs</option>
//                     <option value="20 Lakhs - 25 Lakhs">20 Lakhs - 25 Lakhs</option>
//                     <option value="25 Lakhs - 30 Lakhs">25 Lakhs - 30 Lakhs</option>
//                     <option value="Above 30 Lakhs">Above 30 Lakhs</option>
//                   </select>
//                 </div>
//               </div>

//               {/* Special Requirements */}
//               <div className="col-span-1 md:col-span-2 space-y-2">
//                 <label className="block text-sm font-medium text-amber-800">Special Requirements</label>
//                 <textarea
//                   name="special_requirements"
//                   value={formData.special_requirements}
//                   onChange={handleInputChange}
//                   className="w-full text-gray-500 p-3 rounded-lg border border-amber-200 bg-amber-50 focus:ring-amber-300"
//                   placeholder="Any special requests or dietary restrictions"
//                   rows="3"
//                 />
//               </div>

//               {/* Package Customizations */}
//               <div className="col-span-1 md:col-span-2 space-y-2">
//                 <label className="block text-sm font-medium text-amber-800">Package Customizations</label>
//                 <textarea
//                   name="package_customizations"
//                   value={formData.package_customizations}
//                   onChange={handleInputChange}
//                   className="w-full text-gray-500 p-3 rounded-lg border border-amber-200 bg-amber-50 focus:ring-amber-300"
//                   placeholder="Specific changes you'd like to make to the package"
//                   rows="3"
//                 />
//               </div>

//               {error && (
//                 <p className="col-span-1 md:col-span-2 text-red-500 text-sm">{error}</p>
//               )}

//               <div className="col-span-1 md:col-span-2 text-center">
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700"
//                 >
//                   Submit Request
//                 </button>
//               </div>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomRequestModal;

// // Usage example:
// // <CustomRequestModal productId="123" userId="456" onClose={() => setIsModalOpen(false)} />


import { useState } from 'react';
import { X, Calendar, User, Phone, Mail, Users, Utensils, DollarSign } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import { useCustomModalData } from '../../context/CustomModalContext';
import { useEffect } from 'react';

function CustomRequestModal({ onClose }) {
  const { customModalData } = useCustomModalData();

  // Null check to prevent rendering when data is not available
  if (!customModalData) return null;

  const {
    productId,
    userId,
    name,
    email,
    requestedEventId,
    requestedIdName,
    requestedEventImage
  } = customModalData;

  const [formData, setFormData] = useState({
    product_id: '',
    user_id: '',
    phone_number: '',
    name: '',
    email: '',
    event_date: '',
    guest_count: '',
    food_preference: '',
    budget_range: '',
    special_requirements: '',
    package_customizations: '',
    requestedEventId: '',
    requestedIdName: '',
    requestedEventImage: ''
  });

  useEffect(() => {
    // Initialize the formData once modal data is available
    setFormData({
      product_id: productId || '',
      user_id: userId || '',
      phone_number: '',
      name: name || '',
      email: email || '',
      event_date: '',
      guest_count: '',
      food_preference: '',
      budget_range: '',
      special_requirements: '',
      package_customizations: '',
      requestedEventId: requestedEventId || '',
      requestedIdName: requestedIdName || '',
      requestedEventImage: requestedEventImage || ''
    });
  }, [customModalData]);

  console.log(requestedEventId, requestedIdName, requestedEventImage);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const AUTH_TOKEN = import.meta.env.VITE_API_KEY;
  const API_URL = import.meta.env.VITE_API_URL;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const htmlTagRegex = /<[^>]*>/;
    const unwantedWordsRegex = /\b(don't|even|unable)\b/i;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[a-zA-Z\s]*$/;
    const phoneRegex = /^[0-9]*$/;

    switch (name) {
      case 'name':
        if (!nameRegex.test(value)) {
          setError('Name can only contain letters and spaces.');
          return;
        }
        break;
      case 'phone_number':
        if (!phoneRegex.test(value)) {
          setError('Phone number can only contain digits.');
          return;
        }
        break;
      case 'email':
        if (!emailRegex.test(value)) {
          setError('Please enter a valid email address.');
          return;
        }
        break;
      default:
        break;
    }

    if (htmlTagRegex.test(value) || unwantedWordsRegex.test(value)) {
      setError('Input contains invalid characters or words.');
      return;
    }

    setError(null);
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (!formData.phone_number || !formData.name || !formData.event_date ||
        !formData.guest_count || !formData.food_preference || !formData.budget_range) {
        throw new Error('Please fill all required fields');
      }

      const response = await fetch(`${API_URL}customized/create-request`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: AUTH_TOKEN
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to submit request');

      setSuccess(true);
      toast.success('Request submitted successfully!');
    } catch (err) {
      setError(err.message);
      toast.error(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-x-0 top-[80px] md:top-[110px] bottom-0 flex justify-center bg-black/50 z-50overflow-y-auto scrollbar-hide bg-black/80">
      <ToastContainer />
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md max-h-[90vh] overflow-y-auto scrollbar-hide">
        <div className="sticky top-0 bg-white z-10 border-b border-gray-200">
          <div className="p-4 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">Customize Your Event</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="p-4">
          {success ? (
            <div className="text-center py-4">
              <div className="mx-auto flex items-center justify-center h-10 w-10 rounded-full bg-green-100 mb-3">
                <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-sm font-medium text-gray-900">Request Submitted!</h3>
              <p className="mt-1 text-xs text-gray-500">
                We've received your request. Our team will contact you shortly.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-3 py-1.5 text-xs bg-amber-600 text-white rounded hover:bg-amber-700"
              >
                Close
              </button>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-3">
                {/* Name */}
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-2 top-2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-8 pr-2 text-xs py-2 rounded border border-gray-300 focus:ring-1 focus:ring-amber-300"
                      placeholder="Your name"
                      required
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-2 top-2 h-4 w-4 text-gray-400" />
                    <input
                      type="tel"
                      name="phone_number"
                      value={formData.phone_number}
                      onChange={handleInputChange}
                      className="w-full pl-8 pr-2 text-xs py-2 rounded border border-gray-300 focus:ring-1 focus:ring-amber-300"
                      placeholder="Your phone number"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-2 top-2 h-4 w-4 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-8 pr-2 text-xs py-2 rounded border border-gray-300 focus:ring-1 focus:ring-amber-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Event Date */}
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Event Date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-2 top-2 h-4 w-4 text-gray-400" />
                    <input
                      type="date"
                      name="event_date"
                      value={formData.event_date}
                      onChange={handleInputChange}
                      min={new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
                      className="w-full pl-8 pr-2 text-xs py-2 rounded border border-gray-300 focus:ring-1 focus:ring-amber-300"
                      required
                    />
                  </div>
                </div>

                {/* Guest Count */}
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Guest Count <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Users className="absolute left-2 top-2 h-4 w-4 text-gray-400" />
                    <input
                      type="number"
                      name="guest_count"
                      value={formData.guest_count}
                      onChange={handleInputChange}
                      className="w-full pl-8 pr-2 text-xs py-2 rounded border border-gray-300 focus:ring-1 focus:ring-amber-300"
                      min="1"
                      placeholder="Number of guests"
                      required
                    />
                  </div>
                </div>

                {/* Food Preference */}
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Food Preference <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Utensils className="absolute left-2 top-2 h-4 w-4 text-gray-400" />
                    <select
                      name="food_preference"
                      value={formData.food_preference}
                      onChange={handleInputChange}
                      className="w-full pl-8 pr-2 text-xs py-2 rounded border border-gray-300 focus:ring-1 focus:ring-amber-300"
                      required
                    >
                      <option value="">Select preference</option>
                      <option value="Vegetarian">Vegetarian</option>
                      <option value="Non-Vegetarian">Non-Vegetarian</option>
                      <option value="Vegan">Vegan</option>
                      <option value="Mix">Mix</option>
                    </select>
                  </div>
                </div>

                {/* Budget Range */}
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Budget Range <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-2 top-2 h-4 w-4 text-gray-400" />
                    <select
                      name="budget_range"
                      value={formData.budget_range}
                      onChange={handleInputChange}
                      className="w-full pl-8 pr-2 text-xs py-2 rounded border border-gray-300 focus:ring-1 focus:ring-amber-300"
                      required
                    >
                      <option value="">Select budget range</option>
                      <option value="Below 2 Lakhs">Below 2 Lakhs</option>
                      <option value="2 Lakhs - 5 Lakhs">2 Lakhs - 5 Lakhs</option>
                      <option value="5 Lakhs - 10 Lakhs">5 Lakhs - 10 Lakhs</option>
                      <option value="10 Lakhs - 15 Lakhs">10 Lakhs - 15 Lakhs</option>
                      <option value="15 Lakhs - 20 Lakhs">15 Lakhs - 20 Lakhs</option>
                      <option value="20 Lakhs - 25 Lakhs">20 Lakhs - 25 Lakhs</option>
                      <option value="25 Lakhs - 30 Lakhs">25 Lakhs - 30 Lakhs</option>
                      <option value="Above 30 Lakhs">Above 30 Lakhs</option>
                    </select>
                  </div>
                </div>

                {/* Special Requirements */}
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Special Requirements</label>
                  <textarea
                    name="special_requirements"
                    value={formData.special_requirements}
                    onChange={handleInputChange}
                    className="w-full text-xs p-2 rounded border border-gray-300 focus:ring-1 focus:ring-amber-300"
                    placeholder="Any special requests or dietary restrictions"
                    rows="2"
                  />
                </div>

                {/* Package Customizations */}
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Package Customizations</label>
                  <textarea
                    name="package_customizations"
                    value={formData.package_customizations}
                    onChange={handleInputChange}
                    className="w-full text-xs p-2 rounded border border-gray-300 focus:ring-1 focus:ring-amber-300"
                    placeholder="Specific changes to the package"
                    rows="2"
                  />
                </div>
              </div>

              {error && (
                <p className="text-red-500 text-xs">{error}</p>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-3 py-2 text-xs font-medium bg-amber-600 text-white rounded hover:bg-amber-700 focus:outline-none focus:ring-1 focus:ring-amber-500"
                >
                  {loading ? 'Submitting...' : 'Submit Request'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomRequestModal;