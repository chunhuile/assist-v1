/**
 * @file 该文件用于模拟dashboard页面的数据
*/ 
import Mock from 'mockjs';

// dashboarduser列表的接口数据
const userTable = Mock.mock({
  'data|10': [  // 生成10条数据
      {
        'key|+1': 1,  // 自增ID，从1开始
        name: '@name',  // 随机生成名字
        'age|18-60': 1,  // 随机生成18到60岁之间的年龄
        address: '@city(true) No. @integer(1, 100) Lake Park',  // 随机生成地址
      }
    ],
})
// 模拟接口
Mock.mock('/api/dashboard/user', 'get', () => {
  return {
    data: userTable.data,
    message: 'Success',
    status: 200,
  };
});




const userEchartsData = Mock.mock({
  'data|30':[
    {
      'key|+1':1,
      'month|+1': 1, 
      'userNumber|1-10000':1
    }
  ]
})

Mock.mock('/api/dashboard/userEcharts', 'get', () => {
  return {
    data: userEchartsData.data,
    message: 'Success',
    status: 200,
  };
});

export default Mock;
