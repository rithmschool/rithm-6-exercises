import React, { Component } from 'react';
import Pokedex from './Pokedex';
import { Pokecard } from './Pokecard';
import image from './pokeball.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={image} className="App-logo" alt="logo" />
          <h1 className="App-title">Pokedex</h1>
          <Pokedex />
        </header>
        <div />
      </div>
    );
  }
}

export default App;
