import React, { Component } from "react";
import "./EditTodoForm.css";
import "./newTodoItem.css";

class EditTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.setUpdate({ ...this.state });
  }
  render() {
    return (
      <li>
        <span>
          <form onSubmit={this.handleSubmit}>
            <input
              name="title"
              value={this.state.title}
              placeholder={this.state.title}
              onChange={this.handleChange}
              type="text"
              className="edit__input"
            />
            <button type="submit" className="inprogress__edit button__shape">
              Save
            </button>
          </form>
        </span>
        <button
          onClick={this.props.handleIsCompleted}
          className="inprogress__todo button__shape"
        >
          INCOMPLETE
        </button>
        <button
          className="delete__todo button__shape"
          onClick={this.props.handleDelete}
        >
          Delete Todo{" "}
        </button>
      </li>
    );
  }
}

export default EditTodoForm;
