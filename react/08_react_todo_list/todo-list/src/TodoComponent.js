import React, { Component } from 'react';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.removeTodo = this.removeTodo.bind(this);
    this.toggleRemove = this.toggleRemove.bind(this);
  }

  removeTodo(e) {
    this.props.remove(e.target);
  }

  toggleRemove(e) {
    console.log(this.props.index);
    this.props.toggleCompleted(this.props.index);
  }

  render() {
    return (
      <li className={this.props.className}>
        {this.props.title} by {this.props.deadline}
        <button onClick={this.removeTodo}>X</button>
        <button onClick={this.toggleRemove}>Todo Finished</button>
      </li>
    );
  }
}
