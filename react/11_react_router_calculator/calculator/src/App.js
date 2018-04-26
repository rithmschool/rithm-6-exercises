import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Calculator from "./Calculator";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">The Calculator</h1>
        </header>
        <Link to="/">Home</Link>
        <Route exact path="/:operation/:num1/:num2" component={Calculator} />
        <p className="App-intro">Lets get started with Calculator.</p>
      </div>
    );
  }
}

export default App;
