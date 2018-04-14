import React, { Component } from 'react';
import TodoList from './TodoList';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App__header">
          <h1 className="App__header--title">Todo List</h1>
        </header>
        <TodoList className="App__Todolist" />
      </div>
    );
  }
}
