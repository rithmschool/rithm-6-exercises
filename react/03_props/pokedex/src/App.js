import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Pokedex from "./Pokedex.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Pokedex</h1>
        </header>
        <h1>Pokedex</h1>
        <Pokedex />
      </div>
    );
  }
}

export default App;
