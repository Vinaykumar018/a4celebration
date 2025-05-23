import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../services/auth/auth";
import { logout } from "../../redux/userSlice";

import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchUserData } from "../../redux/userSlice";
import MyOrders from "./myOrder";
Modal.setAppElement('#root')



const EditProfileModal = ({ isOpen, onRequestClose, userData, onSuccess }) => {


  const [formData, setFormData] = useState({
    username: userData?.username,
    email: userData?.email,
    mobile: userData?.mobile || "",
    address: userData?.address || "",
    city: userData?.city || "",
    country: userData?.country || "",
    pincode: userData?.pincode || "",
    landmark: userData?.landmark || "",
    gender: userData?.gender || "",
    profile_image: userData?.profile_image || "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profile_image") {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0], // store file object
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const multipartFormData = new FormData();
    for (const key in formData) {
      if (formData[key]) {
        multipartFormData.append(key, formData[key]);
      }
    }

    try {
      const response = await updateUser(multipartFormData, userData._id);


      toast.success("Profile updated successfully!", {
        position: "top-right",
        autoClose: 2000,

      });
      if (onSuccess) {
        onSuccess();
      }

      // Close modal after 1 second to let user see the success message
      setTimeout(() => {
        onRequestClose();
      }, 2000);

    } catch (error) {
      toast.error("Failed to update profile. Please try again.", {
        position: "top-right",
        autoClose: 3000,

      });
      console.error('Profile update error:', error);
    }
  };



  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}

      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1000,
          overflow: 'hidden', // Prevent overlay from scrolling
        },
        content: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          right: 'auto',
          bottom: 'auto',
          border: 'none',
          background: '#fff',
          borderRadius: '0.5rem',
          padding: '1.5rem',
          width: '90%',
          maxWidth: '800px',
          maxHeight: '90vh', // Limit height to viewport
          overflowY: 'auto', // Enable scrolling for content
          WebkitOverflowScrolling: 'touch',
        }
      }}
      closeTimeoutMS={200}
    >
      <ToastContainer />
      <div className="relative">
        <button
          onClick={onRequestClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
        >
          &times;
        </button>

        <h2 className="text-xl font-bold text-center text-amber-600 mb-4">Edit Profile</h2>

        <form onSubmit={handleSubmit} className="space-y-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: "Username", name: "username", type: "text", value: formData.username },
            { label: "Email", name: "email", type: "email", value: formData.email },
            { label: "Mobile", name: "mobile", type: "tel", value: formData.mobile },
            { label: "Gender", name: "gender", type: "select", value: formData.gender },
            { label: "Address", name: "address", type: "text", value: formData.address },
            { label: "City", name: "city", type: "text", value: formData.city },
            { label: "Country", name: "country", type: "text", value: formData.country },
            { label: "Pincode", name: "pincode", type: "text", value: formData.pincode },
            { label: "Landmark", name: "landmark", type: "text", value: formData.landmark },
          ].map((field, index) => (
            <div key={index} className="flex flex-col space-y-1">
              <label className="text-xs font-medium text-gray-600">{field.label}</label>
              {field.type === "select" ? (
                <select
                  name={field.name}
                  value={field.value}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 border border-gray-300 rounded-lg shadow-sm text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  value={field.value}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 border border-gray-300 rounded-lg shadow-sm text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              )}
            </div>
          ))}

          <div className="flex flex-col space-y-1 sm:col-span-2">
            <label className="text-xs font-medium text-gray-600">Profile Image</label>
            <input
              type="file"
              name="profile_image"
              onChange={handleChange}
              className="w-full px-3 py-1.5 border border-gray-300 rounded-lg shadow-sm text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div className="flex justify-end space-x-4 mt-4 sm:col-span-2">
            <button
              type="button"
              onClick={onRequestClose}
              className="px-4 py-1.5 border border-gray-400 text-gray-700 rounded-lg text-xs hover:bg-gray-100 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-1.5 bg-amber-600 text-white rounded-lg text-xs hover:bg-amber-500 focus:outline-none transition"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};




// Then define the Profile component
const Profile = () => {
  const dispatch = useDispatch();
  const { userData, loading, error } = useSelector((state) => state.user);
  const user = userData?.data;
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [activeTab, setActiveTab] = useState('overview');

  // Fetch user data on component mount
  useEffect(() => {
    const fetchData = async () => {
      const userId = localStorage.getItem('userId');
      if (userId) {
        try {
          await dispatch(fetchUserData(userId));
        } catch (err) {
          toast.error("Failed to load user data");
        }
      }
    };
    fetchData();
  }, [dispatch]);


  const navigate = useNavigate();

  function handleLogout() {
    toast.error("Logging out...", {
      position: "top-right",
      autoClose: 1000,

    });

    setTimeout(() => {
      localStorage.clear();
      dispatch(logout());
      navigate('/login');
    }, 1500);
  }



  // Refresh function that can be passed to EditProfileModal
  const refreshUserData = async (updatedData = null) => {
    try {
      const userId = localStorage.getItem('userId');
      if (updatedData) {
        // Update store with the freshly updated data
        dispatch({
          type: 'user/updateUserData',
          payload: updatedData
        });
      } else if (userId) {
        // Fallback to full refresh if no updatedData provided
        await dispatch(fetchUserData(userId));
      }
    } catch (error) {
      toast.error("Failed to refresh data");
      console.error('Refresh error:', error);
    }
  };



  return (
    <section>
      <ToastContainer />
      <div className="mx-auto mt-5 w-full space-y-4 px-4 text-sm xl:max-w-7xl my-2 ">
        <div>
          <h1 className="text-xl font-extrabold sm:text-3xl">My Account</h1>
        </div>
        <div className="space-y-3 rounded-lg border border-gray-400 bg-white pt-3 shadow py-4">
          <div className="flex flex-row justify-between px-4 pb-4 xl:pb-0">
            <div className="flex flex-auto space-x-1.5 sm:space-x-3">
              <div className="h-11 w-11 sm:h-20 sm:w-20">
                <img
                  className="border-primary-500 h-full w-full rounded-full border-2 p-[3px]"
                  src={"https://a4celebration.com/api/" + user?.profile_image || "https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369990.png"}
                  alt="Profile"
                />
              </div>
              <div>
                <div className="flex flex-row items-center space-x-1 py-1">
                  <span className="text-sm font-extrabold sm:text-lg sm:font-bold">
                    {user?.username}
                  </span>
                  {user?.is_verified && <span><img src="assets/icons/verified.svg" alt="Verified" /></span>}
                </div>
                <div className="space-y-2 text-xs font-semibold text-gray-400">
                  <p>AccountID: #{user?._id?.toString().substring(0, 8).toUpperCase()}</p>
                  <div className="flex flex-col space-y-2 space-x-0 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-5">
                    <div>
                      <span><i className="fas fa-user"></i></span> {user?.role}
                    </div>
                    {user?.country && (
                      <div>
                        <span><i className="fas fa-map-marker-alt"></i></span> {user?.country}
                      </div>
                    )}
                    <div className="whitespace-nowrap">
                      <span><i className="far fa-envelope"></i></span> {user?.email}
                    </div>
                  </div>
                </div>
              </div>
              <div>

              </div>
            </div>
          </div>
          <div className=" w-full border-b border-gray-400 xl:block ml-8 pb-2">
            <div id="accountTabs" className="flex flex-row space-x-5">
              <button
                className={`px-2 py-2 rounded-lg border text-sm transition-all duration-200 ${activeTab === 'overview'
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-black border-gray-300'
                  }`}
                onClick={() => setActiveTab('overview')}
              >
                Personal details
              </button>

              <button
                className={`px-2 py-2 rounded-lg text-sm border transition-all duration-200 ${activeTab === 'accordion2'
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-black border-gray-300'
                  }`}
                onClick={() => setActiveTab('accordion2')}
              >
                My Orders
              </button>
            </div>
          </div>


          {activeTab === 'overview' && (
            <div className="animate-nk-acc-tab block space-y-12 px-4">
              <div id="accOverview" className="animate-nk-acc-tab block space-y-12 px-4">
                <div className="space-y-4 rounded-lg border border-gray-200 bg-white py-4 shadow">
                  <div className="flex flex-auto items-center justify-between px-4">
                    <div className="text-base font-semibold sm:text-lg">Personal Details</div>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
                      <button
                        onClick={() => setIsEditModalOpen(true)}
                        className="w-36 sm:w-48 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
                      >
                        Edit Profile
                      </button>

                      <button
                        onClick={handleLogout}
                        className="w-36 sm:w-48 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
                      >
                        Logout
                      </button>
                    </div>

                  </div>
                  <div className="w-full border-b border-gray-400"></div>
                  <div className="space-y-2 px-4">
                    <div className="flex flex-col sm:flex-row sm:flex-nowrap sm:items-center">
                      <div className="w-52 text-sm">Username:</div>
                      <span className="font-semibold">{user?.username}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:flex-nowrap sm:items-center">
                      <div className="w-52 text-sm">Email:</div>
                      <span className="font-semibold">{user?.email}</span>
                    </div>
                    {user?.mobile && (
                      <div className="flex flex-col sm:flex-row sm:flex-nowrap sm:items-center">
                        <div className="w-52 text-sm">Mobile:</div>
                        <span className="font-semibold">{user?.mobile}</span>
                      </div>
                    )}
                    {user?.gender && (
                      <div className="flex flex-col sm:flex-row sm:flex-nowrap sm:items-center">
                        <div className="w-52 text-sm">Gender:</div>
                        <span className="font-semibold">{user?.gender}</span>
                      </div>
                    )}
                    {user?.address && (
                      <div className="flex flex-col sm:flex-row sm:flex-nowrap sm:items-center">
                        <div className="w-52 text-sm">Address:</div>
                        <span className="font-semibold">{user.address}</span>
                      </div>
                    )}
                    {user?.city && (
                      <div className="flex flex-col sm:flex-row sm:flex-nowrap sm:items-center">
                        <div className="w-52 text-sm">City:</div>
                        <span className="font-semibold">{user.city}</span>
                      </div>
                    )}
                    {user?.country && (
                      <div className="flex flex-col sm:flex-row sm:flex-nowrap sm:items-center">
                        <div className="w-52 text-sm">Country:</div>
                        <span className="font-semibold">{user.country}</span>
                      </div>
                    )}
                    {user?.pincode && (
                      <div className="flex flex-col sm:flex-row sm:flex-nowrap sm:items-center">
                        <div className="w-52 text-sm">Pincode:</div>
                        <span className="font-semibold">{user.pincode}</span>
                      </div>
                    )}
                    {user?.landmark && (
                      <div className="flex flex-col sm:flex-row sm:flex-nowrap sm:items-center">
                        <div className="w-52 text-sm">Landmark:</div>
                        <span className="font-semibold">{user.landmark}</span>
                      </div>
                    )}
                    <div className="flex flex-col sm:flex-row sm:flex-nowrap sm:items-center">
                      <div className="w-52 text-sm">Account Status:</div>
                      <span className="font-semibold capitalize">{user?.status}</span>
                    </div>
                    {user?.social_type && (
                      <div className="flex flex-col sm:flex-row sm:flex-nowrap sm:items-center">
                        <div className="w-52 text-sm">Login Method:</div>
                        <span className="font-semibold capitalize">
                          {user.social_type === 'other' ? 'Email/Password' : user.social_type}
                        </span>
                      </div>
                    )}
                    <div className="flex flex-col sm:flex-row sm:flex-nowrap sm:items-center">
                      <div className="w-52 text-sm">Member Since:</div>
                      <span className="font-semibold">
                        {new Date(user?.created_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'accordion2' && (
            <div className="animate-nk-acc-tab block space-y-12 px-4">



              <div id="accOverview" className="animate-nk-acc-tab block space-y-12 px-4">
                <MyOrders userData={userData}></MyOrders>
              </div>
            </div>
          )}
        </div>
      </div>

      <EditProfileModal
        isOpen={isEditModalOpen}
        onRequestClose={() => setIsEditModalOpen(false)}
        userData={user}
        onSuccess={refreshUserData}

      />

    </section>
  );
};

export default Profile;