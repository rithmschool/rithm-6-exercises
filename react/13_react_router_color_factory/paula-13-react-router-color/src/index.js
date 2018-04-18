import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import ColorsApp from "./ColorsApp";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <BrowserRouter>
    <ColorsApp />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
