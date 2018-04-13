import React, { Component } from "react";
import Todo from "./Todo.js";

class TodoList extends Component {
  render() {
    const todoListItems = this.props.todos.map(todo => {
      return <Todo message={todo.message} date={todo.date} />;
    });
    return (
      <div className="TodoList">
        <ul>{todoListItems}</ul>
      </div>
    );
  }
}

TodoList.defaultProps = {
  todos: [
    {
      message: "Buy some milk and a cow",
      date: "04/12/18"
    },
    {
      message:
        "Finish my React exercises and become a superstar developer(hopefully",
      date: "04/12/18"
    },
    {
      message: "Go to the gym for sanity",
      date: "04/12/18"
    }
  ]
};

export default TodoList;
