import React, { Component } from "react";

class TodoForm extends Component {
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
    this.props.handleAdd(this.state.val);
    this.setState({ val: "" });
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

export default TodoForm;
