import React, { Component } from 'react';
import axios from 'axios';
import Meme from './Meme';

class MemeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memeUrls: []
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      memeUrls: nextProps.memeUrls
    };
  }

  render() {
    const memeUrls = this.state.memeUrls.map((url, index) => {
      return <Meme key={index} src={url} />;
    });
    return <div>{memeUrls}</div>;
  }
}

export default MemeList;
