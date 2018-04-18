import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Operations from './Operations';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Calculator} />
        <Route
          path="/add/:arg1/:arg2"
          component={props => <Operations {...props} />}
        />
        {/* <Route path="/subtract/:arg1/:arg2" component={Operations} />
        <Route path="/multiply/:arg1/:arg2" component={Operations} />
        <Route path="/divide/:arg1/:arg2" component={Operations} /> */}
      </div>
    );
  }
}

const Calculator = () => (
  <div>
    <h1>Calculator</h1>
    <div>
      <p>Instructions:</p>
      <p>
        Enter your operation, then two numbers. Each word should be separated by
        a /
      </p>
      <p>Example: /add/2/2</p>
      <p>We currently support these operations:</p>
      <ul>
        <li>Add</li>
        <li>Subtract</li>
        <li>Multiply</li>
        <li>Divide</li>
      </ul>
    </div>
  </div>
);

export default App;
