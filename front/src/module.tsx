import "./index.scss";
import React from "react";

type Props = {
  title: string;
};

export const App = (props: Props) => {
  return <div>{props.title}</div>;
};

const model = [{
    field: "grz",
    fieldName: "Гос. номер",
    /**@description Can sort */
    canSort: true,
    /**@description Ширина в пикселях */
    width: 400,
}]
