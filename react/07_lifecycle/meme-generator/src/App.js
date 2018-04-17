import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import MemeForm from './MemeForm';
import MemeList from './MemeList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memes: []
    };
    this.addGif = this.addGif.bind(this);
  }

  async componentDidMount(query) {
    let data = await axios.get(
      'https://api.giphy.com/v1/gifs/random?api_key=lB6ofTMau0V63MDSHpV1nVpahYNJkWEd'
    );
    let newUrl = data['data']['data']['image_url'];
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
    return (
      <div className="App">
        <MemeForm />
        <MemeList />
      </div>
    );
  }
}

export default App;
