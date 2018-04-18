import React, { Component } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          title: 'Eat',
          description: 'Think of all the things that can be vehicles for butter',
          isComplete: false,
          beingUpdated: false
        },
        {
          title: 'Sleep',
          description: 'You need both physical and mental repair, else suffer in performance',
          isComplete: false,
          beingUpdated: false
        },
        {
          title: 'Code',
          description: "Remember why you're hear; eyes on the prize",
          isComplete: false,
          beingUpdated: false
        }
      ]
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleAdd(newTodo) {
    let todos = this.state.todos.concat(newTodo);
    this.setState({ todos });
  }

  handleUpdate(i, updatedTodo) {
    let { todos } = this.state;
    todos[i] = updatedTodo;
    todos[i].beingUpdated = false;
    this.setState({ todos });
  }

  toggleBeingUpdated(i) {
    let { todos } = this.state;
    todos[i].beingUpdated = true;
    this.setState({ todos });
  }

  toggleIsComplete(i) {
    let { todos } = this.state;
    todos[i].isComplete = !todos[i].isComplete;
    this.setState({ todos });
  }

  handleRemove(i) {
    const { todos } = this.state;
    const remainingTodos = todos.filter((todo, todoI) => todoI !== i);
    this.setState({ todos: remainingTodos });
  }

  render() {
    let todos = this.state.todos.map((todo, i) => {
      if (todo.beingUpdated === false)
        return (
          <Todo
            key={i}
            title={todo.title}
            description={todo.description}
            isComplete={todo.isComplete}
            beingUpdated={todo.beingUpdated}
            toggleBeingUpdated={this.toggleBeingUpdated.bind(this, i)}
            toggleIsComplete={this.toggleIsComplete.bind(this, i)}
            removeTodo={this.handleRemove.bind(this, i)}
          />
        );
      else
        return (
          <TodoForm
            key={i}
            title={todo.title}
            description={todo.description}
            isComplete={todo.isComplete}
            beingUpdated={todo.beingUpdated}
            updateTodos={this.handleUpdate.bind(this, i)}
          />
        );
    });
    return (
      <div>
        <TodoForm updateTodos={this.handleAdd} />
        <br />
        {todos}
      </div>
    );
  }
}
