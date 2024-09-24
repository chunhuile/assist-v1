import React from "react";
import DashboardUserInfo from "./components/DashboardUserInfo";
import DashboardRight from "./components/DashboardTable";

const App: React.FC = () => (
  <div className="scope-vsc-initialized">
    <DashboardUserInfo />
    <DashboardRight />
  </div>
);

export default App;
