import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { BrowserRouter as Router } from "react-router-dom";
import RoutesComponent from "./routes/routes"; // Import the Routes file
import Navbar from './components/header/navbar';
import Service from './components/service/Service';
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Router>
      <Navbar></Navbar>
      
        <RoutesComponent />
        <Footer></Footer>  {/* Use the Routes Component */}
      </Router>

    </>
  )
}

export default App
