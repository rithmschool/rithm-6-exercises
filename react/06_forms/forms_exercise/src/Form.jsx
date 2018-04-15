import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: "",
      width: "",
      backgroundColor: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleAdd({ ...this.state })
    this.setState({
      height: "",
      width: "",
      backgroundColor: ""
    })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="height">Height</label>
        <input name="height" onChange={this.handleChange} value={this.state.height} />
        <label htmlFor="width">Width</label>
        <input name="width" onChange={this.handleChange} value={this.state.width} />
        <label htmlFor="backgroundColor">Background Color</label>
        <input name="backgroundColor" onChange={this.handleChange} value={this.state.backgroundColor} />
        <button>Submit</button>
      </form>
    );
  }
}
