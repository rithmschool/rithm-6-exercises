import React, { Component } from "react";
import NewTodoItem from "./newTodoItem.js";
import NewTodoForm from "./NewTodoForm.js";
import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          newTodo:
            "Finish my React exercises and become a superstar developer(hopefully)"
        },
        { newTodo: "Buy some milk and a cow" },
        { newTodo: "Go to the gym for sanity" }
      ]
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(newTodo) {
    this.setState(prevState => ({
      todos: [newTodo, ...prevState.todos]
    }));
  }

  handleDelete(idxTodo) {
    let newTodos = this.state.todos.filter(t => t.id !== idx);
    this.setState({ todos: newTodos });
  }

  render() {
    let todoListItems = this.state.todos.map((todo, i) => (
      <NewTodoItem
        key={i}
        newTodo={todo.newTodo}
        handleDelete={this.handleDelete.bind(this, todo.i)}
      />
    ));
    return (
      <div className="TodoList">
        <h1>What's your Todo Today?</h1>
        <NewTodoForm handleAdd={this.handleAdd} />
        <ul>{todoListItems}</ul>
      </div>
    );
  }
}

export default TodoList;
