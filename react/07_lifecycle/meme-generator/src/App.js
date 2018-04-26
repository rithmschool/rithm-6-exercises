import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import MemeForm from './MemeForm';
import MemeList from './MemeList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memeUrls: []
    };
    this.addGif = this.addGif.bind(this);
    this.deleteAll = this.deleteAll.bind(this);
  }

  async componentDidMount(query) {
    let data = await axios.get(
      'https://api.giphy.com/v1/gifs/random?api_key=lB6ofTMau0V63MDSHpV1nVpahYNJkWEd'
    );
    let newUrl = data['data']['data']['image_url'];
    this.setState(prevState => {
      return { memeUrls: [...prevState.memeUrls, newUrl] };
    });
  }

  //add gif
  async addGif(rawData) {
    let query = rawData.url.split(' ').join('+');
    let res = await axios.get(
      `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=lB6ofTMau0V63MDSHpV1nVpahYNJkWEd`
    );
    let newUrl = res.data.data[0].images.fixed_height.url;
    this.setState(prevState => {
      return { memeUrls: [...prevState.memeUrls, newUrl] };
    });
  }

  deleteAll() {
    this.setState(prevState => {
      return { memeUrls: [] };
    });
  }

  render() {
    return (
      <div className="App">
        <MemeForm addGif={this.addGif} deleteAll={this.deleteAll} />
        <MemeList memeUrls={this.state.memeUrls} />
      </div>
    );
  }
}

export default App;
