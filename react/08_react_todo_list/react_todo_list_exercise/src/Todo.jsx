import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Todo extends Component {
  render() {
    return (
      <li>
        {this.props.todoItem}
      </li>
    );
  }
}

Todo.propTypes = {
  todoItem: PropTypes.string
};
