import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User, X } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createUser } from '../../services/auth/auth';
import ReCAPTCHA from "react-google-recaptcha";

const CreateAccountModal = ({ open, onClose, onSuccess, onSwitchToLogin }) => {
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
  const [verified, setVerified] = useState(false);
  const [recaptchaError, setRecaptchaError] = useState("");

  // Define allowed patterns (more restrictive approach)
  const allowedPatterns = {
    username: /^[a-zA-Z0-9]+([_-]?[a-zA-Z0-9])*$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    password: null
  };

  // Define blocked patterns (additional security)
  const blockedPatterns = {
    username: /[^a-zA-Z0-9_-]/g,
    email: /[<>"'`;|&{}[\]()]/g,
    password: /[<>"'`;|&{}[\]()]/g
  };

  // Enhanced password requirements
  const passwordRequirements = {
    minLength: 8,
    maxLength: 64,
    requireUppercase: true,
    requireLowercase: true,
    requireNumber: true,
    requireSpecialChar: true,
    allowedSpecialChars: /[!@#$%^&*]/
  };

  if (!open) return null;

  // Enhanced validation logic
  const validateInput = (name, value) => {
    let warning = "";
    
    if (blockedPatterns[name]?.test(value)) {
      warning = `Invalid character detected. Please remove special characters.`;
      setInputWarnings(prev => ({ ...prev, [name]: warning }));
      return false;
    }

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

  const handleRecaptchaChange = (value) => {
    if (value) {
      setVerified(true);
      setRecaptchaError("");
    } else {
      setVerified(false);
    }
  };

  const handleRecaptchaExpired = () => {
    setVerified(false);
    setRecaptchaError("reCAPTCHA verification expired. Please verify again.");
  };

  const handleRecaptchaError = () => {
    setVerified(false);
    setRecaptchaError("Failed to verify reCAPTCHA. Please try again.");
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
    
    let sanitizedValue = value;
    
    if (name === "username") {
      sanitizedValue = value
        .replace(blockedPatterns.username, '')
        .replace(/_{2,}/g, '_')
        .replace(/-{2,}/g, '-')
        .replace(/^[_-]+/, '')
        .replace(/[_-]+$/, '');
      
      if (sanitizedValue.length > 30) {
        sanitizedValue = sanitizedValue.substring(0, 30);
      }
    }
    else if (name === "email") {
      sanitizedValue = value.replace(blockedPatterns.email, '');
    }
    else if (name === "password") {
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
    
    if (!verified) {
      setRecaptchaError("Please verify you're not a robot");
      return;
    }
    
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

      toast.success("Account Created Successfully!");
      onClose();
      onSwitchToLogin();
      if (onSuccess) onSuccess(response.data);
    } catch (error) {
      console.error("Registration error:", error);
      toast.error(error.response?.data?.message || "Registration failed. Please try again.");
    } finally {
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

              {/* reCAPTCHA Field */}
              <div className="space-y-2">
                <ReCAPTCHA
                  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // This is a test key
                  onChange={handleRecaptchaChange}
                  onExpired={handleRecaptchaExpired}
                  onErrored={handleRecaptchaError}
                  className="flex justify-center"
                />
                {recaptchaError && (
                  <div className="text-red-600 text-xs flex items-start">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 mr-1 mt-0.5 flex-shrink-0" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span>{recaptchaError}</span>
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={!verified || loading}
                className={`w-full bg-gradient-to-r from-amber-500 to-red-500 text-white font-medium py-2.5 rounded-md transition-all duration-300 shadow-md
                  ${!verified ? 'opacity-60 cursor-not-allowed shadow-none' : 'hover:from-amber-600 hover:to-red-600 hover:shadow-lg'}`}
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