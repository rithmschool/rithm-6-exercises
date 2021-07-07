import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import CompiledSquares from "./CompiledSquares.js";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<CompiledSquares />, document.getElementById("root"));
registerServiceWorker();
