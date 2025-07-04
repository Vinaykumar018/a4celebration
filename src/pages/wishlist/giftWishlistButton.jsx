import { useDispatch, useSelector } from "react-redux";
import { Heart } from "lucide-react";
import { addToWishlist, removeFromWishlist, fetchWishlist } from '../../redux/wishListSlice';
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GiftWishlistButton = ({ productId }) => {
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
       className={`flex gap-2 items-center px-6 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 transition-all border-2 ${isLocalWishlisted ? 'bg-amber-50 border-amber-500 text-amber-600' : 'border-amber-200 text-gray-800 hover:border-amber-300'
                    }`}
                >
      <Heart size={20} className={isLocalWishlisted ? 'fill-amber-600 text-amber-600' : ''} />
      Wishlist
    </button>
    <ToastContainer></ToastContainer>
   </>
  );
};

export default GiftWishlistButton;
