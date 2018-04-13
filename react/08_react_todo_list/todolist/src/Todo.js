import React, { Component } from 'react';

class Todo extends Component {
  render() {
    return (
      <div className="Todo">
        <li>
          <p>Task: {this.props.task}</p>
          <p>Due Date: {this.props.date}</p>
          <p>Complete? {this.props.status}</p>
        </li>
      </div>
    );
  }
}

export { Todo };
