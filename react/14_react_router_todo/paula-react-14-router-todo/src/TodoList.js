import React, { Component } from "react";
import "./Todo.css";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { title: "laundry", description: "do laundry", isComplete: false },
        {
          title: "grocery",
          description: "go grocery shopping",
          isComplete: false
        }
      ]
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
  }
  handleAdd(newTodo) {
    newTodo.isComplete = false;
    this.setState(prevState => ({ todos: [newTodo, ...prevState.todos] }));
  }

  toggleComplete(idx) {
    let newTodos = [...this.state.todos];
    newTodos[idx].isComplete = !newTodos[idx].isComplete;
    this.setState({ todos: newTodos });
  }

  handleDelete(idx) {
    let updatedTodos = this.state.todos.filter((todo, i) => i !== idx);
    this.setState({ todos: updatedTodos });
  }

  handleEdit(idx, updatedTodo) {
    let updatedTodos = [...this.state.todos];
    updatedTodos[idx][updatedTodo.field] = updatedTodo.value;
    this.setState({ todos: updatedTodos });
  }

  render() {
    let todos = this.state.todos.map((t, i) => (
      <Todo
        key={i}
        title={t.title}
        description={t.description}
        isComplete={t.isComplete}
        toggleComplete={this.toggleComplete.bind(this, i)}
        handleDelete={this.handleDelete.bind(this, i)}
        handleEdit={this.handleEdit.bind(this, i)}
      />
    ));
    return (
      <section className="TodoList">
        <h2>Add a new todo!</h2>
        <TodoForm handleAdd={this.handleAdd} />
        <h3>Todos</h3>
        {todos}
      </section>
    );
  }
}
