/**
 * @file 该文件用于antd的icon为自定义
 */ 

// import React from 'react'
// import * as icons from '@ant-design/icons'

// const Icon = (props: { icon: string,style:object }) => {
//     const { icon } = props;
//     const antIcon: { [key: string]: any } = icons;
//     return React.createElement(antIcon[icon]);
// };

// export default Icon



import React from 'react'
import * as icons from '@ant-design/icons'

interface IconProps {
    icon: string;
    style?: React.CSSProperties;
}
const Icon: React.FC<IconProps> = (props) => {
    const { icon, style } = props;
    const antIcon: { [key: string]: any } = icons;
    return React.createElement(antIcon[icon], );
};

export default Icon
