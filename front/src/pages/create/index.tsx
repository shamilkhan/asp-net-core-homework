import React from "react";
import { Form, Input, Icon, Button, Upload, Row, Col } from "antd";

export default function() {
  return (
    <Row style={{ marginTop: "30px" }}>
      <Col span={8} offset={8}>
        <Form layout="vertical" onSubmit={() => 12321}>
          <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Upload.Dragger name="files" action="/upload.do">
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
