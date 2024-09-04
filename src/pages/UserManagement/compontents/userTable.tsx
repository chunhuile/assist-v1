import { Component } from "react";
import { Table } from "antd";
interface UserTableProps {
  columns: any[];
  data: any[];
}

export default class userTable extends Component<UserTableProps> {
  render() {
    const { data, columns } = this.props;
    return (
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}
