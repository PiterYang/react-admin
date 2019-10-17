import React from "react";
import { Button, Table } from "antd";
// import {getUsers} from '../../../axios'
import { withRouter } from "react-router-dom";

class Users extends React.Component {
  state = {
    tableData: []
  };
  componentDidMount() {
    // getUsers().then(({data}) => {
    //     this.setState({
    //         tableData: data
    //     })
    // }).catch(() => {
    //     this.setState({
    //         tableData: [{name: 'test',name1: 1,name2: 2,name3: 3,name4:4, key:1},{key: 2,name: 'test',name1: 1,name2: 2,name3: 3,name4:4},{key: 3,name: 'test',name1: 1,name2: 2,name3: 3,name4:4},]
    //     })
    // })
    setTimeout(() => {
      this.setState({
        tableData: [
          { name: "test", name1: 1, name2: 2, name3: 3, name4: 4, key: 1 },
          { key: 2, name: "test", name1: 1, name2: 2, name3: 3, name4: 4 },
          { key: 3, name: "test", name1: 1, name2: 2, name3: 3, name4: 4 }
        ]
      });
    }, 1000);
  }
  columns = [
    {
      title: "用户名",
      dataIndex: "name",
      width: 100,
      key: "1"
    },
    {
      title: "描述",
      dataIndex: "name1",
      width: 100,
      key: "2"
    },
    {
      title: "用户群体",
      dataIndex: "name2",
      width: 100,
      rendor: (text, record) => <span>{text + record.region}</span>,
      key: "3"
    },
    {
      title: "用户状态",
      dataIndex: "name3",
      width: 100,
      key: "4"
    },
    {
      title: "操作",
      dataIndex: "",
      width: 100,
      render: (text, record) => (
        <span>
          <Button onClick={() => this.jumpTo(record)}>编辑</Button>
          <span className="ant-divider" />
          <Button>删除</Button>
        </span>
      ),
      key: "5"
    }
  ];
  jumpTo = record => {
    this.props.history.push(`/app/user/edit/${record.key}`);
  };
  render() {
    return <Table columns={this.columns} dataSource={this.state.tableData} />;
  }
}
export default withRouter(Users);
