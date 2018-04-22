import React, { Component } from "react";
import { PropTypes } from "prop-types";

export default class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleAdd({ ...this.state });
    this.setState({ title: "", description: "" });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">Title</label>
        <input name="title" value={this.state.title} onChange={this.handleChange} />
        <label htmlFor="description">Description</label>
        <input name="description" value={this.state.description} onChange={this.handleChange} />
        <button>Submit</button>
      </form>
    );
  }

}

NewTodoForm.propTypes = {
  handleAdd: PropTypes.func
};
