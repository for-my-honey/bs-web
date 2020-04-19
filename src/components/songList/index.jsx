import React from 'react';
import './index.css'
import { Card, Col, Row, Icon, Modal, Form, Input, message, Upload } from 'antd';

import { queryList, updatelist } from '../../services/song';
const { Dragger } = Upload;
const { TextArea } = Input;

const { Meta } = Card;
const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
  // eslint-disable-next-line
  class extends React.Component {
    state = {
      record: {},
    };
    aprops = {
      name: 'file',
      action: 'http://localhost:3001/uploadImg',
      accept: 'image/*',
    }
    render() {
      const formItemLayout =
      {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 },
      };
      // const { record } = this.state;

      const { visible, onCancel, onCreate, form, msg } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="编辑图片信息"
          okText="确定"
          cancelText="取消"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="horizontal">
            <Form.Item label="图片信息：" {...formItemLayout}>
              {getFieldDecorator('songdesc', {
                initialValue: `${msg.songdesc}`
              })(<TextArea maxLength={20} />)}
            </Form.Item>
            <Form.Item label="上传图片：" {...formItemLayout}>
              {getFieldDecorator('upload', {
                initialValue: `${msg.imgurl}`
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
          </Form>
        </Modal>
      );
    }
  },
);
class SongList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ModalText: 'Content of the modal',
      msg: '',
      record: '',
      visible: false,
      confirmLoading: false,
      loading: false,
      info: [],
    };
  }

  showModal = (item) => {
    this.setState({ msg: item, visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false, });
  };

  handleCreate = () => {
    const { form } = this.formRef.props;
    const { id } = this.state.msg;
    var imgurl;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      const desc = values.songdesc;
      if (values.upload === undefined) {
        imgurl = '';
      }
      else {
        var pos = values.upload.lastIndexOf("/");
        if (pos === -1) {
          pos = values.upload.lastIndexOf("\\")
        }
        imgurl = values.upload.substr(pos + 1);
      }
      updatelist(desc, imgurl, id).then((res) => {
        if (res.status === 200) {
          form.resetFields();
          message.success('修改成功！')
          this.setState({ visible: false, });
          window.location.reload();
        }
      })
      this.setState({ record: values });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };
  componentDidMount() {
    this.setState({ loading: true });
    queryList().then((res) => {
      this.setState({
        info: res.data,
        loading: false,
      })
    })
  }

  render() {
    // const { visible, confirmLoading, ModalText } = this.state;
    const data = this.state.info;
    return (
      <div>
        <div>
          <Row style={{ height: 550 }}>
            {
              data.map((item, j) => {
                return (
                  <Col span={4} key={j} onClick={() => this.showModal(item)} >
                    <Card
                      style={{ width: 190, height: 300 }}
                      hoverable
                      // size="small"
                      // bordered={true}
                      cover={
                        <img
                          alt="example"
                          src={item.imgurl === null ? require('../../songimgs/404.png') : `http://localhost:3001/public/images/${item.imgurl}`}
                        />
                      }

                    >
                      <Meta
                        // avatar={'dad'}
                        title={item.songname}
                        description={item.songdesc}
                      />
                    </Card>
                  </Col>
                )
              })
            }
          </Row>
        </div>

        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          msg={this.state.msg}
          onCancel={this.handleCancel}
          onCreate={() => this.handleCreate()}
        />
      </div >
    )
  }
};
export default SongList;