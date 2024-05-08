import React ,{useState, PureComponent }from 'react';
import {Button,Input } from "antd"

import BasicInput from '../components/basic/Input';
import { LabelText } from '../../mockjs/LabelText';


const Login: React.FC = () => {
  const [captcha, setCaptcha] = useState<string>('');

  // 用户名
const onChangeName = () => {
  console.log("nihao  --")
}
// 密码
const onChangePassword = () => {
  console.log("nihao  --")
}

// 输入验证码
const onChangeCapycha = () => {

}

// 生成密码
const generateCaptcha = () => {
  const randomCaptcha = Math.random().toString(36).substring(2, 6).toUpperCase();
  setCaptcha(randomCaptcha);
};



const login = () => {
  console.log("点击了登陆")
}

  return (
    (
      <div style={LoginIndex}>
       <div style={{width:"30%"}}>

       <BasicInput
          inputStyle={{width:"88%"}}
          BasicInputStyle={BasicInputStyle}
          handler={onChangeName}  
          label ="用户名"
          placeholder ={LabelText.PLACE_HOLDER}
        />

          <BasicInput
           inputStyle={{ marginTop:"20px",width:"88%"}} 
          BasicInputStyle={BasicInputStyle}
          handler={onChangePassword}  
          label ="密 码"
          placeholder ={LabelText.PLACE_PASSWORD}
        />
        <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"20px"}}>
          <BasicInput  
            inputStyle={{ width:"100%"}} 
            BasicInputStyle={loginCaptcha}
            handler={onChangeCapycha}  
            label =""
            placeholder ={LabelText.PLACE_PASSWORD}
          />
          <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <Input type="text" value={captcha} readOnly  style={{ width:"120px"}}/>
              <Button onClick={generateCaptcha} size="middle">获取验证码</Button>
          </div>
        </div>

        <Button style={{ width:"100%",marginTop:"20px"}} type="primary" size="middle" onClick={login}>登 陆</Button>
       </div>
      </div>
    )
  )
}


const LoginIndex = {
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    height:"100vh"
  
}

const BasicInputStyle = {
  display:"flex",
  justifyContent:"space-between",
  fontSize:"14px",
  alignItems:"center"
}

const loginCaptcha={
  display:"flex",
  justifyContent:"space-between",
  fontSize:"14px",
  alignItems:"center",
  width:"54%"
}

export default Login;

