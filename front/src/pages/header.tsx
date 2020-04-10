import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Layout, Menu } from "antd";
import { useSelector, useDispatch } from "react-redux";
import UserIcon from "./header/user-icon";
import { logout } from "../store/user";

export default function () {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);

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
          <Menu.Item key="3">
            {!!token || <Link to="/register">Регистрация</Link>}
          </Menu.Item>
          <Menu.Item key="4">
            {!!token || <Link to="/login">Войти</Link>}
          </Menu.Item>
          <Menu.Item onClick={() => dispatch(logout())} key="5">
            {!!token && (
                "Выйти"
            )}
          </Menu.Item>
          <Menu.Item key="6">{!!token && <UserIcon />}</Menu.Item>
        </Menu>
      </Layout.Header>
    </Layout>
  );
}
