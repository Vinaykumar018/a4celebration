import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;



export const createUser = async (userData) => {
  try {
    const response = await axios.post(API_URL+"user/create-user", userData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};



export const loginUser = async (userData) => {
  try {
    const response = await axios.post(API_URL + "user/login-user", userData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error logging in user:", error);
    throw error;
  }
};



export const updateUser = async (userData,id) => {
  try {
   
    const response = await axios.put(API_URL + "user/update-user/"+id, userData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error updating in user:", error);
    throw error;
  }
};

