import React from 'react';
import type { TableProps  } from 'antd';

import { Table,Pagination } from 'antd';
import { userTable } from '../../../mockjs/dashboard';

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
  <div style={ DashboardNumber }>
    <div style={{width:"50%"}}>
      <Table columns = { columns } dataSource = { data } pagination = { false } />
      <Pagination defaultCurrent={1} total={10} hideOnSinglePage = { true } />

   </div>
   <div style={{width:"50%"}}>
      {/*  echarts */}
      这里是图表样式
   </div>
  </div>
);

const DashboardNumber = {
    width:"100%",
    display:"flex"
}




export default App;