import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewTodoForm from './newTodoForm.js';
import TodoList from './TodoList.js';
import EditTodoForm from './EditTodoForm.js';
import TodoShowPage from './TodoShowPage.js';
import { Route, Link, Switch } from 'react-router-dom';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleAdd(newTodo) {
    this.setState(prevState => ({
      todos: [newTodo, ...prevState.todos]
    }));
  }

  handleEdit(id) {
    this.setState(prevState => {
      let newTodos = prevState.todos;
      let foundTodo = (newTodos.filter(todo => {
        return todo.id === id;
      })[0]['being_edited'] = true);
      let updatedTodos = newTodos.map(todo => {
        return todo.id === foundTodo.id ? foundTodo[0] : todo;
      });
      return { todos: updatedTodos };
    });
  }

  handleEditSubmit(editedTodo, id) {
    this.setState(prevState => {
      let newTodos = prevState.todos;
      let updatedTodos = newTodos.map(todo => {
        return todo.id === id ? editedTodo : todo;
      });
      return { todos: updatedTodos };
    });
  }

  handleDelete(id) {
    let newTodos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState(prevState => ({
      todos: newTodos
    }));
  }

  render() {
    return (
      <div>
        <Switch>
          <Route
            path="/todos/:todo_id/edit"
            exact
            component={props => (
              <EditTodoForm
                handleEditSubmit={this.handleEditSubmit}
                todo_id={props.match.params.todo_id}
                title={
                  this.state.todos.filter(todo => {
                    return todo.id === props.match.params.todo_id;
                  })[0].title
                }
                deadline={
                  this.state.todos.filter(todo => {
                    return todo.id === props.match.params.todo_id;
                  })[0].deadline
                }
              />
            )}
          />
          <Route
            path="/todos/new"
            exact
            component={props => <NewTodoForm handleAdd={this.handleAdd} />}
          />
          <Route
            path="/todos/:todo_id"
            exact
            component={props => (
              <TodoShowPage
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
                title={
                  this.state.todos.filter(todo => {
                    return todo.id === props.match.params.todo_id;
                  })[0].title
                }
                todo_id={props.match.params.todo_id}
              />
            )}
          />
          <Route
            path="/"
            exact
            component={props => <TodoList allTodos={this.state.todos} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
