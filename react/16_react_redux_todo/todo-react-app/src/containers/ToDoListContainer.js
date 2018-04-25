import React, { Component } from "react";
import { connect } from "react-redux";
import { TodoList } from "../components/TodoList.js";
import { Link } from "react-router-dom";
import "../components/Todo.css";
import { addTodo, deleteTodo, toggleComplete } from "../actions.js";

class ToDoListContainer extends Component {
  render() {
    // let todoList = this.props.todos.map(todo => {
    //   let completedTask = todo.isCompleted ? "completed__look" : "";
    //   let completedBtn = todo.isCompleted
    //     ? "completed__todo"
    //     : "inprogress__todo";
    //   const classes = `${completedBtn} button__shape`;
    //   let completeText = !todo.isCompleted ? "incomplete" : "completed";

    //   return (
    //     <li className={completedTask}>
    //       Title: {todo.title}. Description: {todo.description}{" "}
    //       <Link to={`/todos/${todo.id}/edit`}>
    //         <button
    //           //onClick={handleEdit.bind(this, i)}
    //           className="edit__todo button__shape"
    //         >
    //           Edit Todo
    //         </button>
    //       </Link>
    //       <button
    //         onClick={() => this.props.toggleComplete(todo.id)}
    //         className={classes}
    //       >
    //         {completeText}
    //       </button>
    //       <button
    //         className="delete__todo button__shape"
    //         onClick={() => this.props.deleteTodo(todo.id)}
    //       >
    //         Delete Todo{" "}
    //       </button>
    //     </li>
    //   );
    // });

    return (
      <div>
        <h1>Rithm's Todo List</h1>
        <TodoList
          todos={this.props.todos}
          toggleComplete={this.props.toggleComplete}
          deleteTodo={this.props.deleteTodo}
        />
        {/* <ul>{todoList}</ul> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps, {
  deleteTodo,
  toggleComplete
})(ToDoListContainer);
