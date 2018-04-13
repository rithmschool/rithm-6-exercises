import React, { Component } from "react";
import "./App.css";
import ColoredBlocks from "./ColoredBlocks.js";

class App extends Component {
  render() {
    return (
      <section className="App">
        <ColoredBlocks />
      </section>
    );
  }
}

export default App;
