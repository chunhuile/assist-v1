import React from 'react';
import { Table,Pagination ,Divider} from 'antd';
import type { TableProps  } from 'antd';

import { UserOutlined } from "@ant-design/icons"

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
  
  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park'
    },
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park'
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park'
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park'
      },  {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park'
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park'
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park'
      },
  ];
  

const App: React.FC = () => (
  <div style={ DashboarLeft }>
    <div style={ DashboarLeftUser }>
      <div style={ DashboarLeftUserinfo }>
          <div style={{ width:"50%"}}>
            {/* <image /> */}
            <UserOutlined />
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