import React from 'react';
import { Table, Input, Switch, message } from 'antd';
import './index.css'

import LocalizedModal from '../model/LocalizedModal';
import { query, updateSwitch, select, deleat } from '../../services/user';

const { Search } = Input;

class User extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: '序号',
        dataIndex: '',
        align: 'center',
        render: (text, record, index) => `${index + 1}`
      },
      {
        title: '账户',
        dataIndex: 'usernum',
        align: 'center',
      },
      {
        title: '用户密码',
        dataIndex: 'userpassword',
        align: 'center',
      },
      {
        title: '邮箱',
        dataIndex: 'useremail',
        align: 'center',
      },
      {
        title: '性别',
        dataIndex: 'sex',
        align: 'center',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        align: 'center',
      },
      {
        title: '注册时间',
        dataIndex: 'usertime',
        align: 'center',
      },
      {
        title: '是否可用',
        dataIndex: 'TF',
        align: 'center',
        render: (text, record) => {
          if (text === 'true') {
            return <Switch onChange={() => this.handleStatus(text, record)} defaultChecked={true} />
          }
          return <Switch onChange={() => this.handleStatus(text, record)} defaultChecked={false} />
        },
      },
      {
        title: '操作',
        dataIndex: '',
        align: 'center',
        render: (text, record) => {
          return (
            <div>
              <LocalizedModal record={record} />
            </div>
          )
        },
      },
    ];
    this.state = {
      selectedRowKeys: [],
      list: [],
      loading: false,
      visible: false, // Check here to configure the default column
    };
  };

  componentDidMount() {
    this.setState({ loading: true });
    query().then((res) => {
      this.setState({
        list: res.data,
        loading: false,
      })
    })
  }
  onDeleat(record) {
    const param = record.id;
    deleat(param).then((res) => {
    })
  }
  onSearch(value) {
    select(value).then((res) => {
      this.setState({
        list: res.data
      })
      if (res.data.length === 0) {
        message.warning('没有检索到相关用户信息！');
      }
    })
  }

  handleStatus = (text, record) => {
    if (text === 'true') {
      const flag = !Boolean(record.TF);
      updateSwitch(record, flag);
    } else {
      const flag = Boolean(record.TF);
      updateSwitch(record, flag);
    }
    message.success('修改状态成功！')
  }

  onSelectChange = selectedRowKeys => {
    this.setState({ selectedRowKeys });
  };

  render() {
    return (
      <div>
        <Search placeholder="请输入账户关键字" onSearch={(value) => this.onSearch(value)} enterButton style={{ width: 400, marginBottom: '3px' }} />
        <Table columns={this.columns} dataSource={this.state.list} rowKey='id' pagination={{ pageSize: 5 }} loading={this.state.loading} />
      </div>
    )
  }
};
export default User;