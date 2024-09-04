import React, { Component } from "react";
import { Space, Table, message } from "antd";
import type { TableProps } from "antd";
import { userManagementDataType } from "@/interfaceData/userManagement/index";
import { getProductMentData } from "@/api/dashboard";
interface State {
  data: userManagementDataType[];
}
const columns: TableProps<userManagementDataType>["columns"] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Action",
    key: "action",
    render: (_: any, record: userManagementDataType) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
] as any[];

export default class ProductManagement extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.featchData();
  }

  featchData = async () => {
    try {
      const result = await getProductMentData();
      this.setState({ data: result });
    } catch (err: any) {
      message.error(err.message);
    }
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <div style={{ marginTop: "20px" }}>
          <span style={{ margin: "16px " }}>今日数据</span>
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    );
  }
}
