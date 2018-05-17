import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./TodoList.css";


const Todo = ({ todo, handleComplete, handleDelete }) => {
  if (todo) {
    let className = todo.isComplete ? "complete" : ""
    return (
      <div className={`todo ${className}`}>
        <p>Title: {todo.title}</p>
        <p>Description: {todo.description}</p>
        <button onClick={handleComplete}>Mark/Unmark as Complete</button>
        <button onClick={handleDelete}>Delete Item</button>
      </div>
    );
  }
  else {
    return <Redirect to="/todos" />
  }
};

export default Todo;
