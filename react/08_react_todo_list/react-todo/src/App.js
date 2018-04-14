import React, { Component } from 'react';
import './App.css';
// import NewToDoForm from './NewToDoForm';
import ToDoList from './ToDoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <NewToDoForm /> */}
        <ToDoList />
      </div>
    );
  }
}

export default App;
