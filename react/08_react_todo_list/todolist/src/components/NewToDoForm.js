import React, { Component } from "react";

const initialState = {
  title: "",
  desc: "",
  date: "",
  completed: false
};

class NewToDoForm extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleAdd({ ...this.state });
    this.setState(initialState);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div>
        <h3>Add new item</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            name="title"
            placeholder="Task Title"
            onChange={this.handleChange}
            value={this.state.title}
          />
          <input
            name="desc"
            placeholder="Task Description"
            onChange={this.handleChange}
            value={this.state.desc}
          />
          <input
            name="date"
            placeholder="Due Date"
            onChange={this.handleChange}
            value={this.state.date}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default NewToDoForm;
