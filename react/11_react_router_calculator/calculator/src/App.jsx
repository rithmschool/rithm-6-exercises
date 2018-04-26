import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';

const Calculator = props => {
  let { op, n1, n2 } = props.match.params;
  let res;
  if(op === 'add') res = +n1 + +n2;
  if(op === 'subtract') res = +n1 - +n2;
  if(op === 'multiply') res = +n1 * +n2;
  if(op === 'divide') res = +n1 / +n2;
  return (
    <div>
      <h3>The result is:</h3>
      <h3>{res}</h3>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Calculator</h1>
        </header>
        <Route path="/:op/:n1/:n2" component={Calculator} />
      </div>
    );
  }
}

export default App;
