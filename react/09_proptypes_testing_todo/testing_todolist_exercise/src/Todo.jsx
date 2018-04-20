import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Todo.css"

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
    }
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      title: nextProps.title,
      description: nextProps.description
    }
  }

  handleEditSubmit(e) {
    e.preventDefault();
    this.props.handleEdit(this.state);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      !this.props.isEditing ? (
        <li className={`todo ${this.props.className}`} onDoubleClick={this.props.handleEditRequest}>
          <p>Title: {this.props.title}</p>
          <p>Description: {this.props.description}</p>
          <button onClick={this.props.handleComplete}>Mark/Unmark as Complete</button>
          <button onClick={this.props.handleDelete}>Delete Item</button>
        </li>
      ) : (
          <form onSubmit={this.handleEditSubmit}>
            <li className={`todo ${this.props.className}`}>

              <label htmlFor="title">Title: </label>
              <input name="title" value={this.state.title} onChange={this.handleChange} />

              <label htmlFor="description">Description: </label>
              <input name="description" value={this.state.description} onChange={this.handleChange} />

              <button>Submit</button>

            </li>
          </form>
        )
    );
  }
}

Todo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
  isEditing: PropTypes.string,
  handleEdit: PropTypes.func,
  handleDelete: PropTypes.func,
  handleComplete: PropTypes.func,
  handleEditRequest: PropTypes.func
};
