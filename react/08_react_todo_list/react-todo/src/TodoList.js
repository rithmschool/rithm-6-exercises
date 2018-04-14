import React, { Component } from "react";
import Todo from "./Todo.js";
import NewTodoForm from "./NewTodoForm.js";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
    this.addTodo = this.addTodo.bind(this);
  }

  removeTodo(id) {
    console.log(id);
    const list = this.state.tasks;
    list.splice(id, 1);
    this.setState({
      tasks: list
    });
  }
  addTodo(event) {
    this.setState({
      tasks: this.state.tasks.concat({
        title: [event.target.title.value],
        description: [event.target.description.value],
        done: false
      })
    });
    event.preventDefault();
    event.target.reset();
    return;
  }
  completeTodo(id) {
    console.log(id);
    const list = this.state.tasks;
    list[id].done = true;
    this.setState({
      tasks: list
    });
    console.log(id);
    console.log(this.state.tasks);
  }
  render() {
    var taskList = this.state.tasks.map((task, idx) => (
      <Todo
        title={task.title}
        description={task.description}
        done={task.done}
        key={idx}
        remove={this.removeTodo.bind(this, idx)}
        complete={this.completeTodo.bind(this, idx)}
      />
    ));
    return (
      <div>
        <NewTodoForm add={this.addTodo.bind(this)} />

        <div>{taskList}</div>
      </div>
    );
  }
}
