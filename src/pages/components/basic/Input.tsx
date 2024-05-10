import React ,{ChangeEvent, MouseEventHandler} from 'react';
import { Input } from 'antd';


interface BasicButtonProps{
    handler: (e: ChangeEvent<HTMLInputElement>) => void,
    label:string,
    placeholder:string,
    inputStyle:Object,
    BasicInputStyle:object
}


const BasicInput: React.FC<BasicButtonProps> = ({
    handler,
    label,
    placeholder,
    inputStyle,
    BasicInputStyle
}) => {
  


    return (
        <div style={BasicInputStyle}>
            {/* <span>{label}</span> */}
            {label}
            <Input style={inputStyle} placeholder={placeholder}
            onChange={handler} 
        />
        </div>

      
    )
}


const basicInput = {
    
}


export default BasicInput;


