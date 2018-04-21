import React, { Component } from 'react';
import TodoComponent from './TodoComponent.js';
import NewTodoForm from './newTodoForm.js';
import EditTodoForm from './EditTodoForm.js';
import { Route, Link } from 'react-router-dom';
import './App.css';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let allTodos = this.props.allTodos.map((todo, index) => {
      return (
        <div>
          <div>
            <Link to={`/todos/${todo.id}`}>
              {todo.title} by {todo.deadline}{' '}
            </Link>
          </div>
        </div>
      );
    });

    return (
      <div>
        <div>
          <Link to="todos/new">Add a new todo</Link>
        </div>
        <div>{allTodos}</div>
      </div>
    );
  }
}
