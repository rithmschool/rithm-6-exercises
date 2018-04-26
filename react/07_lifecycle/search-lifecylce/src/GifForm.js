import React, { Component } from "react";

class GifForm extends Component {
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
    console.log(this.state.search);
    this.props.handleAdd(this.state.search);
    this.setState({ search: "" });
    console.log(this.state.search);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="search"
            value={this.state.search}
            onChange={this.handleChange}
            placeholder="Enter A Search"
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default GifForm;
