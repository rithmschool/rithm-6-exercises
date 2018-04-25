import React, { Component } from 'react';

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    // is "isEditing" really state here? REMOVED
    this.state = { name: '', description: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleAdd(this.state.name, this.state.description);
    this.setState({ name: '', description: '' });
    // fixme: unclear what next line was supposed to do
    // this.props.history.push('/todos');
  }

  render() {
    console.log('NewTodoForm render');
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name">Todo</label>
          <input
            name="todo"
            id="todo"
            placeholder="Enter a new todo"
            onChange={this.handleChange}
            type="text"
            value={this.state.name}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            name="todo" // wrong
            id="todo" // ...
            placeholder="Add a description for your todo"
            onChange={this.handleChange}
            type="text"
            value={this.state.description}
          />
        </div>
        <input type="submit" />
      </form>
    );
  }
}

export default NewTodoForm;
