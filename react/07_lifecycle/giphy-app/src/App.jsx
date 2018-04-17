import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchForm from './SearchForm';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [
        "https://media1.tenor.com/images/584bb2b120144fb033725e459ece68a1/tenor.gif?itemid=7682653"
      ]
    }
  }
  
  handleSubmit(event) {
    event.preventDefault();
    let searchTerm = event.target.searchTerm.value.split(' ').join('+');
    axios
      .get(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&limit=1`)
      .then(res => {
        let url = res.data.data[0].images.original.url;
        this.setState(prevState => ({ gifs: [url, ...prevState.gifs ]}))
      })
  }

  removeAll(event) {
      event.preventDefault();
      this.setState(prevState => ({ gifs: [ ] }))
  }
  
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="col page-title">
            <h1 className="m-4">GIPHY PARTY</h1>
          </div>
          <div className="col text-center">
            <form className="form-inline d-flex justify-content-center" onSubmit={this.handleSubmit.bind(this)}>
              <div className="form-group mx-sm-3 mb-2">
                <label htmlFor="searchTerm" className="sr-only">Search term</label>
                <input type="text" className="form-control" name="searchTerm" id="serchTerm" placeholder="Enter a searct term" />
              </div>
              <button type="submit" className="btn btn-secondary m-1 mb-2 search-btn">Search Giphy</button>
              <button type="submit" className="btn btn-danger m-1 mb-2 remove-btn" onClick={this.removeAll.bind(this)}>Remove Images</button>
            </form>
          </div>
          
          <div className="row d-flex justify-content-center">
            {this.state.gifs.map(src => <div className="m-2 img-div"><img className="gif-img" src={src} alt="some gif"/></div>)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
