import React, { Component } from "react";
import Todo from "./Todo";
import "./TodoList.css";
import { Route, Link } from "react-router-dom";
import NewTodoForm from "./NewTodoForm";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(newText, i) {
    this.props.updateTodo(newText, i);
  }
  handleDelete(i) {
    this.props.removeTodo(i);
  }

  render() {
    let todos = this.props.todos.map((todo, i) => (
      <li>
        <Todo
          key={i}
          text={todo}
          index={i}
          handleDelete={this.handleDelete.bind(this, i)}
          handleUpdate={this.handleUpdate}
        />
      </li>
    ));
    return (
      <div className="TodoList">
        <Link to="/new">Add New Todo</Link>
        <ul>{todos}</ul>
        <img
          src="https://i.pinimg.com/originals/81/35/08/8135084de2993949cc18cb9f57f2aa48.png"
          alt=""
        />
      </div>
    );
  }
}

export default TodoList;
