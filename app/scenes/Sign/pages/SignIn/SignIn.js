import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useInjectSaga } from 'utils/injectSaga';
import history from 'utils/history';
import saga from '../../redux/saga';

const SignIn = ({ requestLogin, location }) => {
  useInjectSaga({ key: 'SignInSaga', saga });

  const redirectAfterLogin = () => {
    const { from } = location.state || { from: { pathname: '/' } };
    history.push(from.pathname);
  };
  const onFinish = (values) => {
    requestLogin({ values, callback: redirectAfterLogin });
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      layout="vertical"
      onFinish={onFinish}
    >
      <Form.Item
        name="identity"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
        hasFeedback
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <a className="login-form-forgot" href="/forgot-password">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="/sign-up">register now!</a>
      </Form.Item>
    </Form>
  );
};

export default SignIn;
