import React, { useState } from 'react';
import Navbar from "./component/Navbar"; 
import Homepage from "./component/Homepage";
// import Footer from "./Component/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './component/Footer';
import { Routes, Route } from 'react-router-dom';
import Contactus from './component/Contactus';
import Downloadsection from './component/Downloadsection';


const App = () => {

  
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />

        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/contact' element={<Contactus />} />
        </Routes>
       <ToastContainer /> 
       <Footer />
    </div>
  );
};

export default App;
