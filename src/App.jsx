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
    <>

      <Router>
      <ScrollToTop />
        <Navbar></Navbar>

        <RoutesComponent />
        <Footer></Footer>  {/* Use the Routes Component */}
      </Router>

    </>
  )
}

export default App
