import React, { Component } from "react";
import "./App.css";
import Giphy from "./components/giphy-list";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-header">GIPHY PARTY</h1>
        <Giphy />
      </div>
    );
  }
}

export default App;
