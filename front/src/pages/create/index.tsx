import React from "react";
import { Form, Input, Icon, Button, Upload, Row, Col, DatePicker } from "antd";
import postArticle from "../../api/post-article";

const RegistrationForm = props => {
  const saveFile = (ev: React.FormEvent) => {
    ev.preventDefault();
    const { form } = props;
    props.form.validateFields((err, values) => {
      console.log(values);
      const { title, text, date } = values;
      if (date && typeof date.valueOf === "function") {
        console.log(date.valueOf());
      }
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
              <Input name="title" type="text" placeholder="Заголовок" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("text")(
              <Input.TextArea rows={7} placeholder="Текст статьи" />
            )}
          </Form.Item>
          <Form.Item>{getFieldDecorator("date")(<DatePicker />)}</Form.Item>
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
