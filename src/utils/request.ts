/**
 *  @file 该文件用于封装一个发起请求的方法 并处理请求状态、错误边界的问题
 */ 
import axiosInstance from "./axiosInstance"

interface RequestConfig{
    url:string,
    method?: "get"|"post"|"put",
    data?:any,
    params?:any   
}

interface ApiResponse<T = any>{
    data:T,
    message:string,
    status:number
}

export const request =async <T = any> (config:RequestConfig) : Promise<ApiResponse<T>> => {

    try{
        const response = await axiosInstance.request<ApiResponse<T>>({
            url:config.url,
            method:config.method || "get",
            data:config.data,
            params:config.params
        })

        console.log(response,"请求成功了 ")
        return response.data

    }catch(error:any){
        console.log(error,"err message")
         // 错误边界处理
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
    // }
    }
}