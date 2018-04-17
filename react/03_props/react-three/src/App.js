import React, { Component } from "react";

import "./App.css";
import Pokedex from "./Pokedex";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3 className="App-title">Pokemon 03</h3>
        </header>
        <Pokedex />
      </div>
    );
  }
}

export default App;
