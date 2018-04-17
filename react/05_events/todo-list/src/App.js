import React, { Component } from "react";
import "./App.css";
import TodoList from "./TodoList";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <h1>TodoList</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;
