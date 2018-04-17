import React, { Component } from "react";
import ToDo from "./ToDo";
import NewToDoForm from "./NewToDoForm";
import EditToDoForm from "./EditToDoForm";
import "./ToDoList.css";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          title: "Eat",
          desc: "eat at 9am",
          date: "02/02/2018",
          completed: false,
          isEditing: false
        },
        {
          title: "Pray",
          desc: "pray at 12pm",
          date: "03/03/2018",
          completed: false,
          isEditing: false
        },
        {
          title: "Love",
          desc: "love at 6pm",
          date: "04/04/2018",
          completed: false,
          isEditing: false
        }
      ]
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleEdit(idx) {
    this.setState(prevState => {
      let editTasks = prevState.tasks.slice();
      editTasks[idx].isEditing = true;
      return { tasks: editTasks };
    });
  }

  handleRemove(idx) {
    this.setState(prevState => {
      let newTasks = prevState.tasks.slice();
      newTasks.splice(idx, 1);
      return { tasks: newTasks };
    });
  }

  handleComplete(idx) {
    this.setState(prevState => {
      let newTasks = prevState.tasks.slice();
      newTasks[idx].completed =
        newTasks[idx].completed === false ? true : false;
      return { tasks: newTasks };
    });
  }

  handleAdd(newTask) {
    this.setState(prevState => {
      return { tasks: [newTask, ...prevState.tasks] };
    });
  }

  render() {
    let tasksList = this.state.tasks.map((task, idx) => {
      return (
        <ToDo
          key={task.idx}
          title={task.title}
          desc={task.desc}
          date={task.date}
          completed={task.completed}
          isEditing={task.isEditing}
          removeTask={this.handleRemove.bind(this, idx)}
          completeTask={this.handleComplete.bind(this, idx)}
          // completeTask={idx => this.handleComplete(this, idx)}
        />
      );
    });

    return (
      <div>
        <NewToDoForm handleAdd={this.handleAdd} />
        <hr />
        <ul>{tasksList}</ul>
      </div>
    );
  }
}

export default ToDoList;
