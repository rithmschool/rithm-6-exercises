import React, { Component } from "react";
import VendingMachine from "./VendingMachine";
import "./App.css";

class App extends Component {
  render() {
    return (
      <section className="App">
        <VendingMachine />
      </section>
    );
  }
}

export default App;
