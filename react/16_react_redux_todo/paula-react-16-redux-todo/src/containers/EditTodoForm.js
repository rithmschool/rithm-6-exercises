// libraries
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// src
import { EDIT_TODO } from "../actions";

const propTypes = {
  todo: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

class EditTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let stateObj = {};
    if (nextProps.todo.title !== prevState.title) {
      stateObj.title = nextProps.todo.title;
    }
    if (nextProps.todo.description !== prevState.description) {
      stateObj.description = nextProps.todo.description;
    }
    return stateObj.title || stateObj.description ? stateObj : null;
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let editedTodo = this.props.todo;
    editedTodo.title = this.state.title;
    editedTodo.description = this.state.description;
    this.props.dispatch({ type: EDIT_TODO, todo: editedTodo });
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

EditTodoForm.propTypes = propTypes;

export default connect(mapStateToProps)(EditTodoForm);
