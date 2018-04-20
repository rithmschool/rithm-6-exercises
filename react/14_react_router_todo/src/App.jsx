import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import NewTodoForm from './NewTodoForm';
import TodoShow from './TodoShow';
import TodoShowEdit from './TodoShowEdit';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        todos: [ ],
    }
    this.addTodo = this.addTodo.bind(this);
    this.markCompleted = this.markCompleted.bind(this);
    this.closeEditor = this.closeEditor.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.openEditor = this.openEditor.bind(this);
    this.editTodo = this.editTodo.bind(this);
  }

  componentDidMount() {
      if(localStorage.todos) {
          let todos = JSON.parse(localStorage.todos);
          this.setState(prevState => {
              let newState = {...prevState}
              newState.todos = [...todos];
              return newState;
          });
      }
  }

  componentDidUpdate() {
      let todosString = JSON.stringify(this.state.todos);
      localStorage.setItem('todos', todosString);
  }

  addTodo(newTodo) {
    newTodo.isCompleted = false;
    this.setState(prevState => {
        let newState = {...prevState}
        newState.isOpen = false;
        newState.todos = [newTodo, ...prevState.todos];
        return newState;
    });
}

markCompleted(i) {
    this.setState((prevState) => {
        let newState = {...prevState}
        if(newState.todos[i].isCompleted === false) {
            newState.todos[i].isCompleted = true;
        } else {
            newState.todos[i].isCompleted = false;
        }
        return newState;
    });
  }

openEditor(i) {
    this.setState((prevState) => {
        let newState = {...prevState}
        newState.todos.map(el => el.isUnderEdit = false)
        newState.todos[i].isUnderEdit = true;
        return newState;
    });
}

  closeEditor() {
    this.setState((prevState) => {
        let newState = {...prevState}
        newState.todos.map(el => el.isUnderEdit = false)
        return newState;
    });
  }

  editTodo(i, editedTodo) {
      this.setState((prevState) => {
          let newState = {...prevState}
          newState.todos.map(el => el.isUnderEdit = false)
          newState.todos[i].title = editedTodo.title;
          newState.todos[i].description = editedTodo.description;
          return newState;
      });
  }

  deleteTodo(i) {
      let newTodos = [...this.state.todos];
      newTodos.splice(i, 1);
      this.setState({todos: newTodos});
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
          <Route path="/todos/:id/edit" render={routeProps => <TodoShowEdit todo={this.state.todos[routeProps.match.params.id]} editTodo={this.editTodo.bind(this, routeProps.match.params.id)} deleteTodo={this.deleteTodo} openEditor={this.openEditor} markCompleted={this.markCompleted} {...routeProps} />} />
          <Route path="/todos/:id" render={routeProps => <TodoShow todo={this.state.todos[routeProps.match.params.id]} editTodo={this.editTodo} deleteTodo={this.deleteTodo} goToEdit={this.goToEdit} markCompleted={this.markCompleted} {...routeProps} />} />
          <Route path="/todos" render={props => <TodoList todos={this.state.todos} editTodo={this.editTodo} deleteTodo={this.deleteTodo} openEditor={this.openEditor} markCompleted={this.markCompleted} {...props} />} />
          <Redirect to="/todos" />
        </Switch>
      </div>
    );
  }
}

export default App;
