import React, { Component } from "react";
import "./NewColorForm.css";

class NewColorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      colorValue: "#ffffff"
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
    this.setState({ name: "", colorValue: "" });
    this.props.history.push("/");
  }
  render() {
    return (
      <div className="NewColorForm">
        <form onSubmit={this.handleSubmit}>
          <div className="NewInput">
            <label>
              What's The Name of Your Color?{" "}
              <input
                className="text__input"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                type="text"
              />
            </label>
          </div>
          <div className="NewInput">
            <label>
              Color Picker: &nbsp;&nbsp;
              <input
                name="colorValue"
                value={this.state.colorValue}
                onChange={this.handleChange}
                type="color"
              />
            </label>
          </div>
          <button type="submit" className="Btn__style">
            Color Me Up!
          </button>
        </form>
      </div>
    );
  }
}

export default NewColorForm;
