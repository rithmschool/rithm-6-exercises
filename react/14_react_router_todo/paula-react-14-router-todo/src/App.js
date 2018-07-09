// libraries
import React, { Component } from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";

// src
import TodoList from "./TodoList";
import NewTodoForm from "./NewTodoForm";
import EditTodoForm from "./EditTodoForm";
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
    this.addTodo = this.addTodo.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.getTodo = this.getTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
  }

  addTodo(newTodo) {
    newTodo.isComplete = false;
    this.setState(prevState => ({ todos: [newTodo, ...prevState.todos] }));
  }

  toggleComplete(idx) {
    let newTodos = [...this.state.todos];
    newTodos[idx].isComplete = !newTodos[idx].isComplete;
    this.setState({ todos: newTodos });
  }

  deleteTodo(idx) {
    let updatedTodos = this.state.todos.filter((todo, i) => i !== idx);
    this.setState({ todos: updatedTodos });
  }

  editTodo(idx, updatedTodo) {
    let updatedTodos = [...this.state.todos];
    updatedTodos[idx] = { ...updatedTodo, isComplete: false };
    this.setState({ todos: updatedTodos });
  }

  getTodo(id) {
    return this.state.todos[id];
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
            render={props => <NewTodoForm addTodo={this.addTodo} {...props} />}
          />
          <Route
            path="/todos/:id/edit"
            render={props => {
              const todo = this.getTodo(props.match.params.id);

              if (!todo) {
                return <Redirect to="/todos" />;
              }

              return (
                <EditTodoForm
                  title={todo.title}
                  description={todo.description}
                  idx={+props.match.params.id}
                  editTodo={this.editTodo}
                  {...props}
                />
              );
            }}
          />
          <Route
            path="/todos/:id"
            render={props => {
              const todo = this.getTodo(props.match.params.id);

              if (!todo) {
                return <Redirect to="/todos" />;
              }

              return (
                <TodoShow
                  title={todo.title}
                  description={todo.description}
                  isComplete={todo.isComplete}
                  idx={+props.match.params.id}
                  toggleComplete={this.toggleComplete}
                  deleteTodo={this.deleteTodo}
                  {...props}
                />
              );
            }}
          />
          <Route
            path="/todos"
            render={props => (
              <TodoList
                todos={this.state.todos}
                deleteTodo={this.deleteTodo}
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
