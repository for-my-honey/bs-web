import React from 'react';
import { Table, Input, Divider, message, Icon } from 'antd';
import './index.css';
import { query, select, deleat } from '../../services/song';
import { formateDate } from '../../utils/dateUtils';
import SongDeleatModal from '../model/songDeleatModal';
import SongModal from '../model/songModal';
const { Search } = Input;

class Searchsong extends React.Component {
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
        title: '歌曲名称',
        dataIndex: 'songname',
        align: 'center',
      },
      {
        title: '专辑',
        dataIndex: 'songcd',
        align: 'center',
      },
      {
        title: '歌曲类型',
        dataIndex: 'songtype',
        align: 'center',
      },
      {
        title: '歌手',
        dataIndex: 'singer',
        align: 'center',
      },
      {
        title: '地区',
        dataIndex: 'songarea',
        align: 'center',
      },
      {
        title: '发布时间',
        dataIndex: 'songdate',
        align: 'center',
        render: (text) => `${formateDate(text)}`.replace('0:0:0', '')
      },
      {
        title: '播放',
        dataIndex: '',
        align: 'center',
        render: (text, record) => <a href={`http://localhost:3001/public/mp3/${record.songurl}`}>
          <Icon type="step-forward" style={{ fontSize: '18px' }} /></a>
      },
      {
        title: '下载',
        dataIndex: '',
        align: 'center',
        render: (text, record) => <a href={`http://localhost:3001/download?songurl=${record.songurl}`}>
          <Icon type="vertical-align-bottom" style={{ fontSize: '18px' }} /></a>
      },
      {
        title: '操作',
        dataIndex: '',
        align: 'center',
        render: (text, record) => {
          return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <SongModal record={record} />
              <Divider type="vertical"></Divider>
              <SongDeleatModal record={record} />
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
      if (res.data.length === 0) {
        message.warning('没有检索到相关歌曲信息！');
      }
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
        <Search placeholder="请输入歌曲名称" onSearch={(value) => this.onSearch(value)} enterButton style={{ width: 400, marginBottom: '3px' }} />
        <Table columns={this.columns} dataSource={this.state.list} rowKey='id' pagination={{ pageSize: 5 }} loading={this.state.loading} />
      </div>
    )
  }
};
export default Searchsong;