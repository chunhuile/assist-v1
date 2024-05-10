import React from 'react';
import { DatePicker ,ConfigProvider} from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import 'dayjs/locale/zh-cn';

import locale from 'antd/locale/zh_CN';



dayjs.extend(customParseFormat);

const dateFormat = 'YYYY-MM-DD';


interface childProp  {
    style:object
}

const UserDatePicker :React.FC<childProp>=({style}) =>{
    return (
      <div style={style}>
        <ConfigProvider locale={locale}>
            <DatePicker style={style}
                defaultValue={dayjs('2019-09-03', dateFormat)}
                minDate={dayjs('2019-08-01', dateFormat)}
                maxDate={dayjs('2020-10-31', dateFormat)}
            />
        </ConfigProvider>
       
      </div>
      )
}


export default  UserDatePicker