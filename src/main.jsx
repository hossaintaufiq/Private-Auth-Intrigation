import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root/Root';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Providers/AuthProvider';
import Orders from './Pages/Orders/Orders';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Profile from './Pages/Profile/Profile';
import DashBoard from './Pages/DashBoard/DashBoard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: "/login",
        element:<Login></Login>
      },
      {
        path: "/register",
        element:<Register></Register>
      },
      {
        path: "/orders",
        element: <PrivateRoute><Orders></Orders></PrivateRoute>
      },
      {
        path: "profile",
        element: <PrivateRoute> <Profile></Profile></PrivateRoute>
      },
      {
        path: "dashboard",
        element: <PrivateRoute> <DashBoard></DashBoard></PrivateRoute>
      }
    ]
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>
    <RouterProvider router={router} />

    </AuthProvider>
    

  </React.StrictMode>,
)
