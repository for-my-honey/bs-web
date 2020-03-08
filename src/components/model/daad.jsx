import { Modal, Button, message, Input, Select, Row, Col, DatePicker } from 'antd';
import React from 'react';
import moment from 'moment';
// import { deleat } from '../../services/user';
// const { confirm } = Modal;

class songModal extends React.Component {
  state = {
    record: {},
  };

  showModal = () => {
    console.log(this.props.record);

    this.setState({
      record: this.props.record,
      visible: true,
    });

  };

  handleOk = () => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',

      confirmLoading: true,
    });
    // console.log(this.refs);

    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  };

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  };

  render() {
    const { visible, confirmLoading, ModalText, record } = this.state;
    // console.log(this.state);
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          编辑
        </Button>
        <Modal
          title="编辑歌曲信息"
          okText="确认"
          cancelText="取消"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <div>
            <Row>
              <Col span={11}>歌曲名称：<Input defaultValue={record.songname} ref='songname'></Input></Col>
              <Col span={2}></Col>
              <Col span={11}>专辑：<Input defaultValue={record.songcd} ref='songcd'></Input></Col>
            </Row>
            <Row style={{ margin: '30px 0' }}>
              <Col span={11}>
                歌曲类型：
                <Select style={{ width: 216 }} defaultValue={record.songtype} ref='songtype'>
                  <Select.Option value="流行">流行</Select.Option>
                  <Select.Option value="民谣">民谣</Select.Option>
                  <Select.Option value="古典">古典</Select.Option>
                  <Select.Option value="摇滚">摇滚</Select.Option>
                  <Select.Option value="嘻哈">嘻哈</Select.Option>
                </Select>
              </Col>
              <Col span={2}></Col>
              <Col span={11}>歌手：<Input defaultValue={record.singer} ref='singer'></Input></Col>
            </Row>
            <Row>
              <Col span={11}>
                地区：
                <Select style={{ width: 216 }} defaultValue={record.songarea} ref='songarea'>
                  <Select.Option value="内地">内地</Select.Option>
                  <Select.Option value="港台">港台</Select.Option>
                  <Select.Option value="韩国">韩国</Select.Option>
                  <Select.Option value="欧美">欧美</Select.Option>
                  <Select.Option value="日本">日本</Select.Option>
                </Select>
              </Col>
              <Col span={2}></Col>
              <Col span={11}>发布时间：<DatePicker style={{ width: 216 }} defaultValue={moment(record.songdate)} ref='songdate'></DatePicker></Col>
            </Row>
          </div>
        </Modal>
      </div>
    );
  }
}

export default songModal;