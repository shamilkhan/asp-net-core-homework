import "antd/dist/antd.css";
import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./pages/index";
import reducer from "./store/index";


const store = configureStore({
  reducer,
  devTools: true,
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
