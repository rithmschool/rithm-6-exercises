import React, { Component } from "react";
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
  Col
} from "react-bootstrap";
import "./ColorsForm.css";

class ColorsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      hex: ""
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
    this.setState({ name: "", hex: "" });
    this.props.history.push("/");
  }
  render() {
    return (
      <section className="ColorsForm">
        <form action="" onSubmit={this.handleSubmit}>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              Color Name
            </Col>
            <Col sm={10}>
              <FormControl
                type="text"
                name="name"
                onChange={this.handleChange}
                value={this.state.name}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              Hex Code
            </Col>
            <Col sm={10}>
              <FormControl
                style={{ height: "50px" }}
                type="color"
                name="hex"
                onChange={this.handleChange}
                value={this.state.hex}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit">Submit</Button>
            </Col>
          </FormGroup>
        </form>
      </section>
    );
  }
}
export default ColorsForm;
