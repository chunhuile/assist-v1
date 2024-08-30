import axios ,{AxiosInstance} from "axios";

/**
 * base axios
 */ 

const axiosInstance:AxiosInstance = axios.create({
    // baseURL:"",//配置基础api的路径
    timeout:10000,//超出时间
    headers:{
        "Content-Type":"application/json"
    }
});

// 请求拦截器
axiosInstance.interceptors.request.use(
    (config)=>{
        // 在请求发送之前做一些处理，例如添加token
        const token = localStorage.getItem("token")
        if(token){
            config.headers[`Authorization`] = `Bearer ${token}`
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
        return response.data
    },
    (err)=>{
        return Promise.reject(err)
    }
)


export default axiosInstance