import React, { Component } from 'react';
import './Todo.css';

export default class Todo extends Component {
  render() {
    return (
      <li>
        <span className={this.props.isComplete ? 'Todo--isComplete' : 'Todo--notComplete'}>
          {this.props.title}: {this.props.description}
        </span>{' '}
        <button onClick={this.props.toggleIsComplete}>Mark Complete</button>{' '}
        <button onClick={this.props.removeTodo}>Remove!</button>
      </li>
    );
  }
}
