import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { id: 0, task: 'eat' },
        { id: 1, task: 'sleep' },
        { id: 2, task: 'wake up happy' },
        { id: 3, task: 'be grateful' },
        { id: 4, task: 'code' },
        { id: 5, task: 'kick ass' },
        { id: 6, task: 'chew bubblegum' }
      ]
    };
  }

  render() {
    var todos = this.state.todos.map(taco => <li> {taco.task} </li>);

    const someStyle = { color: 'green' };

    // var todos = this.state.todos.map(function(taco, idx) {
    //   return <li> {taco.task} </li>;
    // });

    return <div style={someStyle}> {todos} </div>;
  }
}

export default TodoList;
