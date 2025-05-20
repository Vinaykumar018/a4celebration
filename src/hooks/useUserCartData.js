import { useEffect, useState } from "react";
import { getProductById } from '../services/decorations/product-api-service';
import { useCart } from "./cartHook";
import { toast } from "react-toastify";
import useGiftHook from '../hooks/useGiftHooks'

const useUserCartData = () => {
  const { cart, getCart } = useCart();
  const [cartItems, setCartItems] = useState([]);
  const { fetchGiftById, singleGift, giftLoading, giftError } = useGiftHook();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const userId = localStorage.getItem("userId");
    if (isLoggedIn && userId) {
      getCart(userId);
    }
  }, []);

  useEffect(() => {
    const fetchCartItems = async () => {
      setIsLoading(true);
      try {
        const products = await Promise.all(
          cart.map(async (item) => {
            const product = await getProductById(item.product_id);
            console.log(product,cart)
           
            return {
              ...product.data,
              ...item,
            };
             console.log(product)
          })
          
        );
       
        setCartItems(products);
      } catch (error) {
        toast.error("Failed to load cart items.");
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (cart && cart.length > 0) {
      fetchCartItems();
    }
  }, [cart]);

  return { cartItems, isLoading };
};

export default useUserCartData;
