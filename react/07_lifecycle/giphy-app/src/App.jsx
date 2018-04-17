import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchForm from './SearchForm';

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
    console.log('link and button active')
  }

  removeAll(event) {
      event.preventDefault();
      console.log('link and button active')
  }
  
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="col page-title">
            <h1 className="m-4">GIPHY PARTY</h1>
          </div>
          <div className="col">
            <form className="form-inline">
              <div className="form-group mx-sm-3 mb-2">
                <label htmlFor="searchTerm" className="sr-only">Search term</label>
                <input type="text" className="form-control" name="serchTerm" id="serchTerm" placeholder="Enter a searct term" />
              </div>
              <button type="submit" className="btn btn-secondary m-1 mb-2 search-btn" onClick={this.handleSubmit.bind(this)}>Search Giphy</button>
              <button type="submit" className="btn btn-danger m-1 mb-2 remove-btn" onClick={this.removeAll.bind(this)}>Remove Images</button>
            </form>
          </div>
          
          <div className="row">
            {this.state.gifs.map(src => <div className="col"><img src={src} alt="some gif"/></div>)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
