import React, { Component } from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import TodoListContainer from "../containers/TodoListContainer";
import TodoFormContainer from "../containers/TodoFormContainer";

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
  }

  render() {
    return (
      <div className="App">
        <h1>TodoList</h1>
        <Switch>
          <Route
            path="/new"
            render={props => <TodoFormContainer {...props} />}
          />
          <Route
            exact
            path="/"
            render={props => <TodoListContainer {...props} />}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
