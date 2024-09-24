/**
 * @file 该文件用于antd的icon为自定义
 */
import React from "react";
import * as icons from "@ant-design/icons";

interface IconProps {
  icon?: string;
}
const Icon: React.FC<IconProps> = (props) => {
  const { icon } = props;
  const antIcon: { [key: string]: any } = icons;
  return icon ? React.createElement(antIcon[icon]) : null;
};

export default Icon;
