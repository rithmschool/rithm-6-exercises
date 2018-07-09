import React, { Component } from "react";
import { Route } from "react-router-dom";
import Result from "./Result";
import Calculator from "./Calculator";

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Calculator} />
        <Route path="/:operation/:num1/:num2" component={Result} />
      </div>
    );
  }
}

export default App;
