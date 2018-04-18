import React, { Component } from 'react';

export default class TodoForm extends Component {
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
    this.props.updateTodos(this.state);
    this.setState({ title: '', description: '', isComplete: false, beingUpdated: false });
    e.target.reset();
  }

  // runs before render anytime new props are passed down, not just on constructor mounting
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.title !== prevState.title || nextProps.description !== prevState.description) {
      return {
        title: nextProps.title || '',
        description: nextProps.description || ''
      };
    }
    // must return something by default
    return null;
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
