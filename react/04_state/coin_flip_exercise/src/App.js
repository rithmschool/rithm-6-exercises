import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CoinFrame from "./CoinFrame";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Coin Flip Exercise</h1>
        </header>
        <CoinFrame />
      </div>
    );
  }
}

export default App;
