import React, { Component } from "react";
import "./Todo.css";

export default class Todo extends Component {
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

  static getDerivedStateFromProps(nextProps, prevState) {
    return { title: nextProps.title, description: nextProps.description };
  }

  render() {
    const {
      title,
      description,
      isComplete,
      toggleComplete,
      handleDelete
    } = this.props;

    const strikeStyle = isComplete ? "line-through" : "none";

    const titleInput = (
      <input
        name="title"
        value={this.state.title}
        onChange={this.handleChange}
        onKeyDown={this.onKeyDown.bind(this, "editTitle")}
      />
    );
    const descInput = (
      <input
        name="description"
        value={this.state.title}
        onChange={this.handleChange}
        onKeyDown={this.onKeyDown.bind(this, "editDescription")}
      />
    );
    const titleSpan = (
      <span onDoubleClick={this.handleDoubleClick.bind(this, "editTitle")}>
        {title}:{" "}
      </span>
    );
    const descSpan = (
      <span
        onDoubleClick={this.handleDoubleClick.bind(this, "editDescription")}
      >
        {description}
      </span>
    );
    const titleDisplay = this.state.editTitle ? titleInput : titleSpan;
    const descDisplay = this.state.editDescription ? descInput : descSpan;

    return (
      <div>
        <h6 style={{ textDecoration: strikeStyle }}>
          {titleDisplay} {descDisplay}
        </h6>
        <button onClick={toggleComplete}>Mark as Complete!</button>
        <button onClick={handleDelete}>Delete Me!</button>
      </div>
    );
  }
}
