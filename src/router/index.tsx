import { RouteObject,Navigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import UserManagement from "../pages/UserManagement";



// react router v6·路由配置 （路由表）
const rootRouter :RouteObject[]=[
  {
    path: "/",
    element:<Navigate to="/home" />,//Navigate是重定向
    children:[],
  },
    {
    path: "/home",
    element: <Dashboard />,
  },
  {
    path: "/user",
    element: <UserManagement />,
  },
]
export default rootRouter;
