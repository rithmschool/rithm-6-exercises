import React, { Component } from 'react';
import TodoList from './TodoList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TodoList</h1>
        </header>
        <TodoList />
      </div>
    );
  }
}

export default App;
