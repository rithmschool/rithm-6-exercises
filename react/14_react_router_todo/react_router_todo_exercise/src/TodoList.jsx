import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./TodoList.css";

const Todo = ({ todo, handleComplete, handleDelete }) => (
  <div>
    <li className={`todo ${todo.className}`}>
      <p>Title: {todo.title}</p>
      <p>Description: {todo.description}</p>
      <button onClick={handleComplete}>Mark/Unmark as Complete</button>
      <button onClick={handleDelete}>Delete Item</button>
      <Link to={`/todos/${todo.id}`}><button>Show</button></Link>
    </li>
  </div>
);

export default class TodoList extends Component {
  render() {
    let todoComponents = this.props.todos.map(todo => (
      <Todo
        todo={todo}
        // console.log todo.id if this doesn't world
        handleComplete={this.props.handleComplete.bind(null, todo.id)}
        handleDelete={this.props.handleDelete.bind(null, todo.id)}
      />
    ));
    return (
      <div>
        <ol>
          {todoComponents}
        </ol>
      </div>
    );
  }

}
