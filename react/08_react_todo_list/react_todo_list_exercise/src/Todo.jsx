import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Todo.css"

export default class Todo extends Component {
  render() {
    return (
      <li className={`todo ${this.props.className}`}>
        <p>Title: {this.props.title}</p>
        <p>Description: {this.props.description}</p>
        <button onClick={this.props.handleComplete}>Mark/Unmark as Complete</button>
        <button onClick={this.props.handleDelete}>Delete Item</button>
      </li>
    );
  }
}

Todo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};
