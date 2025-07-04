import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;
const token = import.meta.env.VITE_API_KEY;
const HEADERS = {
  headers: {
     Authorization: `Bearer ${token}`,
  },
};

// Thunk: Fetch Wishlist
export const fetchWishlist = createAsyncThunk("wishlist/fetchWishlist", async (userId) => {
  const res = await axios.get(`${API}getWishlist/${userId}`, HEADERS);
  return res.data;
});

// Thunk: Add to Wishlist
export const addToWishlist = createAsyncThunk("wishlist/addToWishlist", async ({ userId, productId }) => {
  await axios.post(`${API}addtoWishlist`, { userId, productId }, HEADERS);
  const res = await axios.get(`${API}getWishlist/${userId}`, HEADERS);
  return res.data;
});

// Thunk: Remove from Wishlist
export const removeFromWishlist = createAsyncThunk("wishlist/removeFromWishlist", async ({ userId, productId }) => {
  await axios.delete(`${API}wishlist/${userId}/${productId}`, HEADERS);
  const res = await axios.get(`${API}getWishlist/${userId}`, HEADERS);
  return res.data;
});



const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishlist.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchWishlist.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(removeFromWishlist.fulfilled, (state, action) => {
        state.items = action.payload;
      });
  },
});

export default wishlistSlice.reducer;
