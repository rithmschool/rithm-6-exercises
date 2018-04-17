import React, { Component } from "react";

export default class EditTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: {
        title: "",
        description: ""
      },
      isShowing: false
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.task.title !== prevState.task.title ||
      nextProps.task.description !== prevState.task.description
    ) {
      return {
        task: nextProps.task
      };
    }
    return null;
  }

  handleChange = e => {
    console.log(e.target.name);
    var prop = [e.target.name];
    const list = this.state.task;
    list[prop] = e.target.value;
    this.setState({
      task: list
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.editTodo(this.state);
    this.setState({
      isShowing: false
    });
  };

  toggleEdit = () => {
    this.setState({
      isShowing: !this.state.isShowing
    });
  };

  render() {
    return this.state.isShowing ? (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            name="title"
            value={this.state.task.title}
          />
          <input
            onChange={this.handleChange}
            type="text"
            name="description"
            value={this.state.task.description}
          />
          <button>Edit</button>
        </form>
      </div>
    ) : (
      <button onClick={this.toggleEdit}>Edit</button>
    );
  }
}
