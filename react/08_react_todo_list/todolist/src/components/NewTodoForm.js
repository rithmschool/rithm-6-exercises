import React, { Component } from "react";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      desc: ""
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
    this.setState({ title: "", desc: "" });
  }

  render() {
    return (
      <div>
        <h1>Input a New ToDo</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">ToDo Title</label>
          <input
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <label htmlFor="">ToDo Desc</label>
          <input
            name="desc"
            value={this.state.desc}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default NewTodoForm;
