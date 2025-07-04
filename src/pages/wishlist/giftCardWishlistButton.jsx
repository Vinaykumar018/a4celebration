import { useDispatch, useSelector } from "react-redux";
import { Heart } from "lucide-react";
import { addToWishlist, removeFromWishlist, fetchWishlist } from '../../redux/wishListSlice';
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaHeart } from "react-icons/fa";

const GiftCardWishlistButton = ({ productId }) => {
  const dispatch = useDispatch();
  const userId = localStorage.getItem("userId");

  const wishlistItems = useSelector((state) => state.wishlist.items);
  const isWishlisted = wishlistItems.some(item => item.productId === productId);
  const [isLocalWishlisted, setIsLocalWishlisted] = useState(isWishlisted);

  // Fetch wishlist on mount
  useEffect(() => {
    if (userId) {
      dispatch(fetchWishlist(userId));
    }
  }, [dispatch, userId]);

  useEffect(() => {
    setIsLocalWishlisted(isWishlisted);
  }, [isWishlisted]);

  const handleToggle = () => {
    if (!userId) return toast.error("Please login to use wishlist");

    if (isLocalWishlisted) {
      dispatch(removeFromWishlist({ userId, productId }));
      toast.warn("Removed from Wishlist");
    } else {
      dispatch(addToWishlist({ userId, productId }));
      toast.success("Added to Wishlist");
    }
  };

  return (
    <>
    <button
      onClick={handleToggle}
       className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-md"
                >
     <FaHeart
  className={`text-lg ${isLocalWishlisted ? 'text-red-500' : 'text-gray-300'}`}
/>
      
    </button>
    <ToastContainer></ToastContainer>
   </>
  );
};

export default GiftCardWishlistButton;
