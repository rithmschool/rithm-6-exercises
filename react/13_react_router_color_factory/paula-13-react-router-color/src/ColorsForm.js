import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel, Button } from "react-bootstrap";

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
        <FormGroup>
          <ControlLabel>Color Name</ControlLabel>
          <FormControl
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="value">Color Value</label>
          <FormControl
            type="color"
            name="value"
            onChange={this.handleChange}
            value={this.state.value}
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </form>
    );
  }
}
export default ColorsForm;
