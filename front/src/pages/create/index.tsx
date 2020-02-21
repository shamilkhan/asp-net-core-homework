import React from "react";
import { Form, Input, Icon, Button, Upload, Row, Col, DatePicker } from "antd";

export default function() {
  const saveFile = (ev: React.FormEvent) => {
    ev.preventDefault();
    console.log(ev);
  };

  return (
    <Row style={{ marginTop: "30px" }}>
      <Col span={8} offset={8}>
        <Form layout="vertical" onSubmit={saveFile}>
          <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="text"
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="text"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <DatePicker />
          </Form.Item>
          <Upload.Dragger name="files">
            <p className="ant-upload-drag-icon">
              <Icon type="inbox" />
            </p>
            <p className="ant-upload-text">Загрузить файл</p>
          </Upload.Dragger>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Сохранить
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}
