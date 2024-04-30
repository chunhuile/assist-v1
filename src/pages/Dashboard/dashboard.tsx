import React from 'react';
import { Layout, Menu,  } from 'antd';
import DashboardLeft from "./components/DashboardLeft";
import DashboardRight from "./components/DashboardRight";
const { Content, } = Layout;

const App: React.FC = () => (
    
  <div className="App">
    <Layout style = {{ marginLeft: 200 }}>
        <Content style = {{ margin: '24px 16px 0', overflow: 'initial',display:'flex' }}>
        <div>
            <DashboardLeft />
            <DashboardRight />
        </div>
        </Content>


    </Layout> 


  </div>
);

export default App;