import React, { Component } from "react";
import "./App.css";

export default class NewDivForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: "",
      width: "",
      backgroundColor: "blue"
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
    this.setState({ height: "", width: "", backgroundColor: "blue" });
  }
  render() {
    return (
      <form action="" onSubmit={this.handleSubmit} className="NewDivForm">
        <h2>Add a new div!</h2>
        <label htmlFor="height">Height:</label>
        <input
          type="text"
          name="height"
          id="height"
          onChange={this.handleChange}
          value={this.state.height}
        />px
        <label htmlFor="width">Width:</label>
        <input
          type="text"
          name="width"
          id="width"
          onChange={this.handleChange}
          value={this.state.width}
        />px
        <label htmlFor="backgroundColor">Background Color:</label>
        <select
          name="backgroundColor"
          id="backgroundColor"
          onChange={this.handleChange}
          value={this.state.backgroundColor}
        >
          <option value="blue">blue</option>
          <option value="darkorchid">dark orchid</option>
          <option value="indigo">indigo</option>
          <option value="mediumpurple">medium purple</option>
        </select>
        <button>Submit</button>
      </form>
    );
  }
}
