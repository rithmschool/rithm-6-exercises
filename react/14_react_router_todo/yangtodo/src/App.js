import React, { Component } from "react";
import { Link, Switch, Redirect, Route } from "react-router-dom";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";
import Edit from "./EditTodo.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <h1> Welcome to Yang's todo app. </h1>
        <nav>
          <Link to="/todos/new"> New Todo </Link>
          <Link to="/todos"> All Todos </Link>
        </nav>

        <Switch>
          <Route
            path="/todos/new"
            exact
            render={props => <TodoForm {...props} />}
          />

          <Route
            path="/todos"
            exact
            render={(props, routeProps) => (
              <TodoList {...props} {...routeProps} />
            )}
          />

          <Route
            path="/todos/:id/edit"
            exact
            render={(props, routeProps) => <Edit {...routeProps} {...props} />}
          />

          <Redirect to="/todos" />
        </Switch>
      </div>
    );
  }
}

export default App;
