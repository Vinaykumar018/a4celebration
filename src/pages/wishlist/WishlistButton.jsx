import { useDispatch, useSelector } from "react-redux";
import { Heart } from "lucide-react";
import { addToWishlist, removeFromWishlist, fetchWishlist } from '../../redux/wishListSlice';
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WishlistButton = ({ productId ,inCart}) => {

  
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
      className={`flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 
        ${inCart 
          ? "rounded-full p-2 bg-white shadow-none border-none" 
          : `gap-2 px-6 py-3 rounded-xl border-2 ${
              isLocalWishlisted
                ? "bg-black border-yellow-400 text-yellow-400"
                : "border-gray-300 text-yellow-400 hover:border-yellow-400 bg-black"
            }`
        }`}
    >
      <Heart
        size={20}
        className={`${
          isLocalWishlisted
            ? "fill-red-500 text-red-500"
            : inCart
              ? "text-gray-400"
              : "text-yellow-400"
        }`}
      />
      {!inCart && <span>Wishlist</span>}
    </button>
    <ToastContainer />
  </>
);

};

export default WishlistButton;
