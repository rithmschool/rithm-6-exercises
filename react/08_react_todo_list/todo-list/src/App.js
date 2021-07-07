import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Link, Redirect, Switch } from "react-router-dom";
import NewTodoForm from "./NewTodoForm";
// import NewTodoItem from "./newTodoItem";
import TodoList from "./TodoList.js";
import EditTodoForm from "./EditTodoForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          title: "Finish React Ex!",
          description:
            "Finish my React exercises and become a superstar developer(hopefully)",
          idx: 0,
          isCompleted: true,
          isEditing: false
        },
        {
          title: "Milk",
          description: "Buy some milk and a cow",
          idx: 1,
          isCompleted: false,
          isEditing: false
        },
        {
          title: "Work it out!",
          description: "Go to the gym for sanity",
          idx: 2,
          isCompleted: false,
          isEditing: false
        }
      ]
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleIsCompleted = this.handleIsCompleted.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleAdd(newTodo) {
    newTodo.isCompleted = false;
    newTodo.isEditing = false;
    this.setState(prevState => ({
      todos: [newTodo, ...prevState.todos]
    }));
  }
  handleEdit(idxTodo) {
    console.log("wemade it");
    let editingTodos = this.state.todos.map((todo, i) => {
      if (i === idxTodo) {
        todo.isEditing = !todo.isEditing;
        console.log(todo);
      }
      return todo;
    });
    this.setState({ todos: editingTodos });
  }

  handleSetUpdate(id, updatedTodo) {
    const edited = {
      title: updatedTodo.title,
      description: updatedTodo.description,
      isEditing: false
    };
    this.setState(prevState => {
      const updatedTodos = [...prevState.todos];
      updatedTodos[id] = edited;
      return { todos: updatedTodos };
    });
  }

  handleIsCompleted(idxTodo) {
    let foundTodos = this.state.todos.map((todo, i) => {
      console.log("wemade it" + i + " " + idxTodo);
      if (i === idxTodo) {
        todo.isCompleted = !todo.isCompleted;
        console.log(todo);
      }
      return todo;
    });
    console.log(foundTodos);
    this.setState({ todos: foundTodos });
  }

  // handleComplete(idx) {
  //     let newState = { ...this.state };
  //     if (newState.todos[idx].className === 'complete') {
  //       newState.todos[idx].className = '';
  //     } else {
  //       newState.todos[idx].className = 'complete';
  //     }
  //     this.setState(newState);
  //   }

  handleDelete(idxTodo) {
    let updatedTodos = this.state.todos.filter((todo, i) => i !== idxTodo);
    this.setState({ todos: updatedTodos });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React's New Todo List!</h1>
        </header>
        <div>
          <div>
            <button>
              <Link to="/todos/new">Add A Todo!</Link>
            </button>
          </div>
        </div>
        <div>
          <Switch>
            <Route
              path="/todos/new"
              render={props => (
                <NewTodoForm handleAdd={this.handleAdd.bind(this)} {...props} />
              )}
            />
            {/* <Route
              path="/todos/:key"
              render={props => (
                <ColorShow colors={this.state.colors} {...props} />
              )}
           /> */}

            <Route
              path="/todos/:id/edit"
              render={props => (
                <EditTodoForm
                  todo={this.state.todos[props.match.params.id]}
                  handleEdit={this.handleEdit.bind(this, props.match.params.id)}
                  handleDelete={this.handleDelete}
                  handleSetUpdate={this.handleSetUpdate}
                  handleIsCompleted={this.handleIsCompleted}
                  {...props}
                />
              )}
            />
            {/* <Route path="/todos/:id" render={props => <TodoShow todo={this.state.todos[routeProps.match.params.id]} editTodo={this.editTodo} deleteTodo={this.deleteTodo} goToEdit={this.goToEdit} markCompleted={this.markCompleted} {...routeProps} />} /> */}
            <Route
              path="/todos"
              render={props => (
                <TodoList
                  todos={this.state.todos}
                  handleEdit={this.handleEdit}
                  handleIsCompleted={this.handleIsCompleted}
                  handleSetUpdate={this.handleSetUpdate}
                  handleDelete={this.handleDelete}
                  {...props}
                />
              )}
            />

            <Redirect from="/" to="/todos" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
