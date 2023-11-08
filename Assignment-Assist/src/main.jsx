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
import Challenge from './pages/Challenge';
import MarkChallenged from './pages/MarkChallenged';
import PrivateRoute from './Components/PrivateRoute';





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
  element:<PrivateRoute><SubmittedAssignment></SubmittedAssignment></PrivateRoute>,
  
},
{
  path: "/MyAssignment",
  element:<PrivateRoute><MyAssignment></MyAssignment></PrivateRoute>,
 
},
{
  path: "/CreateAssignment",
  element:<PrivateRoute><CreateAssignment></CreateAssignment></PrivateRoute>
},
{ 
  path: "/AssignmentDetails/:_id",
  element:<PrivateRoute><AssignmentDetails></AssignmentDetails></PrivateRoute>, 
  loader: ({params})=>fetch("https://assignment-assist-back-end.vercel.app/AllAssignment")
},
{
  path: "/UpdateAssignment/:id",
  element:<PrivateRoute><UpdateAssignment></UpdateAssignment></PrivateRoute>,
  loader: ({params})=>fetch(`https://assignment-assist-back-end.vercel.app/AllAssignment/${params.id}`)
},
{
  path :"/AssignmentSubmission/:id",
  element:<PrivateRoute><AssignmentSubmission></AssignmentSubmission></PrivateRoute>,
  loader: ({params})=>fetch(`https://assignment-assist-back-end.vercel.app/MyTakenAssignment/${params.id}`)
},
{
  path :"/MarkAAssignment/:id",
  element:<PrivateRoute><MarkAAssignment></MarkAAssignment></PrivateRoute>,
  loader: ({params})=>fetch(`https://assignment-assist-back-end.vercel.app/AllSubmittedAssignment/${params.id}`)
},

{
  path :"/MarkChallenged/:id",
  element:<PrivateRoute><MarkChallenged></MarkChallenged></PrivateRoute>,
  loader: ({params})=>fetch(`https://assignment-assist-back-end.vercel.app/AllSubmittedAssignment/${params.id}`)
},
{
  path :"/Challenge/:id",
  element:<PrivateRoute><Challenge></Challenge></PrivateRoute>,
  loader: ({params})=>fetch(`https://assignment-assist-back-end.vercel.app/AllSubmittedAssignment/${params.id}`)
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