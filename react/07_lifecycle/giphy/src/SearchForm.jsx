import React, { Component } from "react";
import axios from "axios";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleSubmit = e => {
    e.preventDefault();
    let searchTerm = e.target.children[0].value.split(" ").join("+");
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&limit=1`
      )
      .then(res => {
        let url = res.data.data[0].images.original.url;
        this.props.handleAdd(url);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default SearchForm;
