import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./TodoList.css";

const Todo = ({ todo, handleComplete, handleDelete }) => {
  let className = todo.isComplete ? "complete" : "";
  return (
    <div>
      <li className={`todo ${className}`}>
        <p>Title: {todo.title}</p>
        <p>Description: {todo.description}</p>
        <button onClick={handleComplete}>Mark/Unmark as Complete</button>
        <Link to={`/todos/${todo.id}`}><button>Show</button></Link>
        <button onClick={handleDelete}>Delete Item</button>
      </li>
    </div>
  )
};

class TodoList extends Component {
  removeTodo(id) {
    this.props.dispatch({
      type: "REMOVE_TODO",
      id
    })
    this.props.history.push("/todos");
  }
  render() {
    let todoComponents = this.props.todos.map(todo => (
      <Todo
        todo={todo}
        handleComplete={this.props.handleComplete.bind(null, todo.id)}
        handleDelete={this.removeTodo.bind(this, todo.id)}
      />
    ));
    return (
      <div>
        <ol>
          {todoComponents}
        </ol>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps)(TodoList);
