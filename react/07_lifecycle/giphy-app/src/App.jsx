import React, { Component } from 'react';
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
    this.handleAdd = this.handleAdd.bind(this);
  }
  
  handleAdd(url) {
    this.setState(prevState => ({ gifs: [url, ...prevState.gifs ]}))
  }

  removeAll(event) {
      event.preventDefault();
      this.setState(prevState => ({ gifs: [ ] }))
  }

  componentDidMount() {
    axios
      .get(`https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC`)
      .then(res => {
        let url = res.data.data.images.original.url;
        this.setState(prevState => ({ gifs: [url]}))
      })
  }
  
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="col page-title">
            <h1 className="m-4">GIPHY PARTY</h1>
          </div>
          <div className="col text-center">
            <SearchForm handleAdd={this.handleAdd} />
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
