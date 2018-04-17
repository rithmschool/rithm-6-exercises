import React, { Component } from "react";
import GifForm from "./GifForm";
import axios from "axios";

class GiphyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(newGif) {
    axios
      .get(
        `http://api.giphy.com/v1/gifs/search?q=${newGif}&api_key=dc6zaTOxFJmzC&limit=1`,
        {
          headers: { Accept: "application/json" }
        }
      )
      .then(response => {
        let gif = response.data.data[0].images.downsized.url;
        console.log(gif);
        this.setState(prevState => ({
          images: [{ url: gif }, ...prevState.images]
        }));
      });
  }

  render() {
    let gifs = this.state.images.map((gif, idx) => {
      return <img key={idx} src={gif.url} alt="" />;
    });
    return (
      <div>
        <GifForm handleAdd={this.handleAdd} />
        {gifs}
      </div>
    );
  }
}

export default GiphyList;
