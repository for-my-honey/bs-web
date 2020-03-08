import React from 'react';
import { Card, Button } from 'antd';

import './index.css'
import Pie from '../charts/pie';
import Line from '../charts/line';
import Bar from '../charts/bar';

const tabListNoTitle = [
  {
    key: 'article',
    tab: '用户统计',
  },
  {
    key: 'app',
    tab: '歌曲统计',
  },
  {
    key: 'project',
    tab: '歌手统计',
  },
];

const contentListNoTitle = {
  article: <Pie></Pie>,
  app: <Line></Line>,
  project: <Bar></Bar>,
};
class Dashboard extends React.Component {
  state = {
    key: 'tab1',
    noTitleKey: 'article',
  };

  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };

  update = () => {
    console.log('ss');

  }
  render() {
    return (
      <div>
        <Card
          style={{ width: '100%' }}
          tabList={tabListNoTitle}
          activeTabKey={this.state.noTitleKey}
          tabBarExtraContent={<Button type="primary" onClick={this.update}>刷新</Button>}
          onTabChange={key => {
            this.onTabChange(key, 'noTitleKey');
          }}
        >
          {contentListNoTitle[this.state.noTitleKey]}
        </Card>
      </div>
    )
  }
};
export default Dashboard;