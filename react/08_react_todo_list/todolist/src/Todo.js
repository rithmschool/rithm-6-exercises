import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.name);
    this.props.handleEdit(this.state.name);
    this.setState({ name: '' });
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return {
  //     title: nextProps.title,
  //     description: nextProps.description
  //   };
  // }

  render() {
    let todoRender;
    // turn isEditing off. update /replace name property for the todo.
    if (this.props.todo.isEditing) {
      todoRender = (
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name={'name'}
            onChange={this.handleChange}
            value={this.state.name}
            value={this.state.name}
          />
          <input type="submit" />
        </form>
      );
    } else {
      todoRender = this.props.todo.name;
    }

    return (
      <div className="Todo">
        <li>
          {todoRender}
          <button onClick={this.props.editTodo}>Edit</button>
          <button onClick={this.props.markAsCompleted}>Completed</button>
          <button onClick={this.props.removeTodo}>X</button>
        </li>
      </div>
    );
  }
}

export default Todo;
