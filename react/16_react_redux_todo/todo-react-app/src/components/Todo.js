import React from "react";
import { Link } from "react-router-dom";
import "./Todo.css";

export const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  let completedTask = todo.isCompleted ? "completed__look" : "";
  let completedBtn = todo.isCompleted ? "completed__todo" : "inprogress__todo";
  const classes = `${completedBtn} button__shape`;
  let completeText = !todo.isCompleted ? "incomplete" : "completed";

  return (
    <li className={completedTask}>
      Title: {todo.title}. Description: {todo.description}{" "}
      <Link to={`/todos/${todo.id}/edit`}>
        <button
          //onClick={handleEdit.bind(this, i)}
          className="edit__todo button__shape"
        >
          Edit Todo
        </button>
      </Link>
      <button onClick={() => toggleComplete(todo.id)} className={classes}>
        {completeText}
      </button>
      <button
        className="delete__todo button__shape"
        onClick={() => deleteTodo(todo.id)}
      >
        Delete Todo{" "}
      </button>
    </li>
  );
};

//export default Todo;
