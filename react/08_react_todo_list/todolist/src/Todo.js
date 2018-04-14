import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Todo extends Component {
  render() {
    return (
      <li>
        <h2>{this.props.name}</h2>
        <p>{this.props.description}</p>
        <p>Completed: {this.props.complete + ''}</p>
      </li>
    );
  }
}

Todo.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  complete: PropTypes.bool
};

export default Todo;
