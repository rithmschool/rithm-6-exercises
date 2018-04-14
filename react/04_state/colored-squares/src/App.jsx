import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SquareContainer from './SquareContainer'
import CoinTable from './CoinTable'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to color squares</h1>
        </header>
        <SquareContainer />
        <hr/>
        <CoinTable />
        <hr/>
      </div>
    );
  }
}

export default App;
