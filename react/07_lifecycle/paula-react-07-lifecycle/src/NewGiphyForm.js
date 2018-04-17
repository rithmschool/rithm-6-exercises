import React, { Component } from "react";

class NewGiphyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleAdd(this.state.searchTerm);
    this.setState({ searchTerm: "" });
  }

  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="searchTerm"
          placeholder="enter search term"
          onChange={this.handleChange}
          value={this.state.searchTerm}
        />
        <input type="submit" value="Search Giphy!" />
        <button onClick={this.props.handleDelete} type="button">
          Delete all gifs!
        </button>
      </form>
    );
  }
}
export default NewGiphyForm;
