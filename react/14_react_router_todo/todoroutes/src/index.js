import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Todo from "./Todo";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <BrowserRouter>
    <Todo />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
