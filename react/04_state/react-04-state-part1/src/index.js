import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import BlocksContainer from "./BlocksContainer";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<BlocksContainer />, document.getElementById("root"));
registerServiceWorker();
