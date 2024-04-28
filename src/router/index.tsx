import { lazy } from "react";
import SuspenseWrapper from "../helper/SuspenseWrapper";
import { RouteObject } from "react-router-dom";

// const Dashboard = lazy(() => import("../pages/Dashboard"));
// const Dashboard = lazy(() => import("@/pages/Dashboard/components/ContainerMain"));

// const rootRouter: RouteObject[] = [
//   {
//     path: "/",
//     element: SuspenseWrapper(Dashboard),
//   },
// ];

// export default rootRouter;


import Dashboard from "../pages/Dashboard";



// react router v6·路由配置
const rootRouter :RouteObject[]=[
    {
    path: "/",
    element: <Dashboard />,
  },
]
export default rootRouter;
