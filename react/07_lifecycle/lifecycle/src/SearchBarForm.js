import React, { Component } from "react";

class SearchBarFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleAdd({ ...this.state });
    this.setState({ search: "" });
  }

  render() {
    return (
      <div>
        {" "}
        Hello world
        {/* <form action="">
            <input
            name="search"
            value={this.state.search}
            onChange={}
            />
          </form> */}
      </div>
    );
  }
}
