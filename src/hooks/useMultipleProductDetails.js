import { useEffect, useState } from "react";
import { getProductById } from "../services/decorations/product-api-service";
import useGiftHook from "./useGiftHooks";
import { toast } from "react-toastify";

const useMultipleProductDetails = (productIds = []) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { fetchGiftById } = useGiftHook();

  useEffect(() => {
    const fetchData = async () => {
      if (!productIds.length) return;
      setIsLoading(true);
      const result = [];

      try {
        for (const id of productIds) {
          let product;
          if (id.startsWith("PROD-DECORATION")) {
            product = await getProductById(id);
          } else {
            product = await fetchGiftById(id);
          }
          result.push(product.data);
        }

        setProducts(result);
      } catch (err) {
        toast.error("Failed to load product(s)");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [productIds]);

  return { products, isLoading };
};

export default useMultipleProductDetails;
