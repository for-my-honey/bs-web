import React from 'react';
import { Button, Modal, Radio, Form, Input, Select, DatePicker, message } from 'antd';
import { update } from '../../services/singer';
const { TextArea } = Input;
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
            <Form.Item label="歌手名称：" {...formItemLayout}>
              {getFieldDecorator('singername', {
                rules: [{ required: true, message: '请输入歌手名称' }],
                initialValue: `${record.singername}`
              })(<Input />)}
            </Form.Item>
            <Form.Item label="性别：" {...formItemLayout}>
              {getFieldDecorator('singersex', {
                initialValue: `${record.singersex}`
              })(
                <Radio.Group>
                  <Radio value={'男'}>男</Radio>
                  <Radio value={'女'}>女</Radio>
                </Radio.Group>
              )}
            </Form.Item>
            <Form.Item label="出生日期：" {...formItemLayout}>
              {getFieldDecorator('singerday', {
                rules: [{ required: true, message: '请选择出生日期' }],
                initialValue: moment(`${moment(record.singerday).format('YYYY-MM-DD')}`)
              })(<DatePicker />)}
            </Form.Item>
            <Form.Item label="地区：" {...formItemLayout}>
              {getFieldDecorator('singerarea', {
                initialValue: `${record.singerarea}`
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
            <Form.Item label="代表作：" {...formItemLayout}>
              {getFieldDecorator('singersymbol', {
                initialValue: `${record.singersymbol}`
              })(<Input />)}
            </Form.Item>
            <Form.Item label="简介：" {...formItemLayout}>
              {getFieldDecorator('singerdesc', {
                initialValue: `${record.singerdesc}`
              })(<TextArea allowClear />)}
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

    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      this.setState({ record: values });
      update(values, id).then((res, err) => {
        if (res.status === 200) {
          message.success('更新成功！')
        }
        else {
          message.error(err)
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