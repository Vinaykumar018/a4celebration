// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import productReducer from './productSlice'
import categoriesReducer from './categoriesSlice';
import eventReducer from './eventManagementSlice'
import cartReducer from './cartSlice';
import wishlistReducer from './wishListSlice'
const store = configureStore({
  reducer: {
    user: userReducer,
   products:productReducer,
   categories: categoriesReducer,
   cart: cartReducer,
   events: eventReducer,
   wishlist: wishlistReducer
   
  },
});

export default store;
