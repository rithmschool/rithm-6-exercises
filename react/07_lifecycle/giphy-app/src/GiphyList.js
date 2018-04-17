import React, { Component } from 'react';
import { Gif } from './Gif';
import { NewGiphyForm } from './NewGiphyForm';

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

  handleAdd(newGif) {
    this.setState(prevState => ({
      gifs: [newGif, ...prevState.gifs]
    }));
  }

  render() {
    let allGifs = this.state.gifs.map((gif, i) => (
      <Gif key={i} src={gif.src} searchTerm={gif.searchTerm} />
    ));
    return (
      <div className="GiphyList">
        <h1>Here ARE SOME AWESOME GIFS</h1>
        <NewGiphyForm handleAdd={this.handleAdd} />
        {allGifs}
      </div>
    );
  }
}

export default GiphyList;
