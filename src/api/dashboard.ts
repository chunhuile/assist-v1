import { userTableItem } from "@/interfaceData/dashboard/dashboard"
import {GET,PUT,DEL,POST} from "@/utils/request"

// 获取dashboard table中的数据
export const getUserTable = async () : Promise<userTableItem[]> =>{

const response = await GET("/dashboard/user");
console.log(response, "response debug"); // 打印调试信息
return response; 
 
} 
