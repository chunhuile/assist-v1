import React, { useState }  from 'react';
import type { MenuProps } from 'antd';
import { Layout, Menu,  } from 'antd';
import { Navigate, useNavigate } from 'react-router-dom';
import '../../styles/dashboard.scss'

import DashboardLeft from "./components/DashboardLeft";
import DashboardRight from "./components/DashboardRight";
import Dashboard from "./dashboard"
import  { menuList } from "../../mockjs/dashboard"

const { Content, } = Layout;
const menuItems = menuList


const DashboardMain: React.FC = () => {

  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState('1');
  const navigateTo = useNavigate()

/**
 * 点击跳转到对应路由
 */ 
  const menuClick: MenuProps['onClick'] = (e) => {
    console.log('click 测试点击事件 ', e);

    // 如何实现才能跳转到路由 编程式导航 利用到一个hook
    navigateTo(e.key)


    setCurrent(e.key);


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
          onClick={menuClick}
          style={{height:"100%"}}
      />
      </div>


      <Dashboard  />
    </Layout>
  );
};



export default DashboardMain;





