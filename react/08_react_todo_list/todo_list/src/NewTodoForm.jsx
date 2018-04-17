import React, { Component } from 'react';

export default class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', description: '', isComplete: false, beingUpdated: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createTodo(this.state);
    this.setState({ title: '', description: '', isComplete: false, beingUpdated: false });
    e.target.reset();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="Enter New Todo" onChange={this.handleChange} name="title" type="text" />
        <input
          placeholder="Enter Description"
          onChange={this.handleChange}
          name="description"
          type="text"
        />
        <input type="submit" />
      </form>
    );
  }
}
