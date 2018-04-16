import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import LeosCars from './components/LeosCars';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Leo's cars</h1>
        <LeosCars />
        <br />
        <h2>Leo's to-do-list</h2>
        <TodoList />
      </div>
    );
  }
}

export default App;
