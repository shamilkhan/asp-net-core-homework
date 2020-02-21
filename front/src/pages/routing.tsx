import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import CreateComponent from "./create";

export default function() {
  return (
    <Router>
      <Layout>
        <Layout.Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1">
              <Link to="/all">Все записи</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/create">Создать</Link>
            </Menu.Item>
          </Menu>
        </Layout.Header>
      </Layout>
      <Layout.Content
        style={{
          background: "#fff",
          padding: 24,
          margin: 0,
          minHeight: 280
        }}
      >
        <Switch>
          <Route path="/create">
            <CreateComponent />
          </Route>
          <Route path="*">404</Route>
        </Switch>
      </Layout.Content>
    </Router>
  );
}
