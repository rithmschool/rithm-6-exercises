import React, { Component } from 'react';

class SearchForm extends Component {
    handleSubmit(event) {
        event.preventDefault();
        console.log('link and button active')
    }

    removeAll(event) {
        event.preventDefault();
        console.log('link and button active')
    }
    
    render() {
        return (
            <form className="form-inline">
              <div className="form-group mx-sm-3 mb-2">
                <label htmlFor="searchTerm" className="sr-only">Search term</label>
                <input type="text" className="form-control" name="serchTerm" id="serchTerm" placeholder="Enter a searct term" />
              </div>
              <button type="submit" className="btn btn-secondary m-1 mb-2 search-btn" onClick={this.handleSubmit.bind(this)}>Search Giphy</button>
              <button type="submit" className="btn btn-danger m-1 mb-2 remove-btn" onClick={this.removeAll.bind(this)}>Remove Images</button>
            </form>
        )
    }
}

export default SearchForm;