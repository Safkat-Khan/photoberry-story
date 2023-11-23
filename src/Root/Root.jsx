import { Outlet } from 'react-router-dom';

// Import Swiper React components


// Import Swiper styles

import "../styles.css";
import "react-toastify/dist/ReactToastify.css";

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer/Footer';

import { Toaster } from 'react-hot-toast';




const Root = () => {

  
 
    return (
      <div className="bg-gray-100">
        <Navbar></Navbar>

        <Outlet></Outlet>
        <Footer></Footer>

        <div className="absolute z-50">
          <Toaster />
        </div>
      </div>
    );
};

export default Root;