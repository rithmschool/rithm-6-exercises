import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import FirstComponent from "./firstComponent.js";
import SecondComponent from "./secondComponent.js";
import NamedComponent from "./namedComponent.js";
import MultiTweetComponent from "./multiTweetComponent";
import MultiPersonComponent from "./multiPersonComponent.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">JSX Exercises Homework</h1>
        </header>
        <div>
          <p className="HW-intro">JSX Exercises - Part 1</p>
          <FirstComponent />
          <SecondComponent />
          <NamedComponent name="Rithm School" />
        </div>
        <div>
          <p className="HW-intro">JSX Exercises - Part 2</p>
          <MultiTweetComponent />
        </div>
        <div>
          <p className="HW-intro">JSX Exercises - Part 3</p>
          <MultiPersonComponent />
        </div>
      </div>
    );
  }
}

export default App;
