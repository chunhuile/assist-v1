import React from 'react';
import { Divider} from 'antd';

import '../../../styles/dashboard.scss'
import '../../../styles/global.scss'
import userImage from "../../../assests/images/admin_user.png"


  

const App: React.FC = () => (
  <div style={DashboarLeft}>
    <div style={ DashboarLeftUser }>
      <div style={ DashboarLeftUserinfo }>
          <div style={{ width:"50%"}}>
            <img style={ { width:"80px",height:"80px",borderRadius:"50%" }} src={userImage} alt="加载中。。。" />

          </div>

          <div style={ { width:"50%" }}>
              <span style= {{ fontSize:"22px",display: '-webkit-box'}} className='scope-overflow-ellipsis '>小仙女</span>
              <span style={{marginTop:"10px",display:"-webkit-box"}} className='scope-span-overflow'>超级管理员</span>
          </div>
        <div>
      </div>
      </div>
      <Divider ></Divider>

      <div>
        <div>
          <span  className='scope-span-style scope-span-color'>上次登陆时间</span>
          <span className='scope-span-color'>2021:03:04</span>
        </div>
       <div style={{ marginTop:"10px"}}>
          <span className='scope-span-style scope-span-color'>上次登陆时间</span>
          <span  className='scope-span-color'>2021:03:4</span>
       </div>
      </div>
    </div>

    <div style={{width:"50%"}}>

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
</div>
);

const DashboarLeft = {
    width:"100%",
    display:"flex"
}
const DashboarLeftUser = {
  paddingBottom:"100px",
    width:"50%"
}

const DashboarLeftUserinfo = {
  display:"flex",
  alignItems:"center"
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