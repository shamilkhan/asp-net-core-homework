import "./index.scss";
import React from "react";
import xhr from "./modules/xhr";

type Props = {
  title: string;
};

export const App = (props: Props) => {
  React.useEffect(() => {
    xhr().then(data => {
      
    })
    return () => {
      console.log("clean Up");
    };
  }, []);
  return <div>{props.title}</div>;
};
