import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import App from './App';

class DumbWrapper extends Component {
  render() {
    return (
          <BrowserRouter>

      <App />
          </BrowserRouter>

      <Switch>
        {/* <Route path="/todos" exact render={TodoListContainer} />
        <Route path="/todos/new" render={TodoFormContainer} />
        <Route path="/todos/:id/edit" render={TodoFormContainer} /> */}
        <Route path="/todos" exact render={renderTodoList} />
        <Route path="/todos/new" render={renderNewTodoForm} />
        <Route path="/todos/:id/edit" render={renderEditForm} />
        {/* <Route path="/todos/:id" render={renderSingleTodo} /> */}
        <Redirect to="/todos" />
      </Switch>
    );
  }
}

export default DumbWrapper;
