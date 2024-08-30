import React , {useEffect,useState}from 'react';

import type { TableProps} from 'antd';
import { Table,Pagination } from 'antd';
 import DashboardEcharts from './DashboardEcharts';
import { getUserTable } from '@/api/dashboard';
// import { getUserTable } from "../../../api/dashboard"

interface DataType {
  key: string | number;
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


const DashboardNumber = {
  width:"100%",
  display:"flex"
}


const DashboardTable: React.FC = () => {

  const [data, setData] = useState<DataType[]>([]);

   // 使用 useEffect 钩子请求数据
   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUserTable(); // 假设 getUserTable 返回一个 DataType 数组
        setData(response); // 设置数据到状态中
      } catch (error) {
        // console.error("Failed to fetch data", error);
      }
    };

    fetchData(); // 调用请求函数
  }, []); // 空数组意味着该 effect 只在组件挂载时执行一次


  return (
    <div style={ DashboardNumber }>
      <div style={{width:"50%"}}>
        <Table columns = { columns } dataSource = { data } pagination = { false } />
        <Pagination defaultCurrent={1} total={10} hideOnSinglePage = { true } />

    </div>
    <div style={{width:"50%"}}>
        {/*  echarts */}
        <DashboardEcharts />
    </div>
    </div>
  )
}



export default DashboardTable;