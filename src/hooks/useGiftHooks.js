// src/hooks/useGiftHook.js
import { useState } from 'react';
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../services/giftings/gifting-api-service'

const useGiftHook = () => {
  const [giftList, setGiftList] = useState([]);
  const [singleGift, setSingleGift] = useState(null);
  const [giftLoading, setGiftLoading] = useState(false);
  const [giftError, setGiftError] = useState(null);

  const fetchGifts = async () => {
    setGiftLoading(true);
    try {
      const data = await getAllProducts();
      setGiftList(data.data);
    } catch (err) {
      setGiftError(err);
    } finally {
      setGiftLoading(false);
    }
  };

  const fetchGiftById = async (id) => {
    setGiftLoading(true);
    try {
      const data = await getProductById(id);
      setSingleGift(data);
    } catch (err) {
      setGiftError(err);
    } finally {
      setGiftLoading(false);
    }
  };

  const createGift = async (formData) => {
    setGiftLoading(true);
    try {
      const data = await createProduct(formData);
      setGiftList((prev) => [...prev, data]);
    } catch (err) {
      setGiftError(err);
    } finally {
      setGiftLoading(false);
    }
  };

  const updateGift = async (id, formData) => {
    setGiftLoading(true);
    try {
      const data = await updateProduct(id, formData);
      setGiftList((prev) =>
        prev.map((item) => (item._id === id ? data : item))
      );
    } catch (err) {
      setGiftError(err);
    } finally {
      setGiftLoading(false);
    }
  };

  const deleteGift = async (id) => {
    setGiftLoading(true);
    try {
      await deleteProduct(id);
      setGiftList((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      setGiftError(err);
    } finally {
      setGiftLoading(false);
    }
  };

  return {
    giftList,
    singleGift,
    giftLoading,
    giftError,
    fetchGifts,
    fetchGiftById,
    createGift,
    updateGift,
    deleteGift,
  };
};

export default useGiftHook;
