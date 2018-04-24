import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addTodo } from "./actions";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addTodo(this.state, this.props.history);
    this.setState({ task: "" });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          name="task"
          type="text"
          value={this.state.task}
        />
        <input type="submit" />
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: task => dispatch(addTodo(task))
  };
}

export default connect(null, mapDispatchToProps)(withRouter(TodoForm));
