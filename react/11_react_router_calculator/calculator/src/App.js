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

        <Route exact path="/:operation/:num1/:num2" component={Calculator} />

        {/* <Route exact path="/add/:a/:b" component={add} />
        <Route exact path="/subtract/:a/:b" component={subtract} />
        <Route exact path="/multiply/:a/:b" component={multiply} />
        <Route exact path="/divide/:a/:b" component={divide} /> */}

        <p className="App-intro">Lets get started with Calculator.</p>
      </div>
    );
  }
}

export default App;

// /add/1/2 - should render a component that displays 3.
// /subtract/3/2 - should render a component that displays 1.
// /multiply/6/4 - should render a component that displays 24.
// /divide/20/5 - should render a component that displays 4.
