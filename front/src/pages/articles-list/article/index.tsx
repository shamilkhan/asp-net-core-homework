import React from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";

type Article = {
  id: number;
  name: string;
  text: string;
};

const Article = ({ name, text, id }: Article) => {
  return (
    <Card
      style={{ marginTop: 16 }}
      type="inner"
      title={name}
      extra={<Link to={`/article/${id}`}>Читать далее</Link>}
    >
      {text}
    </Card>
  );
};

export default Article;
