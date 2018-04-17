import React, { Component } from 'react';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.removeTodo = this.removeTodo.bind(this);
    this.toggleFinished = this.toggleFinished.bind(this);
    this.editTodo = this.editTodo.bind(this);
  }

  removeTodo(e) {
    this.props.remove(this.props.index);
  }

  toggleFinished(e) {
    this.props.toggleCompleted(this.props.index);
  }

  editTodo(e) {
    this.props.updateTodo(this.props.index);
  }

  render() {
    return (
      <li className={this.props.className}>
        {this.props.title} by {this.props.deadline}
        <button onClick={this.removeTodo}>X</button>
        <button onClick={this.toggleFinished}>Todo Finished</button>
        <button onClick={this.editTodo}>Edit This Todo</button>
      </li>
    );
  }
}
