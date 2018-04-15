import React, { Component } from "react";
import ToDo from "./ToDo";
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
          completed: false
        },
        {
          title: "Pray",
          desc: "pray at 12pm",
          date: "03/03/2018",
          completed: false
        },
        {
          title: "Love",
          desc: "love at 6pm",
          date: "04/04/2018",
          completed: false
        }
      ]
    };
  }

  handleRemove(idx) {
    this.setState(prevState => {
      let newTasks = prevState.tasks.slice();
      newTasks.splice(idx, 1);
      return { tasks: newTasks };
    });
  }

  handleComplete(idx) {
    // alert("Are you sure you want to complete this?", idx);
    this.setState(prevState => {
      let newTasks = prevState.tasks.slice();

      console.log(newTasks[idx]);
      newTasks[idx].completed =
        newTasks[idx].completed === false ? true : false;
      console.log(newTasks[idx]);

      return { tasks: newTasks };
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
          removeTask={this.handleRemove.bind(this, idx)}
          completeTask={this.handleComplete.bind(this, idx)}
          // {idx => this.handleComplete(this, idx)}
        />
      );
    });
    return (
      <div>
        <ul>{tasksList}</ul>
      </div>
    );
  }
}

// ToDoList.defaultProps = {
//   tasks: [
//     { desc: "eat", date: "02/02/2018" },
//     { desc: "pray", date: "03/03/2018" },
//     { desc: "love", date: "04/04/2018" }
//   ]
// };

export default ToDoList;
