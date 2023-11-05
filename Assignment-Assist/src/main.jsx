import React from 'react'
import ReactDOM from 'react-dom/client'


import './index.css'
import Layout from './Components/Layout';
import Home from './pages/Home';
import AuthProvider from './Components/AuthProvider';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';


import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Navbar from './Components/Navbar';





const router = createBrowserRouter([
  {
  path: "/",
  element:<Layout></Layout>,
  errorElement: <ErrorPage></ErrorPage>,
  children:[
    {
      path: "/",
      element:<Home></Home>
  },
 
{
  path: "/Registration",
  element:<Registration></Registration>
},
{
  path: "/Login",
  element:<Login></Login>
},


 ],
},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
    <RouterProvider router={router} />
   
   
    </AuthProvider>
  </React.StrictMode>,
)