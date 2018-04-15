import React, { Component } from 'react';
import TodoComponent from './TodoComponent.js';
import Newtodoform from './newTodoForm.js';
import './App.css';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { title: 'Walk the Dog', deadline: '3pm' },
        { title: 'Walk the Dog', deadline: '3pm' },
        { title: 'Walk the Dog', deadline: '3pm' }
      ]
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }
  handleAdd(newTodo) {
    this.setState(prevState => ({
      todos: [newTodo, ...prevState.todos]
    }));
  }

  removeTodo(todo) {
    let index = this.state.todos.indexOf(todo);
    let array = this.state.todos;
    array.splice(index, 1);
    this.setState(prevState => ({
      todos: array
    }));
  }

  render() {
    let allTodos = this.state.todos.map((todo, index) => {
      let content = { title: todo.title, deadline: todo.deadline };
      return (
        <TodoComponent
          remove={this.removeTodo}
          index={index}
          key={index}
          title={content.title}
          deadline={content.deadline}
        />
      );
    });
    return (
      <div>
        <Newtodoform handleAdd={this.handleAdd} />
        <ul className="todoContainer">{allTodos}</ul>
      </div>
    );
  }
}
