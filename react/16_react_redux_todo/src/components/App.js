import React, { Component } from 'react';
import { Link, Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import './App.css';
import TodoList from "./TodoList";
import NewTodoForm from "./NewTodoForm";
import ShowTodo from "./ShowTodo";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleComplete = this.handleComplete.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  };

  handleComplete(id) {
    this.props.dispatch({
      type: "TOGGLE_COMPLETE",
      id
    })
  }

  removeTodo(id) {
    this.props.dispatch({
      type: "REMOVE_TODO",
      id
    })
  }

  render() {

    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">Todo List Exercise</h1>
          <p><Link to="/todos">Home</Link></p>
          <p><Link to="/todos/new">Add a Todo</Link></p>
        </header>

        <Switch>

          <Route path="/todos/new" render={routeProps => (
            <NewTodoForm {...routeProps} />
          )} />

          <Route path="/todos" exact render={routeProps => (
            <TodoList
              handleComplete={this.handleComplete}
              {...routeProps} />
          )} />

          <Route path="/todos/:id" render={routeProps => (
            <ShowTodo
              todo={this.props.todos.find(todo => todo.id == routeProps.match.params.id)}
              handleComplete={this.handleComplete.bind(null, routeProps.match.params.id)}
              handleDelete={this.removeTodo.bind(null, routeProps.match.params.id)}
              {...routeProps} />
          )} />

          {/* <Route path="/todos/:id/edit" render={} /> */}

        </Switch>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

export default withRouter(connect(mapStateToProps)(App));
