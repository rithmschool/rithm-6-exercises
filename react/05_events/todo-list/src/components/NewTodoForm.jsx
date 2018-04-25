import React, { Component } from "react";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { val: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addTodo(this.state.val);
    this.setState({ val: "" });
    this.props.history.push("/");
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="val" onChange={this.handleChange} value={this.state.val} />
        <input type="submit" />
      </form>
    );
  }
}

export default NewTodoForm;
