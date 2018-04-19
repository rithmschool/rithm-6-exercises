import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./TodoList";
import NewTodoForm from "./NewTodoForm";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          title: "Sleep",
          desc: "Sleep A Lot",
          complete: false,
          toEdit: false,
          id: 0
        }
      ]
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.addEdit = this.addEdit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  handleEdit(idx) {
    this.setState(prevState => {
      let todos = [...prevState.todos];
      todos[idx]["id"] = idx;
      todos[idx].toEdit = true;
      return { todos: todos };
    });
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
    this.setState(prevState => ({
      todos: [newTodo, ...prevState.todos]
    }));
  }

  addEdit(updatedTodo) {
    let id = updatedTodo.id;
    let todos = this.state.todos.slice();
    todos[id] = updatedTodo;
    this.setState({ todos });
  }
  render() {
    return (
      <div>
        <div>
          <Link to="/new">Enter a New ToDo</Link>
        </div>

        <div>
          <Route
            path="/"
            exact
            component={() => (
              <TodoList
                allTodos={this.state.todos}
                handleRemove={this.handleRemove}
                updateStatus={this.updateStatus}
                handleEdit={this.handleEdit}
              />
            )}
          />
          <Route
            path="/new"
            exact
            component={() => <NewTodoForm handleAdd={this.handleAdd} />}
          />
        </div>
      </div>
    );
  }
}

export default Todo;
