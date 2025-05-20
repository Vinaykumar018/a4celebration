
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL 

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: {},
    isAuthenticated: false, // New field to track authentication status
    loading: false,
    error: null,
  },
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
      state.isAuthenticated = true; // Set authentication to true when data is fetched
      state.loading = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isAuthenticated = false; // Set authentication to false on error
      state.loading = false;
    },
    logout: (state) => {
      state.userData = {};
      state.isAuthenticated = false; // Reset to false when the user logs out
    },
  },
});

export const { startLoading, setUserData, setError, logout } = userSlice.actions;

export const fetchUserData = (userId) => async (dispatch) => {
  dispatch(startLoading());
  try {
    const response = await axios.get(`${API_URL}user/get-user/${userId}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    });
    if (response.data) {
      dispatch(setUserData(response.data));
    } else {
      dispatch(setError('No data found'));
    }
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export default userSlice.reducer;