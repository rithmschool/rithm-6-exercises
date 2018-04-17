import React, { Component } from "react";
import GifForm from "./GifForm";
import GifDiv from "./GifDiv";

export default class GifList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: []
    };
  }

  addGif = data => {
    let queryString = data.userInput.split(" ").join("+");
    let path = `http://api.giphy.com/v1/gifs/search?q=${queryString}&api_key=dc6zaTOxFJmzC`;
    // send axios GET request with the path
    // npm install axios
    // look up the syntax in the docs
    // .then to add it via setState()
  };

  handleDelete = () => {
    this.setState({
      urls: []
    })
  };

  render() {
    let gifs = this.state.urls.map(url => {
      return <GifDiv url={url} />
    })
    return (
      <div>
        <GifForm
          addGif={this.addGif}
          handleDelete={this.handleDelete}
        />
        {gifs}
      </div>
    );
  }
}
