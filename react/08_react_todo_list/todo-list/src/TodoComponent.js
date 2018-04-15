import React, { Component } from 'react';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.removeTodo = this.removeTodo.bind(this);
  }

  removeTodo(e) {
    this.props.remove(e.target);
  }
  render() {
    return (
      <li>
        {this.props.title} by {this.props.deadline}
        <button onClick={this.removeTodo}>X</button>
        <button onClick={this.finsihed}>Todo Finished</button>
      </li>
    );
  }
}
