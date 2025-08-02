import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { BrowserRouter as Router } from "react-router-dom";
import RoutesComponent from "./routes/routes"; // Import the Routes file
import Navbar from './components/header/navbar';
import Service from './components/service/Service';
import Footer from './components/footer/Footer'
import { useDispatch } from 'react-redux';
import { fetchUserData } from './redux/userSlice';
import ScrollToTop from './components/service/ScrollToTop';
import { GoogleOAuthProvider } from '@react-oauth/google';
import MetaTags from './components/SEO/MetaTags';


function App() {

  const dispatch = useDispatch();
  useEffect(() => {

    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const userId = localStorage.getItem('userId');
    if (isLoggedIn && userId) {
      dispatch(fetchUserData(userId));
    }
  }, [dispatch]);

  return (
    <Router>
      <MetaTags
        title="Best Event Planners in Kanpur"
        description="Top birthday, wedding, and corporate event organizers in Kanpur."
        keywords="Best Event Planners in Kanpur, Birthday Decoration, Wedding Event Management, Corporate Events"
      />

      <GoogleOAuthProvider clientId="590949563897-n033hboekn0vtsu906gl6evll817f1gc.apps.googleusercontent.com">
        <ScrollToTop />
        <Navbar />
        <RoutesComponent />
        <Footer />
      </GoogleOAuthProvider>
    </Router>
  )
}

export default App
