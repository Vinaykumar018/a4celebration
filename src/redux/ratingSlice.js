import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  createRating,
  updateRating,
  getRatingById,
  deleteRating,
  getAllRatingsForProduct,
} from '../services/rating-api-service/rating-api-service' // Adjust path if needed

// Async Thunks

export const addRating = createAsyncThunk(
  'ratings/create',
  async (ratingData, { rejectWithValue }) => {
    try {
      const response = await createRating(ratingData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const modifyRating = createAsyncThunk(
  'ratings/update',
  async ({ id, ratingData }, { rejectWithValue }) => {
    try {
      const response = await updateRating(id, ratingData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const fetchRatingById = createAsyncThunk(
  'ratings/fetchOne',
  async (id, { rejectWithValue }) => {
    try {
      const response = await getRatingById(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const removeRating = createAsyncThunk(
  'ratings/delete',
  async (id, { rejectWithValue }) => {
    try {
      const response = await deleteRating(id);
      return { id, ...response.data };
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const fetchRatingsForProduct = createAsyncThunk(
  'ratings/fetchForProduct',
  async (product_id, { rejectWithValue }) => {
    try {
      const response = await getAllRatingsForProduct(product_id);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// Initial State

const initialState = {
  ratings: [],
  currentRating: null,
  averageRating: 0,
  loading: false,
  error: null,
  success: false,
};

// Slice

const ratingSlice = createSlice({
  name: 'ratings',
  initialState,
  reducers: {
    resetRatingStatus: (state) => {
      state.error = null;
      state.success = false;
    },
    clearCurrentRating: (state) => {
      state.currentRating = null;
    },
  },
  extraReducers: (builder) => {
    builder

      // Create
      .addCase(addRating.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(addRating.fulfilled, (state, action) => {
        state.loading = false;
        state.ratings.push(action.payload);
        state.success = true;
      })
      .addCase(addRating.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Update
      .addCase(modifyRating.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(modifyRating.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.ratings.findIndex(r => r._id === action.payload._id);
        if (index !== -1) state.ratings[index] = action.payload;
        state.success = true;
      })
      .addCase(modifyRating.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Get By ID
      .addCase(fetchRatingById.pending, (state) => {
        state.loading = true;
        state.currentRating = null;
        state.error = null;
      })
      .addCase(fetchRatingById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentRating = action.payload;
      })
      .addCase(fetchRatingById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Delete
      .addCase(removeRating.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeRating.fulfilled, (state, action) => {
        state.loading = false;
        state.ratings = state.ratings.filter(r => r._id !== action.payload.id);
      })
      .addCase(removeRating.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Get All for Product
      .addCase(fetchRatingsForProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.ratings = [];
        state.averageRating = 0;
      })
      .addCase(fetchRatingsForProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.ratings = action.payload.data;
        state.averageRating = action.payload.averageRating;
      })
      .addCase(fetchRatingsForProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetRatingStatus, clearCurrentRating } = ratingSlice.actions;

export default ratingSlice.reducer;
