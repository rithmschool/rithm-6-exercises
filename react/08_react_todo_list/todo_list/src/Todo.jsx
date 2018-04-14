import React, { Component } from 'react';

export default class Todo extends Component {
  render() {
    return (
      <li>
        {this.props.todo}
        <button onClick={this.props.removeTodo}>Done!</button>
      </li>
    );
  }
}
