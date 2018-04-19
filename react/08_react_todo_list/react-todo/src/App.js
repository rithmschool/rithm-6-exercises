import React, { Component } from 'react';
import { Route, Link, Switch, withRouter, Redirect } from 'react-router-dom';
import './App.css';
import NewToDoForm from './NewToDoForm';
import ToDoList from './ToDoList';
import Todo from './Todo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: Array.from({ length: this.props.Todos.length }).map(
        (item, index) => {
          return {
            ...this.props.Todos[index],
            isCompleted: false,
            isEditSelected: false
          };
        }
      )
    };
    this.markAsComplete = this.markAsComplete.bind(this);
    this.removeToDo = this.removeToDo.bind(this);
    this.addToDo = this.addToDo.bind(this);
    this.editToDo = this.editToDo.bind(this);
    this.showEditForm = this.showEditForm.bind(this);
  }
  addToDo(newTodo) {
    this.setState(prevState => {
      return { todos: [...prevState.todos, newTodo] };
    });
  }

  removeToDo(index) {
    this.setState(prevState => {
      console.log(prevState.todos);
      let todosCopy = [...prevState.todos].filter((todo, i) => {
        if (i === index) return undefined;
        return todo;
      });
      console.log(todosCopy);
      return { todos: todosCopy };
    });
  }

  editToDo(index, editedTodo) {
    debugger;
    this.setState(prevState => {
      let todosCopy = [...prevState.todos];
      todosCopy[index] = {
        ...editedTodo
      };
      return { todos: todosCopy };
    });
  }

  showEditForm(index) {
    this.setState(prevState => {
      let todosCopy = [...prevState.todos];
      todosCopy[index].isEditSelected = !todosCopy[index].isEditSelected;
      console.log(todosCopy);
      return { todos: todosCopy };
    });
  }

  markAsComplete(index) {
    this.setState(prevState => {
      let todosCopy = [...prevState.todos];
      todosCopy[index].isCompleted = !todosCopy[index].isCompleted;
      return { todos: todosCopy };
    });
  }
  render() {
    return (
      <Switch>
        <Route
          path="/todos"
          exact
          render={props => {
            return (
              <div className="App">
                <h1>Dragon Todo List</h1>
                {/* <NewToDoForm addToDo={this.addToDo} /> */}
                <Link to="/todos/new">Add New Todo</Link>
                <ToDoList
                  key={0}
                  markAsComplete={this.markAsComplete}
                  removeToDo={this.removeToDo}
                  editToDo={this.editToDo}
                  showEditForm={this.showEditForm}
                  isEditSelected={this.isEditSelected}
                  todos={this.state.todos}
                />
              </div>
            );
          }}
        />
        <Route
          path="/todos/new"
          render={props => {
            return (
              <div className="App">
                <h1>Dragon Todo List</h1>
                <NewToDoForm addToDo={this.addToDo} />
              </div>
            );
          }}
        />
        <Route
          path="/todos/:id"
          render={props => {
            const targetTodo = this.state.todos.filter(
              (todo, i) => +props.match.params.id === i
            )[0];
            return (
              <div className="App">
                <h1>Dragon Todo List</h1>
                <Todo
                  // key={i}
                  //so i can render show and edit routes
                  // index={i}
                  title={targetTodo.title}
                  description={targetTodo.description}
                  isCompleted={targetTodo.isCompleted}
                  // markAsComplete={this.state.markAsComplete.bind(
                  //   this,
                  //   props.match.params.index
                  // )}
                  // removeToDo={this.state.removeToDo.bind(
                  //   this,
                  //   props.match.params.index
                  // )}
                  // editToDo={this.state.editToDo.bind(
                  //   this,
                  //   props.match.params.index
                  // )}
                  // showEditForm={this.state.showEditForm.bind(
                  //   this,
                  //   props.match.params.index
                  // )}
                  isEditSelected={targetTodo.isEditSelected}
                  // todo={
                  // this.state.todos.filter(
                  //   (todo, i) => props.match.params.index === i
                  // )[0]
                  // {...props}
                />
              </div>
            );
          }}
        />
        <div className="App">
          <h1>Dragon Todo List</h1>
          <Todo addToDo={this.addToDo} />
        </div>
        ); }} />
        <Route path="/todos/:id/edit" />
      </Switch>
    );
  }
}

App.defaultProps = {
  Todos: [
    {
      title: 'wake up',
      description: 'wake up and stuff.'
    },
    {
      title: 'attack',
      description: 'attack without mercy.'
    },
    {
      title: 'chill',
      description: 'just sorta chill or whatever.'
    }
  ]
};

export default App;
