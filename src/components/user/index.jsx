import React from 'react';
import { Table, Input, Switch, message } from 'antd';
import './index.css'
import LocalizedModal from '../model/LocalizedModal';
// import columns from './user.config'
import { query, updateSwitch, select, deleat } from '../../services/user';

const { Search } = Input;

class User extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: '序号',
        dataIndex: '',
        render: (text, record, index) => `${index + 1}`
      },
      {
        title: '账户',
        dataIndex: 'usernum',
      },
      {
        title: '用户密码',
        dataIndex: 'userpassword',
      },
      {
        title: '邮箱',
        dataIndex: 'useremail',
      },
      {
        title: '注册时间',
        dataIndex: 'usertime',
      },
      {
        title: '是否可用',
        dataIndex: 'TF',
        render: (text, record) => {
          console.log(text, record.usernum);
          if (text === 'true') {
            return <Switch onChange={() => this.handleStatus(text, record)} defaultChecked={true} />
          }
          return <Switch onChange={() => this.handleStatus(text, record)} defaultChecked={false} />
        },
      },
      {
        title: '操作',
        dataIndex: '',
        render: (text, record) => {
          console.log(text, record.usernum);
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
      visible: false, // Check here to configure the default column
    };
  };

  componentDidMount() {
    query().then((res) => {
      console.log(res.data);
      this.setState({
        list: res.data
      })
    })
  }
  onDeleat(record) {
    const param = record.id;
    console.log(record);
    deleat(param).then((res) => {
      console.log(res);
    })
  }
  onSearch(value) {
    console.log(value);
    select(value).then((res) => {
      console.log(res);

      this.setState({
        list: res.data
      })
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
    console.log(text, record, this.state, this.props);
  }

  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
    console.log('list', this.state.list);

    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      hideDefaultSelections: true,
    };
    return (
      <div>
        <Search placeholder="请输入账户关键字" onSearch={(value) => this.onSearch(value)} enterButton style={{ width: 400, marginBottom: '3px' }} />
        <Table rowSelection={rowSelection} columns={this.columns} dataSource={this.state.list} rowKey='id' pagination={{ pageSize: 5 }} />
      </div>
    )
  }
};
export default User;