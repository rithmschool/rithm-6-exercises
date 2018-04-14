import React, { Component } from 'react';
import Todo from './Todo.js';

class TodoList extends Component {
  render() {
    let todos = this.props.items.map(item => {
      return (
        <Todo
          key={item.id}
          name={item.name}
          description={item.description}
          complete={item.complete}
        />
      );
    });
    return (
      <div>
        <h1>Todo List</h1>
        <ul>{todos}</ul>
      </div>
    );
  }
}

TodoList.defaultProps = {
  items: [
    {
      id: 1,
      name: 'Laundry',
      description: 'Complete all of my laundry.',
      complete: false
    },
    {
      id: 2,
      name: 'Dishes',
      description: 'Do all of the dishes in the sink.',
      complete: true
    },
    {
      id: 3,
      name: 'Have fun',
      description: 'Go to movies with a friend!',
      complete: false
    }
  ]
};

export default TodoList;
