import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateItemQuantity, clearCart } from '../redux/cartSlice';

export const useCart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return {
    cartItems: cart.items,
    addToCart: (item) => dispatch(addItem(item)),
    removeFromCart: (id) => dispatch(removeItem(id)),
    updateQuantity: (id, quantity) => dispatch(updateItemQuantity({ id, quantity })),
    clearCart: () => dispatch(clearCart()),
    cartTotal: cart.items.reduce(
      (total, item) => total + (item.price * item.quantity), 0
    ),
    itemCount: cart.items.reduce(
      (count, item) => count + item.quantity, 0
    ),
  };
};