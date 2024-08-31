import axios ,{AxiosInstance} from "axios";

// 获取 token 的函数
function getToken(): string | null {
    return sessionStorage.getItem("token");
  }
/**
 * 创建实例
 */ 
const axiosInstance:AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL||"/api",//配置基础api的路径
    timeout:10000,//超出时间
    headers:{
        "Content-Type":"user/json"
    }
});

// 请求拦截器
axiosInstance.interceptors.request.use(
    (config)=>{
        // 在请求发送之前做一些处理，例如添加token
        const token = localStorage.getItem("token")
        if(token){
            config.headers[`Authorization`] = `Bearer ${token}`// 使用更标准的 Authorization 头
        }
        
        return config
    },
    (error)=>{
        // 处理错误请求
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use(
    (response)=>{
        // 处理响应式错误
    // if (response.data.code === 401) {
    // 如果返回401则返回到登录页
    //     window.location.href = "/login";
    // }
        return response.data
    },
    (error)=>{
        console.error("请求错误", error);
        return Promise.reject(error)
    }
)


export default axiosInstance