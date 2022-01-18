import React, { useState, useEffect } from 'react';
import { Modal, Form, Input, Select, Row, Col, Button } from 'antd';
import { Typography, Space } from 'antd';
import CreateSignIn from '../Sign in/CreateSignIn';


const { Title, Paragraph, Text, Link } = Typography;

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const SignUpForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);

    signUp();

  };

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userName, setUsername] = useState("")

  async function signUp() {

    let item = { email, userName, roles: ["lead"], password }
    console.warn(item);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin',
      body: JSON.stringify(item),
    };
    const response = await fetch('http://localhost:3000/auth/signUp', requestOptions);
    // const data = await response.json();
  }


  return (
    <Form
      {...formItemLayout}
      layout="horizontal"
      size="medium"
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
    >
      <Form.Item name="email" label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="username"
        label="Username"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: 'Please input your nickname!',
            whitespace: true,
          },
        ]}
      >
        <Input value={userName} onChange={(e) => setUsername(e.target.value)} />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
        <Paragraph>
        </Paragraph>
        <Paragraph>
          <Text> Already have an account? </Text>
          <CreateSignIn />
        </Paragraph>
      </Form.Item>
    </Form>
  );

};

export default SignUpForm;