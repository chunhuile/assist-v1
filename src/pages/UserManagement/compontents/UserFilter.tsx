import React, { ChangeEvent, useState } from "react";
import UserSelect from "./UserSelect";
import BasicInput from "@/components/basic/Input";
import { DatePicker } from "antd";

import customParseFormat from "dayjs/plugin/customParseFormat";
import dayjs, { Dayjs } from "dayjs";
import weekday from "dayjs/plugin/weekday";
import localizedFormat from "dayjs/plugin/localizedFormat";
import updateLocale from "dayjs/plugin/updateLocale";
import "dayjs/locale/zh-cn";

dayjs.extend(customParseFormat);

const dateFormat = "YYYY-MM-DD"; // 根据需要引入合适的语言
// 设置 locale
dayjs.locale("zh-cn");

dayjs.extend(localizedFormat);
dayjs.extend(updateLocale);
dayjs.extend(weekday);

interface ChildProps {
  options: { id: number; label: string; value: number }[];
  onChangeName: (value: ChangeEvent<HTMLInputElement>) => void;
  keyWord: string;
  setSelectedItems: (value: string[]) => void;
  selectedItems: string[];
  // selectedDate: Dayjs | null;
  onDateChange: (date: Dayjs | null) => void;
}

const UserFilter: React.FC<ChildProps> = ({
  options,
  keyWord,
  onChangeName,
  setSelectedItems,
  selectedItems,
  // selectedDate,
  onDateChange,
}) => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  const onChange = async (date: Dayjs | null) => {
    console.log(date, "ee");
  };

  return (
    <div className="UserFilter">
      <div style={{ display: "flex", alignItems: "center" }}>
        <span>关键字搜索</span>
        <BasicInput
          inputStyle={{ marginLeft: "10px" }}
          BasicInputStyle={BasicInputStyle}
          handler={onChangeName}
          label=""
          placeholder="请输入关键字"
          value={keyWord}
        />
      </div>

      <div style={{ marginLeft: "20px" }}>
        <span>地址</span>
        <UserSelect
          options={options}
          style={{ width: "300px", marginLeft: "10px" }}
          placeholder="请选择地址"
          selectedItems={selectedItems}
          onChange={setSelectedItems}
        />
      </div>
      <div
        style={{ marginLeft: "20px", display: "flex", alignItems: "center" }}
      >
        <span>日期</span>

        <DatePicker
          style={{ marginLeft: "10px" }}
          defaultValue={dayjs("2019-09-03", dateFormat)}
          minDate={dayjs("2019-08-01", dateFormat)}
          maxDate={dayjs("2020-10-31", dateFormat)}
          onChange={onChange}
          value={selectedDate}
        />
      </div>
    </div>
  );
};

const BasicInputStyle = {
  display: "flex",
  justifyContent: "space-between",
  fontSize: "14px",
  alignItems: "center",
};

export default UserFilter;
