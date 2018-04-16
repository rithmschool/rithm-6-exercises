import React, { Component } from "react";
import "./newTodoItem.css";

class NewTodoItem extends Component {
  render() {
    let completedTask = this.props.isCompleted ? "completed__look" : "";
    let completeText = !this.props.isCompleted ? "incomplete :(" : "completed";
    return (
      <li className={completedTask}>
        {this.props.newTodo}. Due Date: .
        <span>
          <button>Done with this todo?</button>
        </span>{" "}
        <button onClick={this.props.handleIsCompleted}>{completeText}</button>
        <button className="remove-button" onClick={this.props.handleDelete}>
          Delete this todo{" "}
        </button>
      </li>
    );
  }
}

export default NewTodoItem;
