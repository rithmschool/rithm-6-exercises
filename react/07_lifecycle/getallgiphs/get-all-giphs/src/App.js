import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import GiphForm from './NewGiphForm.js';
import Giph from './GiphComponent.js';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      giphs: []
    };
    this.getGiphs = this.getGiphs.bind(this);
  }

  getGiphs(keyword) {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=dc6zaTOxFJmzC`,
        {
          headers: { Accept: 'application/json' }
        }
      )
      .then(response => {
        const giphs = response.data.data.map(giph => ({
          url: giph.images.downsized.url
        }));
        this.setState({ giphs });
      });
  }

  render() {
    let allGiphs = this.state.giphs.map((giph, index) => {
      return <Giph url={giph.url} key={index} />;
    });
    return (
      <div>
        <GiphForm getGiphs={this.getGiphs} />
        {allGiphs}
      </div>
    );
  }
}

export default App;
