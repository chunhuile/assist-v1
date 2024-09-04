import { GET, PUT, DEL, POST } from "@/utils/request";
import {
  userTableItem,
  userEchartsItem,
  userInfo,
  loginData,
} from "@/interfaceData/dashboard/dashboard";

import {
  getUserTableParams,
  userTableDataItem,
  addressItem,
  userManagementDataType,
} from "@/interfaceData/userManagement/index";

export const login = async (params: {
  userName: string;
  password: string | number;
}): Promise<loginData> => {
  return await POST("login", params);
};
// 获取dashboard table中的数据
export const getUserTable = async (): Promise<userTableItem[]> => {
  return await GET("/dashboard/user");
};

// 获取echarts的数据
export const getUserEchartsData = async (): Promise<userEchartsItem[]> => {
  return await GET("/dashboard/userEcharts");
};

export const getUserInfo = async (): Promise<userInfo> => {
  return await GET("dashboard/userInfo");
};

//获取用户管理部分的table页数据
export const getUserTableData = async (
  params: getUserTableParams
): Promise<userTableDataItem[]> => {
  return await POST("/userManagement", {
    params: params,
  });
};

export const getAddreessData = async (): Promise<addressItem[]> => {
  return await GET("/address");
};

export const getProductMentData = async (): Promise<
  userManagementDataType[]
> => {
  return await GET("/product");
};
