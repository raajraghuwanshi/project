import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router";
import Login from '../components/Login';
import AuthLayout from '../layout/AuthLayout';
import HomeLayout from '../layout/HomeLayout';
import UserPage from '../pages/UserPage';
import ProductPage from '../pages/ProductPage';
import HomePage from '../pages/HomePage';

const AppRouter = () => {
    const router = createBrowserRouter([
        {
            path:"/",
            element:<AuthLayout/>
        },
        {
            path:"/home",
            element:<HomeLayout/>,
            children:[
                {
                    path:"",
                    element:<HomePage/>
                },
                {
                    path:"user",
                    element:<UserPage/>
                },
                {
                    path:"products",
                    element:<ProductPage/>
                }
            ]
        }
    ])
  return <RouterProvider router={router}/>
}

export default AppRouter