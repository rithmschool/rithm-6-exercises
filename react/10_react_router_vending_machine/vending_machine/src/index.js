import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <BrowserRouter>
    <VendingMachine />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
