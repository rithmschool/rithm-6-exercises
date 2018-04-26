import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from "react-router-dom";

const Add = props => {
  let { num1, num2 } = props.match.params;
  return (
    <h1>{+num1 + +num2}</h1>
  );
};

const Subtract = props => {
  let { num1, num2 } = props.match.params;
  return (
    <h1>{+num1 - +num2}</h1>
  );
};

const Multiply = props => {
  let { num1, num2 } = props.match.params;
  return (
    <h1>{+num1 * +num2}</h1>
  );
};

const Divide = props => {
  let { num1, num2 } = props.match.params;
  return (
    <h1>{+num1 / +num2}</h1>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Calculator Exercise</h1>
        </header>
        <Route path="/add/:num1/:num2" component={Add} />
        <Route path="/subtract/:num1/:num2" component={Subtract} />
        <Route path="/multiply/:num1/:num2" component={Multiply} />
        <Route path="/divide/:num1/:num2" component={Divide} />
      </div>
    );
  }
}



export default App;
