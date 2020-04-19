import React from 'react';
import { Switch } from 'antd';



const columns = [
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
    dataIndex: 'using',
    render: (text, record) => {
      if (text === 'true') {
        return <Switch onChange={onChange} defaultChecked={true} />
      }
      return <Switch onChange={onChange} defaultChecked={false} />
    },
  },
];
export default columns;