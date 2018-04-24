// libraries
import React, { Component } from "react";
import PropTypes from "prop-types";

const propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  idx: PropTypes.number.isRequired,
  editTodo: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

class EditTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      description: this.props.description
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit() {
    this.props.editTodo(this.props.idx, this.state);
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

EditTodoForm.propTypes = propTypes;

export default EditTodoForm;
