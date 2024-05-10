import React, { useState } from 'react'
import UserSelect from "./UserSelect";
import UserDatePicker from './UserDatePicker';
import BasicInput from '../../../pages/components/basic/Input';
import { LabelText } from '../../../mockjs/LabelText';

interface ChildProps {
    options:{id:number,label:string,value:number}[]
}

const UserFilter: React.FC<ChildProps> = ({options}) => {

    const [selectedItems] = useState<string[]>([]);

    // 点击select下拉框的点击事件
    const setSelectedItems = ( value:string[]) =>{
        console.log(value,"cedian")
    }

    // 关键字搜索
    const onChangeName = () => {
        console.log("nihao  --")
      }
 

    return (
      <div className='UserFilter'>
        <div  style={{display:"flex",alignItems:"center"}}>
            <span>关键字搜索</span>
            <BasicInput
                inputStyle={{marginLeft:"10px"}}
                BasicInputStyle={BasicInputStyle}
                handler={onChangeName}  
                label =""
                placeholder ={LabelText.PLACE_HOLDER}
            />
        </div>

        <div style={{marginLeft:"20px"}}>
            <span>时间</span>
            <UserSelect options={options}  
                style = {{width:"200px",marginLeft:"10px"}} 
                placeholder = "请选择" 
                selectedItems = {selectedItems}
                onChange = {setSelectedItems}   
            />
        </div>
        <div style={{marginLeft:"20px",display:"flex",alignItems:"center"}}>
            <span>日期</span>
            <UserDatePicker style={{marginLeft:"10px"}} />
        </div>
      </div>
    )
}


const BasicInputStyle = {
    display:"flex",
    justifyContent:"space-between",
    fontSize:"14px",
    alignItems:"center"
  }

export default UserFilter;

