import React, { Component } from "react";
import { Link } from "react-router-dom";
//import "./NewTodoForm.css";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.todo ? props.todo.id : null,
      title: props.todo ? props.todo.title : "",
      description: props.todo ? props.todo.description : ""
    };
  }

  componentWillReceiveProps = nextProps => {
    this.setState({
      id: nextProps.todo.id,
      task: nextProps.todo.task
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { id, title, description } = this.state;
    this.props.handleTodos({ id, title, description });
    this.setState({ title: "", description: "" });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            className="todo__area"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            type="text"
          />
          <input
            className="todo__area"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            type="text"
          />
          <input type="submit" />
        </form>
        <button>
          <Link to="/todos">Check Out All Those Todos</Link>
        </button>
      </div>
    );
  }
}

export default TodoForm;
