import React, { Component } from "react";
import Todo from "./components/Todo";
import NewTodoForm from "./components/NewTodoForm";
import EditForm from "./components/EditForm";
import "./TodoList.css";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          title: "Sleep",
          desc: "Get GoodnightSleep",
          complete: false,
          toEdit: false
        },
        {
          title: "Eat",
          desc: "Eat Healthy Food",
          complete: false,
          toEdit: false
        },
        {
          title: "Fart",
          desc: "Fart on Healthy Food",
          complete: false,
          toEdit: true
        }
      ]
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleEdit(idx) {
    this.setState(prevState => {
      let todos = [...prevState.todos];
      todos[idx].toEdit = true;
      return { todos: todos };
    });
  }

  handleRemove(idx) {
    this.setState(prevState => {
      let todos = prevState.todos.slice();
      todos.splice(idx, 1);
      return { todos: todos };
    });
  }

  updateStatus(idx) {
    this.setState(prevState => {
      let todos = prevState.todos.slice();
      todos[idx].complete = todos[idx].complete === false ? true : false;
      return { todos: todos };
    });
  }

  handleAdd(newTodo) {
    newTodo["complete"] = false;
    newTodo["toEdit"] = false;
    this.setState(prevState => ({
      todos: [newTodo, ...prevState.todos]
    }));
  }

  render() {
    let todos = this.state.todos.map((todo, idx) => {
      if (todo.toEdit === false) {
        return (
          <Todo
            key={idx}
            title={todo.title}
            desc={todo.desc}
            finished={todo.complete}
            status={todo.button}
            removeToDo={this.handleRemove.bind(this, idx)}
            update={this.updateStatus.bind(this, idx)}
            updateToDo={this.handleEdit.bind(this, idx)}
          />
        );
      } else {
        return (
          <EditForm
            title={todo.title}
            desc={todo.desc}
            handleAdd={this.handleAdd}
          />
        );
      }
    });
    return (
      <div>
        <NewTodoForm handleAdd={this.handleAdd} />
        {todos}
      </div>
    );
  }
}
