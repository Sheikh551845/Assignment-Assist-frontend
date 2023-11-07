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
import AssignmentDetails from './pages/AssignmentDetails';
import UpdateAssignment from './pages/UpdateAssignment';
import AssignmentSubmission from './pages/AssignmentSubmission';
import MarkAAssignment from './pages/MarkAAssignment';





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
  element:<SubmittedAssignment></SubmittedAssignment>,
  loader: ({params})=>fetch("http://localhost:8888/AllSubmittedAssignment")
},
{
  path: "/MyAssignment",
  element:<MyAssignment></MyAssignment>
},
{
  path: "/CreateAssignment",
  element:<CreateAssignment></CreateAssignment>
},
{ 
  path: "/AssignmentDetails/:_id",
  element:<AssignmentDetails></AssignmentDetails>, 
  loader: ({params})=>fetch("http://localhost:8888/AllAssignment")
},
{
  path: "/UpdateAssignment/:id",
  element:<UpdateAssignment></UpdateAssignment>,
  loader: ({params})=>fetch(`http://localhost:8888/AllAssignment/${params.id}`)
},
{
  path :"/AssignmentSubmission/:id",
  element:<AssignmentSubmission></AssignmentSubmission>,
  loader: ({params})=>fetch(`http://localhost:8888/MyTakenAssignment/${params.id}`)
},
{
  path :"/MarkAAssignment/:id",
  element:<MarkAAssignment></MarkAAssignment>,
  loader: ({params})=>fetch(`http://localhost:8888/AllSubmittedAssignment/${params.id}`)
}




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