import React, { Component } from "react";
import NewTodoItem from "./newTodoItem.js";
import NewTodoForm from "./NewTodoForm.js";
import EditTodoForm from "./EditTodoForm.js";
import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          title:
            "Finish my React exercises and become a superstar developer(hopefully)",
          idx: 0,
          isCompleted: false,
          isEditing: false
        },
        {
          title: "Buy some milk and a cow",
          idx: 1,
          isCompleted: false,
          isEditing: false
        },
        {
          title: "Go to the gym for sanity",
          idx: 2,
          isCompleted: false,
          isEditing: false
        }
      ]
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(newTodo) {
    newTodo.isCompleted = false;
    newTodo.isEditing = false;
    this.setState(prevState => ({
      todos: [newTodo, ...prevState.todos]
    }));
  }

  handleEdit(idxTodo) {
    let foundTodos = this.state.todos.map((todo, i) => {
      if (i === idxTodo) {
        todo.isEditing = !todo.isEditing;
      }
      return todo;
    });
    this.setState({ todos: foundTodos });
  }

  handleSetUpdate(id, updatedTodo) {
    const edited = { title: updatedTodo, isEditing: false };
    this.setState(prevState => {
      const updatedTodos = [...prevState.todos];
      updatedTodos[id] = edited;
      return { todos: updatedTodos };
    });
  }

  handleIsCompleted(idxTodo) {
    let foundTodos = this.state.todos.map((todo, i) => {
      if (i === idxTodo) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    console.log(foundTodos);
    this.setState({ todos: foundTodos });
  }

  handleDelete(idxTodo) {
    let updatedTodos = this.state.todos.filter((todo, i) => i !== idxTodo);
    this.setState({ todos: updatedTodos });
  }

  render() {
    let todoListItems = this.state.todos.map(
      (todo, i) =>
        todo.isEditing ? (
          <EditTodoForm
            key={i}
            title={todo.title}
            idx={todo.idx}
            isCompleted={todo.isCompleted}
            isEditing={todo.isEditing}
            setUpdate={this.handleSetUpdate.bind(this, i)}
            handleEdit={this.handleEdit.bind(this, i)}
          />
        ) : (
          <NewTodoItem
            key={i}
            title={todo.title}
            idx={todo.idx}
            isCompleted={todo.isCompleted}
            isEditing={todo.isEditing}
            handleEdit={this.handleEdit.bind(this, i)}
            handleIsCompleted={this.handleIsCompleted.bind(this, i)}
            handleDelete={this.handleDelete.bind(this, i)}
          />
        )
    );
    return (
      <div className="TodoList">
        <h1>What's your Todo Today?</h1>
        <NewTodoForm handleAdd={this.handleAdd} />
        <ul>{todoListItems}</ul>
      </div>
    );
  }
}

export default TodoList;
