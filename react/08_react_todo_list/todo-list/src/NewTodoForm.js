import React, { Component } from "react";
import "./NewTodoForm.css";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
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
    this.setState({ title: "" });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="todo__area"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
          type="text"
        />
        <input type="submit" />
      </form>
    );
  }
}

export default NewTodoForm;
