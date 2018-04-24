import React, { Component } from "react";
import { Link, Route, Redirect, Switch } from "react-router-dom";
import ToDoListContainer from "./containers/ToDoListContainer";
import TodoFormContainer from "./containers/TodoFormContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Link to="/todos/new">Add New Todo</Link>
        <div>
          <Switch>
            <Route exact path="/todos" component={ToDoListContainer} />
            <Route
              path="/todos/new"
              render={props => <TodoFormContainer {...props} />}
            />
            <Route
              path="/todos/:id/edit"
              render={props => <TodoFormContainer {...props} />}
            />
            <Redirect to="/todos" from="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

/* /*<Route path="/todos/:id/edit" component={TodoFormContainer} /> */
// <Redirect to="/todos" from="/" />
