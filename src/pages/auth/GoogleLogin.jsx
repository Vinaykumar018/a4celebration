import { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { googleAuth } from "./api";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchUserData } from "../../redux/userSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GoolgeLoginAuth = ({ onClose }) => {

	const dispatch = useDispatch();
	const [user, setUser] = useState(null);
	const navigate = useNavigate();
	const responseGoogle = async (authResult) => {
    try {
      if (authResult["code"]) {
        const result = await googleAuth(authResult.code);
        const { email, _id } = result.data.user;
        localStorage.setItem("userEmail", email);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userId", _id);
        dispatch(fetchUserData(_id));

        toast.success("Login Successful with Google!");
        if (onClose) onClose(); // Close the modal
        
        // Add delay before navigation to allow toast to be seen
        setTimeout(() => {
          navigate('/');
        }, 1500); // 1.5 second delay
      } else {
        console.log(authResult);
        throw new Error(authResult);
      }
    } catch (e) {
      console.log('Error while Google Login...', e);
      toast.error("Google login failed. Please try again.");
    }
  };

	const googleLogin = useGoogleLogin({
		onSuccess: responseGoogle,
		onError: responseGoogle,
		flow: "auth-code",
	});

	return (
		<div className="App">
			<ToastContainer></ToastContainer>
			<button onClick={googleLogin}
            type="button"
            className="w-full flex items-center justify-center py-2.5 border border-amber-300 text-amber-700 hover:bg-amber-100 hover:text-amber-800 rounded-md"
          >
            <svg
              className="mr-2 h-4 w-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="https://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
            Sign in with Google
          </button>
		</div>
	);
};

export default GoolgeLoginAuth;