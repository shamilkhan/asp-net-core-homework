import React from "react";
import { Layout } from "antd";

export default function(props) {
  return (
    <Layout.Content
      style={{
        background: "#fff",
        padding: 24,
        margin: 0,
        minHeight: 280
      }}
    >
      {props.children}
    </Layout.Content>
  );
}
