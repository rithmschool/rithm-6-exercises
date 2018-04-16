import React, { Component } from "react";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    //this.handleRemove = this.handleRemove(bind);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.handleAdd({ ...this.state });
    this.setState({ newTodo: "" });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="newTodo"
          value={this.state.newTodo}
          onChange={this.handleChange}
          type="text"
        />
        <input type="submit" />
      </form>
    );
  }
}

export default NewTodoForm;
