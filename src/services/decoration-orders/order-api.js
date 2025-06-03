// src/apiService/order.js
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const AUTH_TOKEN = import.meta.env.VITE_API_KEY;

// Place a new order
export const placeOrder = async (orderData) => {
  try {
    const response = await axios.post(`${API_URL}create/order`, orderData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: AUTH_TOKEN,
      },
    });
   
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Get order details by ID
export const getOrderById = async (orderId) => {
  try {
    const response = await axios.get(
      `${API_URL}get/order/${orderId}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: AUTH_TOKEN,
        },
      },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const getOrdersByUserId = async (userId) => {
  try {
    const response = await axios.get(
      `${API_URL}get/orders/user/${userId}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: AUTH_TOKEN,
        },
      }
    );
    
    return response.data;
  } catch (error) {
    throw error;
  }
};