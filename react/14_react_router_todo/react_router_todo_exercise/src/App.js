import React, { Component } from 'react';
import { Link, Route, Switch, withRouter } from "react-router-dom";
import './App.css';
import TodoList from "./TodoList";
import NewTodoForm from "./NewTodoForm";
import ShowTodo from "./ShowTodo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextId: 4,
      todos: [
        {
          title: 'Buy ice cream',
          description: 'Grocery Store',
          id: 1
        },
        {
          title: 'Order pizza',
          description: 'Dinner Plans',
          id: 2
        },
        {
          title: 'Walk 20 miles',
          description: 'Fitness Routine',
          id: 3
        }
      ]
    };
    this.handleComplete = this.handleComplete.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  };

  handleComplete(id) {
    let newState = { ...this.state };
    let idx = newState.todos.findIndex(todo => todo.id == id);
    if (newState.todos[idx].className === 'complete') {
      newState.todos[idx].className = '';
    } else {
      newState.todos[idx].className = 'complete';
    }
    this.setState(newState);
  }

  handleDelete(id) {
    let newState = { ...this.state };
    newState.todos = newState.todos.filter(todo => {
      return todo.id != id;
    });
    this.setState(newState);
    // perform a redirect to "/todos"
    this.props.history.push("/todos");
  }

  handleAdd(data) {
    let newState = { ...this.state };
    data.id = newState.nextId;
    newState.nextId++;
    newState.todos.unshift(data);
    this.setState(newState);
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Todo List Exercise</h1>
          <p>
            <Link to="/todos">Home</Link>
          </p>
          <p>
            <Link to="/todos/new">Add a Todo</Link>
          </p>
        </header>
        <Switch>
          <Route path="/todos/new" render={routeProps => (
            <NewTodoForm handleAdd={this.handleAdd} {...routeProps} />
          )} />
          <Route path="/todos" exact render={routeProps => (
            <TodoList
              todos={this.state.todos}
              handleComplete={this.handleComplete}
              handleDelete={this.handleDelete}
              {...routeProps} />
          )} />
          <Route path="/todos/:id" render={routeProps => (
            <ShowTodo
              todo={this.state.todos.find(todo => todo.id == routeProps.match.params.id)}
              // Bind the id here?  Or feed it later?
              handleComplete={this.handleComplete.bind(null, routeProps.match.params.id)}
              handleDelete={this.handleDelete.bind(null, routeProps.match.params.id)}
              {...routeProps} />
          )} />
          {/* <Route path="/todos/:id/edit" render={} /> */}
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
