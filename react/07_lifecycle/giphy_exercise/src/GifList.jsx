import React, { Component } from "react";
import GifForm from "./GifForm";
import GifDiv from "./GifDiv";
import axios from "axios";
import "./GifList.css";

export default class GifList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: []
    };
  }

  componentDidMount() {
    console.log("componentDidMount invoked")
    let path = `http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC`;
    axios.get(path)
      .then(data => {
        let url = data.data.data.images.fixed_height.url;
        let newState = { ...this.state };
        newState.urls.push(url);
        this.setState(newState);
      })
      .catch(err => console.log(err));
  }

  addGif = data => {
    let queryString = data.userInput.split(" ").join("+");
    let path = `http://api.giphy.com/v1/gifs/search?q=${queryString}&api_key=dc6zaTOxFJmzC`;
    axios.get(path)
      .then(data => {
        let url = data.data.data[0].images.fixed_height.url;
        let newState = { ...this.state };
        newState.urls.push(url);
        this.setState(newState);
      })
      .catch(err => console.log(err));
  };

  handleDelete = () => {
    console.log('handleDelete invoked')
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
