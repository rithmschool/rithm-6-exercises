import React, { Component } from "react";

export default class Todo extends Component {
  render() {
    return (
      <p className={this.props.done ? "completed" : ""}>
        <strong>{this.props.title}</strong>: {this.props.description} -
        <span className="pointer" onClick={this.props.remove}>
          Delete
        </span>{" "}
        /&nbsp;
        <span className="pointer" onClick={this.props.complete}>
          Done
        </span>
      </p>
    );
  }
}
