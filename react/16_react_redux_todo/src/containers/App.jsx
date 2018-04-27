import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import TodoList from '../components/TodoList';
import { Route, Switch, Redirect, Link, withRouter } from 'react-router-dom';
import NewTodoForm from '../components/NewTodoForm';
import TodoShow from '../components/TodoShow';
import TodoShowEdit from '../components/TodoShowEdit';
import { connect } from 'react-redux';
import uuidv1 from 'uuid/v1';

class App extends Component {
  constructor(props) {
    super(props)

    this.addTodo = this.addTodo.bind(this);
    this.markCompleted = this.markCompleted.bind(this);
    this.closeEditor = this.closeEditor.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.openEditor = this.openEditor.bind(this);
    this.editTodo = this.editTodo.bind(this);
  }

  addTodo(newTodo) {
    newTodo.isCompleted = false;
    newTodo.isUnderEdit = false;
    newTodo.idx = uuidv1();
    this.props.dispatch({
        type: 'ADD_TODO',
        payload: newTodo
    });
}

markCompleted(i) {
    let newTodos = this.props.todos.map(todo => {
        if(todo.idx === i) {
            todo.isCompleted = !todo.isCompleted;
        }
        return todo;
    })
    this.props.dispatch({
        type: 'MOD_TODO',
        payload: newTodos
    });
  }

openEditor(i) {
    let newTodos = this.props.todos.map(todo => {
        if(todo.idx === i) {
            todo.isUnderEdit = !todo.isUnderEdit;
        }
        return todo;
    })
    this.props.dispatch({
        type: 'MOD_TODO',
        payload: newTodos
    });
}

  closeEditor() {
    let newTodos = this.props.todos.map(todo => {
        todo.isUnderEdit = !todo.isUnderEdit;
        return todo;
    })
    this.props.dispatch({
        type: 'MOD_TODO',
        payload: newTodos
    });
  }

  editTodo(i, editedTodo) {
    let newTodos = this.props.todos.map(todo => {
        if(todo.idx === i) {
            todo.title = editedTodo.title;
            todo.description = editedTodo.description;
            todo.isUnderEdit = false;
        }
        return todo;
    })
    this.props.dispatch({
        type: 'MOD_TODO',
        payload: newTodos
    });  
  }

  deleteTodo(i) {
    let newTodos = this.props.todos.filter(todo => todo.idx !== i)
    this.props.dispatch({
        type: 'DEL_TODO',
        payload: newTodos
    });  
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title m-2">Welcome to Todo List</h1>
          <div className="nav-btns">
            <Link to="/todos" className="btn btn-secondary all-todos-btn">all todos</Link>
            <Link to="/todos/new" className="btn btn-secondary new-todo-btn">new todo</Link>
          </div>
          
        </header>
        <Switch>
          <Route path="/todos/new" render={props => <NewTodoForm addTodo={this.addTodo} {...props} />} />
          <Route path="/todos/:id/edit" render={routeProps => <TodoShowEdit todo={this.props.todos.filter(todo => todo.idx === routeProps.match.params.id)[0]} editTodo={this.editTodo.bind(this, routeProps.match.params.id)} deleteTodo={this.deleteTodo} openEditor={this.openEditor} markCompleted={this.markCompleted} {...routeProps} />} />
          <Route path="/todos/:id" render={routeProps => <TodoShow todo={this.props.todos.filter(todo => todo.idx === routeProps.match.params.id)[0]} editTodo={this.editTodo} deleteTodo={this.deleteTodo} goToEdit={this.goToEdit} markCompleted={this.markCompleted} {...routeProps} />} />
          <Route path="/todos" render={props => <TodoList todos={this.props.todos} editTodo={this.editTodo} deleteTodo={this.deleteTodo} openEditor={this.openEditor} markCompleted={this.markCompleted} {...props} />} />
          <Redirect to="/todos" />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
    return {
        ...reduxState
    }
}

export default withRouter(connect(mapStateToProps)(App));

