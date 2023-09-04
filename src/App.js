import React, { useState } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Sidebar from "./components/Sidebar";
import { Provider } from "react-redux";
import store from "./utils/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <Body />
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
