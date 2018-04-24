import React from "react";
import "./Todo.css";

const Todo = function({ todo }) {
  let completedTask = todo.isCompleted ? "completed__look" : "";
  let completedBtn = todo.isCompleted ? "completed__todo" : "inprogress__todo";
  const classes = `${completedBtn} button__shape`;
  let completeText = !todo.isCompleted ? "incomplete" : "completed";

  return (
    <li className={completedTask}>
      Title: {todo.title}. Description: {todo.description},{" "}
      <button
        //onClick={handleEdit.bind(this, i)}
        className="edit__todo button__shape"
      >
        Edit Todo{" "}
      </button>
      <button //onClick={handleIsCompleted.bind(this, i)}
        className={classes}
      >
        {completeText}
      </button>
      <button
        className="delete__todo button__shape"
        //onClick={handleDelete.bind(this, i)}
      >
        Delete Todo{" "}
      </button>
    </li>
  );
};

export default Todo;
