import React, { Component } from "react";

export default class ColorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      color: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let newState = { ...this.state };
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleAdd(this.state);
    // Redirect back to "/colors"
    this.props.history.push("/colors");
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        <label htmlFor="color">Color: </label>
        <input type="color" name="color" value={this.state.color} onChange={this.handleChange} />
        <button>Submit</button>
      </form>
    );
  }
}
