import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pokedex from './Pokedex'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Pokemon-game</h1>
        </header>
        <Pokedex />
      </div>
    );
  }
}

export default App;
