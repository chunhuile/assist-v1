import React, { useEffect, useState } from "react";
import { Divider, message } from "antd";
import "@/styles/dashboard.scss";
import "@/styles/global.scss";
import userImage from "@/assests/images/admin_user.png";
import DashboardCard from "./DashboardCard";
import DashboardNumberCard from "@/components/basic/card";
import { getUserInfo } from "@/api/dashboard";
import { userInfo } from "@/interfaceData/dashboard/dashboard";

const App: React.FC = () => {
  const [messageApi] = message.useMessage();
  const [userInfo, setUserInfo] = useState<userInfo>({
    userName: "",
    age: "",
    email: "",
    address: "",
    phoneNumber: "",
    lastLoginTime: "",
    currentLoginTime: "",
    limit: "",
    paymentOrder: "",
    paymentOrders: "",
    favoriteOrder: "",
    favoriteOrders: "",
  });
  let cardModule: React.ReactNode;

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
  }, []);
  const fetchUserInfo = async () => {
    const data = await getUserInfo();
    console.log(data);
    setUserInfo(data);
  };

  cardModule = (
    <div style={{ width: "50%", ...DashboardRightData }}>
      <DashboardNumberCard
        title="今日支付订单"
        text={userInfo.paymentOrder}
        iconType="CheckOutlined"
        cardStylesModule={{ width: "46%" }}
      />

      <DashboardNumberCard
        text={userInfo.favoriteOrder}
        title="今日收藏订单"
        iconType="ClockCircleOutlined"
        cardStylesModule={{ width: "46%" }}
      />

      <DashboardNumberCard
        text={userInfo.paymentOrders}
        title="本月支付订单"
        iconType="CheckOutlined"
        cardStylesModule={{ width: "46%" }}
      />

      <DashboardNumberCard
        text={userInfo.favoriteOrders}
        title="本月收藏订单"
        iconType="ClockCircleOutlined"
        cardStylesModule={{ width: "46%" }}
      />
    </div>
  );

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
              {userInfo.limit == 1
                ? "超级管理员"
                : userInfo.limit == 2
                ? "管理员"
                : userInfo.limit == 3
                ? "客户经理"
                : "未知角色"}
            </span>
          </div>
        </div>
        <Divider />

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

      {cardModule}
    </div>
  );
};

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

export default App;
