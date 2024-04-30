import React from 'react';
import { Table,Pagination ,Divider} from 'antd';
import type { TableProps  } from 'antd';

import { UserOutlined } from "@ant-design/icons"
import { userTable } from '../../../../mockjs/dashboard';
import userImage from "../../../../assests/images/admin_user.png"

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
  }
  
  const columns: TableProps<DataType>['columns'] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
 

  ];
  
  const data: DataType[] = userTable
  

const App: React.FC = () => (
  <div style={DashboarLeft}>
    <div style={ DashboarLeftUser }>
      <div style={ DashboarLeftUserinfo }>
          <div style={{ width:"50%"}}>
            <img style={ { width:"80px",height:"80px",borderRadius:"50%" }} src={userImage} alt="加载中。。。" />

          </div>

          <div style={ { width:"50%" }}>
              <span style= {{ display:"block"}}>小仙女</span>
              <span>超级管理员</span>
          </div>
        <div>
      </div>
      </div>
      <Divider ></Divider>

      <div style={ DashboarLeftUserTime }>
        <div>
          <span>上次登陆时间</span>
          <span>2021:03:4</span>
        </div>
       <div>
          <span>上次登陆时间</span>
          <span>2021:03:4</span>
       </div>
      </div>
    </div>

    <div style={ DashboarLeftTable }>
        <Table columns = { columns } dataSource = { data } pagination = { false } />
        <Pagination defaultCurrent={1} total={10} hideOnSinglePage = { true } />
    </div>
</div>
);

const DashboarLeft = {
    width:"50%",

}
const DashboarLeftUser = {
    height:"200px",
    
}

const DashboarLeftTable = {

}

const DashboarLeftUserinfo = {
  display:"flex"
}

const DashboarLeftUserTime = {

}
export default App;