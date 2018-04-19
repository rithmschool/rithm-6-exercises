import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
export default class GiphComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ''
    };
  }

  componentDidMount() {
    axios
      .get(`https://api.giphy.com/v1/gifs/random?q=""&api_key=dc6zaTOxFJmzC`, {
        headers: { Accept: 'application/json' }
      })
      .then(response => {
        console.log(response);
        const url = response.data.data.images.downsized.url;
        this.setState({ url: url });
      });
  }

  render() {
    return <img className="image" src={this.state.url} alt="" />;
  }
}
