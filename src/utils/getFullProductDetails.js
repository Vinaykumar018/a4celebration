import { getProductById } from '../services/decorations/product-api-service';
import { getEventByProductId } from '../services/event-management/events-management-api-service';
import useGiftHook from '../hooks/useGiftHooks';
import { getGiftProductById } from '../services/giftings/gifting-api-service';

export const getFullProductDetails = async (productId) => {
  try {
    if (productId.startsWith('PROD-DECORATION')) {
      return await getProductById(productId);
    } else if (productId.startsWith('PROD-EVENT')) {
      return await getEventByProductId(productId);
    } else {
      return await getGiftProductById(productId);
    }
  } catch (err) {
    console.error('Error fetching product details', err);
    return null;
  }
};
