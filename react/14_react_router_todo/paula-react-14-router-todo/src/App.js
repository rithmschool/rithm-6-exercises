import React, { Component } from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import TodoList from "./TodoList";
import NewTodoForm from "./NewTodoForm";
import TodoShow from "./TodoShow";
import "./App.css";

class App extends Component {
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
    this.handleDelete = this.handleDelete.bind(this);
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
    return (
      <section className="App">
        <nav>
          <Link to="/todos">Your Todos!</Link>
          <br />
          <Link to="/new">Add a new todo!</Link>
        </nav>
        <Switch>
          <Route
            path="/new"
            render={props => (
              <NewTodoForm handleAdd={this.handleAdd} {...props} />
            )}
          />
          <Route path="/todos/:id/edit" render={NewTodoForm} />
          <Route path="/todos/:id" render={TodoShow} />
          <Route
            path="/todos"
            render={props => (
              <TodoList
                todos={this.state.todos}
                handleDelete={this.handleDelete}
                toggleComplete={this.toggleComplete}
                {...props}
              />
            )}
          />
          <Redirect to="/todos" />
        </Switch>
      </section>
    );
  }
}

export default App;
