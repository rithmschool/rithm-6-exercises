import React, { Component } from "react";
import "./Todo.css";

class EditTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      description: this.props.description,
      editTitle: false,
      editDescription: false
    };
    this.onKeyDown = this.onKeyDown.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleDoubleClick(editKey) {
    let newState = this.state;
    newState[editKey] = true;
    this.setState({ newState });
  }

  onKeyDown(editKey, e) {
    if (e.key === "Enter") {
      this.setState({ [editKey]: false });
      this.handleSubmit(e);
    }
  }

  handleSubmit(e) {
    let updated = { field: e.target.name, value: e.target.value };
    this.props.handleEdit(updated);
  }
}
