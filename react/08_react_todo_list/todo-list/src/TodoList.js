import React, { Component } from "react";
// import NewTodoItem from "./newTodoItem.js";
import NewTodoForm from "./NewTodoForm.js";
import EditTodoForm from "./EditTodoForm.js";
import "./TodoList.css";
import "./newTodoItem.css";

// class TodoList extends Component {
// constructor(props) {
//   super(props);
//   this.state = {
//     todos: [
//       {
//         title:
//           "Finish my React exercises and become a superstar developer(hopefully)",
//         idx: 0,
//         isCompleted: false,
//         isEditing: false
//       },
//       {
//         title: "Buy some milk and a cow",
//         idx: 1,
//         isCompleted: false,
//         isEditing: false
//       },
//       {
//         title: "Go to the gym for sanity",
//         idx: 2,
//         isCompleted: false,
//         isEditing: false
//       }
//     ]
//   };
//   this.handleAdd = this.handleAdd.bind(this);
// }

// handleAdd(newTodo) {
//   newTodo.isCompleted = false;
//   newTodo.isEditing = false;
//   this.setState(prevState => ({
//     todos: [newTodo, ...prevState.todos]
//   }));
// }

const TodoList = ({
  todos,
  handleAdd,
  handleEdit,
  handleIsCompleted,
  handleDelete,
  handleSetUpdate
}) => {
  let todoListItems = todos.map((todo, i) => {
    let completedTask = todo.isCompleted ? "completed__look" : "";
    let completedBtn = todo.isCompleted
      ? "completed__todo"
      : "inprogress__todo";
    const classes = `${completedBtn} button__shape`;
    // let editBtn = this.props.isEditing ? "inprogress__edit" : "edit__todo";
    // const classesEdit = `${editBtn} button__shape`;

    let completeText = !todo.isCompleted ? "incomplete" : "completed";

    if (todo.isEditing === true) {
      return (
        <EditTodoForm
          key={i}
          id={i}
          // title={todo.title}
          // idx={todo.idx}
          // isCompleted={todo.isCompleted}
          // isEditing={todo.isEditing}
          todo={todo}
          handleSetUpdate={handleSetUpdate.bind(this, i)}
          handleEdit={handleEdit.bind(this, i)}
        />
      );
    } else {
      return (
        <li className={completedTask}>
          Title: {todo.title}. Description: {todo.description},{" "}
          <button
            onClick={handleEdit.bind(this, i)}
            className="edit__todo button__shape"
          >
            Edit Todo{" "}
          </button>
          <button onClick={handleIsCompleted.bind(this, i)} className={classes}>
            {completeText}
          </button>
          <button
            className="delete__todo button__shape"
            onClick={handleDelete.bind(this, i)}
          >
            Delete Todo{" "}
          </button>
        </li>
        // <NewTodoItem
        //   key={i}
        //   title={todo.title}
        //   idx={todo.idx}
        //   isCompleted={todo.isCompleted}
        //   isEditing={todo.isEditing}
        //   //handleEdit={this.handleEdit.bind(this, i)}
        //   //handleIsCompleted={this.handleIsCompleted.bind(this, i)}
        //   //handleDelete={this.handleDelete.bind(this, i)}
        // />
      );
    }
  });
  return (
    <div className="TodoList">
      <h1>What's your Todo Today?</h1>
      <NewTodoForm handleAdd={this.handleAdd} />
      <ul>{todoListItems}</ul>
    </div>
  );
};

export default TodoList;
