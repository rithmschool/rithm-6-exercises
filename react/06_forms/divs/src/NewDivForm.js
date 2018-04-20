import React, { Component } from "react";

const initialState = { height: "", width: "", backcolor: "" };

class NewDivForm extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleAdd({ ...this.state });
    this.setState(initialState);
  }

  render() {
    return (
      <div>
        <h3>Create a new DIV here</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            name="height"
            placeholder="DIV Height"
            onChange={this.handleChange}
            value={this.state.height}
          />
          <input
            name="width"
            placeholder="DIV Width"
            onChange={this.handleChange}
            value={this.state.width}
          />
          <input
            name="backcolor"
            placeholder="Background Color"
            onChange={this.handleChange}
            value={this.state.backcolor}
          />
          <input type="submit" value="Create New Div" />
        </form>
      </div>
    );
  }
}

export default NewDivForm;
