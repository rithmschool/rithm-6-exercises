import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
let idCounter = 4;
class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      deadline: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    idCounter++;
    this.setState({ deadline: idCounter });
    this.props.handleAdd(this.state);
    this.setState({ title: '', deadline: '' });
    this.props.history.push('/');
    e.target.reset();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          placeholder="Task"
          type="text"
          name="title"
        />
        <input
          onChange={this.handleChange}
          placeholder="Deadline"
          type="text"
          name="deadline"
        />
        <input type="submit" value="Create a new color" />
      </form>
    );
  }
}

export default withRouter(NewTodoForm);
