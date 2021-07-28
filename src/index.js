import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "@/redux/store";

import App from "@Components/App";
import "@/index.scss";
const Index = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
