import React from 'react';
import './index.css'
import { Card, Col, Row, Input, Radio, Icon, Modal, Form, message, Upload, InputNumber } from 'antd';

import { queryList, updatelist, selectArea, select } from '../../services/singer';
const { Dragger } = Upload;
const { Search } = Input;
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
            <Form.Item label="单曲数量：" {...formItemLayout}>
              {getFieldDecorator('singersongnum', {
                initialValue: `${msg.singersongnum === null ? 0 : msg.singersongnum}`,
                rules: [{ required: true, message: '请输入单曲数量' }],
              })(<InputNumber />)}
            </Form.Item>
            <Form.Item label="专辑数量：" {...formItemLayout}>
              {getFieldDecorator('singercdnum', {
                initialValue: `${msg.singercdnum === null ? 0 : msg.singercdnum}`,
                rules: [{ required: true, message: '请输入专辑数量' }],
              })(<InputNumber />)}
            </Form.Item>
            <Form.Item label="上传图片：" {...formItemLayout}>
              {getFieldDecorator('upload', {
                initialValue: `${msg.singerurl}`
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
class SingerList extends React.Component {
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
      const singersongnum = values.singersongnum;
      const singercdnum = values.singercdnum;
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

      updatelist(singersongnum, singercdnum, imgurl, id).then((res) => {
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
  onChange = (e) => {
    this.setState({ loading: true });
    if (e.target.value === '') {
      queryList().then((res) => {
        this.setState({
          info: res.data,
          loading: false,
        })
      })
    } else {
      selectArea(e.target.value).then((res) => {
        this.setState({
          info: res.data,
          loading: false,
        })
      })
    }
  }
  onSearch(value) {
    this.setState({ loading: true });
    select(value).then((res) => {
      this.setState({
        info: res.data,
        loading: false,
      })
    })
  }
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
          <Row>
            <Col span={8}>
              <Search placeholder="请输入歌手名称" onSearch={(value) => this.onSearch(value)} enterButton style={{ width: 400, marginBottom: '3px' }} />
            </Col>
            <Col span={8}></Col>
            <Col span={8} style={{ textAlign: 'center' }}>
              <Radio.Group onChange={this.onChange} defaultValue="" buttonStyle="solid">
                <Radio.Button value="">全部</Radio.Button>
                <Radio.Button value="内地">内地</Radio.Button>
                <Radio.Button value="港台">港台</Radio.Button>
                <Radio.Button value="韩国">韩国</Radio.Button>
                <Radio.Button value="欧美">欧美</Radio.Button>
                <Radio.Button value="日本">日本</Radio.Button>
              </Radio.Group>
            </Col>
          </Row>
          <Row style={{ height: 550 }}>
            {
              data.map((item, j) => {
                return (
                  <Col span={4} key={j} onClick={() => this.showModal(item)} >
                    <Card
                      style={{
                        width: 190,
                        height: 300,
                      }}
                      bodyStyle={{
                        maxHeight: 120,
                        display: 'box',
                        boxOrient: 'vertical',
                        lineClamp: 3,
                        overflow: 'hidden'
                      }}
                      hoverable
                      // size="small"
                      // bordered={true}
                      cover={
                        <img
                          alt="example"
                          src={item.singerurl === null || item.singerurl === undefined ? require('../../songimgs/404.png') : `http://localhost:3001/public/images/${item.singerurl}`}
                        />
                      }

                    >
                      <Meta
                        // avatar={'dad'}
                        title={item.singername}
                        description={<Row><Col span={12}><Icon type="customer-service" />单曲{item.singersongnum}</Col><Col span={12} style={{ textAlign: 'right' }}><Icon type="play-circle" />专辑{item.singercdnum}</Col></Row>}
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
export default SingerList;