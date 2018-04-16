import React, { Component } from 'react';

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleAdd({ ...this.state });
    this.setState({ todo: '' });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="todo"
          onChange={this.handleChange}
          type="text"
          value={this.state.todo}
        />
        <input type="submit" />
      </form>
    );
  }
}

export default NewTodoForm;
