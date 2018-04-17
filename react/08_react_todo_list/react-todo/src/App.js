import React, { Component } from "react";
import TodoList from "./TodoList.js";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">TO DO</h1>
        </header>
        <div className="App-content">
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
