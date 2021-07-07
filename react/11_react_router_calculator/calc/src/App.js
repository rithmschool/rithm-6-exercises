import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Calc from './Calc';

class App extends Component {
  render() {
    return (
      <div className="App">
        Welcole to the Calculator Application!
        <br />
        <br />
        <br />
        <br />
        <Route path="/:operation/:a/:b" component={Calc} />
      </div>
    );
  }
}

export default App;
