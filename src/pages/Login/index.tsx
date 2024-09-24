import React, { useState } from "react";
import { Button, message } from "antd";
import { useNavigate } from "react-router-dom";

import BasicInput from "../../components/basic/Input";
import { LabelText } from "../../mockjs/LabelText";
import { login } from "@/api/dashboard";

const Login: React.FC = () => {
  const backgroundImage = require("@/assests/images/energyLogin.png");
  const [name, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigateTo = useNavigate();

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  // 密码
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const clickLogin = async () => {
    try {
      const params = {
        userName: name,
        password: password,
      };

      const response = await login(params);
      window.sessionStorage.setItem("token", response.token.toString());
      message.success("登陆成功");
      setTimeout(() => {
        navigateTo("/home");
      }, 1000);
    } catch (error: any) {
      message.error(error.message);
    }
  };
  const signOut = () => {
    console.log("dianjituichu");
  };

  return (
    <div style={{ ...LoginIndex, backgroundImage: `url(${backgroundImage})` }}>
      <div style={{ width: "30%", position: "absolute", right: "10%" }}>
        <BasicInput
          inputStyle={{ width: "88%" }}
          BasicInputStyle={BasicInputStyle}
          handler={onChangeName}
          label="用户名"
          placeholder={LabelText.PLACE_HOLDER}
          value={name}
        />

        <BasicInput
          inputStyle={{ marginTop: "20px", width: "88%" }}
          BasicInputStyle={BasicInputStyle}
          handler={onChangePassword}
          label="密 码"
          placeholder={LabelText.PLACE_PASSWORD}
          value={password}
        />

        <div
          style={{
            marginTop: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <Button
            style={{ width: "120px" }}
            type="primary"
            size="middle"
            onClick={clickLogin}
          >
            登 陆
          </Button>
          <Button
            style={{ width: "120px", marginLeft: "20px" }}
            type="primary"
            size="middle"
            onClick={signOut}
          >
            退 出
          </Button>
        </div>
      </div>
    </div>
  );
};

const LoginIndex = {
  display: "flex",
  height: "100vh",
  alignItems: "center",
};

const BasicInputStyle = {
  display: "flex",
  justifyContent: "space-between",
  fontSize: "14px",
  alignItems: "center",
};

export default Login;
