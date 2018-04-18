import React, { Component } from 'react';
import Calculator from './Calculator';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>The Awesome Calculator</h1>
        <h3>Perform operations</h3>
        <Calculator />
      </div>
    );
  }
}

export default App;
