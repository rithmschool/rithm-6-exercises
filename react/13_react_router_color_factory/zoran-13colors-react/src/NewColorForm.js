import React, { Component } from "react";
import { Link } from "react-router-dom";

class NewColorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //NewColor form needs state bcz we want to add the staff in the control manner
  //

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  //handling when you are writting in the form and immediately update the State

  handleSubmit(event) {
    event.preventDefault();
    this.props.addColor({
      name: this.state.name,
      value: this.state.value
    });
    this.props.history.push("/colors");
  }

  // when u finish form and complete send up to the parent component to save it
  //it stop page from refreshing and invokes the function on the parent componnent
  //that saves everything we written in the form

  render() {
    return (
      <div className="new-color-form">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            id="name"
            onChange={this.handleChange}
          />
          <input
            type="color"
            name="value"
            id="value"
            onChange={this.handleChange}
          />
          <button type="submit">Add new color</button>
          <Link to="/colors/">Back Home</Link>
        </form>
      </div>
    );
  }
}

//input this handle change that would write in the state of the component

export default NewColorForm;
