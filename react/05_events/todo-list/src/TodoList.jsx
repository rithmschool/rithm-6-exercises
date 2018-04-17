import React, { Component } from "react";
import Todo from "./Todo";
import "./TodoList.css";
import NewTodoForm from "./NewTodoForm";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ["test2"]
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleAdd(newTodo) {
    this.setState(prevState => ({
      todos: [newTodo, ...prevState.todos]
    }));
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
        <NewTodoForm handleAdd={this.handleAdd} />
        <ul>{todos}</ul>
      </div>
    );
  }
}

export default TodoList;
