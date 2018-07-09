// libraries
import React, { Component } from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// src
import TodoList from "./containers/TodoList";
import NewTodoForm from "./containers/NewTodoForm";
import EditTodoForm from "./containers/EditTodoForm";
import TodoShow from "./containers/TodoShow";
import "./App.css";

const propTypes = {
  todos: PropTypes.array.isRequired
};

class App extends Component {
  render() {
    const getTodo = props => {
      const todo = this.props.todos.find(td => td.id === props.match.params.id);
      return todo ? (
        <TodoShow todo={todo} {...props} />
      ) : (
        <Redirect to="/todos" />
      );
    };

    const getTodoEdit = props => {
      const todo = this.props.todos.find(td => td.id === props.match.params.id);
      return todo ? (
        <EditTodoForm todo={todo} {...props} />
      ) : (
        <Redirect to="/todos" />
      );
    };

    return (
      <section className="App">
        <nav>
          <Link to="/todos">Your Todos!</Link>
          <br />
          <Link to="/new">Add a new todo!</Link>
        </nav>
        <Switch>
          <Route path="/new" component={NewTodoForm} />
          <Route path="/todos/:id/edit" render={getTodoEdit} />
          <Route path="/todos/:id" render={getTodo} />
          <Route path="/todos" component={TodoList} />
          <Redirect to="/todos" />
        </Switch>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

App.propTypes = propTypes;

export default connect(mapStateToProps)(App);
