import React from 'react';
import './index.css';
import { Upload, message, Modal, Card, Button, Form, Select, DatePicker, Icon, Progress, Table, Input, Col, Row } from 'antd';
import { add } from '../../services/song';
import { formateDate } from '../../utils/dateUtils';
const { Dragger } = Upload;
var moment = require('moment');
const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
  // eslint-disable-next-line
  class extends React.Component {
    state = {
      record: {},
      percent: 0,
      url: ''
    };
    aprops = {
      name: 'file',
      action: 'http://localhost:3001/uploadSong',
      accept: 'audio/*',
      headers: {
        authorization: 'authorization-text',
      },
      onChange: (info) => {
        console.log(info);
        const event = info.event
        if (event) { // 一定要加判断，不然会报错
          let percent = Math.floor((event.loaded / event.total) * 100)
          this.setState({ percent: percent })
          console.log('percent', percent) // percent就是进度条的数值
        }
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} 文件上传成功`);
          console.log('info', info);
          this.setState({ url: info.file.response })
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} 文件上传失败.`);
        }
      },
    };
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          this.setState({ record: values })
          const params = { ...values, upload: this.state.url }
          add(params).then((res) => {
            console.log(res);
            if (res.status === 200) {
              message.success('提交成功');

            }
            else {
              message.error('提交失败');
            }
          })
          console.log('Received values of form: ', params);
        }
      });
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
        <Form layout="horizontal" onSubmit={this.handleSubmit}>
          <Card title="增加歌曲" extra={<Button type="primary" htmlType="submit" >提交</Button>}>
            <Row>
              <Col span={12}>
                <Form.Item label="歌曲名称：" {...formItemLayout}>
                  {getFieldDecorator('songname', {
                    rules: [{ required: true, message: '请输入歌曲名称' }],
                  })(<Input />)}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="专辑：" {...formItemLayout}>
                  {getFieldDecorator('songcd', {
                    rules: [{ required: true, message: '请输入专辑名称' }],
                  })(<Input />)}
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Form.Item label="歌曲类型：" {...formItemLayout}>
                  {getFieldDecorator('songtype', {
                    rules: [{ required: true, message: '请选择歌曲类型' }],
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
              </Col>
              <Col span={12}>
                <Form.Item label="歌手：" {...formItemLayout}>
                  {getFieldDecorator('singer', {
                    rules: [{ required: true, message: '请输入歌手名' }],
                  })(<Input />)}
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Form.Item label="地区：" {...formItemLayout}>
                  {getFieldDecorator('songarea', {
                    rules: [{ required: true, message: '请选择地区' }],
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
              </Col>
              <Col span={12}>
                <Form.Item label="发布时间：" {...formItemLayout}>
                  {getFieldDecorator('songdate', {
                    rules: [{ required: true, message: '请选择发布时间' }],
                  })(<DatePicker />)}
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Form.Item label="上传文件：" {...formItemLayout}>
                  {getFieldDecorator('upload', {
                    rules: [{ required: true, message: '请上传歌曲文件' }],
                  })(
                    <div>
                      <Dragger {...this.aprops}>
                        <p className="ant-upload-drag-icon">
                          <Icon type="inbox" />
                        </p>
                        <p className="ant-upload-text">点击或者拖拽文件到此处上传</p>
                      </Dragger>
                    </div>
                  )}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Row>
                  <Col span={12} style={{ textAlign: 'center' }}>

                  </Col>
                  <Col span={12} style={{ textAlign: 'right' }}>
                    <Progress percent={this.state.percent} type="circle" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Form>
      );
    }
  },
);

class Updatesong extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percent: 0,
    };

  }

  render() {
    return (
      <div>
        <CollectionCreateForm />
      </div>
    )
  }
};
export default Updatesong;