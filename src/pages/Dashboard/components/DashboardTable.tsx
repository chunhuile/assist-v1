import React , {useEffect,useState,useRef}from 'react';

import type { TableProps} from 'antd';
import { Table,Pagination,message } from 'antd';
import { getUserTable,getUserEchartsData } from '@/api/dashboard';
import * as echarts from 'echarts';

interface DataType {
  key:  number;
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
  const [messageApi, ] = message.useMessage();
  const [userTableData, setTableData] = useState<DataType[]>([]);
  const [echartsData,setEchartsData] = useState<number[]>([])
  const chartRef = useRef<HTMLDivElement>(null);

    // 使用 useEffect 钩子请求数据
  useEffect(() => {
    const fetchData = async () => {
      try{
        await fetchUserEchartsData()
        await fetchUserTableData();
      }catch(err:any){
        console.log(err)
        errMessage(err)
      }
    }
   
      fetchData();     
  }, []); // 空数组意味着该 effect 只在组件挂载时执行一次

   // 更新 ECharts 图表
  useEffect(() => {
    if (echartsData.length > 0 && chartRef.current) {
      getUserEcharts();
    }
  }, [echartsData]); 

  const errMessage= (err:any) => {
    messageApi.open({
      type: 'error',
      content: `${err.message}`,
    });
  };


  const fetchUserTableData = async () => {
    try {
      const response = await getUserTable(); // 假设 getUserTable 返回一个 DataType 数组
      setTableData(response); // 设置数据到状态中
    } catch (error:any) {
      errMessage(error)

    }
  };

  const fetchUserEchartsData = async ()=>{
    try{

      const data = await getUserEchartsData()
      setEchartsData(data.map(item => item.userNumber));  // 假设你只需要 userNumber 数据
    }catch(err){
      errMessage(err)
    }
  }
 
 const getUserEcharts= async ()=>{
    const myChart = echarts.init(chartRef.current);
    const option = {
      title: {
        text: '本月用户增长折线图'
      },
      xAxis: {
        type: 'category',
        data:Array.from({ length: echartsData.length }, (_, i) => i + 1), // X轴数据，如月份
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          type: 'line',
          data: echartsData
        },
  
    ]
    };
    // 使用指定的配置项和数据显示图表
    myChart.setOption(option);

    return () => myChart.dispose();
}

  return (
    <div style={ DashboardNumber }>
      <div style={{width:"50%"}}>
        <Table columns = { columns } dataSource = { userTableData } pagination = { false } />
        <Pagination defaultCurrent={1} total={10} hideOnSinglePage = { true } />

    </div>
    <div style={{width:"50%"}}>
  
        <div ref={chartRef} id="main" style={{ width: '100%', height: '600px' }} />;

    </div>
    </div>
  )
}



export default DashboardTable;