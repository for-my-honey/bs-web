import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link, withRouter } from "react-router-dom";
import { renderRoutes } from 'react-router-config'
import MyHeader from './components/layout/header'
import './App.css';

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: props.route,
      collapsed: false,
    }
  }


  onCollapse = collapsed => {
    this.setState({ collapsed });
  };
  render() {
    const route = this.state.route;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className='logo' />
          <Menu theme="dark" defaultSelectedKeys={window.location.hash.split('/')[2]} mode="inline">
            <Menu.Item key="dashboard"><Link to='/app/dashboard' replace>
              <Icon type="pie-chart" />首页</Link>
            </Menu.Item>
            <Menu.Item key="user" ><Link to='/app/user' replace><Icon type="user" />用户管理</Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="desktop" />
                  <span>歌曲管理</span>
                </span>
              }
            >
              <Menu.Item key="searchsong"><Link to='/app/searchsong' replace><Icon type="edit" />
                  编辑歌曲</Link>
              </Menu.Item>
              <Menu.Item key="uploadsong">
                <Link to='/app/uploadsong' replace><Icon type="plus-circle" />增加歌曲</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="songList"><Link to='/app/songList' replace><Icon type="ordered-list" />
                歌曲展示</Link>
            </Menu.Item>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>歌手管理</span></span>}>
              <Menu.Item key="searchsinger"><Link to='/app/searchsinger' replace><Icon type="edit" />
                  编辑歌手</Link>
              </Menu.Item>
              <Menu.Item key="updatesinger"><Link to='/app/updatesinger' replace><Icon type="plus-circle" />
                  增加歌手</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="singerList"><Link to='/app/singerList' replace><Icon type="ordered-list" />
                歌手列表</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <MyHeader></MyHeader>
          <Content style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
          }}>
            <div style={{ padding: 16, background: '#fff' }}>
              {renderRoutes(route.children)}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>system ©2020 Created by WangQi</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(App);
