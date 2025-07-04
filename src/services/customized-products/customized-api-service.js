import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

// Get all customized requests
export const getCustomizedRequests = async () => {
  try {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const userId = localStorage.getItem('userId');

    if (isLoggedIn && userId) {
      const response = await axios.get(`${API_URL}customized/get-all-requests/${userId}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: API_KEY,
        },
      });
      return response.data.data; // Adjust as needed based on actual response structure
    } else {
      throw new Error('User not logged in or missing user ID');
    }
  } catch (error) {
    throw error;
  }
};



// Get all customized requests
export const getCustomizedRequestsByID = async (id) => {
  try {
    const response = await axios.get(`${API_URL}customized/get-request/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: API_KEY,
      },
    });
    return response.data.data; // adjust depending on your actual response structure
  } catch (error) {
    throw error;
  }
};



export const updateRequestStatus = async (id, updateData) => {
  try {
    const response = await axios.put(
      `${API_URL}customized/update-request-status/${id}`,
      updateData,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: API_KEY,
        },
      }
    );
    return response.data.data;
  } catch (error) {
    console.error("Failed to update request status:", error);
    throw error;
  }
};