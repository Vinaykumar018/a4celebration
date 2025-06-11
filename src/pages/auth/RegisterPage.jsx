import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createUser } from '../../services/auth/auth';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inputWarnings, setInputWarnings] = useState({
    username: "",
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  // Define allowed patterns (more restrictive approach)
  const allowedPatterns = {
    // Only allow letters, numbers, underscores, and hyphens (no consecutive special chars)
    username: /^[a-zA-Z0-9]+([_-]?[a-zA-Z0-9])*$/,
    
    // Standard email pattern but with additional checks
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    
    // Password pattern remains the same
    password: null // We'll use the passwordRequirements object instead
  };

  // Define blocked patterns (additional security)
  const blockedPatterns = {
    username: /[^a-zA-Z0-9_-]/g, // Block anything not in allowed set
    email: /[<>"'`;|&{}[\]()]/g, // Block dangerous chars in email
    password: /[<>"'`;|&{}[\]()]/g // Block dangerous chars in password
  };

  // Enhanced password requirements
  const passwordRequirements = {
    minLength: 8,
    maxLength: 64,
    requireUppercase: true,
    requireLowercase: true,
    requireNumber: true,
    requireSpecialChar: true,
    allowedSpecialChars: /[!@#$%^&*]/ // Only allow these special chars
  };

  // Enhanced validation logic
  const validateInput = (name, value) => {
    let warning = "";
    
    // First, check for blocked patterns
    if (blockedPatterns[name]?.test(value)) {
      warning = `Invalid character detected. Please remove special characters.`;
      setInputWarnings(prev => ({ ...prev, [name]: warning }));
      return false;
    }

    // Field-specific validation
    if (name === "username") {
      if (value.length > 30) {
        warning = "Username must be 30 characters or less";
      } else if (value.length < 3) {
        warning = "Username must be at least 3 characters";
      } else if (!allowedPatterns.username.test(value)) {
        warning = "Username can only contain letters, numbers, single underscores or hyphens";
      } else if (/_{2,}|-{2,}/.test(value)) {
        warning = "Username cannot have consecutive special characters";
      } else if (/^[_-]|[_-]$/.test(value)) {
        warning = "Username cannot start or end with special characters";
      }
    }
    
    if (name === "email") {
      if (!allowedPatterns.email.test(value)) {
        warning = "Please enter a valid email address";
      } else if (value.length > 254) {
        warning = "Email must be 254 characters or less";
      } else if (/(\.\.)|(@\.)|(\.@)/.test(value)) {
        warning = "Email contains invalid character sequence";
      } else if (/\.$/.test(value)) {
        warning = "Email cannot end with a dot";
      }
    }
    
    if (name === "password") {
      warning = checkPasswordStrength(value);
    }
    
    setInputWarnings(prev => ({ ...prev, [name]: warning }));
    return warning === "";
  };

  const checkPasswordStrength = (password) => {
    let warning = "";
    const messages = [];
    
    if (password.length < passwordRequirements.minLength) {
      messages.push(`at least ${passwordRequirements.minLength} characters`);
    }
    if (password.length > passwordRequirements.maxLength) {
      messages.push(`no more than ${passwordRequirements.maxLength} characters`);
    }
    if (passwordRequirements.requireUppercase && !/[A-Z]/.test(password)) {
      messages.push("one uppercase letter");
    }
    if (passwordRequirements.requireLowercase && !/[a-z]/.test(password)) {
      messages.push("one lowercase letter");
    }
    if (passwordRequirements.requireNumber && !/[0-9]/.test(password)) {
      messages.push("one number");
    }
    if (passwordRequirements.requireSpecialChar && 
        !passwordRequirements.allowedSpecialChars.test(password)) {
      messages.push(`one special character (${passwordRequirements.allowedSpecialChars.toString().replace(/[\/\^$]/g, '')})`);
    }
    
    if (messages.length > 0) {
      warning = `Password must contain: ${messages.join(", ")}`;
    }
    
    return warning;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Sanitize input based on field type
    let sanitizedValue = value;
    
    if (name === "username") {
      // Remove any blocked characters and enforce single special chars
      sanitizedValue = value
        .replace(blockedPatterns.username, '')
        .replace(/_{2,}/g, '_')
        .replace(/-{2,}/g, '-');
      
      // Trim leading/trailing special chars
      sanitizedValue = sanitizedValue.replace(/^[_-]+/, '').replace(/[_-]+$/, '');
      
      // Enforce max length
      if (sanitizedValue.length > 30) {
        sanitizedValue = sanitizedValue.substring(0, 30);
      }
    }
    else if (name === "email") {
      // Remove dangerous characters but preserve valid email format
      sanitizedValue = value.replace(blockedPatterns.email, '');
    }
    else if (name === "password") {
      // Remove dangerous characters but preserve allowed special chars
      sanitizedValue = value.replace(blockedPatterns.password, '');
    }
    
    setFormData(prev => ({ ...prev, [name]: sanitizedValue }));
    validateInput(name, sanitizedValue);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const isUsernameValid = validateInput("username", formData.username);
    const isEmailValid = validateInput("email", formData.email);
    const isPasswordValid = validateInput("password", formData.password);
    
    if (!isUsernameValid || !isEmailValid || !isPasswordValid) {
      toast.error("Please fix the errors in the form before submitting.");
      return;
    }
    
    setLoading(true);

    try {
      const response = await createUser({
        email: formData.email,
        password: formData.password,
        username: formData.username
      });

      toast.success("Account Created Successfully!", {
        autoClose: 1500
      });

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      console.error("Registration error:", error);
      toast.error(error.response?.data?.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-amber-50 py-12 px-4 sm:px-6 lg:px-8">
      <ToastContainer />
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative">
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
            {/* Username Field */}
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
                  className={`w-full pl-10 pr-3 text-gray-500 py-2.5 rounded-lg border ${
                    inputWarnings.username ? "border-red-300 bg-red-50" : "border-amber-200 bg-amber-50"
                  } focus:border-amber-300 focus:ring-amber-300`}
                  placeholder="johndoe"
                  required
                  maxLength="30"
                />
              </div>
              {inputWarnings.username && (
                <div className="text-red-600 text-xs flex items-start">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 mr-1 mt-0.5 flex-shrink-0" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span>{inputWarnings.username}</span>
                </div>
              )}
            </div>

            {/* Email Field */}
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
                  className={`w-full pl-10 pr-3 text-gray-500 py-2.5 rounded-lg border ${
                    inputWarnings.email ? "border-red-300 bg-red-50" : "border-amber-200 bg-amber-50"
                  } focus:border-amber-300 focus:ring-amber-300`}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              {inputWarnings.email && (
                <div className="text-red-600 text-xs flex items-start">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 mr-1 mt-0.5 flex-shrink-0" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span>{inputWarnings.email}</span>
                </div>
              )}
            </div>

            {/* Password Field */}
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
                  className={`w-full pl-10 pr-10 text-gray-500 py-2.5 rounded-lg border ${
                    inputWarnings.password ? "border-red-300 bg-red-50" : "border-amber-200 bg-amber-50"
                  } focus:border-amber-300 focus:ring-amber-300`}
                  placeholder="Create a strong password"
                  required
                  minLength="8"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-2.5 text-amber-500 hover:text-amber-700"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {inputWarnings.password && (
                <div className="text-red-600 text-xs flex items-start">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 mr-1 mt-0.5 flex-shrink-0" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span>{inputWarnings.password}</span>
                </div>
              )}
              {!inputWarnings.password && formData.password && (
                <div className="text-green-600 text-xs flex items-start">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 mr-1 mt-0.5 flex-shrink-0" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Password meets requirements</span>
                </div>
              )}
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
          </form>

          <div className="text-center pt-4 border-t border-amber-200">
            <p className="text-sm text-amber-700">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-amber-600 hover:text-amber-800 hover:underline"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;