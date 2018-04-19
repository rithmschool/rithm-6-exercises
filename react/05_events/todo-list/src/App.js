import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import TodoList from "./TodoList";
import NewTodoForm from "./NewTodoForm";

const NotFound = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
    <Link to="/">Go Home</Link>
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }
  handleAdd = newTodo => {
    this.setState(prevState => ({
      todos: [newTodo, ...prevState.todos]
    }));
  };
  render() {
    return (
      <div className="App">
        <h1>TodoList</h1>
        <Switch>
          <Route
            path="/new"
            render={props => (
              <NewTodoForm handleAdd={this.handleAdd} {...props} />
            )}
          />
          <Route
            exact
            path="/"
            render={props => <TodoList todos={this.state.todos} {...props} />}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
