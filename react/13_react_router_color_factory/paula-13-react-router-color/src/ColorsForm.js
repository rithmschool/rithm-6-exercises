import React, { Component } from "react";

class ColorsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      value: ""
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
    this.setState({ name: "", value: "" });
    this.props.history.push("/");
  }
  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <label htmlFor="name">Color Name</label>
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <label htmlFor="value">Color Value</label>
        <input
          type="color"
          name="value"
          onChange={this.handleChange}
          value={this.state.value}
        />
        <input type="submit" />
      </form>
    );
  }
}
export default ColorsForm;
