import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  render() {
    return (
      <div className="Todo">
        <li>
          {this.props.todo}
          <button onClick={this.props.removeTodo}>X</button>
        </li>
      </div>
    );
  }
}

export { Todo };
