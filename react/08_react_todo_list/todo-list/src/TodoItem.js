import React, { Component } from "react";
import "./newTodoItem.css";

class NewTodoItem extends Component {
  render() {
    let completedTask = this.props.isCompleted ? "completed__look" : "";
    let completedBtn = this.props.isCompleted
      ? "completed__todo"
      : "inprogress__todo";
    const classes = `${completedBtn} button__shape`;
    // let editBtn = this.props.isEditing ? "inprogress__edit" : "edit__todo";
    // const classesEdit = `${editBtn} button__shape`;

    let completeText = !this.props.isCompleted ? "incomplete" : "completed";

    return (
      <li className={completedTask}>
        {this.props.title}.{" "}
        <button
          onClick={this.props.handleEdit}
          className="edit__todo button__shape"
        >
          Edit Todo{" "}
        </button>
        <button onClick={this.props.handleIsCompleted} className={classes}>
          {completeText}
        </button>
        <button
          className="delete__todo button__shape"
          onClick={this.props.handleDelete}
        >
          Delete Todo{" "}
        </button>
      </li>
    );
  }
}

// export default NewTodoItem;
