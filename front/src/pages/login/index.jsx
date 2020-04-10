import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";
import loginAPI from "../../api/login";
import login from '../../store/user/login';

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

const LoginComponent = (props) => {
  const dispatch = useDispatch();
  
  const [isLogin, setIsLogin] = React.useState(false);

  const token = useSelector(state => state.user.token);

  if (token) {
    return <Redirect to="/" />;
  }

  const { form } = props;

  const onSubmit = async (e) => {
    e.preventDefault();
    
    const { password, email } = form.getFieldsValue();
    
    dispatch(login({email, password}));
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
    >
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
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Form.create({ name: "register" })(LoginComponent);
