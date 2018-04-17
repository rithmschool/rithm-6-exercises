import React, { Component } from 'react';
import axios from 'axios';
import Meme from './Meme';

class MemeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memes: []
    };
    this.addGif = this.addGif.bind(this);
  }

  //default gif
  async componentDidMount(query) {
    let data = await axios.get(
      'https://api.giphy.com/v1/gifs/random?api_key=lB6ofTMau0V63MDSHpV1nVpahYNJkWEd'
    );
    let newUrl = data['data']['data']['image_url'];
    console.log('NEW URL STUFF', newUrl);
    this.setState(prevState => {
      return { memes: [...prevState.memes, newUrl] };
    });
  }

  //add gif
  async addGif(query) {
    query = query.split(' ').join('+');
    let data = await axios.get(
      'https://api.giphy.com/v1/gifs/search?q=${query}&api_key=lB6ofTMau0V63MDSHpV1nVpahYNJkWEd'
    );
  }

  render() {
    const memes = this.state.memes.map((url, index) => {
      return <Meme key={index} src={url} />;
    });
    return <div>{memes}</div>;
  }
}

export default MemeList;
