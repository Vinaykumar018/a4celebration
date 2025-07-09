import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginUser } from "../../services/auth/auth";
import { useSelector } from 'react-redux'; // Adjust the import path as needed
import GoolgeLoginAuth from "./GoogleLogin";

const LoginPage = () => {




  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);
  const navigate = useNavigate();

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
    setWrongPassword(false);

    try {
      const response = await loginUser({
        email: formData.email,
        password: formData.password
      });

      // Store user data or token as needed
      localStorage.setItem("userEmail", formData.email);
      localStorage.setItem("isLoggedIn", "true");

      localStorage.setItem("userId", response.data._id);

      toast.success("Login Successful!");

      navigate("/");
      window.location.reload();// Redirect to home page or dashboard after login
    } catch (error) {
      console.error("Login error:", error);
      setWrongPassword(true);
      toast.error(error.response?.data?.message || "Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-amber-50 py-12 px-4 sm:px-6 lg:px-8">
      <ToastContainer />
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=500')] bg-cover bg-center opacity-20"></div>
          <div className="relative py-6 flex flex-col items-center justify-center space-y-2 bg-gradient-to-r from-amber-500/10 to-red-500/10">
            <svg
              xmlns="https://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-10 w-10 text-amber-600"
            >
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <h2 className="text-xl font-bold text-amber-800 font-serif">
              Sign In
            </h2>
            <p className="text-sm text-amber-700">Welcome to our Celebration HUB!</p>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-amber-800"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-amber-500" />
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-3 text-gray-500 py-2.5 rounded-lg border border-amber-200 bg-amber-50 focus:border-amber-300 focus:ring-amber-300"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-amber-800"
              >
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-amber-500" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-10 text-gray-500 py-2.5 rounded-lg border border-amber-200 bg-amber-50 focus:border-amber-300 focus:ring-amber-300"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-2.5 text-amber-500 hover:text-amber-700"
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
                  Invalid email or password
                </p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 rounded border-amber-300 text-amber-600 focus:ring-amber-500"
                />
                <label
                  htmlFor="remember"
                  className="text-sm text-amber-700"
                >
                  Remember me
                </label>
              </div>
              <Link
                to="/forget-password"
                className="text-sm font-medium text-amber-600 hover:text-amber-800 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-600 hover:to-red-600 text-white font-medium py-2.5 rounded-md transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Signing In...
                </div>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <div className="flex items-center justify-center">
            <div className="flex-grow h-px bg-amber-200"></div>
            <span className="px-3 text-sm text-amber-700">or</span>
            <div className="flex-grow h-px bg-amber-200"></div>
          </div>

          <GoolgeLoginAuth></GoolgeLoginAuth>

          <div className="text-center pt-4 border-t border-amber-200">
            <p className="text-sm text-amber-700">
              Don&apos;t have an account?{" "}
              <Link
                to="/register"
                className="font-medium text-amber-600 hover:text-amber-800 hover:underline"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;