import React, { Component } from "react";

class Todo extends Component {
  render() {
    return (
      <li>
        {this.props.message}. Due Date: {this.props.date} ! Done with this todo?{" "}
        <span>
          <input type="checkbox" />
        </span>{" "}
      </li>
    );
  }
}

export default Todo;
