import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import "../../styles/dashboard.scss";
import { menuList } from "../../mockjs/dashboardMenu";

const { Content } = Layout;
const menuItems = menuList;

const DashboardMain: React.FC = () => {
  const [collapsed] = useState(false);
  const [current, setCurrent] = useState<string>("");
  const navigateTo = useNavigate();

  /**
   * 点击跳转到对应路由
   */
  const menuClick: MenuProps["onClick"] = (e) => {
    if (e.key !== current) {
      navigateTo(e.key);
      setCurrent(e.key);
    }
  };
  return (
    <Layout hasSider>
      <div className="Dashboard">
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[current]}
          items={menuItems}
          inlineCollapsed={collapsed}
          onClick={menuClick}
          style={{ height: "100%" }}
        />
      </div>
      <Layout style={{ marginLeft: 200 }}>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardMain;
