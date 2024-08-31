/**
 *  @file 该文件用于封装一个发起请求的方法 并处理请求状态、错误边界的问题
 */ 

import { AxiosRequestConfig, AxiosResponse } from "axios";
import axiosInstance from "./axiosInstance";

// 通用请求函数
export const request = async <T = any>(
  config: AxiosRequestConfig
): Promise<T> => {
  try {
    const response: AxiosResponse<T,any> = await axiosInstance.request<T,any>(config);
    return response.data
  } catch (error:any) {
    // 错误处理
    if (error.response) {
      // 请求成功发出且服务器也响应了状态码，但状态代码超出了 2xx 的范围
      console.error('Error Response:1', error.response);
      return Promise.reject({
        message: error.response.data.message || '请求失败',
        status: error.response.status,
      });
    } else if (error.request) {
      // 请求已经成功发起，但没有收到响应
      console.error('Error Request:', error.request);
      return Promise.reject({ message: '未收到服务器响应', status: 500 });
    } else {
      // 其他错误
      console.error('Error Message:', error.message);
      return Promise.reject({ message: error.message || '请求出错', status: 500 });
    }

    // throw error;

  }
};

// GET 请求封装
export const GET = <T = any>(url: string, config?: AxiosRequestConfig): Promise<T> =>
  request<T>({ url, method: "GET", ...config });

// POST 请求封装
export const POST = <T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> =>
  request<T>({ url, method: "POST", data, ...config });

// PUT 请求封装
export const PUT = <T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> =>
  request<T>({ url, method: "PUT", data, ...config });

// DELETE 请求封装
export const DEL = <T = any>(url: string, config?: AxiosRequestConfig): Promise<T> =>
  request<T>({ url, method: "DELETE", ...config });


/**
 * // 示例调用
const fetchData = async () => {
  try {
    const data = await GET<YourResponseType>('/api/dashboard/user', {
      params: {
        page: 1,
        pageSize: 10,
      },
    });
    console.log(data);
  } catch (error) {
    console.error("请求失败:", error);
  }
};
 */ 