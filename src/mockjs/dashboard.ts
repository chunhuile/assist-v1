/**
 * @file 该文件用于模拟dashboard页面的数据
 */
import { message } from "antd";
import Mock from "mockjs";
const Random = Mock.Random;
// dashboarduser列表的接口数据
const userTable = Mock.mock({
  "data|10": [
    {
      "key|+1": 1, // 自增ID，从1开始
      name: "@name", // 随机生成名字
      "age|18-60": 1, // 随机生成18到60岁之间的年龄
      address: "@city(true) No. @integer(1, 100) Lake Park", // 随机生成地址
    },
  ],
});
const userEchartsData = Mock.mock({
  "data|30": [
    {
      "key|+1": 1,
      "month|+1": 1,
      "userNumber|1-10000": 1,
    },
  ],
});
const userInfo = Mock.mock({
  userName: "@name", // 生成一个随机名称
  age: "@integer(18, 60)", // 生成一个18到60之间的随机整数作为年龄
  email: "@email", // 生成一个随机邮箱
  address: "@city(true) No. @integer(1, 100) Street", // 生成一个随机地址
  phoneNumber: '@string("number", 10)', // 生成一个随机10位数字作为电话号码
  lastLoginTime: "@datetime",
  currentLoginTime: "@datetime",
  limit: "number|1-6",
});

const loginData = Mock.mock({
  token: Random.string(
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    32
  ),
});

// 模拟接口
Mock.mock("/api/dashboard/user", "get", () => {
  return {
    data: userTable.data,
    message: "Success",
    status: 200,
  };
});

Mock.mock("/api/dashboard/userEcharts", "get", () => {
  return {
    data: userEchartsData.data,
    message: "Success",
    status: 200,
  };
});

Mock.mock("/api/dashboard/userInfo", "get", () => {
  return {
    data: userInfo,
    message: "Sussess",
    status: 200,
  };
});

Mock.mock("/api/login", "post", (options: any) => {
  const { userName, password } = JSON.parse(options.body);
  if (userName === "admin" && password === "123456") {
    return {
      data: loginData, // 假设你已经定义了 loginData
      message: "Success",
      status: 200,
    };
  } else {
    return {
      message: "Invalid username or password",
      status: 403,
    };
  }
});

export default Mock;
