import React, { Component } from "react";
import { connect } from "react-redux";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // getDerivedStateFromProps for an edit form

  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch({
      type: "ADD_TODO",
      payload: {
        title: this.state.title,
        description: this.state.description
      }
    });
    this.setState({ title: "", description: "" });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">Title</label>
        <input name="title" value={this.state.title} onChange={this.handleChange} />
        <label htmlFor="description">Description</label>
        <input name="description" value={this.state.description} onChange={this.handleChange} />
        <button>Submit</button>
      </form>
    );
  }

}

export default connect()(NewTodoForm);
