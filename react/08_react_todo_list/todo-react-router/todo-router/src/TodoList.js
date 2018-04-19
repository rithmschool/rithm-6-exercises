import React, { Component } from 'react';
import TodoComponent from './TodoComponent.js';
import Newtodoform from './newTodoForm.js';
import EditTodoForm from './EditTodoForm.js';
import './App.css';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          title: 'Walk the Dog',
          deadline: '3pm',
          completed: '',
          being_edited: false
        },
        {
          title: 'Take Out the trash',
          deadline: '3pm',
          completed: '',
          being_edited: false
        },
        {
          title: 'Go To Dinner',
          deadline: '3pm',
          completed: '',
          being_edited: false
        }
      ]
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
  }

  handleEdit(index) {
    this.setState(prevState => {
      let newTodos = prevState.todos;
      newTodos[index]['being_edited'] = true;
      console.log(newTodos);
      return { todos: newTodos };
    });
  }

  handleEditSubmit(todo, index) {
    this.setState(prevState => {
      let newTodos = prevState.todos;
      newTodos[index] = todo;
      return { todos: newTodos };
    });
  }

  handleAdd(newTodo) {
    this.setState(prevState => ({
      todos: [newTodo, ...prevState.todos]
    }));
  }

  toggleCompleted(index) {
    this.setState(prevState => {
      let newTodos = [...prevState.todos];
      if (newTodos[index]['completed'] === 'completed') {
        newTodos[index]['completed'] = '';
      } else {
        newTodos[index]['completed'] = 'completed';
      }
      return { todos: newTodos };
    });
  }
  removeTodo(index) {
    let array = this.state.todos;
    array.splice(index, 1);
    this.setState(prevState => ({
      todos: array
    }));
  }

  render() {
    let allTodos = this.state.todos.map((todo, index) => {
      if (todo.being_edited === true) {
        return (
          <EditTodoForm
            handleEditSubmit={this.handleEditSubmit}
            handleAdd={this.handleAdd}
            title={todo.title}
            deadline={todo.deadline}
            index={index}
          />
        );
      } else {
        return (
          <TodoComponent
            toggleCompleted={this.toggleCompleted}
            className={todo.completed}
            remove={this.removeTodo}
            index={index}
            key={index}
            title={todo.title}
            deadline={todo.deadline}
            updateTodo={this.handleEdit}
          />
        );
      }
    });
    return (
      <div>
        <Newtodoform handleAdd={this.handleAdd} />
        <ul className="todoContainer">{allTodos}</ul>
      </div>
    );
  }
}
