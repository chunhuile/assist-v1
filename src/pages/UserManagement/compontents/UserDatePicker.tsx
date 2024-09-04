import React, { ChangeEvent } from "react";
import { DatePicker, ConfigProvider } from "antd";
import customParseFormat from "dayjs/plugin/customParseFormat";
import "dayjs/locale/zh-cn";
import locale from "antd/locale/zh_CN";
import dayjs, { Dayjs } from "dayjs";
dayjs.extend(customParseFormat);

const dateFormat = "YYYY-MM-DD";

interface childProp {
  style: object;
  onChange: (date: Dayjs | null) => void;
  value: Dayjs | null;
}

const UserDatePicker: React.FC<childProp> = ({ style, onChange, value }) => {
  return (
    <div style={style}>
      <ConfigProvider locale={locale}>
        <DatePicker
          style={style}
          defaultValue={dayjs("2019-09-03", dateFormat)}
          minDate={dayjs("2019-08-01", dateFormat)}
          maxDate={dayjs("2020-10-31", dateFormat)}
          onChange={onChange}
          value={value}
        />
      </ConfigProvider>
    </div>
  );
};

export default UserDatePicker;
