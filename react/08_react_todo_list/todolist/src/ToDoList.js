import React, { Component } from "react";
import "./ToDoList.css";
import ToDo from "./components/ToDo";

class ToDoList extends Component {
  render() {
    const tasksList = this.props.tasks.map(task => {
      return <ToDo desc={task.desc} date={task.date} />;
    });
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">To Do List</h1>
        </header>
        <ul>{tasksList}</ul>
      </div>
    );
  }
}

ToDoList.defaultProps = {
  tasks: [
    { desc: "eat", date: "02/02/2018" },
    { desc: "pray", date: "03/03/2018" },
    { desc: "love", date: "04/04/2018" }
  ]
};

export default ToDoList;
