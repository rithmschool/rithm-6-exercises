import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Giphy from './Giphy';
import SearchForm from './SearchForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      giphs: [
        'http://cdn2-www.mandatory.com/assets/mandatory/legacy/2016/03/man_file_1065676_962755.gif'
      ]
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(link) {
    this.setState(prevState => ({ giphs: [link, ...prevState.giphs] }));
  }

  clearAll(e) {
    e.preventDefault();
    this.setState(prevState => ({ giphs: [] }));
  }

  componentDidMount() {
    axios
      .get(`https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC`)
      .then(res => {
        let url = res.data.data.images.original.url;
        this.setState(prevState => ({ giphs: [url] }));
      });
  }

  render() {
    let imgs = this.state.giphs.map((src, i) => <Giphy key={i} url={src} />);
    return (
      <div className="App">
        <div className="container">
          <div className="col page-title">
            <h1>GIPHYS IN DA HOUSE</h1>
          </div>
          <div className="col text-center">
            <SearchForm handleAdd={this.handleAdd} />
            <button
              type="submit"
              onSubmit={this.clearAll}
              className="btn btn-secondary m-1 mb-2 search-btn"
            >
              Clear
            </button>
          </div>

          <div className="row d-flex justify-content center">{imgs}</div>
        </div>
      </div>
    );
  }
}

export default App;