// libraries
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// src
import { ADD_TODO } from "../actions";

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch({ type: ADD_TODO, todo: this.state });
    this.props.history.push("/todos");
  }

  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={this.handleChange}
          value={this.state.title}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          onChange={this.handleChange}
          value={this.state.description}
        />
        <input type="submit" />
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

NewTodoForm.propTypes = propTypes;

export default connect(mapStateToProps)(NewTodoForm);
