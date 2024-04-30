import { RouteObject } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import UserManagement from "../pages/UserManagement";



// react router v6·路由配置
const rootRouter :RouteObject[]=[
  // {
  //   path: "/",
  //   component:"/",
  //   children:[],
  // },
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
