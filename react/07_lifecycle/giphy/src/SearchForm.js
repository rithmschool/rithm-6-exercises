import React, { Component } from 'react';
import axios from 'axios';

class SearchForm extends Component {
  handleSubmit(e) {
    console.log(e.target.query.value);
    e.preventDefault();
    let query = e.target.query.value.split(' ').join('+');
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&limit=1`
      )
      .then(result => {
        let link = result.data.data[0].images.original.url;
        this.props.handleAdd(link);
      });
    e.target.reset();
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit.bind(this)}
        className="form-inline d-flex justify-content-center"
      >
        <div className="form-group mx-sm-3 mb-2">
          <label htmlFor="query" className="sr-only">
            Search:
          </label>
          <input
            type="text"
            className="form-control"
            name="query"
            id="query"
            placeholder="Enter search term"
          />
        </div>
        <button type="submit" className="btn btn-secondary m-1 mb-2 search-btn">
          Search Giphy
        </button>
      </form>
    );
  }
}

export default SearchForm;
