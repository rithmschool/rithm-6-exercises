import React, { Component } from "react";
import Todo from "./Todo.js";
import NewTodoForm from "./NewTodoForm.js";

export default class TodoList extends Component {
  constructor(props) {
    super(props); //if you want to set a property or access this inside the constructor we need to call super
    this.state = {
      tasks: []
    };
    this.addTodo = this.addTodo.bind(this);
  }

  removeTodo(id) {
    console.log(id);
    const list = this.state.tasks; // pass a function from parent component
    list.splice(id, 1);
    this.setState({
      //define function on parent component it will delete tiem from  state variable
      tasks: list
    });
  }

  editTodo = (i, task) => {
    let tasks = this.state.tasks.map(function(val, idx) {
      if (i === idx) {
        val = task.task;
      }
      return val;
    });
    this.setState({ tasks });
  };

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
      <Todo //maping through todo
        title={task.title}
        description={task.description}
        done={task.done}
        key={idx}
        remove={this.removeTodo.bind(this, idx)} //Then inside child component call this method to delete todo:
        complete={this.completeTodo.bind(this, idx)}
        editTodo={this.editTodo.bind(this, idx)}
        task={task}
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

//todo list has no state besides empty array but has three states:
