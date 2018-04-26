import React, { Component } from "react";
import ToDoList from "./components/ToDoList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">To Do List</h1>
        </header>
        <h1>Here is our to do list</h1>
        <br />
        <ToDoList />
      </div>
    );
  }
}

export default App;
