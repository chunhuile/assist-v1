import React from 'react';
import { Layout, Menu,  } from 'antd';
import DashboardUserInfo from "./components/DashboardUserInfo";
import DashboardRight from "./components/DashboardNumber";

const App: React.FC = () => (
    
  <div className='scope-vsc-initialized'>
      <DashboardUserInfo />
      <DashboardRight />
  </div>
);

export default App;