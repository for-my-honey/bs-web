import React, { Component } from 'react'

import ReactEcharts from 'echarts-for-react'
import { malesinger, femalesinger, singernum } from '../../services/dashboard';

/*
后台管理的折线图路由组件
 */
export default class Line extends Component {

  state = {
    male: [], // 销量的数组
    female: [], // 库存的数组
    singernum: [],
  }

  componentDidMount() {
    malesinger().then((res) => {
      const datatype = Object.values(res.data[0]);
      this.setState({
        male: datatype,
      })
    })
    femalesinger().then((res) => {
      const datatype = Object.values(res.data[0]);
      this.setState({
        female: datatype,
      })
    })
    singernum().then((res) => {
      const datatype = Object.values(res.data[0]);
      this.setState({
        singernum: datatype,
      })
    })
  }
  /*
  返回折线图路由组件
   */
  getOption = () => {
    return {
      title: {
        text: '歌手信息分布'
      },
      tooltip: {},
      legend: {
        data: ['男歌手（Male singer）', '女歌手（Female singer）', '歌手（singer）'],
        orient: 'vertical',
        right: 'right',
      },
      radar: {
        // shape: 'circle',
        name: {
          textStyle: {
            color: '#fff',
            backgroundColor: '#999',
            borderRadius: 3,
            padding: [3, 5]
          }
        },
        indicator: [
          { name: '内地（China）', max: 5 },
          { name: '港台（Hong Kong and Taiwan）', max: 5 },
          { name: '韩国（Korea）', max: 5 },
          { name: '欧美（Europe and America）', max: 5 },
          { name: '日本（Japan）', max: 5 },
        ]
      },
      series: [{
        name: '男歌手 vs 女歌手',
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [
          {
            value: this.state.female,
            name: '女歌手（Female singer）'
          },
          {
            value: this.state.male,
            name: '男歌手（Male singer）'
          },
          {
            value: this.state.singernum,
            name: '歌手（singer）'
          },

        ]
      }]
    }
  }

  render() {
    const { sales, stores } = this.state
    return (
      <div>
        <ReactEcharts option={this.getOption(sales, stores)} style={{ height: 380 }} />
      </div>
    )
  }
}