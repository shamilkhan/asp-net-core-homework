import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Layout, Menu } from "antd";

export default function() {
  let isCreatingPath = null;
  try {
    isCreatingPath = useRouteMatch("/create");
  } catch {
    isCreatingPath = null;
  }

  return (
    <Layout>
      <Layout.Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[isCreatingPath ? "2" : "1"]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="1">
            <Link to="/">Все посты</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/create">Создать пост</Link>
          </Menu.Item>
        </Menu>
      </Layout.Header>
    </Layout>
  );
}
