import React, { Component } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: ['Eat', 'Sleep', 'Code'] };
  }

  handleRemove(i) {
    console.log(i);
    const { todos } = this.state;
    const remainingTodos = todos.slice(0, i).concat(todos.slice(i + 1));
    this.setState({ todos: remainingTodos });
  }

  render() {
    let todos = this.state.todos.map((todo, i) => <Todo key={i} todo={todo} removeTodo={this.handleRemove.bind(this, i)} />);
    return <div>{todos}</div>;
  }
}
