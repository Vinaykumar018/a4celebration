// src/redux/locationSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Get initial location from localStorage or default
let initialLocation = localStorage.getItem("user_location");

if (!initialLocation) {
  localStorage.setItem("user_location", 'Kanpur'); // sets it as a string "null"
  
} else {
  initialLocation = localStorage.getItem("user_location");
}


const locationSlice = createSlice({
  name: "location",
  initialState: {
    currentLocation: initialLocation,
  },
  reducers: {
    setLocation: (state, action) => {
      state.currentLocation = action.payload;
      localStorage.setItem("user_location", action.payload); // Persist in localStorage
    },
  },
});

export const { setLocation } = locationSlice.actions;
export default locationSlice.reducer;
