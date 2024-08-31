import { userTableItem ,userEchartsItem} from "@/interfaceData/dashboard/dashboard"
import {GET,PUT,DEL,POST} from "@/utils/request"

// 获取dashboard table中的数据
export const getUserTable = async () : Promise<userTableItem[]> =>{
    return await GET("/dashboard/user");
} 

// 获取echarts的数据
export const getUserEchartsData= async ():Promise<userEchartsItem[]>=>{
   return  await GET("/dashboard/userEcharts")
}