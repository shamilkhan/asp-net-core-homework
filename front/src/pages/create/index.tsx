import React from "react";
import { Form, Input, Icon, Button, Upload, Row, Col, DatePicker } from "antd";
import postArticle from "../../api/post-article";

const RegistrationForm = props => {
  const saveFile = (ev: React.FormEvent) => {
    ev.preventDefault();
    const { form } = props;
    props.form.validateFields((err, values) => {
      const { title, text } = values;
      postArticle({ title, text });
    });
  };
  const { getFieldDecorator } = props.form;

  return (
    <Row style={{ marginTop: "30px" }}>
      <Col span={8} offset={8}>
        <Form layout="vertical" onSubmit={saveFile}>
          <Form.Item>
            {getFieldDecorator("title")(
              <Input
                name="title"
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="text"
                placeholder="Username"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("text")(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="text"
                placeholder="Password"
              />
            )}
          </Form.Item>
          {/* <Form.Item>
            <DatePicker />
          </Form.Item> */}
          {getFieldDecorator("files")(
            <Upload.Dragger name="files">
              <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
              <p className="ant-upload-text">Загрузить файл</p>
            </Upload.Dragger>
          )}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Сохранить
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

const WrappedRegistrationForm = Form.create({ name: "register" })(
  RegistrationForm
);

export default WrappedRegistrationForm;
