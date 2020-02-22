import { Modal, Button, message } from 'antd';
import React from 'react';
import { deleat } from '../../services/user';
class LocalizedModal extends React.Component {
  state = { visible: false };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

  hideModalok = () => {
    const record = this.props.record;
    const param = record.id;
    deleat(param).then((res) => {
      console.log(res);
      if (res.status === 200) {
        message.success('删除成功！')
      }
      window.location.reload();
    })
    this.setState({
      visible: false,
    });
  };

  render() {
    console.log(this.props);

    return (
      <div>
        <Button type="danger" onClick={this.showModal} >
          删除
        </Button>
        <Modal
          title="重要提醒"
          visible={this.state.visible}
          onOk={this.hideModalok}
          onCancel={this.hideModal}
          okText="确认"
          cancelText="取消"
        >
          <p>确认删除这条数据吗？</p>
        </Modal>
      </div>
    );
  }
}

export default LocalizedModal;