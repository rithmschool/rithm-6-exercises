import React, { Component } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          title: 'Eat',
          description: 'Think of all the things that can be vehicles for butter',
          isComplete: false
        },
        {
          title: 'Sleep',
          description: 'You need both physical and mental repair, else suffer in performance',
          isComplete: false
        },
        {
          title: 'Code',
          description: "Let's remember why we're hear; eyes on the prize",
          isComplete: false
        }
      ]
    };
  }

  toggleIsComplete(i) {
    const { todos } = this.state;
    todos[i].isComplete = !todos[i].isComplete;
    this.setState({ todos });
  }

  handleRemove(i) {
    const { todos } = this.state;
    const remainingTodos = todos.filter((todo, todoI) => todoI !== i);
    this.setState({ todos: remainingTodos });
  }

  render() {
    let todos = this.state.todos.map((todo, i) => (
      <Todo
        key={i}
        title={todo.title}
        description={todo.description}
        isComplete={todo.isComplete}
        toggleIsComplete={this.toggleIsComplete.bind(this, i)}
        removeTodo={this.handleRemove.bind(this, i)}
      />
    ));
    return <div>{todos}</div>;
  }
}
