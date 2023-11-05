import React, { useContext } from 'react'

import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { AuthContext } from '../Components/AuthProvider'
import Footer from './Footer';

export default function Layout() {
    const{theme, setTheme}=useContext(AuthContext);

    return (
      <div>
         {
        theme ==="dark"? 
        <div className="bg-black">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        <ToastContainer></ToastContainer>
      </div>
      :
      <div className="">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        <ToastContainer></ToastContainer>
      </div>
  
      }
      </div>
     
     
    )
}

