import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { editTodo, deleteTodo } from "./actions";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.todos[this.props.match.params.id].task
    };
  }

  inputChanged = e => {
    this.setState({ task: e.target.value });
  };

  updateThis = e => {
    e.preventDefault();
    const { editTodo, history } = this.props;
    editTodo(this.state.task, this.props.match.params.id);
    this.setState({ task: "" });
    history.push("/todos");
  };

  deleteThis = () => {
    this.props.deleteTodo(this.props.match.params.id);
    this.setState({ task: "" });
    this.props.history.push("/todos");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.updateThis}>
          <input
            onChange={this.inputChanged}
            name="task"
            type="text"
            value={this.state.task}
          />
          <input type="submit" />
        </form>
        <button onClick={this.deleteThis}>x</button>
      </div>
    );
  }
}

function convertReduxStateToReactProps(reduxState) {
  return {
    todos: reduxState.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    editTodo: (task, id) => dispatch(editTodo(task, id)),
    deleteTodo: id => dispatch(deleteTodo(id))
  };
}

export default connect(convertReduxStateToReactProps, mapDispatchToProps)(
  withRouter(Edit)
);
