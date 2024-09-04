/**
 * @file
 */
import Mock from "mockjs";
export const addressSelectData = Mock.mock({
  "data|50": [
    {
      "id|+1": 1,
      "value|+1": 1,
      label: "@city(true) No. @integer(1, 100) Lake Park", // 随机生成地址
    },
  ],
});

export const userTable = [
  {
    id: 1,
    key: 1,
    name: "john",
    mobile: "13309784567",
    adress: "上海市徐汇区斜土路",
    school: "上海大学",
  },
  {
    id: 2,
    key: 2,
    name: "j4ohn",
    mobile: "13309784567",
    adress: "上海市徐汇区斜土路",
    school: "上海大学",
  },
  {
    id: 3,
    key: 3,
    name: "john",
    mobile: "13309784567",
    adress: "上4海市徐汇区斜土路",
    school: "上海大学",
  },
  {
    id: 4,
    key: 4,
    name: "john",
    mobile: "13309784567",
    adress: "上海市徐汇区斜土路",
    school: "上海大4学",
  },
];

Mock.mock("/api/address", "get", () => {
  return {
    data: addressSelectData.data,
    message: "Sussess",
    status: 200,
  };
});
