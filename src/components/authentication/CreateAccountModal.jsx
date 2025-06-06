import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User, X } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createUser } from '../../services/auth/auth'; // Adjust the import path as needed

const CreateAccountModal = ({ open, onClose, onSuccess, onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    username: "", // Changed from fullname to username
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await createUser({
        email: formData.email,
        password: formData.password,
        username: formData.username // Using username instead of fullname
      });

      toast.success("Account Created Successfully!");
      onClose();
      onSwitchToLogin();
      if (onSuccess) onSuccess(response.data);
    } catch (error) {
      console.error("Registration error:", error);
      toast.error(error.response?.data?.message || "Registration failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute top-3 right-3 p-2 text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
            <div className="py-6 bg-gradient-to-r from-amber-500/10 to-red-500/10 flex flex-col items-center space-y-2">
              <svg
                xmlns="https://www.w3.org/2000/svg"
                className="h-10 w-10 text-amber-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <h2 className="text-xl font-bold text-amber-800 font-serif">
                Create Account
              </h2>
              <p className="text-sm text-amber-700">
                Join us at the Celebration HUB!
              </p>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Username (changed from Full Name) */}
              <div className="space-y-2">
                <label htmlFor="username" className="text-sm font-medium text-amber-800">
                  Username <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-2.5 h-5 w-5 text-amber-500" />
                  <input
                    id="username"
                    name="username"
                    type="text"
                    value={formData.username}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 text-gray-500 py-2.5 rounded-lg border border-amber-200 bg-amber-50 focus:border-amber-300 focus:ring-amber-300"
                    placeholder="johndoe"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-amber-800">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 h-5 w-5 text-amber-500" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 text-gray-500 py-2.5 rounded-lg border border-amber-200 bg-amber-50 focus:border-amber-300 focus:ring-amber-300"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-amber-800">
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-2.5 h-5 w-5 text-amber-500" />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-10 text-gray-500 py-2.5 rounded-lg border border-amber-200 bg-amber-50 focus:border-amber-300 focus:ring-amber-300"
                    placeholder="Create a strong password"
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-2.5 text-amber-500 hover:text-amber-700"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-600 hover:to-red-600 text-white font-medium py-2.5 rounded-md transition-all duration-300 shadow-md hover:shadow-lg"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Creating...
                  </div>
                ) : (
                  "Create Account"
                )}
              </button>

              <div className="text-center pt-4 border-t border-amber-200">
                <p className="text-sm text-amber-700">
                  Already have an account?{" "}
                  <button
                    onClick={() => {
                      onClose();
                      onSwitchToLogin();
                    }}
                    className="font-medium text-amber-600 hover:text-amber-800 hover:underline"
                  >
                    Sign In
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAccountModal;