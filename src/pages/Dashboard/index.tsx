import React, { useState }  from 'react';
import type { MenuProps } from 'antd';
import { Layout, Menu,  } from 'antd';
import { useLocation, useNavigate  } from 'react-router-dom';
import '../../styles/dashboard.scss'

import DashboardLeft from "./components/DashboardLeft";
import DashboardRight from "./components/DashboardRight";
import Dashboard from "./dashboard"
import  { menuList } from "../../mockjs/dashboard"

const { Content, } = Layout;
const menuItems = menuList


const App: React.FC = () => {

  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState('1');


  const navigate = useNavigate();
  const { pathname } = useLocation();

  const clickMenuItem: MenuProps['onClick'] = (e) => {
    console.log('click 测试点击事件 ', e);
    setCurrent(e.key);

    navigate(e.key)

  };
  return (
    <Layout hasSider >
      <div className='Dashboard'>
        <Menu
          theme='dark'
          mode="inline" 
          defaultSelectedKeys={['1']} 
          items={menuItems}
          inlineCollapsed={collapsed} 
          onClick={clickMenuItem}
          style={{height:"100%"}}
      />
      </div>


      <Dashboard  />
         
      {/* <Layout style = {{ marginLeft: 200 }}>
        <Content style = {{ margin: '24px 16px 0', overflow: 'initial',display:'flex' }}>
          <DashboardLeft />
          <DashboardRight />
        </Content>
      </Layout>  */}
    </Layout>
  );
};



export default App;





