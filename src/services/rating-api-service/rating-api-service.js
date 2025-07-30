import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

// ------------------ RATING SERVICES --------------------

export const createRating = async (ratingData) => {
  try {
    const response = await axios.post(`${API_URL}rating/create-rating`, ratingData, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating rating:', error);
    throw error;
  }
};

export const updateRating = async (id, ratingData) => {
  try {
    const response = await axios.put(`${API_URL}rating/update-rating/${id}`, ratingData, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error updating rating:', error);
    throw error;
  }
};

export const getRatingById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}rating/get-rating/${id}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching rating:', error);
    throw error;
  }
};

export const deleteRating = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}rating/delete-rating/${id}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error deleting rating:', error);
    throw error;
  }
};

export const getAllRatingsForProduct = async (product_id) => {
  try {
    const response = await axios.get(`${API_URL}rating/product/${product_id}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching ratings for product:', error);
    throw error;
  }
};



export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}user/get-user`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error.response?.data || { message: 'Unknown error', status: 0 };
  }
};