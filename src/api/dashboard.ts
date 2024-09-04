import {
  userTableItem,
  userEchartsItem,
  userInfo,
  loginData,
} from "@/interfaceData/dashboard/dashboard";
import { GET, PUT, DEL, POST } from "@/utils/request";

// 获取dashboard table中的数据
export const getUserTable = async (): Promise<userTableItem[]> => {
  return await GET("/dashboard/user");
};

// 获取echarts的数据
export const getUserEchartsData = async (): Promise<userEchartsItem[]> => {
  return await GET("/dashboard/userEcharts");
};

export const getUserInfo = async (token: string): Promise<userInfo> => {
  return await GET("dashboard/userInfo");
};

export const login = async (params: {
  userName: string;
  password: string | number;
}): Promise<loginData> => {
  return await POST("login", params);
};
