import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { completed: false };
    this.markComplete = this.markComplete.bind(this);
    this.update = this.update.bind(this);
  }

  markComplete() {
    this.setState({ completed: !this.state.completed });
  }
  isEditing() {}
  update(e) {
    let newText = e.target.parentNodevalue;
    let statei = e.target.getAttribute("index");
    console.log(e.target.parentNode);
    console.log(newText, statei);
    // this.props.handleUpdate(newText, statei);
  }
  render() {
    var status = this.state.completed ? "line-through" : "none";
    return (
      <div className="Todo">
        <input onClick={this.markComplete} type="checkbox" />
        <p style={{ textDecoration: status }}>{this.props.text}</p>
        <input type="text" className="" />
        <button onClick={this.update}>Update</button>
        <button onClick={this.props.handleDelete}>Delete</button>
      </div>
    );
  }
}

export default Todo;
