import React, { Component } from "react";

export default class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleAdd(this.state);
    this.setState({ title: "", description: "" });
  }

  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={this.handleChange}
          value={this.state.title}
        />
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="description"
          id="description"
          onChange={this.handleChange}
          value={this.state.description}
        />
        <input type="submit" />
      </form>
    );
  }
}
