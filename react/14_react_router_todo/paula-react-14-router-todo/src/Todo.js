import React from "react";
import { Link } from "react-router-dom";
import "./Todo.css";

const Todo = props => {
  const {
    title,
    description,
    isComplete,
    toggleComplete,
    handleDelete,
    idx
  } = props;

  const strikeStyle = isComplete ? "line-through" : "none";

  // const titleInput = (
  //   <input
  //     name="title"
  //     value={this.state.title}
  //     onChange={this.handleChange}
  //     onKeyDown={this.onKeyDown.bind(this, "editTitle")}
  //   />
  // );
  // const descInput = (
  //   <input
  //     name="description"
  //     value={this.state.title}
  //     onChange={this.handleChange}
  //     onKeyDown={this.onKeyDown.bind(this, "editDescription")}
  //   />
  // );
  // const titleSpan = (
  //   <span onDoubleClick={this.handleDoubleClick.bind(this, "editTitle")}>
  //     {title}:{" "}
  //   </span>
  // );
  // const descSpan = (
  //   <span onDoubleClick={this.handleDoubleClick.bind(this, "editDescription")}>
  //     {description}
  //   </span>
  // );
  // const titleDisplay = this.state.editTitle ? titleInput : titleSpan;
  // const descDisplay = this.state.editDescription ? descInput : descSpan;

  return (
    <div>
      <h4 style={{ textDecoration: strikeStyle }}>
        <Link to={`todos/${idx}`}>
          {title}: {description}
        </Link>
      </h4>
      <button onClick={toggleComplete}>Mark as Complete!</button>
      <button onClick={handleDelete}>Delete Me!</button>
    </div>
  );
};

export default Todo;
