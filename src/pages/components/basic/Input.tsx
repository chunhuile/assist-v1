import React ,{ ChangeEvent } from 'react';
import { Input } from 'antd';

/**
 * @file 使用解构值，直接在函数参数中提取所需的属性值，以便使的代码更为简洁
*/
interface InputProps{
    handler: (e: ChangeEvent<HTMLInputElement>) => void,
    label:string,
    placeholder?:string | undefined,
    inputStyle?:React.CSSProperties;//将inputstyle属性设置为可选
    BasicInputStyle?:React.CSSProperties;//将属性值设置为可选
}


const BasicInput: React.FC<InputProps> = ({
    handler,
    label,
    placeholder,
    inputStyle = {},//设置默认值为空对象
    BasicInputStyle = {},//设置默认值为
}) => {
    return (
        /**
         * @file 将样式对象传递给组件，使用对象合并运算，将其和默认样式 进行合并，以便更加灵活
         */ 
        <div style={{...defaultBasicInputStyle, ...BasicInputStyle,}}>
            <label>{label}</label>
            <Input style={{...inputStyle,...defaultInputStyle}} placeholder={placeholder}
            onChange={handler} 
        />
        </div>      
    )
}


// 默认样式
const defaultBasicInputStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "14px",
    alignItems: "center"
};

const defaultInputStyle: React.CSSProperties = {
    marginLeft: "10px"
};


export default BasicInput;


