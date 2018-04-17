import React, { Component } from 'react';
import { Gif } from './Gif';
import { NewGiphyForm } from './NewGiphyForm';
import axios from 'axios';

class GiphyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [
        {
          src: '',
          searchTerm: ''
        }
      ]
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  // handleAdd(newGif) {
  //   this.setState(prevState => ({
  //     gifs: [newGif, ...prevState.gifs]
  //   }));
  // }

  async handleAdd(query) {
    query = query.searchTerm.split(' ').join('+');
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=NHtJ3UgX5Gw7MME74ygYPesfA8FFM4qq`
    );
    const json = await response.json();
    let newUrl = json.data[0].url;
    console.log(newUrl);
    this.setState(prevState => ({
      gifs: [newUrl, ...prevState.gifs]
    }));
  }

  render() {
    let data = 'Sorry, no gifs yet. Add a gif!';
    if (this.state.gifs.length > 0) {
      data = this.state.gifs.map(gif => (
        <div key={gif.id}>
          <p>{gif.searchTerm}</p>
        </div>
      ));
    }
    // let allGifs = this.state.gifs.map((gif, i) => (
    //   <Gif key={i} src={gif.src} searchTerm={gif.searchTerm} />
    // ));
    return (
      <div className="GiphyList">
        <h1>Here ARE SOME AWESOME GIFS</h1>
        <NewGiphyForm handleAdd={this.handleAdd} />
        {data}
      </div>
    );
  }
}

export default GiphyList;
