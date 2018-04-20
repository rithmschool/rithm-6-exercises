import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewTodoForm from './newTodoForm.js';
import TodoList from './TodoList.js';
import TodoShowPage from './TodoShowPage.js';
import { Route, Link } from 'react-router-dom';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          title: 'Walk the Dog',
          id: 1,
          deadline: '3pm',
          completed: '',
          being_edited: false
        },
        {
          title: 'Take Out the trash',
          id: 2,
          deadline: '3pm',
          completed: '',
          being_edited: false
        },
        {
          title: 'Go To Dinner',
          id: 3,
          deadline: '3pm',
          completed: '',
          being_edited: false
        }
      ]
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(newTodo) {
    this.setState(prevState => ({
      todos: [newTodo, ...prevState.todos]
    }));
  }

  removeTodo(index) {
    let array = this.state.todos;
    array.splice(index, 1);
    this.setState(prevState => ({
      todos: array
    }));
  }

  render() {
    return (
      <div>
        <div>
          <Link to="/new">Add a New Todo</Link>
          <TodoList allTodos={this.state.todos} />
        </div>
        <div>
          <Route
            path="/new"
            exact
            component={props => <NewTodoForm handleAdd={this.handleAdd} />}
          />

          <Route
            path="/:todo_id"
            exact
            component={props => (
              <TodoShowPage
                title={
                  this.state.todos.filter(
                    todo => todo.id === props.match.params.todo_id
                  )[0].title
                }
                todo_id={props.match.params.todo_id}
              />
            )}
          />
        </div>
      </div>
    );
  }
}

export default App;
