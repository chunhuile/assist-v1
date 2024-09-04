import React, { ChangeEvent } from "react";
import UserSelect from "./UserSelect";
import UserDatePicker from "./UserDatePicker";
import BasicInput from "@/pages/components/basic/Input";

interface ChildProps {
  options: { id: number; label: string; value: number }[];
  onChangeName: (value: ChangeEvent<HTMLInputElement>) => void;
  keyWord: string;
  setSelectedItems: (value: string[]) => void;
  selectedItems: string[];
}

const UserFilter: React.FC<ChildProps> = ({
  options,
  keyWord,
  onChangeName,
  setSelectedItems,
  selectedItems,
}) => {
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
        <UserDatePicker style={{ marginLeft: "10px" }} />
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
