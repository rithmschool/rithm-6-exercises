import React, { Component } from "react";
import "./Todo.css";
import Todo from "./Todo";
// import NewTodoForm from "./NewTodoForm"

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { title: "laundry", description: "do laundry" },
        { title: "grocery", description: "go grocery shopping" }
      ],
      completed: [{ title: "cook", description: "cook for the week" }]
    };
  }

  markComplete(idx) {
    this.setState(prevState => {
      let newTodos = [...prevState.todos];
      let newCompleted = [newTodos[idx], ...prevState.completed];
      newTodos.splice(idx, 1);
      return { todos: newTodos, completed: newCompleted };
    });
  }

  handleDelete(idx) {
    this.setState(prevState => {
      let newTodos = [...prevState.todos];
      newTodos.splice(idx, 1);
      return { todos: newTodos };
    });
  }

  render() {
    let todos = this.state.todos.map((t, i) => (
      <Todo
        title={t.title}
        description={t.description}
        markComplete={this.markComplete.bind(this, i)}
        handleDelete={this.handleDelete.bind(this, i)}
        key={i}
      />
    ));
    let completed = this.state.completed.map((t, i) => (
      <Todo
        title={t.title}
        description={t.description}
        markComplete={this.markComplete.bind(this, i)}
        handleDelete={this.handleDelete.bind(this, i)}
        key={i}
      />
    ));
    return (
      <section className="TodoList">
        <h3>Todos</h3>
        {todos}
        <h3>Completed</h3>
        {completed}
      </section>
    );
  }
}
