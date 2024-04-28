import React, { useState }  from 'react';
import {
  UserOutlined,
  HomeOutlined,
  SettingOutlined,
  FileProtectOutlined 
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu,  } from 'antd';
import DashboardLeft from "./components/DashboardLeft"
import DashboardRight from "./components/DashboardRight"


const { Content, } = Layout;

const menuItems: MenuProps['items'] = [
  HomeOutlined,
  UserOutlined,
  FileProtectOutlined,
  SettingOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `测试`,
}));




const App: React.FC = () => {

  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState('1');

  const clickMenuItem: MenuProps['onClick'] = (e) => {
    console.log('click 测试点击事件 ', e);
    setCurrent(e.key);
  };
  return (
    <Layout hasSider style={Dashboard}>

      <div
        style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0,width:'200px'}}
      >
      <Menu
        theme='dark'
        mode="inline" 
        defaultSelectedKeys={['1']} 
        inlineCollapsed={collapsed} 
        items={menuItems}
        onClick={clickMenuItem}
        style={{height:"100%"}}
        />
      </div>
         
      {
     <Layout style = {{ marginLeft: 200 }}>
        <Content style = {{ margin: '24px 16px 0', overflow: 'initial',display:'flex' }}>
          <DashboardLeft />
          <DashboardRight />
        </Content>
      
      </Layout> 
      }
    </Layout>
  );
};

const Dashboard = {
}

export default App;





