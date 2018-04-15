import React, { Component } from "react";
import "./ToDo.css";

class ToDo extends Component {
  render() {
    let btnDisplay =
      this.props.completed === true ? "Not Complete" : "Complete";
    return (
      <div>
        <h2 className={this.props.completed ? "Task-completed" : ""}>
          Title: {this.props.title}
        </h2>
        <h3 className={this.props.completed ? "Task-completed" : ""}>
          Description: {this.props.desc}
        </h3>
        <h3 className={this.props.completed ? "Task-completed" : ""}>
          Due Date: {this.props.date}
        </h3>
        <button onClick={this.props.completeTask}>{btnDisplay}</button>
        <button onClick={this.props.removeTask}>Remove</button>
        <hr />
      </div>
    );
  }
}

export default ToDo;
