import React, { useEffect, useState } from "react";
import { Divider, message } from "antd";
import "@/styles/dashboard.scss";
import "@/styles/global.scss";
import userImage from "@/assests/images/admin_user.png";
import DashboardCard from "./DashboardCard";
import DashboardNumberCard from "./DashboardNumberCard";
import { getUserInfo } from "@/api/dashboard";

const DashboarLeft = {
  width: "100%",
  display: "flex",
};
const DashboarLeftUser = {
  paddingBottom: "100px",
  width: "50%",
};

const DashboarLeftUserinfo = {
  display: "flex",
  alignItems: "center",
};
const DashboardRightData = {
  display: "flex",
  flexFlow: "wrap",
};

const DashboardRightNumber = {
  width: "46%",
  margin: "6px",
  background: "#fff",
  padding: "30px 20px",
  borderRadius: "12px",
  display: "flex",
};

const DashboardCardIcon = {
  width: "40%",
  height: "100%",
  background: "#5de6d64a",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "20px",
};

const DashboardCardIconBackColl = {
  background: "rgb(239 166 67/29%)",
  width: "40%",
  height: "100%",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "20px",
};

interface userInfoType {
  userName: string;
  age: string | number;
  email: string;
  address: string;
  phoneNumber: string | number;
  lastLoginTime: string;
  currentLoginTime: string;
  limit: number | string;
}

const App: React.FC = () => {
  const [messageApi] = message.useMessage();
  const [userInfo, setUserInfo] = useState<userInfoType>({
    userName: "",
    age: "",
    email: "",
    address: "",
    phoneNumber: "",
    lastLoginTime: "",
    currentLoginTime: "",
    limit: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchUserInfo();
      } catch (err: any) {
        messageApi.open({
          type: "error",
          content: `${err.message}`,
        });
      }
    };

    fetchData();
  });
  const fetchUserInfo = async () => {
    const token = "kket";
    const data = await getUserInfo(token);
    setUserInfo(data);
  };
  return (
    <div style={DashboarLeft}>
      <div style={DashboarLeftUser}>
        <div style={DashboarLeftUserinfo}>
          <div style={{ width: "50%" }}>
            <img
              style={{ width: "80px", height: "80px", borderRadius: "50%" }}
              src={userImage}
              alt="加载中。。。"
            />
          </div>

          <div style={{ width: "50%" }}>
            <span
              style={{ fontSize: "22px", display: "-webkit-box" }}
              className="scope-overflow-ellipsis "
            >
              {userInfo.userName}
            </span>
            <span
              style={{ marginTop: "10px", display: "-webkit-box" }}
              className="scope-span-overflow"
            >
              超级管理员
            </span>
          </div>
          <div></div>
        </div>
        <Divider></Divider>

        <div>
          <DashboardCard
            label="上次登陆的时间"
            text={userInfo.lastLoginTime}
            style={{}}
          />
          <DashboardCard
            label="本次登陆的时间"
            text={userInfo.currentLoginTime}
            style={{ marginTop: "10px" }}
          />
        </div>
      </div>

      <div style={{ width: "50%" }}>
        {/* 数据统计 */}
        <div style={DashboardRightData}>
          <DashboardNumberCard
            number="123"
            label="今日支付订单"
            style={DashboardRightNumber}
            iconStyle={DashboardCardIcon}
            iconType="CheckOutlined"
            iconColor={{ color: "#fff" }}
          />

          <DashboardNumberCard
            number="123"
            label="今日收藏订单"
            style={DashboardRightNumber}
            iconStyle={DashboardCardIconBackColl}
            iconType="ClockCircleOutlined"
            iconColor={{ color: "#fff" }}
          />

          <DashboardNumberCard
            number="123"
            label="本月支付订单"
            style={DashboardRightNumber}
            iconStyle={DashboardCardIcon}
            iconType="CheckOutlined"
            iconColor={{ color: "#fff" }}
          />

          <DashboardNumberCard
            number="123"
            label="本月收藏订单"
            style={DashboardRightNumber}
            iconStyle={DashboardCardIconBackColl}
            iconType="ClockCircleOutlined"
            iconColor={{ color: "#fff" }}
          />
        </div>
      </div>
    </div>
  );
};
export default App;
