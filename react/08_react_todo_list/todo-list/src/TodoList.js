import React, { Component } from "react";
import newTodoItem from "./Todo.js";
import NewTodoForm from "./NewTodoForm.js";

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
    this.setState(prevState => ({ todos: [newTodo, ...prevState.todos] }));
  }

  render() {
    const todoListItems = this.state.todos.map((todo, i) => {
      return <Todo key={i} newTodo={todo.newTodo} date={todo.date} />;
    });
    return (
      <div className="TodoList">
        <ul>{todoListItems}</ul>
      </div>
    );
  }
}

export default TodoList;
