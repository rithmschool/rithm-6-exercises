import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class NewColorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "",
      code: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleAddColor(this.state);
    this.props.history.push("/colors");
  }

  render() {
    return (
      <div>
        <form onClick={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" name="color" />
          <input onChange={this.handleChange} type="color" name="code" />
          <input type="submit" value="Create a new color" />
        </form>
        <Link to="/colors">back to your colors</Link>
      </div>
    );
  }
}

export default withRouter(NewColorForm);
