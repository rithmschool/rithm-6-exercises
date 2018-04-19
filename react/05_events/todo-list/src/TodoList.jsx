import React, { Component } from "react";
import Todo from "./Todo";
import "./TodoList.css";
import { Route, Link } from "react-router-dom";
import NewTodoForm from "./NewTodoForm";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ["test2", ...this.props.todos]
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(newText, i) {
    let statei = i;
    this.setState(prevState => {
      this.state.todos[statei] = newText;
      return this.state;
    });
  }
  handleDelete(e) {
    let statei = e.target.getAttribute("index");
    this.setState(prevState => {
      this.state.todos.splice(statei, 1);
      return this.state;
    });
  }

  render() {
    let todos = this.state.todos.map((todo, i) => (
      <li>
        <Todo
          key={i}
          text={todo}
          index={i}
          handleDelete={this.handleDelete}
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
