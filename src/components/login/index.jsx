import React from 'react';
import './index.css';
import { Form, Icon, Input, Button, Card, Carousel } from 'antd';
import query from '../../services/login';
import { message } from 'antd';
class NormalLoginForm extends React.Component {
  state = {
    checked: false,
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        query(values).then((data) => {
          if (data) {
            if (data.data === '0') {
              message.error('账号不存在')
            }
            if (data.data === '1') {
              message.error('密码错误')
              // yield put(routerRedux.push('/dashboard'));
            }
            if (data.data === '2') {
              message.success('登录成功')
              sessionStorage.setItem("name", `${values.username}`);
              this.props.history.push('/app/dashboard');
            }
          }
        });
      }
    });
  };
  onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
    this.setState({
      checked: !e.target.checked,
    })
    console.log(`checked = ${this.state.checked}`);
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div style={{ minHeight: '100vh' }} className='bg'>
        <Carousel autoplay dots='false'>
          <div>
            <h3>享受音乐</h3>
          </div>
          <div>
            <h3>享受生活</h3>
          </div>
        </Carousel>
        <Card style={{ width: 300, margin: "auto" }}>
          <Form onSubmit={this.handleSubmit} className='loginForm'>
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: '请输入你的账号!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {/* {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: this.state.checked,
              })(<Checkbox onChange={this.onChange}>记住我</Checkbox>)} */}
              {/* <a className='loginFormForgot' href="">
                Forgot password
          </a> */}
              <Button type="primary" htmlType="submit" className='loginFormButton'>
                登录
          </Button>
              {/* Or <a href="">register now!</a> */}
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}
const Login = Form.create({ name: 'normal_login' })(NormalLoginForm);
export default Login;