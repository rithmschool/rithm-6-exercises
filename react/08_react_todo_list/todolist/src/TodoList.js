import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoList extends Component {
  render() {
    const { task, date, status } = this.props;
    const list = this.props.todos.map(todo => {
      return (
        <div className="task">
          <li>
            <p>
              {todo.task} {todo.date} {todo.status}
            </p>
          </li>
        </div>
      );
    });
    return (
      <div className="TodoList">
        <ul className="todolist">{list}</ul>
      </div>
    );
  }
}

TodoList.defaultProps = {
  todos: [
    {
      task: 'Laundry',
      date: '4-12-18',
      status: false
    },
    {
      task: 'Code',
      date: '4-13-18',
      status: false
    },
    {
      task: 'Grocery shopping',
      date: '4-14-18',
      status: false
    }
  ]
};

TodoList.PropTypes = {
  task: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired
};

export default TodoList;
