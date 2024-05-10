import React from 'react';
import { Divider} from 'antd';
import '../../../styles/dashboard.scss'
import '../../../styles/global.scss'
import userImage from "../../../assests/images/admin_user.png"
import DashboardCard from './DashboardCard';
import DashboardNumberCard from './DashboardNumberCard';
  

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
        <DashboardCard 
          label="上次登陆的时间"
          text="2021:03:40"
          style={{}}
        />
        <DashboardCard 
          label="本次登陆的时间"
          text="2021:12:40"
          style={{marginTop:"10px"}}
        />
      </div>
    </div>

    <div style={{width:"50%"}}>

         {/* 数据统计 */}
         <div style={DashboardRightData}>
          <DashboardNumberCard 
            number="123"
            label="今日支付订单"
            style={DashboardRightNumber}
            iconStyle={DashboardCardIcon}
            iconType="CheckOutlined"
            iconColor={{color:"#fff"}}

          />

          <DashboardNumberCard 
            number="123"
            label="今日收藏订单"
            style={DashboardRightNumber}
            iconStyle={DashboardCardIconBackColl}
            iconType="ClockCircleOutlined"
            iconColor={{color:"#fff"}}
          />

        <DashboardNumberCard 
            number="123"
            label="本月支付订单"
            style={DashboardRightNumber}
            iconStyle={DashboardCardIcon }
            iconType="CheckOutlined"
            iconColor={{color:"#fff"}}
          />

          <DashboardNumberCard 
            number="123"
            label="本月收藏订单"
            style={DashboardRightNumber}
            iconStyle={DashboardCardIconBackColl}
            iconType="ClockCircleOutlined"
            iconColor={{color:"#fff"}}
          /> 
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
  flexFlow: "wrap",

}

const DashboardRightNumber = {
  width:"46%",
  margin:"6px",
  background:"#fff",
  padding:"30px 20px",
  borderRadius:"12px",
  display:"flex"
}


const DashboardCardIcon={
  width:"40%",
  height:"100%",
  background:"#5de6d64a",
  borderRadius:"10px",
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  fontSize:"20px"
}


const DashboardCardIconBackColl = {
  background:"rgb(239 166 67/29%)",
  width:"40%",
  height:"100%",
  borderRadius:"10px",
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  fontSize:"20px"

}
export default App;