import React, { Component } from 'react';

class NewToDoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    //calls addToDo and passes NewToDoForm's state as an argument
    this.props.addToDo({ ...this.state });
    //resets inputs after submission
    this.setState({ title: '', description: '' });
    e.target.reset();
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input
          name="title"
          onChange={this.handleChange}
          value={this.state.title}
        />
        <label htmlFor="description">Description: </label>
        <input
          name="description"
          onChange={this.handleChange}
          value={this.state.description}
        />
        <input type="submit" />
      </form>
    );
  }
}

export default NewToDoForm;
