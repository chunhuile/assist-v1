import React, { useEffect, useState } from "react";
import "@/styles/userManagement.scss";
import debounce from "lodash/debounce";
import UserTable from "./compontents/userTable";
import UserFilter from "./compontents/UserFilter";
import type { TableProps } from "antd";
import { getUserTableData, getAddreessData } from "@/api/dashboard";
import { message, Space } from "antd";
import dayjs, { Dayjs } from "dayjs";

interface addressDataType {
  id: number;
  label: string;
  value: number;
}

interface DataType {
  key: string | number;
  name: string;
  age: number;
  address: string;
}
const columns: TableProps<DataType>["columns"] = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "地址",
    dataIndex: "address",
    key: "address",
  },

  {
    title: "操作",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const UserManagement: React.FC = () => {
  const [userManagementData, setUserManagementData] = useState<DataType[]>([]);
  const [keyWord, setKey] = useState<string>("");
  const [addressData, setAddressData] = useState<addressDataType[]>([]);
  const [addressKey, setAddressItems] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  useEffect(() => {
    const featchData = async () => {
      try {
        await getUserManangementTable();
        await getAddress();
      } catch (err: any) {
        message.error(err.message);
      }
    };
    featchData();
  }, []);

  useEffect(() => {
    if (keyWord) {
      getUserManangementTable();
    }
    getUserManangementTable();
  }, [keyWord, addressKey, selectedDate]);

  const getUserManangementTable = async () => {
    const params = {
      page: 1,
      pageSize: 10,
      key: keyWord,
      addressKey: addressKey,
      selectedDate: selectedDate,
    };
    console.log(params);
    const data = await getUserTableData(params);
    setUserManagementData(data);
    try {
    } catch (err: any) {
      message.error(err.message);
    }
  };

  const getAddress = async () => {
    try {
      const data = await getAddreessData();
      setAddressData(data);
    } catch (err: any) {
      message.error(err.message);
    }
  };

  //   关键字搜索
  const onChangeName = debounce(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value, "e.target.value");
      const newKey = e.target.value;
      await setKey(newKey);
    },
    300
  );

  // 选择地址
  const changeAddress = async (value: string[]) => {
    await setAddressItems(value);
  };
  // 选择时间
  const handleDateChange = (date: Dayjs | null) => {
    // setSelectedDate(date);
    // console.log("Selected Date:", date?.format("YYYY-MM-DD"));
  };

  return (
    <div className="UserManagement scope-vsc-initialized">
      <div className="UserManagement__filter">
        <UserFilter
          keyWord={keyWord}
          options={addressData}
          onChangeName={onChangeName}
          setSelectedItems={changeAddress}
          selectedItems={addressKey}
          onDateChange={handleDateChange}
        />
        {/* selectedDate={selectedDate} */}
      </div>

      <UserTable data={userManagementData} columns={columns} />
    </div>
  );
};
export default UserManagement;
