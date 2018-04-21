import React, { Component } from 'react';
import { Link, Switch, Redirect, Route } from "react-router-dom";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";
import EditTodo from "./EditTodo.js";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.handleAdd = this.handleAdd.bind(this); 
    this.handleEdit = this.handleEdit.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  handleAdd(newTodo, props) {
    this.setState(prevState => ({
      todos: [...prevState.todos, newTodo.task],
    }))
    console.log(this.state.todos)
  }

  handleEdit(newTodo, index) {
    this.setState(prevState => ({
      todos: [...prevState.todos.slice(0, index), newTodo, ...prevState.todos.slice(index+1)]
    }))
  }

  deleteTodo(index) {
    console.log("am i running")
    this.setState(prevState => ({
      todos: [...prevState.todos.slice(0, index), ...prevState.todos.slice(index+1)]
    }))
  }

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
              render={(props) => (
                <TodoForm 
                  handleAdd={this.handleAdd} 
                  {...props}
                />
              )}
            />

            <Route 
              path="/todos" 
              exact 
              render={
                (props, routeProps) => (
                  <TodoList 
                    todoData={this.state.todos} 
                    {...props } 
                    {...routeProps} 
                  />
                )}
              />

            <Route 
              path="/todos/:id/edit" 
              exact render={
                (props, routeProps) => 
                <EditTodo 
                  handleEdit={this.handleEdit} 
                  deleteTodo={this.deleteTodo}
                  currentVals={this.state.todos} 
                  {...routeProps}
                  {...props}
                  />}
            />


            <Redirect to="/todos"/>

        </Switch>

      </div>
    );
  }
}

export default App;