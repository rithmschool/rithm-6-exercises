import React, { Component } from 'react';
import TodoComponent from './TodoComponent.js';
import Newtodoform from './newTodoForm.js';
export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ title: 'Walk the Dog', deadline: '3pm' }]
    };
    this.handleAdd = this.handleAdd.bind(this);
  }
  handleAdd(newTodo) {
    this.setState(prevState => ({
      todos: [newTodo, ...prevState.todos]
    }));
  }
  render() {
    let allTodos = this.state.todos.map((todo, index) => {
      let content = { title: todo.title, deadline: todo.deadline };
      return (
        <TodoComponent
          key={index}
          title={content.title}
          deadline={content.deadline}
        />
      );
    });
    return (
      <div>
        <Newtodoform handleAdd={this.handleAdd} />
        <ul>{allTodos}</ul>
      </div>
    );
  }
}
