import React, { Component } from "react";
import Todo from "./components/Todo";
import NewTodoForm from "./components/NewTodoForm";
import "./TodoList.css";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          title: "Sleep",
          desc: "Get GoodnightSleep",
          complete: false
        },
        {
          title: "Eat",
          desc: "Eat Healthy Food",
          complete: false
        }
      ]
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleRemove(idx) {
    this.setState(prevState => {
      let todos = prevState.todos.slice();
      todos.splice(idx, 1);
      return { todos: todos };
    });
  }

  updateStatus(idx) {
    this.setState(prevState => {
      let todos = prevState.todos.slice();
      todos[idx].complete = todos[idx].complete === false ? true : false;
      return { todos: todos };
    });
  }

  handleAdd(newTodo) {
    newTodo["complete"] = false;
    this.setState(prevState => ({
      todos: [newTodo, ...prevState.todos]
    }));
  }

  render() {
    let todos = this.state.todos.map((todo, idx) => {
      return (
        <Todo
          key={idx}
          title={todo.title}
          desc={todo.desc}
          finished={todo.complete}
          status={todo.button}
          removeToDo={this.handleRemove.bind(this, idx)}
          update={this.updateStatus.bind(this, idx)}
        />
      );
    });
    return (
      <div>
        <NewTodoForm handleAdd={this.handleAdd} />
        {todos}
      </div>
    );
  }
}
