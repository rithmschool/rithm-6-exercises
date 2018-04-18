import React, { Component } from "react";

const initialState = {
  title: "",
  desc: "",
  date: ""
};

class EditToDoForm extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      title: nextProps.title,
      desc: nextProps.desc,
      date: nextProps.date
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.editTask(this.state);
    this.setState(initialState);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div>
        <h3>Edit task</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            name="title"
            onChange={this.handleChange}
            value={this.state.title}
          />
          <input
            name="desc"
            onChange={this.handleChange}
            value={this.state.desc}
          />
          <input
            name="date"
            onChange={this.handleChange}
            value={this.state.date}
          />
          <input type="submit" value="Edit Task" />
        </form>
      </div>
    );
  }
}

export default EditToDoForm;
