import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VendingMachine from "./VendingMachine";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Vending Machine Exercise</h1>
        </header>
        <VendingMachine />
      </div>
    );
  }
}

export default App;
