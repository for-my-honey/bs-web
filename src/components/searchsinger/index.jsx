import React from 'react';
import { Table, Input, Tooltip, Divider } from 'antd';
import './index.css';
import { query, select, deleat } from '../../services/singer';
import { formateDate } from '../../utils/dateUtils';
import SingerDeleatModal from '../model/SingerDeleatModal';
import SingerModal from '../model/singerModal';
const { Search } = Input;

class Searchsinger extends React.Component {
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
        title: '歌手名称',
        dataIndex: 'singername',
        align: 'center',
      },
      {
        title: '性别',
        dataIndex: 'singersex',
        align: 'center',
      },
      {
        title: '出生日期',
        dataIndex: 'singerday',
        align: 'center',
        render: (text) => `${formateDate(text)}`.replace('0:0:0', '')
      },
      {
        title: '代表作',
        dataIndex: 'singersymbol',
        align: 'center',
      },
      {
        title: '地区',
        dataIndex: 'singerarea',
        align: 'center',
      },
      {
        title: '简介',
        dataIndex: 'singerdesc',
        align: 'center',
        onCell: () => {
          return {
            style: {
              maxWidth: 150,
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              cursor: 'pointer'
            }
          }
        },
        render: (text) => <Tooltip placement="topLeft" title={text}>{text}</Tooltip>
      },
      {
        title: '操作',
        dataIndex: '',
        align: 'center',
        render: (text, record) => {
          return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <SingerModal record={record} />
              <Divider type="vertical"></Divider>
              <SingerDeleatModal record={record} />
            </ div>
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
    })
  }

  onSelectChange = selectedRowKeys => {
    this.setState({ selectedRowKeys });
  };

  render() {
    // const { selectedRowKeys } = this.state;
    // const rowSelection = {
    //   selectedRowKeys,
    //   onChange: this.onSelectChange,
    //   hideDefaultSelections: true,
    // };
    return (
      <div>
        <Search placeholder="请输入歌手名称" onSearch={(value) => this.onSearch(value)} enterButton style={{ width: 400, marginBottom: '3px' }} />
        <Table columns={this.columns} dataSource={this.state.list} rowKey='id' pagination={{ pageSize: 5 }} loading={this.state.loading} />
      </div>
    )
  }
};
export default Searchsinger;