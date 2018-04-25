import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewTodoForm from './newTodoForm.js';
import TodoList from './TodoList.js';
import EditTodoForm from './EditTodoForm.js';
import TodoShowPage from './TodoShowPage.js';
import { connect } from 'react-redux';
import { Route, Link, Switch, withRouter } from 'react-router-dom';
import rootReducer from './store/rootReducer.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleAdd(newTodo) {
    debugger;
    this.props.dispatch({
      type: 'ADD_TODO',
      payload: newTodo
    });
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
    this.props.dispatch({
      type: 'REMOVE_TODO',
      id: id
    });
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
                  this.props.todos.filter(todo => {
                    return todo.id === props.match.params.todo_id;
                  })[0].title
                }
                deadline={
                  this.props.todos.filter(todo => {
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
                  this.props.todos.filter(todo => {
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
            component={props => (
              <TodoList
                handleCompleted={this.handleCompleted}
                className={this.completed}
                allTodos={this.props.todos}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    todos: reduxState.todos
  };
}

export default withRouter(connect(mapStateToProps)(App));
