import React from "react";
import { RouteObject,Navigate } from "react-router-dom";
import Login from "../pages/Login"

import Home from "../pages/Dashboard/index";
import UserManagement from "../pages/UserManagement";
import Dashboard from "../pages/Dashboard/dashboard"
import ProductManagement from "../pages/ProductManagement";


const withLoadingComponent = (comp:JSX.Element) => {
    <React.Suspense fallback={<div>Loading...</div>}>
      {comp}
    </React.Suspense>
}


// react router v6·路由配置 （路由表）
const rootRouter :RouteObject[]=[
  {
    path: "/",
    element:<Navigate to="/home" />,//Navigate是重定向
  },
    {
    path: "/",
    element: <Home />,
    children:[
      {
        path: "/home",
        element: <Dashboard />,
      },
      {
        path: "/user",
        element: <UserManagement />,
      },
      {
        path:"/productManagement",
        element:<ProductManagement />
      }
    ],
  },

  {
path:"/login",
element:<Login />
  }

]
export default rootRouter;
