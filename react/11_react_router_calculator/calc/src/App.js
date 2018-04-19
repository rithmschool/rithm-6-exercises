import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';

var result;
const Calc = props => {
  console.log(props);
  console.log(props.location);
  let { operation, a, b } = props.match.params;
  if (operation === 'add') return +a + +b;
  if (operation === 'subtract') return +a - +b;
  if (operation === 'divide') return +a / +b;
  if (operation === 'multiply') return +a * +b;
  return 'Invalid Operation';
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Route path="/:operation/:a/:b" component={Calc} />
      </div>
    );
  }
}

export default App;
