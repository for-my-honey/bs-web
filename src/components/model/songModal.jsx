import React from 'react';
import { Button, Modal, Form, Input, Select, DatePicker, message } from 'antd';
import { update } from '../../services/song';
var moment = require('moment');
const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
  // eslint-disable-next-line
  class extends React.Component {
    state = {
      record: {},
    };
    render() {
      const formItemLayout =
      {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 },
      };
      // const { record } = this.state;
      console.log('state', this.state);
      console.log(this.props);

      const { visible, onCancel, onCreate, form, record } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="编辑歌曲信息"
          okText="确定"
          cancelText="取消"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="horizontal">
            <Form.Item label="歌曲名称：" {...formItemLayout}>
              {getFieldDecorator('songname', {
                initialValue: `${record.songname}`
              })(<Input />)}
            </Form.Item>
            <Form.Item label="专辑：" {...formItemLayout}>
              {getFieldDecorator('songcd', {
                initialValue: `${record.songcd}`
              })(<Input />)}
            </Form.Item>
            <Form.Item label="歌曲类型：" {...formItemLayout}>
              {getFieldDecorator('songtype', {
                initialValue: `${record.songtype}`
              })(
                <Select>
                  <Select.Option value="流行">流行</Select.Option>
                  <Select.Option value="民谣">民谣</Select.Option>
                  <Select.Option value="古典">古典</Select.Option>
                  <Select.Option value="摇滚">摇滚</Select.Option>
                  <Select.Option value="嘻哈">嘻哈</Select.Option>
                </Select>
              )}
            </Form.Item>
            <Form.Item label="歌手：" {...formItemLayout}>
              {getFieldDecorator('singer', {
                initialValue: `${record.singer}`
              })(<Input />)}
            </Form.Item>
            <Form.Item label="地区：" {...formItemLayout}>
              {getFieldDecorator('songarea', {
                initialValue: `${record.songarea}`
              })(
                <Select>
                  <Select.Option value="内地">内地</Select.Option>
                  <Select.Option value="港台">港台</Select.Option>
                  <Select.Option value="韩国">韩国</Select.Option>
                  <Select.Option value="欧美">欧美</Select.Option>
                  <Select.Option value="日本">日本</Select.Option>
                </Select>
              )}
            </Form.Item>
            <Form.Item label="发布时间：" {...formItemLayout}>
              {getFieldDecorator('songdate', {
                initialValue: moment(`${moment(record.songdate).format('YYYY-MM-DD')}`)
              })(<DatePicker />)}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  },
);

class CollectionsPage extends React.Component {
  state = {
    visible: false,
    record: {},
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false, });
  };

  handleCreate = (id) => {
    const { form } = this.formRef.props;

    console.log(id);

    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      console.log('val', values);

      // this.setState({ record: values });
      update(values, id).then((res) => {
        if (res.status === 200) {
          message.success('更新成功！')
        }
      })
      form.resetFields();
      this.setState({ visible: false, });
      window.location.reload();
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    console.log(this.props.record, 'sss');
    const id = this.props.record.id;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          编辑
        </Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          record={this.props.record}
          onCancel={this.handleCancel}
          onCreate={() => this.handleCreate(id)}
        />
      </div>
    );
  }
}

export default CollectionsPage;