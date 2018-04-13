import React, { Component } from "react";
import "./App.css";
import Pokedex from "./Pokedex";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App">
          <h1 className="pokedex-title">Pokedex</h1>
          <Pokedex />
        </div>
      </div>
    );
  }
}

export default App;
