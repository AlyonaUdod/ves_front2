import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import { Button, Form, Input, Card } from 'antd';
// import { FormWrapper } from './LoginPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthOperation } from 'redux/auth/authSelectors';
import { logIn } from 'redux/auth/authOperations';

const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};

const LoginPage = () => {
  const isLoading = useSelector(selectAuthOperation)
  const formRef = React.useRef(null);
  const dispatch = useDispatch();

  const onFinish = values => {
    dispatch(logIn(values))
    // console.log(values);
  };
  const onReset = () => {
    formRef.current?.resetFields();
  };
  const onFillAdministrator = () => {
    formRef.current?.setFieldsValue({
      email: 'sometest@gmail.com',
      password: 'sometest',
    });
  };
  const onFillManager = () => {
    formRef.current?.setFieldsValue({
      email: 'manager@gmail.com',
      password: 'manager',
    });
  };

  return (
    <Card
      extra={
        <>
          <Button type="link" htmlType="button" onClick={onFillAdministrator}>
            Administrator
          </Button>
          <Button type="link" htmlType="button" onClick={onFillManager}>
            Manager
          </Button>
        </>
      }
    >
      <Form
        name="basic"
        layout="vertical"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 24,
        }}
        style={{
          width: 600,
          // minWidth: 600,
        }}
        // initialValues={{
        //   remember: true,
        // }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        // autoComplete="off"
        ref={formRef}
      >
        {/* <h2>Login</h2> */}
        <Form.Item
          prefix={<UserOutlined className="site-form-item-icon" />}
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
            {
              type: 'email',
            },
          ]}
        >
          <Input />
        </Form.Item>
        {/* <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!"
            }
          ]}
        >
          <Input />
        </Form.Item> */}

        <Form.Item
          prefix={<LockOutlined className="site-form-item-icon" />}
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        {/* <Form.Item
          name="remember"
          valuePropName="checked"
          // wrapperCol={{
          //   offset: 8,
          //   span: 16,
          // }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item> */}

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button style={{marginRight: '24px'}} type="primary" htmlType="submit" loading={isLoading === 'login'}>
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default LoginPage;
