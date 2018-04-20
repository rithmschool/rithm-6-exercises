import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./EditTodo.css";

class EditTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      desc: "",
      complete: false,
      toEdit: false,
      id: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      title: nextProps.title,
      desc: nextProps.desc,
      id: nextProps.id
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("Begining", this.state);
    this.props.addEdit({ ...this.state });
    console.log(this.props.addEdit(this.state));
    this.setState({ title: "", desc: "" });
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="form-group">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            // placeholder="Enter A Todo"
          />
          <label>Enter A Todo</label>

          <input
            name="desc"
            value={this.state.desc}
            onChange={this.handleChange}
            // placeholder="Enter A Description"
          />
          <label>Enter A Description</label>
          <input className="btn" type="Submit" />
        </form>
      </div>
    );
  }
}

export default withRouter(EditTodoForm);
