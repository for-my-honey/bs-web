import { Modal, Button, message } from 'antd';
import React from 'react';

import { deleat } from '../../services/user';
const { confirm } = Modal;

class LocalizedModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };

  showDeleteConfirm = (param) => {
    confirm({
      title: '确认删除这条数据吗?',
      content: '删除后不可恢复！',
      okText: '确定',
      okType: 'danger',
      cancelText: '取消',
      onOk() {
        deleat(param).then((res) => {
          if (res.status === 200) {
            message.success('删除成功！')
          }
          window.location.reload();
        })
      },
      onCancel() {

      },
    });
  };

  render() {
    const record = this.props.record;
    const param = record.id;
    return (
      <Button onClick={() => this.showDeleteConfirm(param)} type="danger">
        删除
      </Button>
    );
  }
}

export default LocalizedModal;