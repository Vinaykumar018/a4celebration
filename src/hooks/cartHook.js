import { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE = 'http://localhost:3000/api'; // You can also use import.meta.env if preferred
const API_KEY = import.meta.env.VITE_API_KEY;

export const useCart = () => {
  const [cart, setCart] = useState([]); // Cart state to manage items in the cart

  const config = {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  // Add item to cart
  const addToCart = async (cartData) => {
    try {
      console.log(cartData)
      const response = await axios.post(`${API_BASE}/cart/add`, cartData, config);
      setCart(response.data.items); // Update the cart state with the new data
      console.log("✅ Item added to cart:", response.data);
    } catch (err) {
      console.error("❌ Add to cart failed:", err.response?.data || err.message);
    }
  };

  // Get cart for a specific user
  const getCart = async (userID) => {
    try {
      const response = await axios.get(`${API_BASE}/cart/${userID}`, config);
      setCart(response.data.items);
      return response.data;// Set the cart state with the fetched data
    } catch (err) {
      console.error("❌ Get cart failed:", err.response?.data || err.message);
    }
  };

  // Update item in the cart (e.g., quantity)
  const updateItem = async (userID, product_id, updateData) => {
    try {
      const response = await axios.put(`${API_BASE}/cart/update/${userID}/${product_id}`, updateData, config);
      setCart(response.data.items); // Update cart state after the update
      return response.data;
    } catch (err) {
      console.error("❌ Update item failed:", err.response?.data || err.message);
    }
  };

  // Remove item from cart
  const removeItem = async (userID, productId) => {
  try {
    const response = await axios.delete(`${API_BASE}/cart/remove/${userID}`, {
      headers: {
        Authorization: `Bearer YOUR_TOKEN`, // Replace with actual token
        'Content-Type': 'application/json',
      },
      data: { productId }, // axios `delete` needs body in `data` key
    });

    setCart(response.data.items); // Update cart state
    return response.data;
  } catch (err) {
    console.error("❌ Remove item failed:", err.response?.data || err.message);
  }
};


  // Clear the entire cart
  const clearCart = async (userID) => {
    try {
      const response = await axios.delete(`${API_BASE}/cart/clear/${userID}`, config);
      setCart([]); // Empty the cart state
      return response.data;
    } catch (err) {
      console.error("❌ Clear cart failed:", err.response?.data || err.message);
    }
  };

 

  return {
    cart, // Cart state
    addToCart,
    getCart,
    updateItem,
    removeItem,
    clearCart,
  };
};
