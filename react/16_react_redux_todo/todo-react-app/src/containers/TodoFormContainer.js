import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { addTodo, updateTodo } from "../actions";
import TodoForm from "../TodoForm";

class TodoFormContainer extends Component {
  constructor(props) {
    super(props);
  }
  handleTodos = ({ id, title, description }) => {
    if (id) {
      console.log("should come here");
      this.props.updateTodo({ id, title, description });
    } else {
      console.log("going here to?");
      this.props.addTodo({ id, title, description });
    }
    this.props.history.push("/todos");
  };

  render() {
    return (
      <div>
        <TodoForm todo={this.props.todo} handleTodos={this.handleTodos} />
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  const { match } = props;
  if (match.params.id) {
    return {
      todo: state.todos.find(todo => todo.id === +match.params.id)
    };
  }
  return { todo: null };
}

export default connect(mapStateToProps, { addTodo, updateTodo })(
  TodoFormContainer
);
