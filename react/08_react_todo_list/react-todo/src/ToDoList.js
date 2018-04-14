import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTodos: Array.from({ length: this.props.Todos.length }, () => {
        return {
          title: {}
        };
      })
    };
  }

  // addToDo() {}
  // removeToDo() {}
  markAsComplete() {}

  render() {
    let Todos = this.props.Todos.map(({ title, description }) => {
      return <Todo title={title} description={description} />;
    });
    return <div>{Todos}</div>;
  }
}

TodoList.defaultProps = {
  Todos: [
    {
      title: 'wake up',
      description: 'wake up and stuff.'
    },
    {
      title: 'attack',
      description: 'attack without mercy.'
    },
    {
      title: 'chill',
      description: 'just sorta chill or whatever.'
    }
  ]
};

export default TodoList;
