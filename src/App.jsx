import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link, Redirect } from "react-router-dom";
import { renderRoutes } from 'react-router-config'
import './App.css';
// import Dashboard from './components/dashboard';
// import User from './components/user';
// import RouterIndex from './route/index';
const { Header, Content, Footer, Sider } = Layout;
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
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    const route = this.state.route;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className='logo' />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Link to='/app/dashboard'>
                <Icon type="pie-chart" />
                首页
                </Link>
            </Menu.Item>
            <Menu.Item key="2" >
              <Link to='/app/user'>
                <Icon type="user" />
                用户管理
                </Link>
            </Menu.Item>

            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="desktop" />
                  <span>User</span>
                </span>
              }
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>Team</span>
                </span>
              }
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
            minHeight: 280,
          }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {renderRoutes(route.children)}
              <Redirect exact from="/app" to='/app/dashboard' />
              {/* 这里用 redirect 进行 首页自动跳转到 /home 路由下 
                exact 意味着精确匹配 当为 / 时才跳转 /home 不是包含 / 就跳转到 /home
            */}

            </div>

          </Content>
          <Footer style={{ textAlign: 'center' }}>system ©2020 Created by WangQi</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
