import React from 'react';
import { Layout, Menu,  } from 'antd';
import DashboardUserInfo from "./components/DashboardUserInfo";
import DashboardRight from "./components/DashboardNumber";
const { Content, } = Layout;

const App: React.FC = () => (
    
  <div style = {{ margin: '24px 16px 0', overflow: 'initial', }}>
      <DashboardUserInfo />
      <DashboardRight />
  </div>
);

export default App;