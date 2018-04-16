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
            "Finish my React exercises and become a superstar developer(hopefully)",
          idx: 0,
          isCompleted: false
        },
        {
          newTodo: "Buy some milk and a cow",
          idx: 1,
          isCompleted: false
        },
        {
          newTodo: "Go to the gym for sanity",
          idx: 2,
          isCompleted: false
        }
      ]
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(newTodo) {
    newTodo.isCompleted = false;
    this.setState(prevState => ({
      todos: [newTodo, ...prevState.todos]
    }));
  }

  handleIsCompleted(idxTodo) {
    let foundTodos = this.state.todos.map((todo, i) => {
      if (i === idxTodo) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    console.log(foundTodos);
    this.setState({ todos: foundTodos });
  }

  handleDelete(idxTodo) {
    let updatedTodos = this.state.todos.filter((todo, i) => todo.i !== i);
    this.setState({ todos: updatedTodos });
  }

  render() {
    let todoListItems = this.state.todos.map((todo, i) => (
      <NewTodoItem
        key={i}
        newTodo={todo.newTodo}
        idx={todo.idx}
        isCompleted={todo.isCompleted}
        handleIsCompleted={this.handleIsCompleted.bind(this, i)}
        handleDelete={this.handleDelete.bind(this, i)}
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
