import React, { Component } from "react";
import "./NewTodoForm.css";

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
      <div className="form-group">
        <form onSubmit={this.handleSubmit}>
          <input
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            placeholder="Enter A Todo"
          />
          <label>Enter A Todo</label>
          <input
            name="desc"
            value={this.state.desc}
            onChange={this.handleChange}
            placeholder="Enter A Description"
          />
          <label>Enter A Description</label>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default NewTodoForm;
