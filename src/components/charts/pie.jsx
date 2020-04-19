import React, { Component } from 'react';
import { Col, Row, } from 'antd';
import ReactEcharts from 'echarts-for-react';
import { usernum, usersex } from '../../services/dashboard';
/*
后台管理的饼图路由组件
 */

export default class Pie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      datasex: [],
    };
  };

  componentDidMount() {
    usernum().then((res) => {
      this.setState({
        data: res.data,
      })
    })
    usersex().then((res) => {
      this.setState({
        datasex: res.data,
      })
    })
  }
  getOption = () => {
    const num = this.state.data;
    return {
      title: {
        text: '音乐平台用户年龄分布',
        // subtext: '纯属虚构',
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['0~12岁', '13~18岁', '19~29岁', '30~45岁', '45岁以上']
      },
      series: [
        {
          name: '年龄分布',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: [
            { value: num.one, name: '0~12岁' },
            { value: num.two, name: '13~18岁' },
            { value: num.three, name: '19~29岁' },
            { value: num.four, name: '30~45岁' },
            { value: num.three, name: '45岁以上' }
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };

  }

  getOption2 = () => {
    const sexnum = this.state.datasex;

    return {
      title: {
        text: '音乐平台用户性别分布',
        // subtext: '纯属虚构',
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        right: 'right',
        data: ['男', '女']
      },
      series: [
        {
          name: '性别分布',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: [
            { value: sexnum.two, name: '女' },
            { value: sexnum.one, name: '男' },
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };

  }

  render() {
    return (
      <div>
        <Row>
          <Col span={12}><ReactEcharts option={this.getOption()} style={{ height: 380 }} /></Col>
          <Col span={12}><ReactEcharts option={this.getOption2()} style={{ height: 380 }} /></Col>
        </Row>
      </div>
    )
  }
}
