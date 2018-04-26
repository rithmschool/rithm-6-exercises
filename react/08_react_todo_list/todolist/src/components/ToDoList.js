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
          title: "Run",
          desc: "run at 12pm",
          date: "03/03/2018",
          completed: false,
          isEditing: false
        },
        {
          title: "Sleep",
          desc: "sleep at 6pm",
          date: "04/04/2018",
          completed: false,
          isEditing: false
        }
      ]
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleAdd(newTask) {
    this.setState(prevState => {
      return { tasks: [newTask, ...prevState.tasks] };
    });
  }

  handleComplete(idx) {
    this.setState(prevState => {
      let newTasks = [...prevState.tasks];
      newTasks[idx].completed =
        newTasks[idx].completed === false ? true : false;
      return { tasks: newTasks };
    });
  }

  handleEdit(idx, editTask) {
    let updatedTasks = [...this.state.tasks];
    updatedTasks[idx] = editTask;
    updatedTasks[idx].completed = false;
    updatedTasks[idx].isEditing = false;
    this.setState({ tasks: updatedTasks });
  }

  handleRemove(idx) {
    this.setState(prevState => {
      let newTasks = [...prevState.tasks];
      newTasks.splice(idx, 1);
      return { tasks: newTasks };
    });
  }

  handleTurnEditOn(idx) {
    this.setState(prevState => {
      let editTasks = [...prevState.tasks];
      editTasks[idx]["id"] = idx;
      editTasks[idx].isEditing = true;
      return { tasks: editTasks };
    });
  }

  render() {
    let tasksList = this.state.tasks.map((task, idx) => {
      if (task.isEditing === false) {
        return (
          <ToDo
            key={idx}
            title={task.title}
            desc={task.desc}
            date={task.date}
            completed={task.completed}
            // isEditing={task.isEditing}
            // completeTask={idx => this.handleComplete(this, idx)}
            completeTask={this.handleComplete.bind(this, idx)}
            turnEditOnTask={this.handleTurnEditOn.bind(this, idx)}
            removeTask={this.handleRemove.bind(this, idx)}
          />
        );
      } else {
        return (
          <EditToDoForm
            key={idx}
            title={task.title}
            desc={task.desc}
            date={task.date}
            // completed={task.completed}
            isEditing={task.isEditing}
            editTask={this.handleEdit.bind(this, idx)}
          />
        );
      }
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
