import React from "react";
import ReactDOM from "react-dom";
import { Form, Input, Button, Checkbox } from "antd";
import registerAPI from "../../api/register";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Demo = (props) => {
  const { form } = props;

  const onSubmit = async (e) => {
    e.preventDefault();
    const { username, password, email } = form.getFieldsValue();
    const result = await registerAPI({ username, password, email });
    
    console.log("result is...", result);
  };

  const { getFieldDecorator } = form;

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onSubmit={onSubmit}
      // onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        {getFieldDecorator("username")(
          <Input name="username" type="text" placeholder="username" />
        )}
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        {getFieldDecorator("email")(
          <Input name="email" type="text" placeholder="your@mail.com" />
        )}
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        {getFieldDecorator("password")(
          <Input.Password
            name="password"
            type="password"
            placeholder="password"
          />
        )}
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Form.create({ name: "login" })(Demo);
