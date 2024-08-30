import { HomeOutlined, UserOutlined, FileProtectOutlined, SettingOutlined } from '@ant-design/icons';

// menu的数据
 export const menuList = [
  {
    id:1,
    key:"/home",
    label: "首页",
    icon: <HomeOutlined />,
  },
  {
    id:2,
    key: "/user",
    label: "用户管理",
    icon: <UserOutlined />,
  },
  {
    id:3,
    key: "/productManagement",
    label: "商品管理",
    icon: <FileProtectOutlined />,
  },
  {
    id:4,
    key: "/setting",
    label: "设置",
    icon: <SettingOutlined />,
  }
];