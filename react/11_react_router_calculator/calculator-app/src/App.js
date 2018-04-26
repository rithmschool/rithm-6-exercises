import React from "react";
import Calculator from "./Calculator.js";
import { Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

const App = props => (
  <div className="App">
    <Route path="/" component={Calculator} />

    {/* <Route path="/:operator" component={Operator} /> */}
  </div>
);

export default App;
