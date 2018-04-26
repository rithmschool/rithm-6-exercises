import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Vending from './VendingComponent.js';

class App extends Component {
  render() {
    return (
      <div>
        <Vending />
      </div>
    );
  }
}

export default App;
