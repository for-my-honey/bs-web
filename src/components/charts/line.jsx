import React, { Component } from 'react'
import { Col, Row } from 'antd'
import ReactEcharts from 'echarts-for-react'
import { songtype, songarea } from '../../services/dashboard';

/*
后台管理的柱状图路由组件
 */

export default class Bar extends Component {

  state = {
    type: [], // 歌曲类型的数组
    area: [], // 歌曲地区的数组
  }
  componentDidMount() {
    songtype().then((res) => {
      const datatype = Object.values(res.data[0]);
      this.setState({
        type: datatype,
      })
    })
    songarea().then((res) => {
      const dataarea = Object.values(res.data[0]);
      this.setState({
        area: dataarea,
      })
    })
  }

  // update = () => {
  //   this.setState(state => ({
  //     sales: state.sales.map(sale => sale + 1),
  //     stores: state.stores.reduce((pre, store) => {
  //       pre.push(store - 1)
  //       return pre
  //     }, []),
  //   }))
  // }

  /*
  返回柱状图的配置对象
   */
  getOption = () => {

    return {
      title: {
        text: '歌曲类型'
      },
      tooltip: {},
      // legend: {
      //   data: ['销量', '库存']
      // },
      xAxis: {
        data: ["流行", "民谣", "古典", "摇滚", "嘻哈"]
      },
      yAxis: {},
      series: [{
        data: this.state.type,
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(220, 220, 220, 0.8)'
        }
      }]
    }
  }
  getOption2 = () => {
    return {
      title: {
        text: '歌曲地区'
      },
      tooltip: {},
      // legend: {
      //   data: ['销量', '库存']
      // },
      xAxis: {
        data: ["内地", "港台", "韩国", "欧美", "日本"]
      },
      yAxis: {},
      series: [{
        data: this.state.area,
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(220, 220, 220, 0.8)'
        }
      }]
    }
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