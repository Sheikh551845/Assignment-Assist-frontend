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

import AllAssignment from './pages/AllAssignment';
import SubmittedAssignment from './pages/SubmittedAssignment';
import MyAssignment from './pages/MyAssignment';
import CreateAssignment from './pages/CreateAssignment';





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
{
  path: "/AllAssignment",
  element:<AllAssignment></AllAssignment>
},
{
  path: "/SubmittedAssignment",
  element:<SubmittedAssignment></SubmittedAssignment>
},
{
  path: "/MyAssignment",
  element:<MyAssignment></MyAssignment>
},
{
  path: "/CreateAssignment",
  element:<CreateAssignment></CreateAssignment>
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