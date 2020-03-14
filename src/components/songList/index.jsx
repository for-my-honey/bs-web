import React from 'react';
import './index.css'
import { Card, Col, Row, Avatar, Icon, Table, Pagination, Modal, Form, Input, Select, DatePicker, message, Upload } from 'antd';

import { queryList } from '../../services/song';
const { Dragger } = Upload;
var moment = require('moment');
const { Meta } = Card;
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
                // initialValue: `${record.songname}`
              })(<Input />)}
            </Form.Item>
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
      visible: false,
      confirmLoading: false,
      loading: false,
      srcs: ["https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"],
      info: [],
    };
  }

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

      form.resetFields();
      this.setState({ visible: false, });
      window.location.reload();
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
    const { visible, confirmLoading, ModalText } = this.state;
    const data = this.state.info;
    console.log('data', data);
    return (
      <div>
        <div className="site-card-wrapper">
          <Row>
            {
              data.map((item, j) => {
                return (
                  <Col span={4} key={j} onClick={() => this.showModal(item)} >
                    <Card
                      style={{ width: 190, height: 300 }}
                      hoverable
                      // size="small"
                      bordered={true}
                      cover={
                        <img
                          alt="example"
                          src={item.imgurl === null ? require('../../songimgs/404.png') : require('../../songimgs/' + `${item.imgurl}`)}
                        />
                      }
                    // actions={[
                    //   <Icon></Icon>
                    // ]}
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
          record={this.props.record}
          onCancel={this.handleCancel}
          onCreate={() => this.handleCreate()}
        />
      </div >
    )
  }
};
export default SongList;