import React, { Component } from 'react';

export default class UpdateTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      isComplete: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // runs before render anytime new props are passed down, not just on init
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.title !== prevState.title) {
      return {
        title: nextProps.title,
        description: nextProps.description,
        isComplete: nextProps.isComplete
      };
    }
    // must return something by default
    return null;
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateTodo(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.title} onChange={this.handleChange} name="title" type="text" />
        <input
          value={this.state.description}
          onChange={this.handleChange}
          name="description"
          type="text"
        />
        <input type="submit" />
      </form>
    );
  }
}
