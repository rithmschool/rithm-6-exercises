import React, { Component } from "react";
import "./TodoList.css";

const Todo = ({ todo, handleComplete, handleDelete }) => (
  <div className={`todo ${todo.className}`}>
    <p>Title: {todo.title}</p>
    <p>Description: {todo.description}</p>
    <button onClick={handleComplete}>Mark/Unmark as Complete</button>
    <button onClick={handleDelete}>Delete Item</button>
  </div>
);

export default Todo;
