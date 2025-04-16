import { ArrowLeft, Gift, NotebookIcon as Lotus, Info, Calendar, Clock, MapPin, Sparkles, PartyPopper, Heart } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
export const UserOrderDetails = ({ cartItems = [], currencySymbol }) => {
  return (
    <form className="space-y-6">
      {/* Customer Details */}
      <div className="border-2 border-rose-200 rounded-xl shadow-lg bg-white overflow-hidden">
        <div className="bg-gradient-to-r from-rose-100 to-pink-100 border-b border-rose-200 p-4">
          <h2 className="text-rose-800 flex items-center gap-2 font-playfair text-lg">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-rose-600 text-white text-sm">
              1
            </span>
            Your Celebration Details ✨
          </h2>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="fullName" className="text-rose-800 font-medium">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                id="username"
                name="username"
                className="w-full border-2 border-rose-200 rounded-lg p-3 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                required
                placeholder="Your beautiful name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-rose-800 font-medium">
                Phone <span className="text-rose-500">*</span>
              </label>
              <input
                id="contactNumber"
                name="contactNumber"
                className="w-full border-2 border-rose-200 rounded-lg p-3 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                required
                placeholder="Where we can reach you"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-rose-800 font-medium">
              Email Address <span className="text-rose-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full border-2 border-rose-200 rounded-lg p-3 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
              required
              placeholder="For booking confirmation 💌"
            />
          </div>
        </div>
      </div>

      {/* Shipping Address */}
      <div className="border-2 border-rose-200 rounded-xl shadow-lg bg-white overflow-hidden">
        <div className="bg-gradient-to-r from-rose-100 to-pink-100 border-b border-rose-200 p-4">
          <h2 className="text-rose-800 flex items-center gap-2 font-playfair text-lg">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-rose-600 text-white text-sm">
              2
            </span>
            Celebration Venue 🏡
          </h2>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="h-5 w-5 text-rose-600" />
            <p className="text-sm text-rose-800">Where should we bring the celebration magic?</p>
          </div>

          <div className="space-y-2">
            <label htmlFor="aptSuite" className="text-rose-800 font-medium">
              Apt/Suite/Building <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <input
                id="aptSuite"
                name="aptSuite"
                className="w-full border-2 border-rose-200 rounded-lg p-3 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 outline-none transition-all pr-10"
                required
                placeholder="Your celebration spot"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
              >
                <MapPin className="h-5 w-5 text-rose-600" />
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="streetAddress" className="text-rose-800 font-medium">
              Street Address <span className="text-rose-500">*</span>
            </label>
            <input
              id="streetAddress"
              name="streetAddress"
              className="w-full border-2 border-rose-200 rounded-lg p-3 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
              required
              placeholder="Where the party's at!"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="city" className="text-rose-800 font-medium">
                City/Town <span className="text-rose-500">*</span>
              </label>
              <input
                id="city"
                name="city"
                className="w-full border-2 border-rose-200 rounded-lg p-3 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                required
                placeholder="Your city of joy"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="state" className="text-rose-800 font-medium">
                State/Province <span className="text-rose-500">*</span>
              </label>
              <input
                id="state"
                name="state"
                className="w-full border-2 border-rose-200 rounded-lg p-3 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                required
                placeholder="Your state"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="zipCode" className="text-rose-800 font-medium">
                Zip/Postal Code <span className="text-rose-500">*</span>
              </label>
              <input
                id="zipCode"
                name="zipCode"
                className="w-full border-2 border-rose-200 rounded-lg p-3 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                required
                placeholder="Postal code"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="country" className="text-rose-800 font-medium">
                Country <span className="text-rose-500">*</span>
              </label>
              <input
                id="country"
                name="country"
                className="w-full border-2 border-rose-200 rounded-lg p-3 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                required
                placeholder="Your country"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Special Notes */}
      <div className="border-2 border-rose-200 rounded-xl shadow-lg bg-white overflow-hidden">
        <div className="bg-gradient-to-r from-rose-100 to-pink-100 border-b border-rose-200 p-4">
          <h2 className="text-rose-800 flex items-center gap-2 font-playfair text-lg">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-rose-600 text-white text-sm">
              3
            </span>
            Special Celebration Wishes 💫
          </h2>
        </div>
        <div className="p-6">
          <div className="space-y-2">
            <textarea
              id="specialNote"
              name="specialNote"
              className="w-full border-2 border-rose-200 rounded-lg p-3 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 outline-none transition-all min-h-[120px]"
              placeholder="Tell us about your celebration dreams, special rituals, or anything we should know to make it perfect..."
            />
          </div>
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="mb-6">
        <div className="p-6 space-y-4 bg-white border-2 border-rose-200 rounded-xl shadow-sm">
          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              id="terms"
              className="text-rose-600 border-2 border-rose-300 rounded mt-1 focus:ring-rose-200"
              required
            />
            <label htmlFor="terms" className="text-sm cursor-pointer">
              I agree to the{" "}
              <Link to="#" className="text-rose-600 hover:underline font-medium">
                terms and conditions
              </Link>{" "}
              of this celebration booking
            </label>
          </div>

          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              id="offers"
              className="text-rose-600 border-2 border-rose-300 rounded mt-1 focus:ring-rose-200"
            />
            <label htmlFor="offers" className="text-sm cursor-pointer">
              Yes! I want to receive exclusive celebration offers and updates 💌
            </label>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-4 text-lg rounded-xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.01] flex items-center justify-center gap-2"
      >
        <Sparkles className="h-5 w-5" />
        Complete Your Celebration Booking
        <Sparkles className="h-5 w-5" />
      </button>
    </form>
  );
};