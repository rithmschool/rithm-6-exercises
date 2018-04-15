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
    console.log('works');
    console.log(this.state);
    this.props.addToDo({ ...this.state });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="title"
          onChange={this.handleChange}
          value={this.state.title}
        />
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
