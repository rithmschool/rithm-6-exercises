import React, { Component } from 'react';
import TodoComponent from './TodoComponent.js';
import Newtodoform from './newTodoForm.js';
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
          <Link to={`/${todo.id}`}>{todo.title} </Link>
        </div>
      );
    });

    return <div>{allTodos}</div>;
  }
}
