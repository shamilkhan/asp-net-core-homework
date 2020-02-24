import React, { useState } from "react";
import { Form, Input, Icon, Button, Upload, Row, Col, DatePicker } from "antd";
import postArticle from "../../api/post-article";

function getBase64(file: File): Promise<string | ArrayBuffer> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

const RegistrationForm = props => {
  const [files, setFiles] = useState<Array<File>>([]);

  const saveFile = (ev: React.FormEvent) => {
    ev.preventDefault();
    props.form.validateFields(async (err, values) => {
      let _files: Array<Promise<string | ArrayBuffer>> = files.map(file =>
        getBase64(file)
      );
      const binaryFiles = await Promise.all(_files);
      let { title, text, date } = values;
      if (date && typeof date.valueOf === "function") {
        date = date.valueOf();
      } else {
        date = new Date().valueOf();
      }
      postArticle({ title, text, files: binaryFiles, date });
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
            <Upload.Dragger
              beforeUpload={(file, fileList) => {
                files.push(file);
                setFiles(files);
                return false;
              }}
              name="files"
            >
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
