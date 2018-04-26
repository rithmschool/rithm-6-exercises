import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import ColorApp from "./ColorApp";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <BrowserRouter>
    <ColorApp />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
