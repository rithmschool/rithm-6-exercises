import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import NewToDoForm from './NewToDoForm';
import PropTypes from 'prop-tylpes';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      title: nextProps.title,
      description: nextProps.description
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitData({ ...this.state });
    this.setState({ title: '', description: '' });
    e.target.reset();
  }

  render() {
    console.log('rendering todo from todo');
    const {
      title,
      description,
      isCompleted,
      markAsComplete,
      removeToDo,
      id
    } = this.props;
    let completionText = 'Mark Completed';
    if (isCompleted) completionText = 'Mark Incomplete';
    return (
      <div
        className="Todo"
        style={isCompleted ? { backgroundColor: 'rgba(68, 57, 57, .5)' } : {}}
      >
        {this.props.id !== undefined ? (
          <Link
            style={isCompleted ? { textDecoration: 'line-through' } : {}}
            to={`/todos/${this.props.id}`}
          >
            {title}
          </Link>
        ) : (
          <p style={isCompleted ? { textDecoration: 'line-through' } : {}}>
            Title: {title}
          </p>
        )}
        <p style={isCompleted ? { textDecoration: 'line-through' } : {}}>
          Description: {description}
        </p>
        <button onClick={markAsComplete}>{completionText}</button>
        <button onClick={removeToDo}>Delete</button>
        <button>
          {/* Change */}
          <Link className="EditFormLink" to={`/todos/${id}/edit`}>
            Change
          </Link>
        </button>
      </div>
    );
  }
}

Todo.PropTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  isCompleted: PropTypes.boolean,
  isEditSelected: PropTypes.boolean,
  markAsComplete: PropTypes.func,
  removeToDo: PropTypes.func,
  submitData: PropTypes.func
};

export default Todo;
