import React from 'react';
import { Table, Input, Switch, message } from 'antd';
import './index.css'
// import columns from './user.config'
import { query, updateSwitch } from '../../services/user';

const { Search } = Input;

class User extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: '序号',
        dataIndex: 'id',
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
    ];
    this.state = {
      selectedRowKeys: [],
      list: [],
      flag: '', // Check here to configure the default column
    };
  };

  UNSAFE_componentWillMount() {
    query().then((res) => {
      console.log(res.data);
      this.setState({
        list: res.data
      })
    })
  }

  // onChange = (checked) => {
  //   checked = !checked;
  //   console.log(`switch to ${checked}`);
  // }
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
      selections: [
        {
          key: 'all-data',
          text: 'Select All Data',
          onSelect: () => {
            this.setState({
              selectedRowKeys: [...Array(46).keys()], // 0...45
            });
          },
        },
        {
          key: 'odd',
          text: 'Select Odd Row',
          onSelect: changableRowKeys => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return false;
              }
              return true;
            });
            this.setState({ selectedRowKeys: newSelectedRowKeys });
          },
        },
        {
          key: 'even',
          text: 'Select Even Row',
          onSelect: changableRowKeys => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return true;
              }
              return false;
            });
            this.setState({ selectedRowKeys: newSelectedRowKeys });
          },
        },
      ],
    };
    return (
      <div>
        <Search placeholder="请输入账户关键字" onSearch={value => console.log(value)} enterButton style={{ width: 400, marginBottom: '20px' }} />
        <Table rowSelection={rowSelection} columns={this.columns} dataSource={this.state.list} rowKey='id' />
      </div>

    )
  }
};
export default User;