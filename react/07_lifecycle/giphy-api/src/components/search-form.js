import React, { Component } from "react";
import "./search-form.css";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleAdd(this.state.search);
    this.setState({ search: "" });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="search"
          placeholder="Search Something Here"
          onChange={this.handleChange}
          value={this.state.search}
        />
        <br />
        <br />
        <input type="submit" value="Search Giphy" />
      </form>
    );
  }
}

export default SearchForm;
