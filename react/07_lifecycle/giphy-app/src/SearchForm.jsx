import React, { Component } from 'react';
import axios from 'axios';

class SearchForm extends Component {
    handleSubmit(event) {
        event.preventDefault();
        let searchTerm = event.target.searchTerm.value.split(' ').join('+');
        axios
            .get(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&limit=1`)
            .then(res => {
                let url = res.data.data[0].images.original.url;
                this.props.handleAdd(url);
            })
    }

    removeAll(event) {
        event.preventDefault();
        console.log('link and button active')
    }
    
    render() {
        return (
            <form className="form-inline d-flex justify-content-center" onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group mx-sm-3 mb-2">
                    <label htmlFor="searchTerm" className="sr-only">Search term</label>
                    <input type="text" className="form-control" name="searchTerm" id="serchTerm" placeholder="Enter a searct term" />
                </div>
                <button type="submit" className="btn btn-secondary m-1 mb-2 search-btn">Search Giphy</button>
                <button type="submit" className="btn btn-danger m-1 mb-2 remove-btn" onClick={this.removeAll.bind(this)}>Remove Images</button>
            </form>
        )
    }
}

export default SearchForm;