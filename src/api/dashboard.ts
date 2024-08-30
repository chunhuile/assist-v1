import {request} from "@/utils/request"
import { userTable } from "@/interfaceData/dashboard/dashboard"



// 获取dashboard table中的数据
export const getUserTable = async () : Promise<userTable[]> =>{
    const data = await request<userTable[]>({
        url:"/api/dashboard/user",
        method:"get",
    })  

    console.log(data,"data ===")
    return data.data
}