import { Row, Col, Layout, Button, Modal } from 'antd';
import { withRouter } from 'react-router-dom'
import React from 'react';
import { formateDate, reqWeather } from '../../utils/dateUtils'

const { Header } = Layout;
const { confirm } = Modal;


class MyHeader extends React.Component {
  state = {
    currentTime: formateDate(Date.now()), // 当前时间字符串
    dayPictureUrl: '', // 天气图片url
    weather: '', // 天气的文本
  }
  showConfirm = () => {
    confirm({
      title: '确定退出登录吗?',
      okText: '确定',
      cancelText: '取消',
      // content: 'Some descriptions',
      onOk: () => {
        console.log(this.props);
        this.props.history.push('/');
      }
    });
  }
  getWeather = async () => {
    // 调用接口请求异步获取数据
    const { dayPictureUrl, weather } = await reqWeather('北京')
    // 更新状态
    this.setState({ dayPictureUrl, weather })
  }
  getTime = () => {
    // 每隔1s获取当前时间, 并更新状态数据currentTime
    this.intervalId = setInterval(() => {
      const currentTime = formateDate(Date.now())
      this.setState({ currentTime })
    }, 1000)
  }
  componentDidMount() {
    // 获取当前的时间
    this.getTime()
    // 获取当前天气
    this.getWeather()
  }
  componentWillUnmount() {
    // 清除定时器
    clearInterval(this.intervalId)
  }
  render() {
    console.log();

    return (
      <Header style={{ background: '#fff', padding: 0 }}>
        <Row>
          <Col span={1}></Col>
          <Col span={2}><img src={this.state.dayPictureUrl} alt="weather" width='25%' />{this.state.weather}</Col>
          <Col span={15} className='time'>{this.state.currentTime}</Col>
          <Col span={5}><span className='loginout'>{`欢迎你,${sessionStorage.getItem("name")}`}</span><Button type="link" onClick={() => this.showConfirm()}>退出</Button></Col>
        </Row>
      </Header>
    )
  }
}
export default withRouter(MyHeader);
