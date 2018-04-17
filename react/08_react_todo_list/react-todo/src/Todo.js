import React, { Component } from "react";
import EditTodoForm from "./EditTodoForm";

export default class Todo extends Component {
  render() {
    return (
      <div className={this.props.done ? "completed" : ""}>
        <strong>{this.props.title}</strong>: {this.props.description} -
        <span className="pointer" onClick={this.props.remove}>
          Delete
        </span>{" "}
        /&nbsp;
        <span className="pointer" onClick={this.props.complete}>
          Done
        </span>
        <EditTodoForm editTodo={this.props.editTodo} task={this.props.task} />
      </div>
    );
  }
}

//this render through to do and add that to do list
// nbsp is non breaking space

//has no state on its own
//when todo list go crate todo it ( rem and comp are functions that are called when to do is called deletewill pass title, description, done, remove & complete
//
