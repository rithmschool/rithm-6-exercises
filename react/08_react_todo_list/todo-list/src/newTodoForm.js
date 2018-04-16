import React, { Component } from 'react';

export default class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      deadline: '',
      completed: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.handleAdd(this.state);
    this.setState({ title: '', deadline: '' });
    e.target.reset();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Enter Todo"
          onChange={this.handleChange}
          name="title"
          type="text"
        />
        <input
          placeholder="Enter Deadline for Todo"
          onChange={this.handleChange}
          name="deadline"
          type="text"
        />
        <input type="submit" />
      </form>
    );
  }
}
