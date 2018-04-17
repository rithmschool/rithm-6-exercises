import React, { Component } from "react";
import GiphyItem from "./GiphyItem";

class GifList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [];
    }
  }
  addGif = gif => {
    this.setState({
      gifs: this.state.gifs.concat(gif.image)
    });
  };

  removeGif = i => {
    let gifs = this.state.gifs.filter()
  }

  render() {

    const giphyList = this.state.gifs.map((gif, i) => (
      <GiphyItem />
    ))
    return (
      <div>
        <ul>{giphyList}</ul>
      </div>
    )
  }
}

export default GifList;
