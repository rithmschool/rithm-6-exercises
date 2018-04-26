import React from 'react';
import { Link } from 'react-router-dom';

const TodoList = ({ todos }) => {
  // fixme : todos is an array of todo objs
  //  todos.map(todo => <li ... todo.name />)
  const todoLinks = todos.map(todo => (
    <li key={todo.name}>
      <Link to={`/todos:${todo.name}`}>{todo.name}</Link>
    </li>
  ));
  return (
    <div className="TodoList">
      <header>
        <h1>Things I have to do:</h1>
        <h2>
          <Link to="/todos/new">Add a new todo</Link>
        </h2>
      </header>
      <div>
        <p>Check off your list!</p>
        <ul>{todoLinks}</ul>
      </div>
    </div>
  );
};

export default TodoList;
