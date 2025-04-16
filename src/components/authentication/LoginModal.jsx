 import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, X } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginModal = ({ open, onClose, onSuccess ,onCreateAccount }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setWrongPassword(false);

    // Static demo behavior
    setTimeout(() => {
      if (formData.email && formData.password === "demo123") {
        // Demo success case
        localStorage.setItem("userEmail", formData.email);
        localStorage.setItem("isLoggedIn", "true");
        toast.success("Login Successful (Demo)");
        onClose();
        if (onSuccess) onSuccess();
      } else {
        // Demo failure case
        setWrongPassword(true);
        toast.error("Use 'demo123' as password for demo");
      }
      setLoading(false);
    }, 1000);
  };

  if (!open) return null;

  return (
    <>
      <ToastContainer />
      <div className="fixed inset-0 flex items-center justify-center bg-black/70 bg-opacity-50 z-50">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute top-3 right-3 p-2 text-gray-500 hover:text-gray-700 focus:outline-none z-50"
            >
              <X size={20} />
            </button>

            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=500')] bg-cover bg-center opacity-20"></div>
            <div className="relative py-6 flex flex-col items-center justify-center space-y-2 bg-gradient-to-r from-pink-500/10 to-red-500/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-10 w-10 text-pink-600"
              >
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <h2 className="text-xl font-bold text-pink-800 font-serif">
                Sign In 
              </h2>
              <p className="text-sm text-pink-700">Welcome to our Celebration HUB!</p>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label
                  htmlFor="modal-email"
                  className="block text-sm font-medium text-pink-800"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 h-5 w-5 text-pink-500" />
                  <input
                    id="modal-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 text-gray-500 py-2.5 rounded-lg border border-amber-200 bg-amber-50 focus:border-pink-300 focus:ring-pink-300"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="modal-password"
                  className="block text-sm font-medium text-pink-800"
                >
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-2.5 h-5 w-5 text-pink-500" />
                  <input
                    id="modal-password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-10 text-gray-500 py-2.5 rounded-lg border border-amber-200 bg-amber-50 focus:border-pink-300 focus:ring-pink-300"
                    placeholder="Use 'demo123'"
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-2.5 text-pink-500 hover:text-pink-700"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
                {wrongPassword && (
                  <p className="text-sm text-red-500 mt-2">
                    Use 'demo123' as password for demo
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input
                    id="modal-remember"
                    type="checkbox"
                    className="h-4 w-4 rounded border-amber-300 text-pink-600 focus:ring-pink-500"
                  />
                  <label
                    htmlFor="modal-remember"
                    className="text-sm text-pink-700"
                  >
                    Remember me
                  </label>
                </div>
                <Link
                  to="/forgot-password"
                  className="text-sm font-medium text-pink-600 hover:text-pink-800 hover:underline"
                  onClick={onClose}
                >
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-medium py-2.5 rounded-md transition-all duration-300 shadow-md hover:shadow-lg"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Signing In...
                  </div>
                ) : (
                  "Sign In "
                )}
              </button>
            </form>

            <div className="flex items-center justify-center">
              <div className="flex-grow h-px bg-amber-200"></div>
              <span className="px-3 text-sm text-pink-700">or</span>
              <div className="flex-grow h-px bg-amber-200"></div>
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-center py-2.5 border border-amber-300 text-pink-700 hover:bg-pink-100 hover:text-pink-800 rounded-md"
            >
              <svg
                className="mr-2 h-4 w-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
              >
                <path
                  fill="currentColor"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                ></path>
              </svg>
              Sign in with Google 
            </button>

            <div className="text-center pt-4 border-t border-amber-200">
              <p className="text-sm text-pink-700">
                Don&apos;t have an account?{" "}
                <button
                onClick={() => {
                  onClose();
                  onCreateAccount(); // Call the function to open Create Account Modal
                }}
                className="font-medium text-pink-600 hover:text-pink-800 hover:underline"
              >
                Create Account 
              </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;