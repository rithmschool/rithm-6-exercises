import React, { Component } from 'react';

export default class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      deadline: this.props.deadline,
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
    this.setState({ title: '', deadline: '', being_edit: false });
    this.props.handleEditSubmit(this.state, this.props.index);

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
          value={this.state.title}
        />
        <input
          placeholder="Enter Deadline for Todo"
          onChange={this.handleChange}
          name="deadline"
          type="text"
          value={this.state.deadline}
        />
        <input type="submit" />
      </form>
    );
  }
}
