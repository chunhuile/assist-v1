import React from 'react';
import { Button } from 'antd';
import { CheckCircleOutlined } from "@ant-design/icons"


const App: React.FC = () => (
  <div style={ DashboardRight }>
   <div>
      {/* 数据统计 */}
      <div style={DashboardRightData}>
          <div style={ DashboardRightNumber }>
            <span style={{ display:"block" }}>¥1233</span>
            <span  style={{ display:"block" }}>本月支付订单</span>
          </div>
          <div style={ DashboardRightNumber }>
            <span style={{ display:"block" }}>¥1233</span>
            <span  style={{ display:"block" }}>本月支付订单</span>
          </div>

          <div style={ DashboardRightNumber }>
            <span style={{ display:"block" }}>¥1233</span>
            <span  style={{ display:"block" }}>本月支付订单</span>
          </div>
          <div style={ DashboardRightNumber }>
            <span style={{ display:"block" }}>¥1233</span>
            <span  style={{ display:"block" }}>本月支付订单</span>
          </div>
      </div>

   </div>
   <div>
      {/*  echarts */}
      这里是图表样式
   </div>
  </div>
);

const DashboardRight = {
    width:"50%"
}

const DashboardRightData = {
  display:"flex",
  flexFlow: "wrap"
}

const DashboardRightNumber = {
  width:"46%",
  margin:"5px",
  background:"#fff",
  padding:"10px"
  
  
}
export default App;