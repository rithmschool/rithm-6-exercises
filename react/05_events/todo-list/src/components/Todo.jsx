import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false,
      isEditing: false
    };
    this.markComplete = this.markComplete.bind(this);
    this.isEditing = this.isEditing.bind(this);
  }

  markComplete() {
    this.setState({ completed: !this.state.completed });
  }
  isEditing(e) {
    e.preventDefault();
    if (this.state.isEditing) {
      let newText = e.target.parentNode.children[2].children[0].value;
      if (newText !== "") {
        let statei = this.props.index;
        this.props.handleUpdate(newText, statei);
      }
    }
    this.setState({ isEditing: !this.state.isEditing });
  }
  render() {
    var status = this.state.completed ? "line-through" : "none";
    var edit = this.state.isEditing ? <input type="text" /> : <br />;
    return (
      <div className="Todo">
        <input onClick={this.markComplete} type="checkbox" />
        <p style={{ textDecoration: status }}>{this.props.text}</p>
        <form action="" onSubmit={this.isEditing}>
          {edit}
        </form>
        <button onClick={this.isEditing}>Update</button>
        <button onClick={this.props.handleDelete}>Delete</button>
      </div>
    );
  }
}

export default Todo;
